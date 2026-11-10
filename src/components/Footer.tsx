import Image from "next/image";
import { ArrowUp, MapPin, Phone } from "lucide-react";
import { footer } from "@/content/course";
import { mapsHref, site, whatsappHref } from "@/content/site";
import { WhatsAppGlyph } from "./ui/WhatsAppGlyph";

/** Rodapé compacto: marca + contato numa faixa, e linha final com direitos e "voltar ao topo". */
export function Footer() {
  const year = new Date().getFullYear();
  const wa = whatsappHref();
  const a = site.address;

  return (
    <footer data-tone="dark" className="bg-navy text-white">
      <div className="wrap grid gap-7 py-9 text-[0.9rem] md:grid-cols-[1fr_1.4fr] md:items-center md:gap-10">
        <div className="flex items-center gap-4">
          <span className="inline-block shrink-0 rounded-xl bg-white px-3.5 py-2">
            {/* Logo sobre fundo branco (a marca é azul-marinho) */}
            <Image src="/images/logo-edasi-horizontal.png" alt="Grupo EDASI" width={1200} height={562} className="h-9 w-auto" />
          </span>
          <div className="leading-snug">
            <p className="text-white/80">{footer.course}</p>
            <p className="mt-0.5 font-semibold text-sky">{site.slogan}</p>
          </div>
        </div>

        <address className="not-italic">
          <ul className="grid gap-2.5 text-white/85 sm:grid-cols-2 sm:gap-x-6">
            <li className="flex gap-2.5 sm:col-span-2">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-sky" />
              <a href={mapsHref()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {a.street} — {a.district}, {a.city} · {a.state} · CEP {a.postalCode}{" "}
                <span className="font-semibold whitespace-nowrap text-sky underline underline-offset-4">Ver no mapa</span>
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone aria-hidden className="size-4 shrink-0 text-sky" />
              <a href={`tel:${site.phone.tel}`} className="font-semibold hover:text-white">
                {site.phone.display}
              </a>
            </li>
            {wa && (
              <li className="flex items-center gap-2.5">
                <WhatsAppGlyph className="size-4 shrink-0 text-sky" />
                <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white">
                  Conversar pelo WhatsApp
                </a>
              </li>
            )}
          </ul>
        </address>
      </div>

      <div className="border-t border-white/10 py-4 text-[0.78rem] text-white/60">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <span>
            © {year} {site.name}.
          </span>
          <a href="#inicio" className="inline-flex items-center gap-1 font-semibold text-white/85 hover:text-white">
            Voltar ao topo <ArrowUp aria-hidden className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
