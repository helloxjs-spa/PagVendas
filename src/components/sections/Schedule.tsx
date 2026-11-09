import { CalendarCheck2, CalendarClock, Moon, Sun, type LucideIcon } from "lucide-react";
import { schedule } from "@/content/course";
import { Headline } from "../ui/Headline";

type Shift = (typeof schedule)["morning"] | (typeof schedule)["night"];

/** Dias da semana como etiquetas: o dia de aula fica preenchido, os outros apagados. */
function DayChips({ active }: { active: number[] }) {
  return (
    <span aria-hidden className="flex gap-1.5">
      {schedule.weekdays.map((d, i) => {
        const on = active.includes(i);
        return (
          <span
            key={d}
            className={`flex h-9 w-10 items-center justify-center rounded-lg text-[0.72rem] font-bold tracking-[0.04em] uppercase sm:w-12 ${
              on ? "bg-navy text-white shadow-[0_6px_14px_rgba(8,27,52,0.25)]" : "bg-mist text-ink/30 ring-1 ring-line ring-inset"
            }`}
          >
            {d}
          </span>
        );
      })}
    </span>
  );
}

/** Um cartão por turno: nome, resumo e os dias de aula escritos por extenso. */
function ShiftCard({ shift, icon: Icon }: { shift: Shift; icon: LucideIcon }) {
  return (
    <article data-tone="light" className="card p-5 sm:p-6">
      <header className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-signal text-ink">
          <Icon aria-hidden className="size-5" />
        </span>
        <h3 className="text-[1.2rem] font-extrabold text-ink">{shift.eyebrow}</h3>
        <span className="rounded-full bg-mist px-3 py-1 text-[0.72rem] font-bold tracking-[0.04em] text-ink/70 uppercase ring-1 ring-line ring-inset">
          {shift.summary}
        </span>
      </header>

      <ul className="mt-4 divide-y divide-line border-y border-line">
        {shift.weeks.map((w) => (
          <li key={w.label} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <span>
              <span className="block text-[0.7rem] font-bold tracking-[0.05em] text-ink/50 uppercase">{w.label}</span>
              <span className="block text-[1.05rem] font-bold text-ink">{w.days}</span>
            </span>
            <DayChips active={w.active} />
          </li>
        ))}
      </ul>

      <p className="mt-3 text-[0.86rem] leading-snug text-ink/65">{shift.text}</p>
    </article>
  );
}

/**
 * Turmas: título + datas das turmas à esquerda e um cartão por turno à direita,
 * com os dias de aula escritos por extenso. No celular, tudo empilha.
 */
export function Schedule() {
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

        {/* Turnos */}
        <div>
          <p className="mb-3 text-center text-[0.78rem] font-extrabold tracking-[0.12em] text-ink/70 uppercase lg:text-left">
            {schedule.shiftsTitle}
          </p>
          <div className="grid gap-4">
            <ShiftCard shift={schedule.morning} icon={Sun} />
            <ShiftCard shift={schedule.night} icon={Moon} />
          </div>
        </div>
      </div>
    </section>
  );
}
