import { commercial as c } from "@/content/course";
import { site } from "@/content/site";

/** Frases da faixa padrão (azul) — todas já presentes na página. */
const defaultPhrases = [
  site.slogan.replace(/\.$/, ""),
  `APH Presencial · ${c.hours}`,
  `${c.lessons} aulas · ${c.simulations} simulados`,
  "Turmas de manhã e à noite",
  `Matrícula até ${c.deadlineShort} sem reajuste`,
];

const tones = {
  navy: { band: "bg-navy", dot: "bg-alert" },
  red: { band: "bg-alert", dot: "bg-signal" },
};

type Props = {
  phrases?: string[];
  tone?: keyof typeof tones;
};

function Track({ phrases, dot, hidden = false }: { phrases: string[]; dot: string; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {phrases.map((p) => (
        <li key={p} className="flex items-center">
          <span className="px-7 text-[0.85rem] font-extrabold tracking-[0.22em] whitespace-nowrap uppercase sm:px-9 sm:text-[0.95rem]">
            {p}
          </span>
          <span aria-hidden className={`size-2 shrink-0 rounded-full ${dot}`} />
        </li>
      ))}
    </ul>
  );
}

/**
 * Faixa divisória com frases em esteira, da esquerda para a direita.
 * Com "reduzir movimento" ativo no sistema, a faixa fica parada.
 */
export function Marquee({ phrases = defaultPhrases, tone = "navy" }: Props) {
  const { band, dot } = tones[tone];
  return (
    <section aria-hidden data-tone="dark" className={`overflow-hidden py-3 text-white sm:py-3.5 ${band}`}>
      <div className="marquee flex w-max">
        <Track phrases={phrases} dot={dot} />
        <Track phrases={phrases} dot={dot} hidden />
      </div>
    </section>
  );
}
