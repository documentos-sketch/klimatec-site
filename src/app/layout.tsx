import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "KlimaTEC — Climatização, Aquecimento e Assistência Técnica",
    template: "%s | KlimaTEC",
  },
  description: siteConfig.description,
  applicationName: "KlimaTEC",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "KlimaTEC — Técnica & Energia",
    images: [{ url: "/img/og-klimatec.jpg", width: 1200, height: 630, alt: "KlimaTEC — Técnica & Energia" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#1C2026", width: "device-width", initialScale: 1 };

function OrganizationJsonLd() {
  const c = siteConfig.contact;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.name,
    slogan: siteConfig.slogan,
    url: siteConfig.url,
    logo: `${siteConfig.url}/img/logo-klimatec.png`,
    description: siteConfig.description,
  };
  // Só inclui dados confirmados
  if (c.phone) data.telephone = c.phone;
  if (c.email) data.email = c.email;
  if (c.address && c.locality) data.address = { "@type": "PostalAddress", streetAddress: c.address, postalCode: c.postalCode ?? undefined, addressLocality: c.locality, addressCountry: "PT" };
  if (c.serviceArea) data.areaServed = { "@type": "Country", name: "Portugal" };
  if (c.hours) data.openingHoursSpecification = { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" };
  if (siteConfig.legal.nif) data.vatID = `PT${siteConfig.legal.nif}`;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:shadow">Saltar para o conteúdo</a>
        <OrganizationJsonLd />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
