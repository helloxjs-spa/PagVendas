import { ctaLabels, finalCta } from "@/content/course";
import { Cta } from "../ui/Cta";
import { Headline } from "../ui/Headline";

/** Chamada final em faixa dourada (como o CTA final do site antigo), centralizada. */
export function FinalBand() {
  return (
    <section
      id="contato"
      aria-labelledby="final-title"
      data-tone="yellow"
      className="bg-signal py-16 text-center text-navy sm:py-20"
    >
      <div className="wrap flex flex-col items-center">
        <Headline
          id="final-title"
          text={finalCta.title}
          className="max-w-3xl text-[clamp(1.9rem,1.2rem+2.4vw,3rem)] [&_br]:hidden sm:[&_br]:block"
        />
        <p className="mt-4 max-w-2xl text-navy/80">{finalCta.text}</p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Cta kind="registration" variant="blue" className="w-full sm:w-auto">
            {ctaLabels.registration}
          </Cta>
          <Cta kind="whatsapp" variant="outline-dark" className="w-full sm:w-auto">
            {ctaLabels.whatsapp}
          </Cta>
        </div>
      </div>
    </section>
  );
}
