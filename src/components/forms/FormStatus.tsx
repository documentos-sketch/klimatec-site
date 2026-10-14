import Link from "next/link";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import type { SubmitState } from "@/lib/submit";
import { siteConfig } from "@/config/site";

export function FormStatus({ state }: { state: SubmitState }) {
  if (state.status === "success")
    return (
      <div role="status" className="flex gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
        <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-bold">Pedido recebido.</p>
          <p className="mt-1">A sua referência é <strong className="font-mono">{state.reference}</strong>. Guarde-a para futuras comunicações. A nossa equipa analisará as informações e entrará em contacto.</p>
        </div>
      </div>
    );
  if (state.status === "error")
    return (
      <div role="alert" className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900">
        <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
        <p>{state.message}</p>
      </div>
    );
  if (state.status === "unconfigured") {
    const c = siteConfig.contact;
    return (
      <div role="alert" className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <Info className="h-5 w-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-bold">O envio online ainda não está ativo.</p>
          <p className="mt-1">O seu pedido <strong>não foi enviado</strong>. {c.phone || c.email ? (
            <>Contacte-nos diretamente{c.phone ? <> pelo <a className="underline" href={c.phoneHref ?? "#"}>{c.phone}</a></> : null}{c.email ? <> ou por <a className="underline" href={`mailto:${c.email}`}>{c.email}</a></> : null}.</>
          ) : (
            <>Os contactos diretos estarão disponíveis brevemente na página de <Link className="underline" href="/contactos">Contactos</Link>.</>
          )}</p>
        </div>
      </div>
    );
  }
  return null;
}
