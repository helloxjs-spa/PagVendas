import { Lightbulb, RefreshCcw, Stethoscope } from "lucide-react";
import { aph360, ctaLabels, method } from "@/content/course";
import { Cta } from "../ui/Cta";
import { Headline } from "../ui/Headline";
import { SectionHead } from "../ui/SectionHead";

const icons = [Lightbulb, Stethoscope, RefreshCcw];

/** Metodologia: passos numerados em fundo azul + caixa de chamada com selo 360°. */
export function Method() {
  return (
    <section
      id="metodologia"
      aria-labelledby="metodo-title"
      data-tone="dark"
      className="bg-navy py-20 text-white sm:py-24"
    >
      <div className="wrap">
        <SectionHead id="metodo-title" title={method.title} tone="dark" />

        <ol className="mt-16 grid gap-x-5 gap-y-12 md:grid-cols-3">
          {method.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li
                key={step.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="relative rounded-[22px] bg-white px-6 pt-12 pb-8 text-center text-ink shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
              >
                <span className="absolute -top-6 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-signal text-[1.25rem] font-extrabold text-ink shadow-lg">
                  {i + 1}
                </span>
                <span className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-blue/8 text-blue">
                  <Icon aria-hidden className="size-9" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-[1.35rem] font-bold">{step.title}</h3>
                <p className="mt-2 text-[0.97rem] text-ink/65">{step.text}</p>
              </li>
            );
          })}
        </ol>

        {/* Caixa de chamada com selo */}
        <div className="mt-8 grid items-center gap-8 rounded-[24px] bg-[#10284a] p-7 shadow-[0_18px_38px_rgba(0,0,0,0.2)] sm:p-10 md:grid-cols-[10rem_1fr]">
          <div
            aria-hidden
            className="mx-auto flex size-36 flex-col items-center justify-center rounded-full border-[6px] border-white/15 bg-signal text-center text-ink shadow-lg md:size-40"
          >
            <span className="text-[0.8rem] font-bold tracking-[0.06em] uppercase">APH</span>
            <span className="text-[2.4rem] leading-none font-extrabold">360°</span>
          </div>
          <div className="text-center md:text-left">
            <Headline as="h3" text={aph360.statement} className="text-[clamp(1.6rem,1.1rem+1.6vw,2.3rem)] text-white" />
            <p className="mt-3 max-w-2xl text-white/80 max-md:mx-auto">{aph360.statementNote}</p>
            <div className="mt-6">
              <Cta kind="registration" className="btn-pulse w-full sm:w-auto">
                {ctaLabels.registration}
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
