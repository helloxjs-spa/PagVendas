import { CircleCheck } from "lucide-react";
import { ctaLabels, curriculum } from "@/content/course";
import { Cta } from "../ui/Cta";
import { SectionHead } from "../ui/SectionHead";

/** Seção 4 — "O que você vai aprender?": grandes grupos de conteúdo em lista curta. */
export function Program() {
  return (
    <section id="conteudos" aria-labelledby="conteudos-title" className="bg-mist py-16 sm:py-20">
      <div className="wrap">
        <SectionHead id="conteudos-title" title={curriculum.title} lead={curriculum.lead} />

        <ul className="card mx-auto mt-10 grid max-w-2xl gap-1 p-3 sm:p-4" aria-label="Grandes grupos de conteúdo">
          {curriculum.items.map((item) => (
            <li key={item} className="flex items-center gap-3.5 rounded-xl px-3 py-3.5 text-[1.02rem] leading-snug font-semibold sm:text-[1.08rem]">
              <CircleCheck aria-hidden className="size-6 shrink-0 text-alert" strokeWidth={2.2} />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Cta kind="registration" className="w-full sm:w-auto">
            {ctaLabels.registration}
          </Cta>
        </div>
      </div>
    </section>
  );
}
