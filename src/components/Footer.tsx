import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export function Footer() {
  const c = siteConfig.contact;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-graphite text-white/80">
      <div className="energy-line" />
      <div className="container-k grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-lg bg-white p-3">
            <Image src="/img/logo-klimatec.png" alt="KlimaTEC — Técnica & Energia" width={160} height={48} className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed">{siteConfig.slogan}</p>
          <p className="mt-2 text-sm leading-relaxed">Climatização, aquecimento, refrigeração, ventilação e instalações elétricas para particulares e empresas.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">Serviços</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/servicos/${s.slug}`} className="hover:text-cyan">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">Empresa</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/empresas" className="hover:text-cyan">Soluções para empresas</Link></li>
            <li><Link href="/sobre-nos" className="hover:text-cyan">Sobre nós</Link></li>
            <li><Link href="/projetos" className="hover:text-cyan">Projetos</Link></li>
            <li><Link href="/blog" className="hover:text-cyan">Blog</Link></li>
            <li><Link href="/orcamento" className="hover:text-cyan">Pedir orçamento</Link></li>
            <li><Link href="/contactos" className="hover:text-cyan">Contactos</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">Contactos</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {c.phone && c.phoneHref && (
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" /><a href={c.phoneHref} className="hover:text-cyan">{c.phone}</a></li>
            )}
            {c.email && (
              <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" /><a href={`mailto:${c.email}`} className="hover:text-cyan">{c.email}</a></li>
            )}
            {c.address && (
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" /><span>{c.address}{c.postalCode ? `, ${c.postalCode}` : ""}{c.locality ? ` ${c.locality}` : ""}</span></li>
            )}
            {c.hours?.map((h) => (
              <li key={h} className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" /><span>{h}</span></li>
            ))}
            {!c.phone && !c.email && (
              <li>Utilize o <Link href="/orcamento" className="font-semibold text-cyan hover:underline">formulário de pedido</Link> para entrar em contacto.</li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-k flex flex-col gap-3 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.legal.companyName ?? siteConfig.name}{siteConfig.legal.nif ? ` · NIF ${siteConfig.legal.nif}` : ""}. Todos os direitos reservados.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link></li>
            <li><Link href="/politica-de-cookies" className="hover:text-white">Política de Cookies</Link></li>
            <li><a href={siteConfig.legal.complaintsBookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Livro de Reclamações</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
