"use client";

import { useSearchParams } from "next/navigation";
import { Loader2, Send, Upload } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";
import { distritos } from "@/data/portugal";
import { useSubmit } from "./useSubmit";
import { FormStatus } from "./FormStatus";
import { Honeypot } from "./Honeypot";
import { Consent } from "./Consent";

export const interventionTypes = ["Nova instalação", "Manutenção preventiva", "Reparação", "Diagnóstico técnico", "Contrato de manutenção", "Outro"];

const MAX_FILES = 5;
const MAX_MB = 5;
const ACCEPT = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

function validateFiles(form: HTMLFormElement): string | null {
  const input = form.elements.namedItem("fotografias") as HTMLInputElement | null;
  const files = input?.files ? Array.from(input.files) : [];
  if (files.length > MAX_FILES) return `Pode anexar no máximo ${MAX_FILES} fotografias.`;
  for (const f of files) {
    if (!ACCEPT.includes(f.type)) return `O ficheiro "${f.name}" não é uma imagem suportada (JPG, PNG, WEBP ou HEIC).`;
    if (f.size > MAX_MB * 1024 * 1024) return `O ficheiro "${f.name}" excede ${MAX_MB} MB.`;
  }
  return null;
}

export function QuoteForm() {
  const params = useSearchParams();
  const preService = params?.get("servico") ?? "";
  const preType = params?.get("tipo") ?? "";
  const { state, onSubmit, sending } = useSubmit("Pedido de orçamento", "KT", validateFiles);
  const [fileNames, setFileNames] = useState<string[]>([]);

  return (
    <form onSubmit={onSubmit} noValidate={false} className="relative space-y-8" encType="multipart/form-data">
      <Honeypot />

      <fieldset className="space-y-5">
        <legend className="mb-4 font-display text-lg font-bold">1. Os seus dados</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="nome" className="label">Nome completo <span className="text-orange">*</span></label>
            <input id="nome" name="nome" required minLength={3} autoComplete="name" className="field" />
          </div>
          <div className="sm:col-span-2">
            <span className="label">Tipo de cliente <span className="text-orange">*</span></span>
            <div className="flex flex-wrap gap-3">
              {["Particular", "Empresa"].map((t, i) => (
                <label key={t} className="flex cursor-pointer items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium has-[:checked]:border-cyan has-[:checked]:bg-cyan/5">
                  <input type="radio" name="tipo_cliente" value={t} required defaultChecked={i === 0} className="accent-cyan" /> {t}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="label">Email <span className="text-orange">*</span></label>
            <input id="email" name="email" type="email" required autoComplete="email" className="field" />
          </div>
          <div>
            <label htmlFor="telefone" className="label">Telefone <span className="text-orange">*</span></label>
            <input id="telefone" name="telefone" type="tel" required autoComplete="tel" pattern="^[+0-9 ()-]{9,20}$" title="Indique um número de telefone válido" className="field" />
          </div>
          <div>
            <label htmlFor="distrito" className="label">Distrito <span className="text-orange">*</span></label>
            <select id="distrito" name="distrito" required className="field" defaultValue="">
              <option value="" disabled>Selecione</option>
              {distritos.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="concelho" className="label">Concelho <span className="text-orange">*</span></label>
            <input id="concelho" name="concelho" required className="field" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="morada" className="label">Morada <span className="font-normal text-muted">(opcional nesta fase)</span></label>
            <input id="morada" name="morada" autoComplete="street-address" className="field" />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-4 font-display text-lg font-bold">2. O seu pedido</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="servico" className="label">Serviço pretendido <span className="text-orange">*</span></label>
            <select id="servico" name="servico" required className="field" defaultValue={services.find((s) => s.slug === preService)?.title ?? ""}>
              <option value="" disabled>Selecione</option>
              {services.map((s) => <option key={s.slug}>{s.title}</option>)}
              <option>Outro</option>
            </select>
          </div>
          <div>
            <label htmlFor="intervencao" className="label">Tipo de intervenção <span className="text-orange">*</span></label>
            <select id="intervencao" name="tipo_intervencao" required className="field" defaultValue={interventionTypes.includes(preType) ? preType : ""}>
              <option value="" disabled>Selecione</option>
              {interventionTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="equipamento" className="label">Marca e modelo do equipamento <span className="font-normal text-muted">(se conhecido)</span></label>
            <input id="equipamento" name="equipamento" className="field" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="descricao" className="label">Descrição do pedido <span className="text-orange">*</span></label>
            <textarea id="descricao" name="descricao" required minLength={15} rows={5} className="field" placeholder="Descreva a situação, o espaço e o que pretende." />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="fotografias" className="label">Fotografias <span className="font-normal text-muted">(opcional · até {MAX_FILES} imagens, {MAX_MB} MB cada)</span></label>
            <label htmlFor="fotografias" className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-line bg-mist px-4 py-6 text-center text-sm text-muted hover:border-cyan">
              <Upload className="h-6 w-6 text-cyan" aria-hidden="true" />
              {fileNames.length ? fileNames.join(", ") : "Clique para escolher fotografias do equipamento ou do local"}
            </label>
            <input id="fotografias" name="fotografias" type="file" multiple accept={ACCEPT.join(",")} className="sr-only"
              onChange={(e) => setFileNames(Array.from(e.target.files ?? []).map((f) => f.name))} />
          </div>
          <div className="sm:col-span-2">
            <span className="label">Preferência de contacto</span>
            <div className="flex flex-wrap gap-3">
              {["Telefone", "Email", "WhatsApp"].map((t, i) => (
                <label key={t} className="flex cursor-pointer items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium has-[:checked]:border-cyan has-[:checked]:bg-cyan/5">
                  <input type="radio" name="preferencia_contacto" value={t} defaultChecked={i === 0} className="accent-cyan" /> {t}
                </label>
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      <Consent />
      <FormStatus state={state} />
      <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {sending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {sending ? "A enviar…" : "Enviar pedido"}
      </button>
    </form>
  );
}
