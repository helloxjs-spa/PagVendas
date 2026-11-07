"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import type { VideoSlot } from "@/content/media";

type Props = { items: VideoSlot[]; reviewMode: boolean };

/** Player arredondado + capítulos em cartões. YouTube só carrega após o clique. */
export function CinemaPlayer({ items, reviewMode }: Props) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = items[active];

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_20rem]">
      <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-navy shadow-[var(--shadow-card)]">
        {current.video ? (
          <Stage slot={current} playing={playing} onPlay={() => setPlaying(true)} />
        ) : (
          <div
            className="plate absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-white"
            role="img"
            aria-label={`Vídeo pendente: ${current.title}. ${current.note}`}
          >
            <span aria-hidden className="flex size-16 items-center justify-center rounded-full bg-signal text-ink shadow-lg sm:size-20">
              <Play className="ml-1 size-7 fill-current" />
            </span>
            <span className="text-[1.2rem] font-bold sm:text-[1.6rem]">{current.title}</span>
            {reviewMode && (
              <span className="rounded-full bg-white/95 px-4 py-1.5 text-[0.72rem] font-semibold text-ink">
                Vídeo pendente · {current.note}
              </span>
            )}
          </div>
        )}
      </div>

      <div role="group" aria-label="Vídeos" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
        {items.map((item, i) => {
          const on = i === active;
          return (
            <button
              key={item.title}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setActive(i);
                setPlaying(false);
              }}
              className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 text-left transition ${
                on ? "border-sky bg-white text-ink shadow-lg" : "border-white/15 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-full text-[0.95rem] font-bold ${
                  on ? "bg-signal text-ink" : "bg-white/10 text-white"
                }`}
              >
                {i + 1}
              </span>
              <span className="text-[0.95rem] leading-snug font-semibold">{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Stage({ slot, playing, onPlay }: { slot: VideoSlot; playing: boolean; onPlay: () => void }) {
  const v = slot.video!;
  if (v.kind === "file") {
    return <video key={v.src} className="absolute inset-0 size-full object-cover" src={v.src} poster={v.poster} controls preload="none" playsInline />;
  }
  if (v.kind === "embed") {
    return <iframe key={v.src} src={v.src} title={slot.title} className="absolute inset-0 size-full" loading="lazy" allow="encrypted-media; picture-in-picture" allowFullScreen />;
  }
  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
        title={slot.title}
        className="absolute inset-0 size-full"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <button type="button" onClick={onPlay} className="group absolute inset-0 cursor-pointer" aria-label={`Assistir: ${slot.title}`}>
      <Image src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
      <span className="absolute inset-0 bg-navy/30 transition-colors group-hover:bg-navy/10" />
      <span className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-signal text-ink shadow-lg">
        <Play aria-hidden className="ml-1 size-7 fill-current" />
      </span>
    </button>
  );
}
