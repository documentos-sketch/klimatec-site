import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone, Map } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Fale com a KlimaTEC: pedidos de orçamento, assistência técnica e contratos de manutenção.",
  alternates: { canonical: "/contactos/" },
};

export default function ContactPage() {
  const c = siteConfig.contact;
  const wa = whatsappLink();
  const rows = [
    c.phone && c.phoneHref ? { I: Phone, label: "Telefone", value: <a href={c.phoneHref} className="hover:text-cyan-ink">{c.phone}</a> } : null,
    wa ? { I: MessageCircle, label: "WhatsApp", value: <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-ink">Enviar mensagem</a> } : null,
    c.email ? { I: Mail, label: "Email", value: <a href={`mailto:${c.email}`} className="hover:text-cyan-ink">{c.email}</a> } : null,
    c.hours ? { I: Clock, label: "Horário de atendimento", value: <>{c.hours.map((h) => <span key={h} className="block">{h}</span>)}</> } : null,
    c.serviceArea ? { I: Map, label: "Área de atuação", value: c.serviceArea } : null,
    c.address ? { I: MapPin, label: "Morada", value: `${c.address}${c.postalCode ? `, ${c.postalCode}` : ""}${c.locality ? ` ${c.locality}` : ""}` } : null,
  ].filter(Boolean) as { I: typeof Phone; label: string; value: React.ReactNode }[];

  return (
    <>
      <PageHero title="Contactos" text="Estamos disponíveis para esclarecer dúvidas, receber pedidos de orçamento e de assistência técnica." crumbs={[{ label: "Contactos" }]} />
      <section className="section">
        <div className="container-k grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div>
            <h2 className="text-2xl font-extrabold">Fale connosco</h2>
            {rows.length > 0 ? (
              <ul className="mt-6 space-y-5">
                {rows.map(({ I, label, value }) => (
                  <li key={label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan-ink"><I className="h-5 w-5" aria-hidden="true" /></span>
                    <div><p className="text-xs font-bold uppercase tracking-wider text-muted">{label}</p><div className="mt-1 font-semibold">{value}</div></div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 rounded-lg border border-line bg-mist p-5 text-sm leading-relaxed text-muted">Os contactos diretos da KlimaTEC (telefone, email e horário) serão publicados brevemente. Entretanto, pode enviar-nos o seu pedido através do <Link href="/orcamento/" className="font-semibold text-cyan-ink underline">formulário de orçamento</Link>.</p>
            )}
            {c.mapsUrl && c.address && (
              <a href={c.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-8">Ver no mapa</a>
            )}
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-xl font-bold">Envie-nos uma mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
