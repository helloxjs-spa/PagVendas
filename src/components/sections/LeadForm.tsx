"use client";

import { useState } from "react";
import { leadForm } from "@/content/course";
import { pendingMessage, whatsappHref } from "@/content/site";
import { showToast } from "../ui/Toaster";
import { Seal } from "../ui/Seal";
import { WhatsAppGlyph } from "../ui/WhatsAppGlyph";

/** (11) 98765-4321 a partir dos dígitos digitados. */
function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const input =
  "h-14 w-full rounded-2xl border border-line bg-white px-5 text-[1rem] text-ink placeholder:text-ink/45 transition-colors outline-none focus:border-blue focus:ring-4 focus:ring-blue/10";

/**
 * Formulário curto de inscrição. Sem servidor: ao enviar, abre o WhatsApp oficial
 * com nome, e-mail e telefone já escritos na mensagem.
 */
export function LeadForm() {
  const [phone, setPhone] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const href = whatsappHref(
      leadForm.message({
        name: String(data.get("name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        phone,
      }),
    );
    if (!href) {
      showToast(pendingMessage);
      return;
    }
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="inscricao" aria-labelledby="inscricao-title" data-tone="dark" className="bg-navy py-16 sm:py-20">
      <div className="wrap flex justify-center">
        <div className="relative w-full max-w-[34rem] rounded-[26px] bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.3)] sm:p-9" data-tone="light">
          <Seal className="absolute -top-8 -right-3 sm:-right-7" />

          <h2 id="inscricao-title" className="mt-10 text-[clamp(1.8rem,1.4rem+1.4vw,2.3rem)] sm:mt-0 sm:pr-16 leading-tight font-extrabold tracking-[-0.02em] text-navy">
            {leadForm.title}
          </h2>
          <p className="mt-2 text-[0.98rem] text-ink/65">
            {leadForm.subtitleLabel} <strong className="font-bold text-navy">{leadForm.subtitleValue}</strong>
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-3.5">
            <label className="block">
              <span className="sr-only">{leadForm.fields.name}</span>
              <input name="name" type="text" required autoComplete="name" minLength={3} placeholder={leadForm.fields.name} className={input} />
            </label>
            <label className="block">
              <span className="sr-only">{leadForm.fields.email}</span>
              <input name="email" type="email" required autoComplete="email" inputMode="email" placeholder={leadForm.fields.email} className={input} />
            </label>
            <label className="relative block">
              <span className="sr-only">WhatsApp com DDD</span>
              <span aria-hidden className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-[0.95rem] font-semibold text-ink/55">
                +55
              </span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel-national"
                inputMode="tel"
                pattern="\(\d{2}\) \d{4,5}-\d{4}"
                title="Informe o WhatsApp com DDD"
                placeholder={leadForm.fields.phone}
                value={phone}
                onChange={(e) => setPhone(maskPhone(e.target.value))}
                className={`${input} pl-15`}
              />
            </label>

            <label className="mt-1 flex cursor-pointer items-start gap-3 text-[0.88rem] leading-snug text-ink/65">
              <input name="consent" type="checkbox" required className="mt-0.5 size-5 shrink-0 cursor-pointer accent-navy" />
              <span>{leadForm.consent}</span>
            </label>

            <button type="submit" className="btn btn-whatsapp mt-2 w-full cursor-pointer">
              <WhatsAppGlyph />
              {leadForm.submit}
            </button>
          </form>

          <p className="mt-4 text-center text-[0.82rem] text-ink/55">{leadForm.note}</p>
        </div>
      </div>
    </section>
  );
}
