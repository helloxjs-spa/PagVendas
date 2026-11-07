"use client";

import { ArrowRight } from "lucide-react";
import { pendingMessage, registrationHref, whatsappHref } from "@/content/site";
import { showToast } from "./Toaster";
import { WhatsAppGlyph } from "./WhatsAppGlyph";

type Props = {
  kind: "registration" | "whatsapp";
  variant?: "signal" | "blue" | "outline" | "link";
  children: React.ReactNode;
  className?: string;
};

/**
 * Chamada comercial com o destino oficial configurado em src/content/site.ts.
 * Sem destino configurado, avisa que o canal está em configuração (nenhum link inventado).
 */
export function Cta({ kind, variant = "signal", children, className = "" }: Props) {
  const href = kind === "registration" ? registrationHref() : whatsappHref();
  const Icon = kind === "whatsapp" ? WhatsAppGlyph : ArrowRight;

  const classes =
    variant === "link"
      ? `inline-flex items-center gap-2 font-semibold underline decoration-current/30 underline-offset-[6px] transition-colors hover:decoration-current ${className}`
      : `btn btn-${variant} ${className}`;

  const content = (
    <>
      {variant === "link" && kind === "whatsapp" && <WhatsAppGlyph className="size-5 shrink-0" />}
      <span>{children}</span>
      {variant !== "link" && <Icon className={kind === "whatsapp" ? "order-first" : ""} />}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={`${classes} cursor-pointer`} onClick={() => showToast(pendingMessage)}>
      {content}
    </button>
  );
}
