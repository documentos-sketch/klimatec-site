"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { navigation } from "@/data/content";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_6px_24px_rgba(28,32,38,0.08)]" : ""
      }`}
    >
      <div className="energy-line" />
      <div className="container-k flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="KlimaTEC — página inicial" className="shrink-0">
          <Image src="/img/logo-klimatec.png" alt="KlimaTEC — Técnica & Energia" width={168} height={50} priority className="h-11 w-auto" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) =>
              "children" in item && item.children ? (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition hover:text-cyan-ink ${isActive(item.href) ? "text-cyan-ink" : "text-graphite"}`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="overflow-hidden rounded-lg border border-line bg-white py-2 shadow-xl">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/servicos/${s.slug}`} className="block px-4 py-2.5 text-sm text-graphite hover:bg-mist hover:text-cyan-ink">
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-semibold transition hover:text-cyan-ink ${isActive(item.href) ? "text-cyan-ink" : "text-graphite"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {siteConfig.contact.phone && siteConfig.contact.phoneHref && (
            <a href={siteConfig.contact.phoneHref} className="hidden items-center gap-2 text-sm font-semibold text-graphite xl:flex">
              <Phone className="h-4 w-4 text-cyan" aria-hidden="true" /> {siteConfig.contact.phone}
            </a>
          )}
          {siteConfig.contact.phoneHref && (
            <a href={siteConfig.contact.phoneHref} aria-label="Ligar para a KlimaTEC" className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-cyan text-white xl:hidden">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
          <Link href="/orcamento" className="btn-primary hidden sm:inline-flex">Pedir orçamento</Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <nav aria-label="Navegação móvel" className="container-k py-4">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded-md px-3 py-3 font-semibold hover:bg-mist">{item.label}</Link>
                  {"children" in item && item.children && (
                    <ul className="mb-2 ml-3 border-l-2 border-cyan/30 pl-3">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/servicos/${s.slug}`} className="block px-2 py-2 text-sm text-muted hover:text-cyan-ink">{s.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/orcamento" className="btn-primary mt-4 w-full">Pedir orçamento</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
