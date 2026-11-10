"use client";

import { useEffect, useRef, useState } from "react";
import { Ambulance, HeartPulse, MessagesSquare, ShieldCheck } from "lucide-react";
import { methodology } from "@/content/course";
import { Headline } from "../ui/Headline";
import { HeroLedger } from "./Hero";

/**
 * Seção 2 — "Por que o APH EDASI é diferente?": metodologia APH 360° em quatro pilares.
 * Ao passar o cursor sobre um card, o fundo da seção assume a cor dele.
 * Em telas de toque, o card que chega ao centro da tela assume esse papel.
 */
const cards = [
  { icon: HeartPulse, card: "bg-navy text-white", iconColor: "text-sky", body: "text-white/75", tone: "dark" },
  { icon: Ambulance, card: "bg-signal text-navy", iconColor: "text-alert", body: "text-navy/80", tone: "yellow" },
  { icon: MessagesSquare, card: "bg-white text-navy ring-1 ring-line ring-inset", iconColor: "text-blue", body: "text-navy/70", tone: "light" },
  { icon: ShieldCheck, card: "bg-navy text-white", iconColor: "text-sky", body: "text-white/75", tone: "dark" },
] as const;

const sectionTone = [
  { bg: "bg-navy", text: "text-white", tone: "dark" },
  { bg: "bg-signal", text: "text-navy", tone: "yellow" },
  { bg: "bg-white", text: "text-navy", tone: "light" },
  { bg: "bg-navy", text: "text-white", tone: "dark" },
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
      className={`flow-root pb-10 transition-colors duration-500 ease-[var(--ease-out-quint)] sm:pb-12 ${tone.bg} ${tone.text}`}
    >
      <HeroLedger />
      <div className="wrap">
        <div className="mx-auto mt-14 max-w-3xl text-center sm:mt-16">
          <Headline id="programa-title" text={methodology.title} className="section-title" />
          <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed opacity-75">{methodology.lead}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" onMouseLeave={() => setActive(null)}>
          {methodology.pillars.map((p, i) => {
            const c = cards[i];
            const Icon = c.icon;
            return (
              <li
                key={p.title}
                ref={(el) => {
                  items.current[i] = el;
                }}
                onMouseEnter={() => setActive(i)}
                data-tone={c.tone}
                className={`flex gap-4 rounded-[22px] p-6 transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-quint)] sm:flex-col sm:p-7 ${c.card} ${
                  active === i ? "-translate-y-1.5 shadow-[0_24px_50px_rgba(8,27,52,0.22)]" : "shadow-[0_10px_26px_rgba(8,27,52,0.08)]"
                }`}
              >
                <Icon aria-hidden className={`size-8 shrink-0 sm:size-9 ${c.iconColor}`} strokeWidth={2} />
                <div>
                  <h3 className="text-[1.3rem] leading-[1.1] font-extrabold tracking-[-0.02em] sm:mt-6 sm:text-[1.55rem]">{p.title}</h3>
                  <p className={`mt-2 text-[0.98rem] leading-relaxed ${c.body}`}>{p.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
