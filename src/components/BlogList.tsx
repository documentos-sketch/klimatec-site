"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Clock } from "lucide-react";
import { blogCategories, posts } from "@/data/blog";

export function BlogList() {
  const [cat, setCat] = useState<string>("Todos");
  const list = cat === "Todos" ? posts : posts.filter((p) => p.category === cat);
  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
        {["Todos", ...blogCategories].map((c) => (
          <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${cat === c ? "border-cyan bg-cyan text-white" : "border-line text-muted hover:border-cyan hover:text-cyan-ink"}`}>
            {c}
          </button>
        ))}
      </div>
      {list.length === 0 ? (
        <p className="mt-10 text-muted">Ainda não há artigos nesta categoria.</p>
      ) : (
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <Link href={`/blog/${p.slug}/`} className="relative block aspect-[16/10] overflow-hidden bg-mist">
                <Image src={p.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="rounded bg-cyan/10 px-2 py-1 text-cyan-ink">{p.category}</span>
                  <span className="flex items-center gap-1 text-muted"><Clock className="h-3.5 w-3.5" aria-hidden="true" />{p.readingMinutes} min</span>
                </div>
                <h2 className="mt-3 text-lg font-bold leading-snug"><Link href={`/blog/${p.slug}/`} className="hover:text-cyan-ink">{p.title}</Link></h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                <Link href={`/blog/${p.slug}/`} className="mt-4 text-sm font-bold text-orange hover:text-orange-dark">Ler artigo →</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
