import { CalendarCheck2, CalendarClock, Moon, Sun } from "lucide-react";
import { schedule } from "@/content/course";
import { Headline } from "../ui/Headline";
import { SectionHead } from "../ui/SectionHead";

/** Turmas: cartões com as datas + quadro de horários (tabela real) dentro de um card. */
export function Schedule() {
  const { morning, night, weekdays } = schedule;
  const rows = [
    { group: morning.eyebrow, ...morning.weeks[0] },
    { group: morning.eyebrow, ...morning.weeks[1] },
    { group: night.eyebrow, ...night.weeks[0] },
  ];

  return (
    <section id="turmas" aria-labelledby="turmas-title" data-tone="yellow" className="bg-signal py-20 sm:py-24">
      <div className="wrap">
        <SectionHead id="turmas-title" title={schedule.title} lead={schedule.lead} />

        {/* Datas das turmas */}
        <dl className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {schedule.cohorts.map((c, i) => {
            const first = i === 0;
            const Icon = first ? CalendarClock : CalendarCheck2;
            return (
              <div
                key={c.label}
                data-tone={first ? "dark" : undefined}
                className={`relative flex items-center gap-5 overflow-hidden rounded-[22px] p-6 sm:p-7 ${
                  first ? "bg-navy text-white shadow-[var(--shadow-card)]" : "card"
                }`}
              >
                <span className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${first ? "bg-signal text-ink" : "bg-navy text-white"}`}>
                  <Icon aria-hidden className="size-7" />
                </span>
                <div>
                  <dt className={`text-[0.75rem] font-bold tracking-[0.05em] uppercase ${first ? "text-sky" : "text-ink/55"}`}>{c.label}</dt>
                  <dd className="text-[1.9rem] leading-tight font-extrabold">
                    {c.month} {c.year && <span className={first ? "text-sky" : "text-blue"}>{c.year}</span>}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>

        {/* Quadro de horários */}
        <div data-tone="light" className="card mx-auto mt-6 max-w-4xl p-4 sm:p-8">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Dias de aula de cada turma</caption>
            <thead>
              <tr className="text-[0.72rem] font-bold tracking-[0.05em] text-ink/50 uppercase">
                <th scope="col" className="pb-3">
                  <span className="sr-only">Turma</span>
                </th>
                {weekdays.map((d) => (
                  <th key={d} scope="col" className="w-[11%] pb-3 text-center text-[0.62rem] sm:text-[0.72rem]">
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
                    <th scope="row" className="py-4 pr-3 align-middle font-normal">
                      <span className="flex items-center gap-2 text-[0.95rem] font-bold sm:text-[1rem]">
                        <Icon aria-hidden className="hidden size-4 shrink-0 text-blue sm:block" />
                        {r.group}
                      </span>
                      <span className="mt-0.5 block text-[0.78rem] text-ink/55">{r.label}</span>
                    </th>
                    {weekdays.map((d, i) => {
                      const on = r.active.includes(i);
                      return (
                        <td key={d} className="py-4 text-center align-middle">
                          <span
                            className={`inline-block size-6 rounded-md align-middle sm:size-9 sm:rounded-lg ${
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

          <div className="mt-6 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
            {[morning, night].map((t) => (
              <div key={t.eyebrow}>
                <Headline as="h3" text={t.title} className="text-[1.15rem] leading-snug" />
                <p className="mt-2 text-[0.92rem] text-ink/65">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
