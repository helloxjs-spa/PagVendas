import { team } from "@/content/course";
import { teamMembers, teamSlots, type PhotoSlot } from "@/content/media";
import { site } from "@/content/site";
import { Frame } from "../ui/Frame";
import { Headline } from "../ui/Headline";

/** Mínimo de cartões por volta da esteira, para ela nunca "abrir buraco" em telas largas. */
const MIN_PER_LAP = 8;

function Card({ slot }: { slot: PhotoSlot }) {
  return (
    <figure className="relative w-[11.5rem] shrink-0 sm:w-[14.5rem]">
      <Frame
        slot={slot}
        sizes="(min-width: 640px) 232px, 184px"
        tag="none"
        className="aspect-[3/4] rounded-[22px] shadow-[0_10px_24px_rgba(8,27,52,0.14)]"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-[22px] bg-[linear-gradient(transparent,rgba(8,27,52,0.85))] px-4 pt-12 pb-4 text-white">
        <span className="block text-[1rem] leading-tight font-extrabold">{slot.label}</span>
        {slot.note && <span className="mt-0.5 block text-[0.82rem] leading-snug text-white/80">{slot.note}</span>}
      </figcaption>
    </figure>
  );
}

function Lap({ slots }: { slots: PhotoSlot[] }) {
  return (
    <ul className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5">
      {slots.map((slot, i) => (
        <li key={`${slot.code}-${i}`}>
          <Card slot={slot} />
        </li>
      ))}
    </ul>
  );
}

/**
 * "Com quem você vai aprender" — fotos dos instrutores (a maioria atua no SAMU) passando
 * em esteira infinita. Pausa ao passar o cursor; parada com "reduzir movimento".
 * Na versão pública, só aparece quando houver fotos reais.
 */
export function Team() {
  if (!site.reviewMode && teamMembers.length === 0) return null;

  // Repete a lista até preencher uma volta; a segunda volta (idêntica) fecha o loop.
  const copies = Math.ceil(MIN_PER_LAP / teamSlots.length);
  const lap = Array.from({ length: copies }, () => teamSlots).flat();
  const duration = `${lap.length * 5}s`;

  return (
    <section id="equipe" aria-labelledby="equipe-title" className="overflow-hidden border-t border-line bg-white pt-9 pb-16 sm:pt-11 sm:pb-20">
      <div className="wrap">
        <div className="mx-auto max-w-[54rem] text-center">
          <Headline id="equipe-title" text={team.title} className="section-title text-ink" />
          {/* Subtítulo mais largo que o padrão para caber em duas linhas no desktop */}
          <p className="mx-auto mt-4 text-[1.05rem] leading-relaxed text-ink/65">{team.lead}</p>
        </div>
      </div>

      <div aria-hidden className="mt-10 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee marquee-rtl flex w-max" style={{ animationDuration: duration }}>
          <Lap slots={lap} />
          <Lap slots={lap} />
        </div>
      </div>

      {/* Leitores de tela: a lista dos instrutores uma única vez, sem a repetição visual. */}
      <ul className="sr-only">
        {teamMembers.map((m) => (
          <li key={m.code}>
            {m.label}
            {m.note ? `, ${m.note}` : ""}
          </li>
        ))}
      </ul>
    </section>
  );
}
