import Image from "next/image";
import type { PhotoSlot } from "@/content/media";
import { site } from "@/content/site";

type Props = {
  slot: PhotoSlot;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Posição da etiqueta de "foto pendente" (modo revisão). */
  tag?: "top" | "bottom" | "none";
};

/**
 * Fotografia real do EDASI. Enquanto ela não existe: campo marinho da marca
 * (nunca imagem quebrada) e, no modo revisão, uma etiqueta dizendo qual foto falta.
 */
export function Frame({ slot, sizes, priority, className = "", tag = "top" }: Props) {
  const photo = slot.photo;

  if (photo) {
    return (
      <div className={`relative overflow-hidden bg-navy ${className}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: photo.focus ?? "50% 50%" }}
        />
      </div>
    );
  }

  return (
    <div
      className={`plate relative overflow-hidden ${className}`}
      role={site.reviewMode ? "img" : undefined}
      aria-label={site.reviewMode ? `Foto pendente: ${slot.label}. ${slot.note}` : undefined}
      aria-hidden={site.reviewMode ? undefined : true}
    >
      {site.reviewMode && tag !== "none" && (
        <span
          className={`absolute left-3 max-w-[calc(100%-1.5rem)] rounded-xl bg-white/95 px-3 py-2 text-ink shadow-lg ${
            tag === "top" ? "top-3" : "bottom-3"
          }`}
        >
          <span className="block text-[0.62rem] font-bold tracking-[0.06em] text-blue uppercase">Foto pendente</span>
          <span className="block text-[0.82rem] leading-snug font-semibold">{slot.label}</span>
          <span className="hidden text-[0.72rem] leading-snug text-ink/60 sm:block">{slot.note}</span>
        </span>
      )}
    </div>
  );
}
