import Link from "next/link";

export function Consent() {
  return (
    <label className="flex items-start gap-3 text-sm text-muted">
      <input type="checkbox" name="consentimento" value="sim" required className="mt-1 h-4 w-4 shrink-0 accent-cyan" />
      <span>Li e aceito a <Link href="/politica-de-privacidade" className="font-semibold text-cyan-ink underline" target="_blank">Política de Privacidade</Link> e autorizo o tratamento dos meus dados para resposta a este pedido. <span className="text-orange">*</span></span>
    </label>
  );
}
