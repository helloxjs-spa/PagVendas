"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ctaLabels } from "@/content/course";
import { pendingMessage, registrationHref, site, whatsappHref } from "@/content/site";
import { showToast } from "./ui/Toaster";
import { WhatsAppGlyph } from "./ui/WhatsAppGlyph";

type ActionProps = { href: string | null; className: string; label?: string; children: React.ReactNode };

function Action({ href, className, label, children }: ActionProps) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={() => showToast(pendingMessage)} className={`${className} cursor-pointer`} aria-label={label}>
      {children}
    </button>
  );
}

/**
 * Celular: barra fixa com preço + inscrição + WhatsApp, visível depois da capa e oculta
 * quando investimento ou chamada final estão na tela. Desktop: WhatsApp flutuante.
 */
export function StickyActions() {
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const wa = whatsappHref();
  const reg = registrationHref();
  const showWhatsApp = Boolean(wa) || site.reviewMode;

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const blockers = ["investimento", "contato"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const visible = new Set<Element>();
    const heroObs = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting), { rootMargin: "0px 0px -60% 0px" });
    const blockObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setBlocked(visible.size > 0);
    });
    if (hero) heroObs.observe(hero);
    blockers.forEach((b) => blockObs.observe(b));
    return () => {
      heroObs.disconnect();
      blockObs.disconnect();
    };
  }, []);

  const shown = pastHero && !blocked;

  return (
    <>
      <div
        data-tone="dark"
        inert={!shown}
        className={`fixed inset-x-0 bottom-0 z-40 rounded-t-2xl bg-navy text-white shadow-[0_-10px_30px_rgba(0,0,0,0.2)] transition-transform duration-500 lg:hidden ${
          shown ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-2 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="min-w-0 flex-1 pl-1">
            <span className="block text-[0.65rem] font-semibold whitespace-nowrap text-white/60">Até 31/12/2026</span>
            <span className="block text-[1.1rem] leading-none font-extrabold whitespace-nowrap xs:text-[1.3rem]">R$ 1.400</span>
          </div>
          <Action href={reg} className="btn btn-signal !min-h-12 !gap-2 !px-3 !text-[0.72rem] xs:!px-4 xs:!text-[0.8rem]">
            {ctaLabels.registrationShort}
            <ArrowRight aria-hidden />
          </Action>
          {showWhatsApp && (
            <Action href={wa} label={ctaLabels.whatsapp} className="flex size-12 items-center justify-center rounded-[14px] bg-[#25D366] text-white">
              <WhatsAppGlyph className="size-6" />
            </Action>
          )}
        </div>
      </div>

      {showWhatsApp && (
        <div className="fixed right-6 bottom-6 z-40 hidden lg:block">
          <Action
            href={wa}
            label={ctaLabels.whatsapp}
            className="flex size-16 items-center justify-center rounded-full border-4 border-white bg-[#25D366] text-white shadow-[0_12px_26px_rgba(18,140,74,0.35)] transition-transform duration-300 hover:scale-105"
          >
            <WhatsAppGlyph className="size-8" />
          </Action>
        </div>
      )}
    </>
  );
}
