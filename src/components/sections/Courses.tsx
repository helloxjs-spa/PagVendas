import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { otherCourses } from "@/content/course";
import { whatsappHref } from "@/content/site";
import { SectionHead } from "../ui/SectionHead";
import { WhatsAppGlyph } from "../ui/WhatsAppGlyph";

/**
 * Outras formações: responde à objeção de distância/duração do APH presencial
 * (APH Híbrido, EAD) e divulga SBV e Plantão 12. Cada card abre o WhatsApp com
 * uma mensagem sobre o curso escolhido.
 */
export function Courses() {
  return (
    <section id="cursos" aria-labelledby="cursos-title" className="bg-white pt-20 pb-12 sm:pt-24 sm:pb-14">
      <div className="wrap">
        <SectionHead id="cursos-title" title={otherCourses.title} lead={otherCourses.lead} />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherCourses.items.map((c, i) => {
            const href = whatsappHref(`Olá! Quero saber mais sobre o curso ${c.name} do Grupo EDASI.`);
            return (
              <li
                key={c.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="card flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={c.photo.src}
                    alt={c.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: c.photo.focus ?? "50% 50%" }}
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-alert px-3 py-1 text-[0.7rem] font-bold tracking-[0.03em] text-white uppercase shadow">
                    {c.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[1.15rem] leading-snug font-bold">{c.name}</h3>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-ink/65">{c.text}</p>
                  <p className="mt-4 flex items-center gap-2 text-[0.82rem] font-semibold text-ink/75">
                    <CalendarDays aria-hidden className="size-4 shrink-0 text-blue" />
                    {c.meta}
                  </p>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp mt-5 !min-h-12 w-full !text-[0.8rem]"
                      aria-label={`Quero saber mais sobre ${c.name} pelo WhatsApp`}
                    >
                      <WhatsAppGlyph />
                      Saber mais no WhatsApp
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
