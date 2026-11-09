import { gallery } from "@/content/course";
import { filledPhotos, galleryPhotos } from "@/content/media";
import { site } from "@/content/site";
import { Frame } from "../ui/Frame";
import { SectionHead } from "../ui/SectionHead";

/**
 * Seção 3 — vivências em fotos reais, em grade 2×2 (4 colunas no desktop).
 * Na versão pública, só aparece com pelo menos 2 fotos reais.
 */
export function Gallery() {
  const items = site.reviewMode ? galleryPhotos : filledPhotos;
  if (!site.reviewMode && items.length < 2) return null;

  return (
    <section id="vivencias" aria-labelledby="galeria-title" className="bg-white py-16 sm:py-20">
      <div className="wrap">
        <SectionHead id="galeria-title" title={gallery.title} lead={gallery.lead} />
        <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-5 lg:grid-cols-4" aria-label="Fotos do curso">
          {items.map((slot) => (
            <li key={slot.code}>
              <figure>
                <Frame
                  slot={slot}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  tag="none"
                  className="aspect-[4/3] rounded-[16px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] lg:aspect-[4/5]"
                />
                <figcaption className="mt-2.5 text-[0.95rem] font-semibold text-ink sm:text-[1.02rem]">{slot.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
