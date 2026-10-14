import type { Metadata } from "next";
import { Suspense } from "react";
import { ClipboardCheck, Camera, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Pedir Orçamento",
  description: "Peça um orçamento para instalação, manutenção ou reparação de ar condicionado, aquecimento, refrigeração, ventilação ou instalações elétricas.",
  alternates: { canonical: "/orcamento/" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero title="Pedir Orçamento" text="Descreva a situação e envie-nos o seu pedido. A nossa equipa analisará as informações e entrará em contacto." crumbs={[{ label: "Pedir orçamento" }]} />
      <section className="section bg-mist">
        <div className="container-k grid gap-10 lg:grid-cols-[1fr_2.2fr]">
          <aside className="space-y-6">
            {[
              { I: ClipboardCheck, t: "Seja específico", d: "Indique o tipo de equipamento, o espaço e o que pretende." },
              { I: Camera, t: "Envie fotografias", d: "Imagens do equipamento ou do local ajudam a preparar a avaliação." },
              { I: MessageSquare, t: "Escolha como prefere ser contactado", d: "Telefone, email ou WhatsApp." },
            ].map(({ I, t, d }) => (
              <div key={t} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan-ink"><I className="h-5 w-5" aria-hidden="true" /></span>
                <div><h2 className="font-bold">{t}</h2><p className="mt-1 text-sm text-muted">{d}</p></div>
              </div>
            ))}
          </aside>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <Suspense fallback={<p className="text-muted">A carregar formulário…</p>}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
