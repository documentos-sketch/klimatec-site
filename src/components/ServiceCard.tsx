import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan text-white shadow-lg ring-4 ring-white">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
        <Link href={`/servicos/${service.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-orange hover:text-orange-dark" aria-label={`Saber mais sobre ${service.title}`}>
          Saber mais <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
