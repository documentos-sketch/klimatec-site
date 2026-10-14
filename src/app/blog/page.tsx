import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogList } from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog — Dicas de Climatização, Aquecimento e Manutenção",
  description: "Artigos sobre ar condicionado, bombas de calor, refrigeração, manutenção preventiva e eficiência energética.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" text="Informação útil sobre climatização, aquecimento, refrigeração e manutenção." image="/img/equipamentos.webp" crumbs={[{ label: "Blog" }]} />
      <section className="section">
        <div className="container-k"><BlogList /></div>
      </section>
    </>
  );
}
