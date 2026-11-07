import { BookOpenCheck, Siren, Waves } from "lucide-react";
import { presentation } from "@/content/course";
import { SectionHead } from "../ui/SectionHead";

const icons = [BookOpenCheck, Siren, Waves];

/** Apresentação do curso: três frentes em cards com faixa superior e ícone. */
export function Pillars() {
  return (
    <section id="programa" aria-labelledby="programa-title" className="bg-mist pb-20 sm:pb-24">
      <div className="wrap">
        <SectionHead id="programa-title" eyebrow={presentation.eyebrow} title={presentation.title} lead={presentation.lead} />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {presentation.pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <li
                key={p.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="card relative overflow-hidden border-t-[5px] !border-t-blue p-7 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="icon-tile">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="mt-5 text-[1.2rem] leading-snug font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.97rem] text-ink/65">{p.text}</p>
                <span aria-hidden className="absolute top-5 right-6 text-[2.6rem] leading-none font-extrabold text-blue/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
