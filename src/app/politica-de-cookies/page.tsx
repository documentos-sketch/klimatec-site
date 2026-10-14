import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Política de Cookies", description: "Informação sobre a utilização de cookies no website da KlimaTEC.", alternates: { canonical: "/politica-de-cookies/" } };

export default function CookiesPage() {
  return (
    <>
      <PageHero title="Política de Cookies" crumbs={[{ label: "Política de Cookies" }]} />
      <section className="section">
        <div className="container-k prose-k max-w-3xl">
          <h2>O que são cookies</h2>
          <p>Cookies são pequenos ficheiros guardados no seu dispositivo quando visita um website, utilizados para garantir o seu funcionamento ou recolher informação sobre a utilização.</p>
          <h2>Cookies utilizados neste website</h2>
          <p>Atualmente, este website não utiliza cookies de análise, publicidade ou redes sociais. Não é, por isso, apresentado um pedido de consentimento de cookies.</p>
          <p>Caso venham a ser utilizadas ferramentas de análise ou outros serviços de terceiros que recorram a cookies não essenciais, esta política será atualizada e será solicitado o seu consentimento prévio.</p>
          <h2>Como gerir cookies</h2>
          <p>Pode, a qualquer momento, consultar e eliminar cookies nas definições do seu navegador.</p>
        </div>
      </section>
    </>
  );
}
