import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, Home as HomeIcon, ShieldCheck, Wrench } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { differentiators, processSteps } from "@/data/content";
import { ServiceCard } from "@/components/ServiceCard";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="relative isolate overflow-hidden bg-graphite pt-[76px] text-white">
        <picture>
          <source media="(max-width: 767px)" srcSet="/img/hero-assistencia-mobile.webp" />
          <Image src="/img/hero-assistencia.webp" alt="Técnico KlimaTEC em intervenção num equipamento de ar condicionado" fill priority sizes="100vw" className="-z-20 object-cover object-[70%_center]" />
        </picture>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/10 md:via-graphite/70" />
        <div className="container-k flex min-h-[560px] flex-col justify-center py-16 md:min-h-[640px]">
          <p className="reveal eyebrow text-cyan">Técnica &amp; Energia</p>
          <h1 className="reveal mt-4 max-w-2xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Soluções Técnicas para o Seu <span className="text-cyan">Conforto</span>
          </h1>
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Instalação, manutenção e assistência técnica em sistemas de climatização, aquecimento e refrigeração. Soluções adaptadas às necessidades de particulares e empresas.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <Link href="/orcamento" className="btn-primary">Pedir orçamento</Link>
            <Link href="#servicos" className="btn-ghost">Conhecer serviços</Link>
          </div>
          <p className="reveal mt-8 flex items-center gap-2 text-sm font-medium text-white/75">
            <CheckCircle2 className="h-4 w-4 text-cyan" aria-hidden="true" /> Atendimento a particulares e empresas{siteConfig.contact.serviceArea ? ` · ${siteConfig.contact.serviceArea.toLowerCase()}` : ""}.
          </p>
        </div>
      </section>

      {/* 2 — Serviços */}
      <section id="servicos" className="section bg-mist">
        <div className="container-k">
          <SectionHeading
            eyebrow="Os nossos serviços"
            title="Soluções Completas em Técnica & Energia"
            text="Na KlimaTEC, trabalhamos para garantir o desempenho, a eficiência e a fiabilidade dos seus equipamentos, desde a instalação até à manutenção e assistência técnica."
          />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* 3 — Porquê a KlimaTEC */}
      <section className="section">
        <div className="container-k">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
            <SectionHeading
              eyebrow="Porquê escolher a KlimaTEC?"
              title="Compromisso com a Qualidade em Cada Intervenção"
              text="Uma forma de trabalhar assente no rigor, na transparência e no acompanhamento de cada cliente."
            />
            <BenefitsGrid items={differentiators} />
          </div>
        </div>
      </section>

      {/* 4 — Particulares e Empresas */}
      <section className="section bg-mist pt-0 sm:pt-0 lg:pt-0">
        <div className="container-k grid gap-6 pt-16 md:grid-cols-2">
          {[
            { icon: HomeIcon, eyebrow: "Particulares", title: "Para a Sua Casa", text: "Mais conforto, eficiência e tranquilidade para o seu dia a dia.", cta: "Soluções residenciais", href: "/servicos/ar-condicionado", img: "/img/particulares.webp", alt: "Sala de estar climatizada" },
            { icon: Building2, eyebrow: "Empresas", title: "Para o Seu Negócio", text: "Assistência e manutenção técnica para ajudar a manter a atividade da sua empresa.", cta: "Soluções empresariais", href: "/empresas", img: "/img/empresas.webp", alt: "Espaço comercial climatizado" },
          ].map((c) => (
            <article key={c.title} className="group relative isolate flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl bg-graphite p-8 text-white sm:p-10">
              <Image src={c.img} alt={c.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/85 to-graphite/30" />
              <div className="relative">
              <c.icon className="h-9 w-9 text-cyan" aria-hidden="true" />
              <p className="eyebrow mt-4 text-cyan">{c.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-extrabold">{c.title}</h2>
              <p className="mt-3 max-w-md text-white/80">{c.text}</p>
              <Link href={c.href} className="btn-primary mt-6">{c.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5 — Como trabalhamos */}
      <section className="section bg-graphite text-white">
        <div className="container-k">
          <SectionHeading eyebrow="Processo" title="Como Trabalhamos" text="Um percurso simples e transparente, do primeiro contacto ao acompanhamento após a intervenção." light />
          <div className="mt-14"><ProcessSteps steps={processSteps} light /></div>
        </div>
      </section>

      {/* 6 — Contratos de manutenção */}
      <section className="section">
        <div className="container-k grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/img/servicos/manutencao-assistencia.webp" alt="Ferramentas de diagnóstico e plantas técnicas" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-orange p-5 text-white shadow-xl sm:block">
              <ShieldCheck className="h-8 w-8" aria-hidden="true" />
              <p className="mt-2 max-w-[11rem] text-sm font-semibold leading-snug">Manutenção planeada para cada equipamento</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Contratos de manutenção</p>
            <h2 className="h2 mt-3">Prevenir Avarias. Proteger o Seu Investimento.</h2>
            <p className="lead mt-4">Uma manutenção planeada ajuda a reduzir o risco de falhas inesperadas, a preservar o desempenho dos equipamentos e a organizar os custos de assistência.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Planeamento de intervenções preventivas", "Inspeções e verificações técnicas", "Registo das intervenções", "Condições definidas em proposta"].map((t) => (
                <li key={t} className="flex gap-2 text-sm font-medium"><ClipboardCheck className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />{t}</li>
              ))}
            </ul>
            <Link href="/empresas#contratos" className="btn-secondary mt-8">Conhecer contratos de manutenção</Link>
          </div>
        </div>
      </section>

      {/* 7 — Assistência */}
      <section className="relative isolate overflow-hidden bg-graphite text-white">
        <Image src="/img/equipamentos.webp" alt="" fill sizes="100vw" className="object-cover object-right opacity-60" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/90 to-graphite/30" />
        <div className="container-k relative flex flex-col gap-8 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <Wrench className="h-10 w-10 text-orange" aria-hidden="true" />
            <h2 className="h2 mt-4 text-white">Precisa de Assistência Técnica?</h2>
            <p className="mt-4 text-lg text-white/80">Descreva a situação e envie-nos o seu pedido. A nossa equipa analisará as informações e entrará em contacto.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {siteConfig.contact.phoneHref && <a href={siteConfig.contact.phoneHref} className="btn-secondary">Ligar {siteConfig.contact.phone}</a>}
            <Link href="/orcamento?tipo=Repara%C3%A7%C3%A3o" className="btn-ghost">Solicitar assistência</Link>
            <Link href="/orcamento" className="btn-primary">Pedir orçamento</Link>
          </div>
        </div>
      </section>
    </>
  );
}
