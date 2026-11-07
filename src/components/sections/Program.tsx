"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { curriculum } from "@/content/course";
import { SectionHead } from "../ui/SectionHead";

/**
 * Programa previsto: grade compacta de itens numerados.
 * No celular, cada item mostra só o título; a descrição abre ao tocar.
 * A partir de sm, todas as descrições ficam sempre visíveis.
 */
export function Program() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="programa-curso" aria-labelledby="programa-curso-title" className="bg-white py-16 sm:py-20">
      <div className="wrap">
        <SectionHead id="programa-curso-title" title={curriculum.title} lead={curriculum.intro} />

        <ol className="mt-10 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3" aria-label="Conteúdos previstos">
          {curriculum.items.map((item, i) => {
            const isOpen = open === i;
            const textId = `programa-item-${i}`;
            return (
              <li
                key={item.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties}
                className="relative flex gap-3.5 rounded-2xl border border-line bg-mist p-3.5 transition hover:bg-white hover:shadow-[var(--shadow-soft)] sm:p-4"
              >
                <div className="flex shrink-0 flex-col items-center gap-1.5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-navy text-[0.9rem] font-extrabold text-white shadow-[0_8px_16px_rgba(8,27,52,0.2)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.is360 && (
                    <span className="rounded-full bg-signal px-1.5 py-px text-[0.6rem] font-bold text-navy">
                      <span className="sr-only">Dimensão </span>360°
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1 self-center">
                  <h3 className="flex items-start justify-between gap-2 text-[0.98rem] leading-snug font-bold">
                    {item.title}
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={textId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="shrink-0 cursor-pointer text-alert after:absolute after:inset-0 after:content-[''] sm:hidden"
                    >
                      <ChevronDown aria-hidden className={`size-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      <span className="sr-only">{isOpen ? "Ocultar detalhes" : "Ver detalhes"}</span>
                    </button>
                  </h3>
                  <p id={textId} className={`mt-1 text-[0.86rem] leading-relaxed text-ink/65 sm:block ${isOpen ? "block" : "hidden"}`}>
                    {item.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
