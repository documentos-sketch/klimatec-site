import Image from "next/image";

export function SectorCard({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <article className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-xl bg-graphite text-white">
      <Image src={image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-45" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/60 to-transparent" />
      <div className="relative p-6">
        <span className="mb-3 block h-1 w-10 rounded bg-orange" />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{text}</p>
      </div>
    </article>
  );
}
