"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Carrossel horizontal com setas redondas laterais; arraste/toque no celular. */
export function Carousel({ children, label }: { children: React.ReactNode; label: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const move = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const item = el.querySelector("li");
    el.scrollBy({ left: dir * ((item?.clientWidth ?? 300) + 18), behavior: "smooth" });
  };
  const arrow =
    "absolute top-1/2 z-10 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-blue text-white shadow-lg transition hover:scale-105 hover:bg-blue-dark sm:flex";

  return (
    <div className="relative">
      <button type="button" onClick={() => move(-1)} aria-label="Fotos anteriores" className={`${arrow} -left-2 lg:-left-6`}>
        <ChevronLeft aria-hidden className="size-6" />
      </button>
      <ul
        ref={ref}
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto scroll-smooth px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
      <button type="button" onClick={() => move(1)} aria-label="Próximas fotos" className={`${arrow} -right-2 lg:-right-6`}>
        <ChevronRight aria-hidden className="size-6" />
      </button>
    </div>
  );
}
