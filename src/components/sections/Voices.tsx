import { Play } from "lucide-react";
import { testimonials } from "@/content/course";
import { studentVideos } from "@/content/media";
import { site } from "@/content/site";
import { SectionHead } from "../ui/SectionHead";
import { VerticalVideos } from "../ui/VerticalVideos";

/** Depoimentos em vídeo: somente relatos reais e autorizados. Sem eles, a seção não aparece na versão pública. */
export function Voices() {
  const hasReal = studentVideos.length > 0;
  if (!hasReal && !site.reviewMode) return null;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="border-t border-line bg-white pt-9 pb-16 sm:pt-11 sm:pb-20">
      <div className="wrap">
        <SectionHead id="depoimentos-title" title={testimonials.title} />

        <div className="mt-8">
          {hasReal ? (
            <VerticalVideos items={studentVideos} />
          ) : (
            // Modo revisão: 3 espaços verticais reservados para os vídeos dos alunos.
            <ul className="mx-auto grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
              {[1, 2, 3].map((n) => (
                <li
                  key={n}
                  className="plate flex aspect-[9/16] flex-col items-center justify-center gap-3 rounded-[22px] px-3 text-center text-white"
                >
                  <span aria-hidden className="flex size-12 items-center justify-center rounded-full bg-signal text-ink sm:size-16">
                    <Play className="ml-1 size-5 fill-current sm:size-6" />
                  </span>
                  <span className="text-[0.8rem] font-semibold sm:text-[0.95rem]">Depoimento de aluno {n}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
