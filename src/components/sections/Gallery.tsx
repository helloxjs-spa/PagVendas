import { gallery } from "@/content/course";
import { filledPhotos, galleryPhotos } from "@/content/media";
import { site } from "@/content/site";
import { Carousel } from "../ui/Carousel";
import { Frame } from "../ui/Frame";
import { SectionHead } from "../ui/SectionHead";

/** Galeria de vivências: carrossel de fotos arredondadas. Na versão pública, exige 3+ fotos reais. */
export function Gallery() {
  const items = site.reviewMode ? galleryPhotos : filledPhotos;
  if (!site.reviewMode && items.length < 3) return null;

  return (
    <section aria-labelledby="galeria-title" className="bg-white py-20 sm:py-24">
      <div className="wrap">
        <SectionHead
          id="galeria-title"
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          lead={site.reviewMode ? gallery.reviewNote : undefined}
        />
        <div className="mt-12">
          <Carousel label="Fotos do curso">
            {items.map((slot) => (
              <li key={slot.code} className="w-[78%] shrink-0 snap-start xs:w-[60%] sm:w-[calc((100%-36px)/3)] lg:w-[calc((100%-54px)/4)]">
                <figure>
                  <Frame
                    slot={slot}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 80vw"
                    tag="bottom"
                    className="h-[19rem] rounded-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:h-[21rem]"
                  />
                  <figcaption className="mt-3 text-center text-[0.9rem] font-semibold text-ink/75">{slot.label}</figcaption>
                </figure>
              </li>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
