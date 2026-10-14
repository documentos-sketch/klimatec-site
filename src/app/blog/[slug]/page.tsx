import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/blog";
import { PageHero } from "@/components/PageHero";
import { CallToAction } from "@/components/CallToAction";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt, alternates: { canonical: `/blog/${p.slug}/` }, openGraph: { type: "article", title: p.title, description: p.excerpt, images: [{ url: p.image }] } };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const ld = { "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.excerpt, image: p.image, publisher: { "@type": "Organization", name: "KlimaTEC" } };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero title={p.title} text={p.excerpt} crumbs={[{ label: "Blog", href: "/blog/" }, { label: p.category }]} />
      <article className="section">
        <div className="container-k max-w-3xl">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl">
            <Image src={p.image} alt="" fill sizes="(min-width:768px) 768px, 100vw" className="object-cover" />
          </div>
          <div className="prose-k">
            {p.body.map((b, i) =>
              "h" in b ? <h2 key={i}>{b.h}</h2> : "p" in b ? <p key={i}>{b.p}</p> : <ul key={i}>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>,
            )}
          </div>
          <p className="mt-10 rounded-lg bg-mist p-4 text-xs leading-relaxed text-muted">Este artigo tem caráter informativo e não substitui a avaliação técnica de cada situação.</p>
        </div>
      </article>
      <section className="section bg-mist">
        <div className="container-k">
          <h2 className="h2">Outros artigos</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug} className="rounded-xl border border-line bg-white p-6">
                <span className="text-xs font-semibold text-cyan-ink">{o.category}</span>
                <h3 className="mt-2 font-bold leading-snug"><Link href={`/blog/${o.slug}/`} className="hover:text-cyan-ink">{o.title}</Link></h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CallToAction title="Precisa de ajuda técnica?" text="Envie-nos o seu pedido e avaliamos a situação." />
    </>
  );
}
