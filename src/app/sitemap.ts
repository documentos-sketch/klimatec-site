import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { posts } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const paths = ["/", "/servicos/", "/empresas/", "/sobre-nos/", "/projetos/", "/blog/", "/orcamento/", "/contactos/", "/politica-de-privacidade/", "/politica-de-cookies/",
    ...services.map((s) => `/servicos/${s.slug}/`), ...posts.map((p) => `/blog/${p.slug}/`)];
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: p === "/" ? "weekly" : "monthly", priority: p === "/" ? 1 : p.startsWith("/servicos") || p === "/empresas/" ? 0.8 : 0.5 }));
}
