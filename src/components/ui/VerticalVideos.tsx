"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, LoaderCircle, Pause, Play, Quote } from "lucide-react";
import type { StudentVideo } from "@/content/media";

/**
 * Depoimentos em vídeo: cards com capa, frase sobreposta e nome.
 * Vídeos hospedados no próprio site (public/videos). A página carrega só as capas; o vídeo
 * só começa a baixar no clique e toca dentro do card, no mesmo tamanho da capa.
 * Só um vídeo toca por vez. Setas e bolinhas aparecem quando os cards não cabem na tela.
 */
export function VerticalVideos({ items }: { items: StudentVideo[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [overflow, setOverflow] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);

  const step = () => {
    const el = listRef.current;
    const li = el?.querySelector("li");
    return el && li ? li.clientWidth + parseFloat(getComputedStyle(el).columnGap || "0") : 300;
  };

  const sync = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setOverflow(el.scrollWidth > el.clientWidth + 4);
    setActive(Math.min(items.length - 1, Math.round(el.scrollLeft / step())));
  }, [items.length]);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const goTo = (i: number) => listRef.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  const arrow =
    "absolute top-[11rem] z-10 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-navy shadow-[0_6px_20px_rgba(8,27,52,0.15)] transition hover:scale-105 disabled:pointer-events-none disabled:opacity-0 sm:flex";

  return (
    <div className="relative mx-auto max-w-[61rem]" data-reveal>
      {overflow && (
        <>
          <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Depoimento anterior" className={`${arrow} -left-3 lg:-left-6`}>
            <ChevronLeft aria-hidden className="size-5" />
          </button>
          <button type="button" onClick={() => goTo(active + 1)} disabled={active >= items.length - 1} aria-label="Próximo depoimento" className={`${arrow} -right-3 lg:-right-6`}>
            <ChevronRight aria-hidden className="size-5" />
          </button>
        </>
      )}

      <ul
        ref={listRef}
        onScroll={sync}
        aria-label="Depoimentos em vídeo"
        className="-mx-5 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto scroll-smooth px-5 pt-1 pb-6 sm:-mx-8 sm:px-8 md:mx-0 md:gap-7 md:px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <li key={item.name} className="w-[80%] max-w-[19rem] shrink-0 snap-center md:w-[calc((100%-3.5rem)/3)] md:max-w-none">
            <Card item={item} active={playing === i} onStart={() => setPlaying(i)} />
          </li>
        ))}
      </ul>

      {overflow && (
        <div className="mt-1 flex justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para o depoimento de ${item.name}`}
              aria-current={i === active}
              className={`h-2 cursor-pointer rounded-full transition-all ${i === active ? "w-5 bg-navy" : "w-2 bg-navy/20 hover:bg-navy/40"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * A caixa da frase usa unidades do card (cqw): fonte e espaçamentos crescem junto com ele,
 * então a quebra de linha é a mesma em qualquer tela. A área de texto fica com ~18× o tamanho
 * da fonte — com Poppins 500, isso dá 3 linhas (Rosana), 2 (Esmeralda) e 1 (Silvana);
 * a faixa que mantém essa contagem vai de 15,5× a 21×.
 *
 * Player: sem controles do navegador. Toque/clique em qualquer ponto do vídeo toca ou pausa;
 * o único elemento na tela é o botão central (play parado; pause aparece por instantes e no hover).
 */
function Card({ item, active, onStart }: { item: StudentVideo; active: boolean; onStart: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hintTimer = useRef<number | undefined>(undefined);
  const [started, setStarted] = useState(false); // já clicou em play alguma vez
  const [rolling, setRolling] = useState(false); // primeiro quadro já na tela
  const [paused, setPaused] = useState(true);
  const [hint, setHint] = useState(false);

  // Outro depoimento começou: pausa este.
  useEffect(() => {
    if (!active) videoRef.current?.pause();
  }, [active]);

  useEffect(() => () => window.clearTimeout(hintTimer.current), []);

  const flash = () => {
    setHint(true);
    window.clearTimeout(hintTimer.current);
    hintTimer.current = window.setTimeout(() => setHint(false), 1400);
  };

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      onStart();
      setStarted(true);
      void v.play();
    } else {
      v.pause();
    }
    flash();
  };

  const objectPosition = `50% ${(item.focus ?? 0.15) * 100}%`;
  const loading = started && !rolling;

  return (
    <figure className="@container overflow-hidden rounded-[20px] bg-white shadow-[0_14px_36px_rgba(8,27,52,0.12)]">
      <div className="relative">
        <div className="relative aspect-[6/7] w-full overflow-hidden bg-navy">
          <video
            ref={videoRef}
            src={item.src}
            preload="none"
            playsInline
            className="absolute inset-0 size-full object-cover"
            style={{ objectPosition }}
            onPlaying={() => setRolling(true)}
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              setStarted(false);
              setRolling(false);
            }}
          />
          {/* Capa (carrega só quando o card se aproxima da tela) — some quando o vídeo começa */}
          {!rolling && (
            <Image src={item.poster} alt="" fill sizes="(min-width: 768px) 19rem, 80vw" className="object-cover" style={{ objectPosition }} />
          )}

          <button
            type="button"
            onClick={toggle}
            className="group absolute inset-0 cursor-pointer"
            aria-label={paused ? `Assistir ao depoimento de ${item.name}` : `Pausar o depoimento de ${item.name}`}
          >
            <span
              className={`absolute left-1/2 flex size-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-navy/35 text-white backdrop-blur-[2px] transition duration-300 group-hover:scale-110 group-hover:bg-navy/55 ${
                started && !paused && !loading && !hint ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              } ${started ? "top-1/2" : "top-[40%]"}`}
            >
              {loading ? (
                <LoaderCircle aria-hidden className="size-6 animate-spin" />
              ) : paused ? (
                <Play aria-hidden className="ml-0.5 size-5 fill-current" />
              ) : (
                <Pause aria-hidden className="size-5 fill-current" />
              )}
            </span>
          </button>
        </div>

        {/* Frase em caixa branca sobreposta à base da capa (some depois do primeiro play) */}
        {!started && (
          <blockquote className="pointer-events-none absolute inset-x-[2.5cqw] bottom-0 flex translate-y-1.5 items-start gap-[2cqw] rounded-2xl bg-white px-[3.5cqw] py-[3cqw] shadow-[0_4px_14px_rgba(8,27,52,0.08)]">
            <Quote aria-hidden className="mt-[0.4cqw] size-[6cqw] shrink-0 fill-signal text-signal" />
            <p className="flex-1 text-center text-[4.44cqw] leading-snug font-medium text-navy">“{item.quote}”</p>
          </blockquote>
        )}
      </div>

      <figcaption className="px-4 pt-5 pb-4">
        <span className="block border-l-[3px] border-signal pl-3 leading-tight">
          <span className="block text-[0.95rem] font-bold text-navy">{item.name}</span>
          <span className="mt-0.5 block text-[0.75rem] text-ink/55">{item.role ?? "Aluna EDASI"}</span>
        </span>
      </figcaption>
    </figure>
  );
}
