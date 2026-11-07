"use client";

import { useEffect, useRef, useState } from "react";

const TOAST_EVENT = "edasi:toast";

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail: message }));
}

/** Aviso discreto (ex.: canal de inscrição ainda em configuração). */
export function Toaster() {
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    let counter = 0;
    const onToast = (event: Event) => {
      counter += 1;
      setToast({ id: counter, text: (event as CustomEvent<string>).detail });
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setToast(null), 4600);
    };
    window.addEventListener(TOAST_EVENT, onToast);
    return () => window.removeEventListener(TOAST_EVENT, onToast);
  }, []);

  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-[70] lg:bottom-8">
      {toast && (
        <p
          key={toast.id}
          className="absolute bottom-0 left-1/2 w-[min(92vw,30rem)] border-l-4 border-signal bg-ink px-5 py-4 text-[0.95rem] leading-snug text-white"
          style={{ animation: "toast-in .35s cubic-bezier(.22,1,.36,1) both" }}
        >
          {toast.text}
        </p>
      )}
    </div>
  );
}
