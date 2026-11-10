"use client";

import { ArrowUpRight, CalendarDays, ClipboardCheck, ShieldCheck } from "lucide-react";
import { ctaLabels, leadForm } from "@/content/course";
import { pendingMessage, registrationHref, whatsappHref } from "@/content/site";
import { Headline } from "../ui/Headline";
import { showToast } from "../ui/Toaster";
import { WhatsAppGlyph } from "../ui/WhatsAppGlyph";

type TileProps = {
  href: string | null;
  className: string;
  children: React.ReactNode;
};

/** Cartão inteiro clicável; sem destino configurado, avisa em vez de inventar link. */
function Tile({ href, className, children }: TileProps) {
  const base = `group relative flex h-full flex-col rounded-[22px] p-6 text-left transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-1 sm:p-7 ${className}`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={`${base} cursor-pointer`} onClick={() => showToast(pendingMessage)}>
      {children}
    </button>
  );
}

/**
 * Bloco de inscrição: faixa amarela com dois caminhos diretos —
 * pré-matrícula no portal ou conversa com um consultor no WhatsApp.
 */
export function LeadForm() {
  return (
    <section id="inscricao" aria-labelledby="inscricao-title" data-tone="yellow" className="bg-signal py-16 text-navy sm:py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <Headline id="inscricao-title" text={leadForm.title} className="section-title" />
          <p className="mt-4 max-w-md text-[1.02rem] text-navy/80">{leadForm.text}</p>

          <ul className="mt-6 flex flex-wrap gap-2.5 text-[0.88rem] font-semibold">
            <li className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <CalendarDays aria-hidden className="size-4" /> {leadForm.cohort}
            </li>
            <li className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <ShieldCheck aria-hidden className="size-4 text-alert" /> {leadForm.priceLock}
            </li>
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Tile href={registrationHref()} className="bg-navy text-white shadow-[0_24px_44px_rgba(8,27,52,0.3)] hover:shadow-[0_30px_54px_rgba(8,27,52,0.38)]">
            <span className="flex items-start justify-between">
              <span className="flex size-13 items-center justify-center rounded-2xl bg-signal text-navy">
                <ClipboardCheck aria-hidden className="size-6" />
              </span>
              <ArrowUpRight aria-hidden className="size-6 text-sky transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="mt-8 text-[1.3rem] leading-tight font-extrabold">{ctaLabels.quickRegistration}</span>
            <span className="mt-2 text-[0.92rem] leading-snug text-white/70">{leadForm.registrationText}</span>
          </Tile>

          <Tile href={whatsappHref()} className="bg-white text-navy shadow-[0_24px_44px_rgba(8,27,52,0.14)] hover:shadow-[0_30px_54px_rgba(8,27,52,0.2)]">
            <span className="flex items-start justify-between">
              <span className="flex size-13 items-center justify-center rounded-2xl bg-whatsapp text-white">
                <WhatsAppGlyph className="size-6" />
              </span>
              <ArrowUpRight aria-hidden className="size-6 text-navy/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="mt-8 text-[1.3rem] leading-tight font-extrabold">{ctaLabels.consultant}</span>
            <span className="mt-2 text-[0.92rem] leading-snug text-navy/65">{leadForm.consultantText}</span>
          </Tile>
        </div>
      </div>
    </section>
  );
}
