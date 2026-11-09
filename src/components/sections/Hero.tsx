import { CalendarDays, Clock, ListChecks, Tag } from "lucide-react";
import { ctaLabels, hero } from "@/content/course";
import { heroPhoto } from "@/content/media";
import { Cta } from "../ui/Cta";
import { Frame } from "../ui/Frame";
import { Headline } from "../ui/Headline";
import { Seal } from "../ui/Seal";

const ledgerIcons = [Clock, ListChecks, Tag];

/** Capa: foto de tela cheia com camada azul, texto centralizado e cartão de dados sobreposto. */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative">
      <div data-tone="dark" className="relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
          <Frame slot={heroPhoto} priority sizes="100vw" className="size-full" tag="top" />
          {heroPhoto.photo && <div className="absolute inset-0 bg-[linear-gradient(rgba(8,27,52,0.84),rgba(8,27,52,0.74))]" />}
        </div>

        <div className="wrap flex flex-col items-center pt-24 pb-32 text-center sm:pt-28 sm:pb-32 lg:pt-32">
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.78rem] font-semibold tracking-[0.02em] text-white/90 backdrop-blur-sm">
            <span aria-hidden className="live-dot" />
            {hero.eyebrow}
          </p>
          <Headline as="h1" id="hero-title" text={hero.title} className="max-w-6xl text-[clamp(1.75rem,1.05rem+3vw,3.4rem)] leading-[1.08] [&_em]:text-alert-bright [&_br]:hidden sm:[&_br]:block" />
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-white/85 sm:text-[1.1rem]">{hero.intro}</p>

          <div className="mt-7 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Cta kind="registration" className="w-full sm:w-auto">
              {ctaLabels.registration}
            </Cta>
            <Cta kind="whatsapp" variant="outline" className="w-full sm:w-auto">
              {ctaLabels.whatsapp}
            </Cta>
          </div>

          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.92rem] text-white/80">
            <CalendarDays aria-hidden className="size-4 text-sky" />
            <strong className="font-semibold text-white">{hero.factsStrong}</strong>
            <span aria-hidden className="max-sm:hidden">·</span>
            <span>{hero.factsText}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * Cartão de dados sobreposto à borda inferior da capa.
 * Renderizado no topo da seção seguinte (Pillars), para que esta faixa acompanhe
 * a troca de cor de fundo daquela seção.
 */
export function HeroLedger() {
  return (
    <div className="wrap relative z-10 -mt-20 sm:-mt-24">
      <div className="relative mx-auto max-w-6xl">
        <Seal className="absolute -top-9 -right-2 z-10 sm:-top-16 sm:-right-5 lg:-top-20" />
        <dl className="card grid gap-px overflow-hidden border-t-4 !border-t-alert bg-line sm:grid-cols-3" style={{ boxShadow: "var(--shadow-card)" }}>
          {hero.ledger.map((item, i) => {
            const Icon = ledgerIcons[i];
            return (
              <div key={item.kicker} className="flex items-center gap-4 bg-white px-6 py-5 sm:py-6">
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
      </div>
    </div>
  );
}
