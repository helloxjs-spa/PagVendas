import Image from "next/image";
import { Quote, UserRound } from "lucide-react";
import { testimonials } from "@/content/course";
import { testimonialSlots, testimonialsList } from "@/content/media";
import { site } from "@/content/site";
import { SectionHead } from "../ui/SectionHead";

/** Depoimentos: somente relatos reais e autorizados. Sem eles, a seção não aparece na versão pública. */
export function Voices() {
  const hasReal = testimonialsList.length > 0;
  if (!hasReal && !site.reviewMode) return null;

  return (
    <section aria-labelledby="depoimentos-title" data-tone="yellow" className="bg-signal py-16 sm:py-20">
      <div className="wrap">
        <SectionHead
          id="depoimentos-title"
          title={testimonials.title}
        />

        <ul className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {hasReal
            ? testimonialsList.map((t) => (
                <li key={t.name} className="card p-7" data-reveal>
                  <figure>
                    <Quote aria-hidden className="size-8 text-alert" />
                    {t.quote && <blockquote className="mt-3 text-[1.05rem] leading-relaxed text-ink/80">“{t.quote}”</blockquote>}
                    {t.video?.kind === "youtube" && (
                      <div className="relative mt-4 aspect-video overflow-hidden rounded-2xl">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${t.video.id}?rel=0`}
                          title={`Depoimento de ${t.name}`}
                          className="absolute inset-0 size-full"
                          loading="lazy"
                          allowFullScreen
                        />
                      </div>
                    )}
                    <figcaption className="mt-5 flex items-center gap-3">
                      {t.photo ? (
                        <Image src={t.photo.src} alt={t.photo.alt} width={52} height={52} className="size-13 rounded-full border-4 border-blue/20 object-cover" />
                      ) : (
                        <span className="flex size-13 items-center justify-center rounded-full bg-blue/10 text-blue">
                          <UserRound aria-hidden className="size-6" />
                        </span>
                      )}
                      <span>
                        <span className="block font-bold">{t.name}</span>
                        {t.detail && <span className="block text-[0.85rem] text-ink/55">{t.detail}</span>}
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))
            : testimonialSlots.map((s) => (
                <li key={s.code} className="card flex items-center gap-4 p-6">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-alert/10 text-alert">
                    <Quote aria-hidden className="size-6" />
                  </span>
                  <span>
                    <span className="block text-[1.05rem] font-semibold text-ink">{s.note}</span>
                  </span>
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
}
