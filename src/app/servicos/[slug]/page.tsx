import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Hammer, ShieldCheck, Stethoscope, Wrench } from "lucide-react";
import { getService, services } from "@/data/services";
import { processSteps } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CallToAction } from "@/components/CallToAction";
import { Icon } from "@/components/Icon";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/servicos/${s.slug}/` },
    openGraph: { title: `${s.title} | KlimaTEC`, description: s.metaDescription, images: [{ url: s.image }] },
  };
}

const interventionIcons = [Hammer, ShieldCheck, Wrench, Stethoscope];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.metaDescription, provider: { "@type": "Organization", name: "KlimaTEC" } };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceLd, faqLd]) }} />
      <PageHero title={s.title} text={s.summary} image={s.image} crumbs={[{ label: "Serviços", href: "/servicos/" }, { label: s.title }]}>
        <Link href={`/orcamento?servico=${s.slug}`} className="btn-primary">Pedir orçamento</Link>
        <Link href={`/orcamento?servico=${s.slug}&tipo=Repara%C3%A7%C3%A3o`} className="btn-ghost">Solicitar assistência</Link>
      </PageHero>

      {/* Descrição + equipamentos */}
      <section className="section">
        <div className="container-k grid gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <p className="eyebrow">O serviço</p>
            <h2 className="h2 mt-3">{s.title} para particulares e empresas</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              {s.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
            </div>
          </div>
          <aside className="self-start rounded-xl border border-line bg-mist p-7 lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan text-white"><Icon name={s.icon} className="h-6 w-6" /></span>
              <h3 className="text-lg font-bold">Equipamentos e sistemas</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {s.equipment.map((e) => (
                <li key={e} className="flex gap-2.5 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />{e}</li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">Para outros equipamentos, descreva-nos a situação: avaliamos se e como podemos intervir.</p>
          </aside>
        </div>
      </section>

      {/* Tipos de intervenção */}
      <section className="section bg-mist">
        <div className="container-k">
          <p className="eyebrow">Tipos de intervenção</p>
          <h2 className="h2 mt-3">Instalação, manutenção e reparação</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.interventions.map((it, i) => {
              const I = interventionIcons[i % interventionIcons.length];
              return (
                <div key={it.title} className="rounded-xl border border-line bg-white p-6">
                  <I className="h-7 w-7 text-orange" aria-hidden="true" />
                  <h3 className="mt-4 font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{it.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section">
        <div className="container-k grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Benefícios</p>
            <h2 className="h2 mt-3">Porque é importante uma manutenção adequada</h2>
            <p className="lead mt-4">Equipamentos bem instalados e mantidos funcionam melhor, durante mais tempo e com menos surpresas.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {s.benefits.map((b) => (
              <li key={b} className="flex gap-3 rounded-xl border border-line p-5 text-sm font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Processo */}
      <section className="section bg-graphite text-white">
        <div className="container-k">
          <p className="eyebrow text-cyan">Como pedir assistência</p>
          <h2 className="h2 mt-3 text-white">Do pedido ao acompanhamento</h2>
          <div className="mt-12"><ProcessSteps steps={processSteps} light /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-k grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="h2 mt-3">Dúvidas sobre {s.title.toLowerCase()}</h2>
          </div>
          <FAQAccordion items={s.faq} />
        </div>
      </section>

      <CallToAction title={`Precisa de um serviço de ${s.title.toLowerCase()}?`} text="Envie-nos o seu pedido. Analisamos a situação e entramos em contacto." primary={{ label: "Pedir orçamento", href: `/orcamento?servico=${s.slug}` }} />
    </>
  );
}
