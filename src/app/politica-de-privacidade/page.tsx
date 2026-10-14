import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Política de Privacidade", description: "Como a KlimaTEC trata os dados pessoais recolhidos através deste website.", alternates: { canonical: "/politica-de-privacidade/" } };

export default function PrivacyPage() {
  const l = siteConfig.legal;
  const c = siteConfig.contact;
  return (
    <>
      <PageHero title="Política de Privacidade" crumbs={[{ label: "Política de Privacidade" }]} />
      <section className="section">
        <div className="container-k prose-k max-w-3xl">
          <p>Esta política explica como são tratados os dados pessoais recolhidos através do website da {siteConfig.name}, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento (UE) 2016/679).</p>
          <h2>Responsável pelo tratamento</h2>
          <p>{l.companyName ?? siteConfig.name}{l.nif ? `, NIF ${l.nif}` : ""}{c.address ? `, com sede em ${c.address}${c.postalCode ? `, ${c.postalCode}` : ""}${c.locality ? ` ${c.locality}` : ""}` : ""}.{c.email ? ` Contacto para questões de privacidade: ${c.email}.` : ""}</p>
          <h2>Dados recolhidos</h2>
          <p>Recolhemos apenas os dados que nos fornece voluntariamente nos formulários: nome, contactos (email e telefone), localização (distrito, concelho e, opcionalmente, morada), informação sobre o pedido e fotografias que decida anexar. No formulário empresarial, recolhemos também a denominação da organização, a pessoa responsável e, opcionalmente, o NIF.</p>
          <h2>Finalidades e fundamento</h2>
          <ul>
            <li>Responder a pedidos de orçamento, assistência, propostas e contactos — diligências pré-contratuais a pedido do titular e consentimento.</li>
            <li>Execução de serviços contratados — execução de contrato.</li>
            <li>Cumprimento de obrigações legais, nomeadamente fiscais — obrigação legal.</li>
          </ul>
          <h2>Conservação</h2>
          <p>Os dados são conservados pelo período necessário à resposta ao pedido e, havendo relação contratual, pelo prazo exigido pelas obrigações legais aplicáveis.</p>
          <h2>Partilha de dados</h2>
          <p>Os dados não são vendidos nem cedidos para fins comerciais. Podem ser tratados por prestadores de serviços que apoiam o funcionamento do website (por exemplo, alojamento e envio de formulários), vinculados a obrigações de confidencialidade e segurança.</p>
          <h2>Direitos dos titulares</h2>
          <p>Pode exercer os direitos de acesso, retificação, apagamento, limitação, portabilidade e oposição, bem como retirar o consentimento a qualquer momento, através dos contactos indicados nesta página. Tem ainda o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD).</p>
          <h2>Segurança</h2>
          <p>Adotamos medidas técnicas e organizativas adequadas para proteger os dados pessoais contra acesso, alteração ou perda não autorizados.</p>
        </div>
      </section>
    </>
  );
}
