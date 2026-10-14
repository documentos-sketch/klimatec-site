"use client";

import { Loader2, Send } from "lucide-react";
import { useSubmit } from "./useSubmit";
import { FormStatus } from "./FormStatus";
import { Honeypot } from "./Honeypot";
import { Consent } from "./Consent";

export function ContactForm() {
  const { state, onSubmit, sending } = useSubmit("Contacto", "KTC");
  return (
    <form onSubmit={onSubmit} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="c-nome" className="label">Nome <span className="text-orange">*</span></label>
          <input id="c-nome" name="nome" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="c-email" className="label">Email <span className="text-orange">*</span></label>
          <input id="c-email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
        <div>
          <label htmlFor="c-tel" className="label">Telefone</label>
          <input id="c-tel" name="telefone" type="tel" pattern="^[+0-9 ()-]{9,20}$" title="Indique um número de telefone válido" className="field" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-assunto" className="label">Assunto <span className="text-orange">*</span></label>
          <input id="c-assunto" name="assunto" required className="field" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-msg" className="label">Mensagem <span className="text-orange">*</span></label>
          <textarea id="c-msg" name="mensagem" required minLength={10} rows={5} className="field" />
        </div>
      </div>
      <Consent />
      <FormStatus state={state} />
      <button type="submit" disabled={sending} className="btn-primary disabled:opacity-60">
        {sending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {sending ? "A enviar…" : "Enviar mensagem"}
      </button>
    </form>
  );
}
