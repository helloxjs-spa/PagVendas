import { ctaLabels, finalCta } from "@/content/course";
import { Cta } from "../ui/Cta";
import { Headline } from "../ui/Headline";

/** Chamada final em faixa azul, centralizada. */
export function FinalBand() {
  return (
    <section
      id="contato"
      aria-labelledby="final-title"
      data-tone="dark"
      className="bg-[linear-gradient(180deg,#2563d9_0%,#173f9c_100%)] py-16 text-center text-white sm:py-20"
    >
      <div className="wrap flex flex-col items-center">
        <p className="pill border-white/40 text-white">{finalCta.eyebrow}</p>
        <Headline
          id="final-title"
          text={finalCta.title}
          className="mt-5 max-w-3xl text-[clamp(1.9rem,1.2rem+2.4vw,3rem)] [&_br]:hidden sm:[&_br]:block [&_em]:!text-sun"
        />
        <p className="mt-4 max-w-2xl text-white/85">{finalCta.text}</p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Cta kind="registration" className="w-full sm:w-auto">
            {ctaLabels.registration}
          </Cta>
          <Cta kind="whatsapp" variant="outline" className="w-full sm:w-auto">
            {ctaLabels.whatsapp}
          </Cta>
        </div>
      </div>
    </section>
  );
}
