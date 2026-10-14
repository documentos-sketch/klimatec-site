export function SectionHeading({ eyebrow, title, text, center = false, light = false }: { eyebrow?: string; title: string; text?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${light ? "text-cyan" : ""}`}>{eyebrow}</p>}
      <h2 className={`h2 mt-3 ${light ? "text-white" : ""}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>{text}</p>}
    </div>
  );
}
