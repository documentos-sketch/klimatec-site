import type { Metadata } from "next";
import { ClipboardList, CalendarClock, SearchCheck, Wrench, FileText, FileBarChart, Handshake } from "lucide-react";
import { sectors, maintenanceContract } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { SectorCard } from "@/components/SectorCard";
import { SectionHeading } from "@/components/SectionHeading";
import { BusinessForm } from "@/components/forms/BusinessForm";

export const metadata: Metadata = {
  title: "Soluções para Empresas e Contratos de Manutenção AVAC",
  description: "Assistência técnica para hotéis, restaurantes, comércio, escritórios, indústria e condomínios. Contratos de manutenção AVAC e refrigeração comercial.",
  alternates: { canonical: "/empresas/" },
};

const contractIcons = [ClipboardList, CalendarClock, SearchCheck, Wrench, FileText, FileBarChart, Handshake];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        title="Soluções Técnicas para Empresas que Não Podem Parar"
        text="A KlimaTEC desenvolve soluções de instalação, assistência e manutenção para ambientes empresariais, contribuindo para o conforto, a continuidade operacional e a eficiência dos sistemas técnicos."
        image="/img/empresa-carrinha.webp"
        crumbs={[{ label: "Empresas" }]}
      >
        <a href="#proposta" className="btn-primary">Solicitar proposta empresarial</a>
        <a href="#contratos" className="btn-ghost">Contratos de manutenção</a>
      </PageHero>

      <section className="section bg-mist">
        <div className="container-k">
          <SectionHeading eyebrow="Setores" title="Soluções por setor" text="Cada tipo de negócio tem exigências próprias. Adaptamos a intervenção à realidade de cada espaço." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => <SectorCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      <section id="contratos" className="section">
        <div className="container-k">
          <SectionHeading eyebrow="Contratos de manutenção" title="Prevenir Avarias. Proteger o Seu Investimento." text="Uma manutenção planeada ajuda a reduzir o risco de falhas inesperadas, a preservar o desempenho dos equipamentos e a organizar os custos de assistência." />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {maintenanceContract.map((m, i) => {
              const I = contractIcons[i % contractIcons.length];
              return (
                <li key={m} className="relative rounded-xl border border-line bg-white p-6">
                  <span className="absolute right-5 top-5 font-display text-sm font-bold text-line">{String(i + 1).padStart(2, "0")}</span>
                  <I className="h-7 w-7 text-cyan" aria-hidden="true" />
                  <p className="mt-4 font-bold leading-snug">{m}</p>
                </li>
              );
            })}
            <li className="flex flex-col justify-between rounded-xl bg-orange p-6 text-white">
              <p className="font-bold leading-snug">Cada contrato é definido em proposta, de acordo com os seus equipamentos e utilização.</p>
              <a href="#proposta" className="mt-4 text-sm font-bold underline underline-offset-4">Pedir proposta →</a>
            </li>
          </ol>
        </div>
      </section>

      <section id="proposta" className="section bg-mist">
        <div className="container-k grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div>
            <p className="eyebrow">Proposta empresarial</p>
            <h2 className="h2 mt-3">Solicitar proposta empresarial</h2>
            <p className="lead mt-4">Partilhe connosco os dados da sua organização e as necessidades técnicas. Analisamos a informação e preparamos uma proposta ajustada.</p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>• Os campos assinalados com <span className="text-orange">*</span> são obrigatórios.</li>
              <li>• O NIF é opcional nesta fase.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <BusinessForm />
          </div>
        </div>
      </section>
    </>
  );
}
