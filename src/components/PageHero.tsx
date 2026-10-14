import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function PageHero({ title, text, image, crumbs, children }: { title: string; text?: string; image?: string; crumbs?: Crumb[]; children?: React.ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-graphite pt-[76px] text-white">
      {image && (
        <>
          <Image src={image} alt="" fill priority className="-z-20 object-cover opacity-45" sizes="100vw" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/30" />
        </>
      )}
      <div className="container-k py-14 sm:py-20">
        {crumbs && (
          <nav aria-label="Localização" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs font-medium text-white/60">
              <li><Link href="/" className="hover:text-white">Início</Link></li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span aria-current="page" className="text-white/90">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="reveal max-w-3xl text-4xl font-extrabold leading-[1.1] sm:text-5xl">{title}</h1>
        {text && <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{text}</p>}
        {children && <div className="reveal mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
