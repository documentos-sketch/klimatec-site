import type { Metadata } from "next";
import Link from "next/link";
import { FolderOpen } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { projects, projectFilters } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Trabalhos realizados pela KlimaTEC em climatização, aquecimento, refrigeração e manutenção.",
  alternates: { canonical: "/projetos/" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Projetos" text="Trabalhos realizados pela KlimaTEC." image="/img/servicos/manutencao-assistencia.webp" crumbs={[{ label: "Projetos" }]} />
      <section className="section">
        <div className="container-k">
          <ul className="flex flex-wrap gap-2" aria-label="Categorias de projetos">
            {["Todos", ...projectFilters].map((f, i) => (
              <li key={f}><span className={`inline-block rounded-full border px-4 py-1.5 text-sm font-semibold ${i === 0 ? "border-cyan bg-cyan text-white" : "border-line text-muted"}`}>{f}</span></li>
            ))}
          </ul>
          {projects.length === 0 && (
            <div className="mt-10 flex flex-col items-center rounded-2xl border-2 border-dashed border-line px-6 py-20 text-center">
              <FolderOpen className="h-12 w-12 text-cyan" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-extrabold">Os nossos primeiros projetos estão a caminho</h2>
              <p className="mt-3 max-w-lg text-muted">Esta página vai reunir trabalhos reais realizados pela KlimaTEC, com fotografias, localidade e descrição de cada intervenção.</p>
              <Link href="/orcamento/" className="btn-primary mt-8">Pedir orçamento</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
