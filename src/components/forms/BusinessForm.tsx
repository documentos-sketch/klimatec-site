"use client";

import { Loader2, Send } from "lucide-react";
import { sectors } from "@/data/content";
import { distritos } from "@/data/portugal";
import { useSubmit } from "./useSubmit";
import { FormStatus } from "./FormStatus";
import { Honeypot } from "./Honeypot";
import { Consent } from "./Consent";

export function BusinessForm() {
  const { state, onSubmit, sending } = useSubmit("Proposta empresarial", "KTE");
  return (
    <form onSubmit={onSubmit} className="relative space-y-6">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="b-org" className="label">Nome da organização <span className="text-orange">*</span></label>
          <input id="b-org" name="organizacao" required autoComplete="organization" className="field" />
        </div>
        <div>
          <label htmlFor="b-resp" className="label">Pessoa responsável <span className="text-orange">*</span></label>
          <input id="b-resp" name="responsavel" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="b-nif" className="label">NIF <span className="font-normal text-muted">(opcional)</span></label>
          <input id="b-nif" name="nif" inputMode="numeric" pattern="^[0-9]{9}$" title="O NIF tem 9 dígitos" className="field" />
        </div>
        <div>
          <label htmlFor="b-email" className="label">Email <span className="text-orange">*</span></label>
          <input id="b-email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
        <div>
          <label htmlFor="b-tel" className="label">Telefone <span className="text-orange">*</span></label>
          <input id="b-tel" name="telefone" type="tel" required pattern="^[+0-9 ()-]{9,20}$" title="Indique um número de telefone válido" className="field" />
        </div>
        <div>
          <label htmlFor="b-dist" className="label">Distrito <span className="text-orange">*</span></label>
          <select id="b-dist" name="distrito" required className="field" defaultValue="">
            <option value="" disabled>Selecione</option>
            {distritos.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="b-loc" className="label">Localidade <span className="text-orange">*</span></label>
          <input id="b-loc" name="localidade" required className="field" />
        </div>
        <div>
          <label htmlFor="b-setor" className="label">Setor <span className="text-orange">*</span></label>
          <select id="b-setor" name="setor" required className="field" defaultValue="">
            <option value="" disabled>Selecione</option>
            {sectors.map((s) => <option key={s.slug}>{s.title}</option>)}
            <option>Outro</option>
          </select>
        </div>
        <div>
          <label htmlFor="b-qtd" className="label">Quantidade aproximada de equipamentos</label>
          <select id="b-qtd" name="quantidade_equipamentos" className="field" defaultValue="">
            <option value="">Não sei / a avaliar</option>
            <option>1 a 5</option><option>6 a 15</option><option>16 a 50</option><option>Mais de 50</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="b-desc" className="label">Descrição das necessidades <span className="text-orange">*</span></label>
          <textarea id="b-desc" name="descricao" required minLength={15} rows={5} className="field" placeholder="Tipo de equipamentos, utilização, periodicidade pretendida, situação atual…" />
        </div>
      </div>
      <Consent />
      <FormStatus state={state} />
      <button type="submit" disabled={sending} className="btn-primary disabled:opacity-60">
        {sending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {sending ? "A enviar…" : "Solicitar proposta empresarial"}
      </button>
    </form>
  );
}
