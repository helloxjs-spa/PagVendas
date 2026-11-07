import { CalendarClock, CreditCard, Receipt } from "lucide-react";
import { ctaLabels, investment } from "@/content/course";
import { closingPhoto } from "@/content/media";
import { Cta } from "../ui/Cta";
import { Frame } from "../ui/Frame";
import { Headline } from "../ui/Headline";

/** Investimento: foto de fundo com cartão branco flutuante, formas de pagamento e valores de 2027. */
export function Offer() {
  const c = investment.card;
  return (
    <section id="investimento" aria-labelledby="investimento-title" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <Frame slot={closingPhoto} sizes="100vw" className="size-full" tag="top" />
        {closingPhoto.photo && <div className="absolute inset-0 bg-[linear-gradient(rgba(8,27,52,0.78),rgba(8,27,52,0.62))]" />}
      </div>

      <div className="wrap flex justify-center">
        <div className="relative w-full max-w-[40rem] rounded-[26px] bg-white p-6 text-center shadow-[0_30px_60px_rgba(0,0,0,0.3)] sm:p-10">
          {/* Selo */}
          <div
            aria-hidden
            className="absolute -top-7 -right-3 flex size-24 rotate-12 flex-col items-center justify-center rounded-full bg-sun px-2 text-ink shadow-[0_12px_24px_rgba(164,110,0,0.3)] sm:-right-6 sm:size-28"
          >
            <span className="text-[1.35rem] leading-none font-extrabold sm:text-[1.55rem]">{c.seal.top}</span>
            <span className="mt-1 text-[0.62rem] leading-tight font-bold tracking-[0.02em] uppercase">{c.seal.bottom}</span>
          </div>
          <Headline id="investimento-title" text={investment.title} className="text-[clamp(1.6rem,1.2rem+1.4vw,2.2rem)]" />
          <p className="mt-3 text-[0.95rem] text-ink/65">{investment.text}</p>

          {/* Preço atual */}
          <div className="mt-7 overflow-hidden rounded-[18px] border-2 border-blue/25">
            <p className="bg-navy px-4 py-2 text-[0.75rem] font-bold tracking-[0.05em] text-white uppercase">
              {c.tag} · {c.condition}
            </p>
            <div className="grid sm:grid-cols-2">
              <div className="p-5">
                <p className="flex items-center justify-center gap-2 text-[0.8rem] font-semibold text-ink/60">
                  <Receipt aria-hidden className="size-4 text-blue" /> Boleto
                </p>
                <p className="mt-1 flex items-start justify-center leading-none text-ink">
                  <span className="mt-2.5 mr-1 text-[1.2rem] font-bold text-blue">{c.currency}</span>
                  <span className="text-[clamp(3.2rem,2.4rem+3.6vw,4.4rem)] font-extrabold tracking-[-0.04em]">{c.price}</span>
                </p>
                <p className="mt-1 text-[0.88rem] text-ink/65">{c.priceNote}</p>
              </div>
              <div className="border-t border-line bg-signal p-5 sm:border-t-0 sm:border-l">
                <p className="flex items-center justify-center gap-2 text-[0.8rem] font-semibold text-navy">
                  <CreditCard aria-hidden className="size-4" /> {c.card.label}
                </p>
                <p className="mt-1 text-[clamp(2.4rem,1.9rem+2.4vw,3.2rem)] leading-none font-extrabold tracking-[-0.03em] text-navy">
                  {c.card.value}
                </p>
                <p className="mt-2 text-[0.88rem] font-medium text-navy">{c.card.note}</p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3">
            <Cta kind="registration" className="w-full !min-h-16">
              {ctaLabels.registration}
            </Cta>
            <Cta kind="whatsapp" variant="blue" className="w-full !min-h-16">
              {ctaLabels.whatsapp}
            </Cta>
          </div>

          {/* Prazo e valores de 2027 */}
          <div className="mt-6 rounded-2xl bg-mist p-4 text-left text-[0.9rem] leading-relaxed text-ink/75">
            <p className="flex gap-3">
              <CalendarClock aria-hidden className="mt-0.5 size-5 shrink-0 text-blue" />
              <span>
                <strong className="text-ink">{investment.deadline.strong}.</strong> {investment.cohortNote} {investment.deadline.text}
              </span>
            </p>
            <div className="mt-3 border-t border-line pt-3">
              <p className="text-[0.75rem] font-bold tracking-[0.05em] text-ink/55 uppercase">{c.future.label}</p>
              <dl className="mt-2 grid gap-2 sm:grid-cols-2">
                {c.future.rows.map((r) => (
                  <div key={r.method} className="rounded-xl bg-white px-3 py-2">
                    <dt className="text-[0.8rem] text-ink/60">{r.method}</dt>
                    <dd className="font-bold text-ink/75">
                      {r.value} <span className="text-[0.8rem] font-medium text-ink/60">{r.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <p className="mt-4 text-[0.75rem] leading-relaxed text-ink/50">{investment.footnote}</p>
        </div>
      </div>
    </section>
  );
}
