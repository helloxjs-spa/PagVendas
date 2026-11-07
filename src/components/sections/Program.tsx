import { FileText } from "lucide-react";
import { curriculum } from "@/content/course";
import { SectionHead } from "../ui/SectionHead";

/** Programa previsto: itens em cartões claros com número em bloco de cor. */
export function Program() {
  return (
    <section id="programa-curso" aria-labelledby="programa-curso-title" className="bg-white py-20 sm:py-24">
      <div className="wrap">
        <SectionHead id="programa-curso-title" eyebrow={curriculum.eyebrow} title={curriculum.title} lead={curriculum.intro} />

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" aria-label="Conteúdos previstos">
          {curriculum.items.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties}
              className="flex gap-4 rounded-[18px] border border-line bg-mist p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[var(--shadow-soft)]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-blue text-[1rem] font-extrabold text-white shadow-[0_10px_18px_rgba(37,99,217,0.22)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.02rem] leading-snug font-bold">{item.title}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink/65">{item.text}</p>
                {item.is360 && (
                  <span className="mt-3 inline-block rounded-full bg-signal/15 px-2.5 py-0.5 text-[0.68rem] font-bold tracking-[0.04em] text-[#b33a0b] uppercase">
                    Dimensão 360°
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 flex max-w-3xl gap-3 rounded-2xl border border-blue/20 bg-blue/5 p-4 text-[0.9rem] leading-relaxed text-ink/75">
          <FileText aria-hidden className="mt-0.5 size-5 shrink-0 text-blue" />
          <span>
            <strong className="font-bold text-ink">{curriculum.reference.title}:</strong> {curriculum.reference.text}
          </span>
        </p>
      </div>
    </section>
  );
}
