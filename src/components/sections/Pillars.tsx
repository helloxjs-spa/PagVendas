"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CircleDot, Plus } from "lucide-react";
import { presentation } from "@/content/course";
import { Headline } from "../ui/Headline";
import { HeroLedger } from "./Hero";

/**
 * Apresentação do curso: três cards (azul, amarelo, branco).
 * Ao passar o cursor sobre um card, o fundo da seção assume a cor dele.
 * Em telas de toque, o card que chega ao centro da tela assume esse papel.
 */
const cards = [
  { icon: ArrowUpRight, card: "bg-navy text-white", num: "text-sky", iconColor: "text-sky", body: "text-white/75" },
  { icon: Plus, card: "bg-signal text-navy", num: "text-navy/70", iconColor: "text-navy", body: "text-navy/80" },
  { icon: CircleDot, card: "bg-white text-navy ring-1 ring-line ring-inset", num: "text-navy/60", iconColor: "text-navy", body: "text-navy/70" },
];

const sectionTone = [
  { bg: "bg-navy", text: "text-white", tone: "dark" },
  { bg: "bg-signal", text: "text-navy", tone: "yellow" },
  { bg: "bg-white", text: "text-navy", tone: "light" },
] as const;

export function Pillars() {
  const [active, setActive] = useState<number | null>(null);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  // Toque: ativa o card que estiver no centro da tela
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const i = items.current.indexOf(e.target as HTMLLIElement);
          if (e.isIntersecting) setActive(i);
          else setActive((cur) => (cur === i ? null : cur));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const tone = active === null ? sectionTone[2] : sectionTone[active];

  return (
    <section
      id="programa"
      aria-labelledby="programa-title"
      data-tone={tone.tone}
      className={`flow-root pb-20 transition-colors duration-500 ease-[var(--ease-out-quint)] sm:pb-24 ${tone.bg} ${tone.text}`}
    >
      <HeroLedger />
      <div className="wrap">
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <Headline id="programa-title" text={presentation.title} className="section-title" />
          <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed opacity-75">{presentation.lead}</p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3" onMouseLeave={() => setActive(null)}>
          {presentation.pillars.map((p, i) => {
            const c = cards[i];
            const Icon = c.icon;
            return (
              <li
                key={p.title}
                ref={(el) => {
                  items.current[i] = el;
                }}
                onMouseEnter={() => setActive(i)}
                data-tone={i === 0 ? "dark" : i === 1 ? "yellow" : "light"}
                className={`flex min-h-[22rem] flex-col rounded-[24px] p-8 transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-quint)] sm:p-9 ${c.card} ${
                  active === i ? "-translate-y-1.5 shadow-[0_24px_50px_rgba(8,27,52,0.22)]" : "shadow-[0_10px_26px_rgba(8,27,52,0.08)]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className={`font-mono text-[0.85rem] font-semibold ${c.num}`}>{String(i + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden className={`size-9 ${c.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="mt-auto pt-14 text-[clamp(1.7rem,1.3rem+1.2vw,2.3rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className={`mt-4 text-[0.98rem] leading-relaxed ${c.body}`}>{p.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
