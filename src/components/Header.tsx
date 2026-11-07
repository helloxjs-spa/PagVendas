"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { ctaLabels } from "@/content/course";
import { Cta } from "./ui/Cta";

type NavItem = { href: string; label: string };

/**
 * Cabeçalho flutuante: barra branca arredondada sobre a foto da capa,
 * fixa no topo durante a rolagem. No celular, o menu abre como um painel logo abaixo.
 */
export function Header({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`pointer-events-auto mx-auto flex h-16 max-w-[76rem] items-center justify-between gap-4 rounded-2xl bg-white/95 pr-3 pl-4 transition-shadow duration-300 sm:pl-5 lg:h-[4.25rem] ${
          scrolled || open ? "shadow-[0_12px_32px_rgba(8,27,52,0.18)]" : "shadow-[0_8px_24px_rgba(8,27,52,0.12)]"
        }`}
      >
        <a href="#inicio" className="shrink-0" aria-label="Grupo EDASI — voltar ao início" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-grupo-edasi.png"
            alt="Grupo EDASI — Educação, Segurança e Inovação em Saúde"
            width={1003}
            height={472}
            priority
            className="h-9 w-auto lg:h-10"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3.5 py-2 text-[0.88rem] font-medium text-ink/70 transition-colors hover:bg-mist hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Cta kind="registration" className="btn-pulse hidden !min-h-11 !rounded-xl !px-5 !text-[0.78rem] sm:inline-flex">
            {ctaLabels.registrationShort}
          </Cta>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>

      {/* Menu mobile: painel arredondado logo abaixo da barra */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="pointer-events-auto mx-auto mt-2 max-w-[76rem] rounded-2xl bg-white p-3 shadow-[0_16px_40px_rgba(8,27,52,0.22)] lg:hidden"
      >
        <nav aria-label="Navegação principal (celular)">
          <ul className="grid gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[1.05rem] font-semibold text-ink transition-colors hover:bg-mist"
                >
                  {item.label}
                  <ArrowRight aria-hidden className="size-4 text-alert" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-2 border-t border-line pt-3" onClickCapture={() => setOpen(false)}>
          <Cta kind="registration" className="w-full">
            {ctaLabels.registration}
          </Cta>
        </div>
      </div>
    </header>
  );
}
