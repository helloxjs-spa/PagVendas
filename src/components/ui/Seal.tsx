import { investment } from "@/content/course";

/** Selo vermelho redondo "Sem reajuste até 31/12" (usado na capa e no investimento). */
export function Seal({ className = "" }: { className?: string }) {
  const { top, bottom } = investment.card.seal;
  return (
    <div
      aria-hidden
      className={`flex size-24 rotate-12 flex-col items-center justify-center rounded-full bg-alert px-2 text-center text-white ring-4 ring-white shadow-[0_12px_24px_rgba(181,29,49,0.35)] sm:size-28 ${className}`}
    >
      <span className="text-[1.35rem] leading-none font-extrabold sm:text-[1.55rem]">{top}</span>
      <span className="mt-1 text-[0.62rem] leading-tight font-bold tracking-[0.02em] uppercase">{bottom}</span>
    </div>
  );
}
