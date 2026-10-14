export function ProcessSteps({ steps, light = false }: { steps: readonly { title: string; text: string }[]; light?: boolean }) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
      <div aria-hidden="true" className={`absolute left-0 right-0 top-6 hidden h-0.5 md:block ${light ? "bg-white/15" : "bg-line"}`} />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 md:flex-col md:gap-0">
          <span className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-extrabold ring-8 ${i === steps.length - 1 ? "bg-orange text-white" : "bg-cyan text-white"} ${light ? "ring-graphite" : "ring-white"}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="md:mt-5">
            <h3 className={`text-lg font-bold ${light ? "text-white" : ""}`}>{s.title}</h3>
            <p className={`mt-1.5 text-sm leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
