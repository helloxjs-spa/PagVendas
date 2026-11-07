import { experience } from "@/content/course";
import { filledVideos, videos } from "@/content/media";
import { site } from "@/content/site";
import { CinemaPlayer } from "../ui/CinemaPlayer";
import { SectionHead } from "../ui/SectionHead";

/** Veja por dentro: player + lista de vídeos em fundo azul. Oculta na versão pública sem vídeos. */
export function Videos() {
  const items = site.reviewMode ? videos : filledVideos;
  if (items.length === 0) return null;

  return (
    <section
      id="conteudos-visuais"
      aria-labelledby="videos-title"
      data-tone="dark"
      className="bg-navy py-20 text-white sm:py-24"
    >
      <div className="wrap">
        <SectionHead
          id="videos-title"
          title={experience.title}
          tone="dark"
        />
        <div className="mt-12" data-reveal>
          <CinemaPlayer items={items} reviewMode={site.reviewMode} />
        </div>
      </div>
    </section>
  );
}
