import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-mist pt-[76px]">
      <div className="container-k py-20 text-center">
        <p className="font-display text-7xl font-extrabold text-cyan">404</p>
        <h1 className="mt-4 text-3xl font-extrabold">Página não encontrada</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">A página que procura não existe ou foi movida.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-secondary">Voltar ao início</Link>
          <Link href="/orcamento/" className="btn-primary">Pedir orçamento</Link>
        </div>
      </div>
    </section>
  );
}
