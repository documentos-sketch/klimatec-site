import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Eye, ImageIcon, Award } from "lucide-react";
import { values } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "KlimaTEC — Técnica, Eficiência e Confiança. Conheça a missão, a visão e os valores da KlimaTEC.",
  alternates: { canonical: "/sobre-nos/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="KlimaTEC — Técnica, Eficiência e Confiança" image="/img/empresa-carrinha.webp" crumbs={[{ label: "Sobre Nós" }]} />
      <section className="section">
        <div className="container-k grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Quem somos</p>
            <h2 className="h2 mt-3">{"O seu conforto é a nossa energia."}</h2>
            <p className="lead mt-5">A KlimaTEC nasce com o propósito de oferecer soluções técnicas orientadas para o conforto, a eficiência e a fiabilidade dos equipamentos. Trabalhamos para construir relações duradouras com os nossos clientes, através de um atendimento profissional, comunicação transparente e atenção às necessidades de cada projeto.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/img/servicos/ar-condicionado.webp" alt="Técnico KlimaTEC em intervenção" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-k grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <Compass className="h-9 w-9 text-cyan" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-extrabold">Missão</h2>
            <p className="mt-3 leading-relaxed text-muted">Disponibilizar soluções técnicas que contribuam para ambientes confortáveis, seguros e eficientes.</p>
          </article>
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <Eye className="h-9 w-9 text-orange" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-extrabold">Visão</h2>
            <p className="mt-3 leading-relaxed text-muted">Construir uma marca de referência pela qualidade do serviço, confiança e capacidade de resposta às necessidades dos clientes.</p>
          </article>
        </div>
        <div className="container-k mt-14">
          <h2 className="h2">Valores</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <li key={v} className="flex items-center gap-4 rounded-xl border border-line bg-white p-5">
                <span className="font-display text-2xl font-extrabold text-cyan">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-bold">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Espaços reservados para conteúdo real — não preencher com dados fictícios */}
      <section className="section">
        <div className="container-k grid gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-line p-10 text-center">
            <ImageIcon className="h-10 w-10 text-muted" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold">A nossa equipa</h2>
            <p className="mt-2 max-w-sm text-sm text-muted">Em breve: fotografias da equipa e das nossas instalações.</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-line p-10 text-center">
            <Award className="h-10 w-10 text-muted" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold">Habilitações e certificações</h2>
            <p className="mt-2 max-w-sm text-sm text-muted">Esta secção apresentará as habilitações e certificações da KlimaTEC, após verificação.</p>
          </div>
        </div>
      </section>
      <CallToAction title="Vamos falar sobre o seu projeto?" secondary={{ label: "Contactos", href: "/contactos/" }} />
    </>
  );
}
