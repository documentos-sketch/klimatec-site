/**
 * Configuração central da KlimaTEC.
 *
 * Os campos a `null` só devem ser preenchidos com dados reais confirmados pela
 * empresa. Enquanto estiverem a `null`, o site esconde automaticamente os
 * elementos que dependem deles (botão WhatsApp, telefone, morada, Schema.org…).
 */
export type SiteConfig = {
  name: string;
  signature: string;
  slogan: string;
  url: string;
  description: string;
  contact: {
    phone: string | null;
    phoneHref: string | null;
    whatsapp: string | null; // apenas dígitos com indicativo
    email: string | null;
    address: string | null;
    postalCode: string | null;
    locality: string | null;
    hours: string[] | null;
    serviceArea: string | null;
    mapsUrl: string | null;
  };
  legal: {
    companyName: string | null; // denominação social
    nif: string | null;
    complaintsBookUrl: string;
  };
  social: {
    facebook: string | null;
    instagram: string | null;
    linkedin: string | null;
  };
  forms: {
    /**
     * Endpoint que recebe os pedidos (POST multipart/form-data), definido por
     * NEXT_PUBLIC_FORM_ENDPOINT. Sem endpoint, o formulário NÃO simula sucesso.
     */
    endpoint: string | null;
  };
};

export const siteConfig: SiteConfig = {
  name: "KlimaTEC",
  signature: "Técnica & Energia",
  slogan: "O seu conforto é a nossa energia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://klimatec.pt",
  description:
    "Instalação, manutenção e assistência técnica em ar condicionado, aquecimento, refrigeração, ventilação e instalações elétricas, para particulares e empresas em todo o país.",
  contact: {
    phone: "+351 962 718 160",
    phoneHref: "tel:+351962718160",
    whatsapp: "351962718160",
    email: "contato@klimatec.pt",
    address: "Travessa do Centeio 2, R/C Dto.",
    postalCode: "2910-459",
    locality: "Setúbal",
    hours: ["Segunda a sexta: 09h00 – 18h00"],
    serviceArea: "Todo o país",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Travessa+do+Centeio+2,+2910-459+Set%C3%BAbal,+Portugal",
  },
  legal: {
    companyName: null,
    nif: null,
    complaintsBookUrl: "https://www.livroreclamacoes.pt",
  },
  social: {
    facebook: null,
    instagram: null,
    linkedin: null,
  },
  forms: {
    endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || null,
  },
};

export const hasContacts = Boolean(
  siteConfig.contact.phone || siteConfig.contact.email || siteConfig.contact.whatsapp,
);

export function whatsappLink(message = "Olá! Gostaria de pedir informações à KlimaTEC.") {
  const n = siteConfig.contact.whatsapp;
  return n ? `https://wa.me/${n}?text=${encodeURIComponent(message)}` : null;
}
