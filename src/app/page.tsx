import { nav } from "@/content/course";
import { filledVideos } from "@/content/media";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Marquee } from "@/components/sections/Marquee";
import { Schedule } from "@/components/sections/Schedule";
import { Program } from "@/components/sections/Program";
import { Videos } from "@/components/sections/Videos";
import { Gallery } from "@/components/sections/Gallery";
import { Team } from "@/components/sections/Team";
// Depoimentos desativados até chegarem os vídeos dos alunos. Para reativar, descomente aqui e na página.
// import { Voices } from "@/components/sections/Voices";
import { Offer } from "@/components/sections/Offer";
import { Faq } from "@/components/sections/Faq";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Page() {
  // "Veja por dentro" só aparece no menu se a seção de vídeos existir.
  const hasVideos = site.reviewMode || filledVideos.length > 0;
  const navItems = nav
    .filter((item) => item.requires !== "videos" || hasVideos)
    .map(({ href, label }) => ({ href, label }));

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[80] bg-ink px-4 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header items={navItems} />

      <main id="conteudo">
        <Hero />
        <Pillars />
        <Gallery />
        <Offer />
        <Program />
        <Marquee />
        <Schedule />
        <Marquee />
        {/* <Voices /> */}
        <Team />
        <Videos />
        <LeadForm />
        <Faq />
      </main>

      <Footer />
      <StickyActions />
    </>
  );
}
