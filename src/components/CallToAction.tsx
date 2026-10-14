import Link from "next/link";

type Props = {
  title: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CallToAction({ title, text, primary = { label: "Pedir orçamento", href: "/orcamento" }, secondary }: Props) {
  return (
    <section className="relative overflow-hidden bg-graphite text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
      <div className="container-k relative flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="h2 text-white">{title}</h2>
          {text && <p className="mt-3 text-lg text-white/75">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {secondary && <Link href={secondary.href} className="btn-ghost">{secondary.label}</Link>}
          <Link href={primary.href} className="btn-primary">{primary.label}</Link>
        </div>
      </div>
    </section>
  );
}
