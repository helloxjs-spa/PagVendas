import { CalendarDays, Clock, GraduationCap, ListChecks, MapPin, Repeat, Sunrise } from "lucide-react";
import { ctaLabels, faq, schedule } from "@/content/course";
import { site } from "@/content/site";
import { Cta } from "../ui/Cta";
import { Headline } from "../ui/Headline";

/**
 * Perguntas frequentes ao lado de um resumo do curso (como "documentos + dúvidas" da referência).
 * O resumo só reúne dados já presentes na página.
 */
export function Faq() {
  const summary = [
    { icon: Clock, label: "Duração", value: "4 meses" },
    { icon: Repeat, label: "Frequência", value: "2 vezes por semana" },
    { icon: Sunrise, label: "Turmas", value: `${schedule.morning.eyebrow} e ${schedule.night.eyebrow.toLowerCase()}` },
    { icon: CalendarDays, label: "Próximas turmas", value: `${schedule.cohorts[0].month} e ${schedule.cohorts[1].month.toLowerCase()}/${schedule.cohorts[1].year}` },
    { icon: MapPin, label: "Local", value: `${site.address.city} · ${site.address.state}` },
    { icon: GraduationCap, label: "Carga horária", value: "240 horas" },
    { icon: ListChecks, label: "Aulas", value: "30, incluindo 2 simulados" },
  ];

  return (
    <section id="perguntas" aria-labelledby="faq-title" className="bg-[linear-gradient(180deg,#f4f8fd_0%,#ebf2fc_100%)] py-20 sm:py-24">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="pill border-blue/30 bg-blue/5 text-blue">{faq.eyebrow}</p>
          <Headline id="faq-title" text={faq.title} className="section-title mt-5 [&_br]:hidden" />
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Resumo do curso */}
          <aside aria-labelledby="resumo-title" className="card overflow-hidden lg:sticky lg:top-24">
            <div className="border-b border-line bg-[linear-gradient(180deg,#fff,#f6f9ff)] p-6">
              <h3 id="resumo-title" className="text-[1.3rem] font-extrabold text-blue-dark">
                Resumo do curso
              </h3>
            </div>
            <dl className="grid gap-3 p-6">
              {summary.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-line bg-mist p-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue text-white">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <div>
                    <dt className="text-[0.72rem] font-bold tracking-[0.04em] text-ink/55 uppercase">{label}</dt>
                    <dd className="font-bold text-ink">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="px-6 pb-6">
              <Cta kind="registration" className="w-full">
                {ctaLabels.registration}
              </Cta>
            </div>
          </aside>

          {/* Perguntas */}
          <div className="card overflow-hidden">
            <div className="grid gap-3 p-4 sm:p-6">
              {faq.items.map((item, i) => (
                <details key={item.q} open={i === 0} className="group rounded-2xl border border-line bg-white shadow-[0_8px_18px_rgba(15,33,84,0.05)]">
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
                    <span className="flex-1 text-[0.98rem] leading-snug font-bold">{item.q}</span>
                    <span
                      aria-hidden
                      className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-blue before:absolute before:h-[2px] before:w-3.5 before:bg-white after:absolute after:h-3.5 after:w-[2px] after:bg-white after:transition-transform after:duration-300 group-open:after:scale-y-0"
                    />
                  </summary>
                  <p className="px-4 pb-5 text-[0.94rem] leading-relaxed text-ink/70 sm:px-5">{item.a}</p>
                </details>
              ))}
            </div>
            <div className="px-4 pb-6 sm:px-6">
              <Cta kind="whatsapp" variant="blue" className="w-full">
                {ctaLabels.whatsapp}
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
