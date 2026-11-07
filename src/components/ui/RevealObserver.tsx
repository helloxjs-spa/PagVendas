"use client";

import { useEffect } from "react";

/**
 * Entradas suaves ao rolar. Elementos já visíveis no carregamento são marcados
 * antes de a classe `reveal-ready` ser aplicada — assim nada "pisca" na tela.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const viewport = window.innerHeight;

    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < viewport * 0.95) el.classList.add("is-in");
    });
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.filter((el) => !el.classList.contains("is-in")).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
