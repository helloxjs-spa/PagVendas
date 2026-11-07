import { Brain, Cpu, LockKeyhole, MessagesSquare, Scale, Sparkles, Users } from "lucide-react";
import { aph360 } from "@/content/course";
import { coursePhoto } from "@/content/media";
import { Frame } from "../ui/Frame";
import { SectionHead } from "../ui/SectionHead";

const icons = [Brain, MessagesSquare, Users, Scale, LockKeyhole, Cpu];

/** APH 360°: foto arredondada com selo flutuante + grade das seis dimensões. */
export function Dimensions() {
  return (
    <section id="aph-360" aria-labelledby="aph360-title" className="bg-white py-20 sm:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative" data-reveal>
          <Frame
            slot={coursePhoto}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/3] w-full rounded-[28px] shadow-[var(--shadow-card)] lg:aspect-[4/5]"
          />
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[var(--shadow-card)] sm:left-auto sm:-right-6">
            <span className="flex size-12 items-center justify-center rounded-full bg-signal text-[0.95rem] font-extrabold text-ink">360°</span>
            <span className="text-[0.9rem] leading-tight font-bold text-ink">
              Integrado ao
              <br />
              curso de APH
            </span>
          </div>
        </div>

        <div>
          <SectionHead id="aph360-title" title={aph360.title} lead={aph360.body} align="left" />

          <div className="mt-6 rounded-2xl bg-navy p-5 text-white shadow-[var(--shadow-card)] sm:p-6" data-tone="dark">
            <p className="flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.05em] text-sky uppercase">
              <Sparkles aria-hidden className="size-4" /> {aph360.change.label}
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-white/85">{aph360.change.text}</p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Dimensões do atendimento no percurso 360°">
            {aph360.dimensions.map((d, i) => {
              const Icon = icons[i];
              return (
                <li key={d} className="flex items-center gap-3 rounded-2xl border border-line bg-mist p-3.5 transition hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="text-[0.95rem] leading-snug font-semibold">{d}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
