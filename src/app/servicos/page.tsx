import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { PageHero } from "@/components/PageHero";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Ar condicionado, aquecimento, refrigeração, ventilação, instalações elétricas e manutenção. Instalação, manutenção e assistência técnica pela KlimaTEC.",
  alternates: { canonical: "/servicos/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Serviços" text="Instalação, manutenção preventiva e assistência técnica para particulares e empresas." image="/img/equipamentos.webp" crumbs={[{ label: "Serviços" }]} />
      <section className="section bg-mist">
        <div className="container-k grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
      <CallToAction title="Não sabe que serviço precisa?" text="Descreva a situação e nós ajudamos a identificar a solução adequada." />
    </>
  );
}
