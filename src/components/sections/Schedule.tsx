import { CalendarCheck2, CalendarClock, Moon, Sun } from "lucide-react";
import { schedule } from "@/content/course";
import { Headline } from "../ui/Headline";

/**
 * Turmas: título + datas das turmas à esquerda e quadro de horários (tabela real) à direita.
 * No celular, tudo empilha em versão compacta.
 */
export function Schedule() {
  const { morning, night, weekdays } = schedule;
  const rows = [
    { group: morning.eyebrow, ...morning.weeks[0] },
    { group: morning.eyebrow, ...morning.weeks[1] },
    { group: night.eyebrow, ...night.weeks[0] },
  ];

  return (
    <section id="turmas" aria-labelledby="turmas-title" data-tone="yellow" className="bg-signal py-16 sm:py-20">
      <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <Headline id="turmas-title" text={schedule.title} className="section-title text-ink lg:!text-[2.35rem]" />
          <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink/65 lg:mx-0">{schedule.lead}</p>

          {/* Datas das turmas */}
          <dl className="mt-7 grid grid-cols-2 gap-3 text-left">
            {schedule.cohorts.map((c, i) => {
              const first = i === 0;
              const Icon = first ? CalendarClock : CalendarCheck2;
              return (
                <div
                  key={c.label}
                  data-tone={first ? "dark" : undefined}
                  className={`flex items-center gap-3 rounded-[18px] p-4 sm:gap-4 sm:p-5 ${
                    first ? "bg-navy text-white shadow-[var(--shadow-card)]" : "card"
                  }`}
                >
                  <span className={`hidden size-11 shrink-0 items-center justify-center rounded-xl xs:flex ${first ? "bg-signal text-ink" : "bg-navy text-white"}`}>
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <dt className={`flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.05em] uppercase ${first ? "text-sky" : "text-ink/55"}`}>
                      {first && <span aria-hidden className="live-dot" />}
                      {c.label}
                    </dt>
                    <dd className="text-[1.4rem] leading-tight font-extrabold sm:text-[1.6rem]">
                      {c.month} {c.year && <span className={first ? "text-sky" : "text-blue"}>{c.year}</span>}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>

        {/* Quadro de horários */}
        <div data-tone="light" className="card p-4 sm:p-6">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Dias de aula de cada turma</caption>
            <thead>
              <tr className="text-[0.62rem] font-bold tracking-[0.05em] text-ink/50 uppercase sm:text-[0.7rem]">
                <th scope="col" className="pb-2">
                  <span className="sr-only">Turma</span>
                </th>
                {weekdays.map((d) => (
                  <th key={d} scope="col" className="w-[11%] pb-2 text-center">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const Icon = r.group === night.eyebrow ? Moon : Sun;
                return (
                  <tr key={r.group + r.label} className="border-t border-line">
                    <th scope="row" className="py-3 pr-3 align-middle font-normal">
                      <span className="flex items-center gap-2 text-[0.92rem] font-bold sm:text-[0.98rem]">
                        <Icon aria-hidden className="hidden size-4 shrink-0 text-blue sm:block" />
                        {r.group}
                      </span>
                      <span className="block text-[0.76rem] text-ink/55">{r.label}</span>
                    </th>
                    {weekdays.map((d, i) => {
                      const on = r.active.includes(i);
                      return (
                        <td key={d} className="py-3 text-center align-middle">
                          <span
                            className={`inline-block size-6 rounded-md align-middle sm:size-8 sm:rounded-lg ${
                              on ? "bg-navy shadow-[0_6px_14px_rgba(8,27,52,0.3)]" : "bg-mist ring-1 ring-line ring-inset"
                            }`}
                          >
                            <span className="sr-only">{on ? "aula" : "sem aula"}</span>
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Observações curtas */}
          <ul className="mt-3 grid gap-2 border-t border-line pt-4 text-[0.84rem] leading-snug text-ink/65 sm:grid-cols-2 sm:gap-4">
            {[
              { icon: Sun, t: morning },
              { icon: Moon, t: night },
            ].map(({ icon: Icon, t }) => (
              <li key={t.eyebrow} className="flex gap-2">
                <Icon aria-hidden className="mt-0.5 size-4 shrink-0 text-alert" />
                <span>
                  <strong className="text-ink">{t.eyebrow}:</strong> {t.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
