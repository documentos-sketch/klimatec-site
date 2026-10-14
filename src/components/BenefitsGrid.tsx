import { Icon } from "./Icon";

export function BenefitsGrid({ items }: { items: readonly { icon: string; title: string; text: string }[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((b) => (
        <li key={b.title} className="bg-white p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan/10 text-cyan-ink">
            <Icon name={b.icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
        </li>
      ))}
    </ul>
  );
}
