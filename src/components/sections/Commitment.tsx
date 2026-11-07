import { HeartHandshake } from "lucide-react";
import { commitment } from "@/content/course";
import { site } from "@/content/site";
import { Headline } from "../ui/Headline";

/** Compromisso do EDASI: cuidado humano, valores e slogan. */
export function Commitment() {
  return (
    <section aria-labelledby="compromisso-title" className="bg-white pb-20 sm:pb-24">
      <div className="wrap">
        <div className="card grid items-center gap-10 overflow-hidden p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div>
            <p className="pill border-blue/30 bg-blue/5 text-blue">{commitment.eyebrow}</p>
            <Headline id="compromisso-title" text={commitment.title} className="section-title mt-5" />
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">{commitment.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Valores do Grupo EDASI">
              {commitment.values.map((v) => (
                <li key={v} className="rounded-full border border-line bg-mist px-4 py-1.5 text-[0.85rem] font-semibold text-ink/80">
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <figure data-tone="dark" className="relative rounded-[24px] bg-[linear-gradient(160deg,#0b1a45_0%,#1b3378_100%)] p-8 text-white sm:p-10" data-reveal>
            <HeartHandshake aria-hidden className="size-10 text-sun" />
            <blockquote className="mt-5 text-[1.25rem] leading-snug font-semibold sm:text-[1.4rem]">“{commitment.quote}”</blockquote>
            <figcaption className="mt-6 border-t border-white/15 pt-5 text-[1.05rem] font-extrabold text-sky">{site.slogan}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
