import { commercial as c } from "@/content/course";
import { site } from "@/content/site";

/** Frases da faixa — todas já presentes na página. */
const phrases = [
  site.slogan.replace(/\.$/, ""),
  `APH Presencial · ${c.hours}`,
  `${c.lessons} aulas · ${c.simulations} simulados`,
  "Turmas de manhã e à noite",
  `Matrícula até ${c.deadlineShort} sem reajuste`,
];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {phrases.map((p) => (
        <li key={p} className="flex items-center">
          <span className="px-7 text-[0.85rem] font-extrabold tracking-[0.22em] whitespace-nowrap uppercase sm:px-9 sm:text-[0.95rem]">
            {p}
          </span>
          <span aria-hidden className="size-2 shrink-0 rounded-full bg-alert" />
        </li>
      ))}
    </ul>
  );
}

/**
 * Faixa divisória com frases em esteira, da esquerda para a direita.
 * Com "reduzir movimento" ativo no sistema, a faixa fica parada.
 */
export function Marquee() {
  return (
    <section aria-hidden data-tone="dark" className="overflow-hidden bg-navy py-3 text-white sm:py-3.5">
      <div className="marquee flex w-max">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
