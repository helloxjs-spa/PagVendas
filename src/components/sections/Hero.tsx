import { CalendarDays, Clock, ListChecks, Tag, Waves } from "lucide-react";
import { ctaLabels, hero } from "@/content/course";
import { heroPhoto } from "@/content/media";
import { Cta } from "../ui/Cta";
import { Frame } from "../ui/Frame";
import { Headline } from "../ui/Headline";

const ledgerIcons = [Clock, ListChecks, Waves, Tag];

/** Capa: foto de tela cheia com camada azul, texto centralizado e cartão de dados sobreposto. */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative bg-mist pb-6">
      <div data-tone="dark" className="relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
          <Frame slot={heroPhoto} priority sizes="100vw" className="size-full" tag="top" />
          {heroPhoto.photo && <div className="absolute inset-0 bg-[linear-gradient(rgba(11,26,69,0.84),rgba(15,33,84,0.74))]" />}
        </div>

        <div className="wrap flex flex-col items-center pt-32 pb-36 text-center sm:pt-40 sm:pb-44 lg:pt-44">
          <p className="pill border-white/40 text-white">{hero.eyebrow}</p>
          <Headline
            as="h1"
            id="hero-title"
            text={hero.title}
            className="mt-6 max-w-4xl text-[clamp(2.3rem,1.2rem+4.4vw,4.6rem)] leading-[1.05] [&_br]:hidden sm:[&_br]:block"
          />
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-white/85 sm:text-[1.1rem]">{hero.intro}</p>

          <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Cta kind="registration" className="w-full sm:w-auto">
              {ctaLabels.registration}
            </Cta>
            <Cta kind="whatsapp" variant="outline" className="w-full sm:w-auto">
              {ctaLabels.whatsapp}
            </Cta>
          </div>

          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.92rem] text-white/80">
            <CalendarDays aria-hidden className="size-4 text-sky" />
            <strong className="font-semibold text-white">{hero.factsStrong}</strong>
            <span aria-hidden>·</span>
            <span>{hero.factsText}</span>
          </p>
        </div>
      </div>

      {/* Cartão de dados sobreposto à borda da capa */}
      <div className="wrap relative z-10 -mt-24 sm:-mt-28">
        <dl className="card mx-auto grid max-w-6xl gap-px overflow-hidden border-t-4 !border-t-blue bg-line sm:grid-cols-2 lg:grid-cols-4" style={{ boxShadow: "var(--shadow-card)" }}>
          {hero.ledger.map((item, i) => {
            const Icon = ledgerIcons[i];
            return (
              <div
                key={item.kicker}
                className="flex items-center gap-4 bg-white px-6 py-5 sm:py-6"
              >
                <span className="icon-tile">
                  <Icon aria-hidden className="size-6" />
                </span>
                <div>
                  <dt className="text-[0.72rem] font-bold tracking-[0.05em] text-ink/55 uppercase">{item.kicker}</dt>
                  <dd>
                    <span className="block text-[1.35rem] leading-tight font-extrabold text-ink">
                      {item.value}
                      {item.unit && <span className="text-blue">{item.unit}</span>}
                    </span>
                    <span className="block text-[0.82rem] text-ink/60">{item.note}</span>
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
        <p className="mt-6 text-center">
          <a href="#turmas" className="text-[0.92rem] font-semibold text-blue underline decoration-blue/30 underline-offset-[6px] hover:decoration-blue">
            {hero.factsLink} ↓
          </a>
        </p>
      </div>
    </section>
  );
}
