import Image from "next/image";
import { ArrowUp, MapPin, Phone } from "lucide-react";
import { footer } from "@/content/course";
import { mapsHref, site, whatsappHref } from "@/content/site";
import { WhatsAppGlyph } from "./ui/WhatsAppGlyph";

type NavItem = { href: string; label: string };

export function Footer({ items }: { items: NavItem[] }) {
  const year = new Date().getFullYear();
  const wa = whatsappHref();
  const a = site.address;

  return (
    <footer data-tone="dark" className="bg-navy text-white">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.1fr_1.3fr_0.8fr]">
        <div>
          <span className="inline-block rounded-2xl bg-white px-5 py-3">
            {/* Logo original sobre fundo branco (a marca é azul-marinho) */}
            <Image src="/images/logo-grupo-edasi.png" alt="Grupo EDASI — Educação, Segurança e Inovação em Saúde" width={1003} height={472} className="h-12 w-auto" />
          </span>
          <p className="mt-5 text-white/80">{footer.course}</p>
          <p className="mt-1 text-[0.9rem] text-white/60">Educação, Segurança e Inovação em Saúde</p>
          <p className="mt-4 text-[1rem] font-bold text-sky">{site.slogan}</p>
        </div>

        <address className="not-italic">
          <p className="text-[1.1rem] font-bold">Entre em contato</p>
          <ul className="mt-4 grid gap-4 text-white/85">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-sky" />
              <a href={mapsHref()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {a.street} — {a.district}
                <br />
                {a.city} · {a.state} · CEP {a.postalCode}
                <span className="mt-1 block text-[0.85rem] font-semibold text-sky underline underline-offset-4">Ver no mapa</span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone aria-hidden className="size-5 shrink-0 text-sky" />
              <a href={`tel:${site.phone.tel}`} className="font-semibold hover:text-white">
                {site.phone.display}
              </a>
            </li>
            {wa && (
              <li className="flex items-center gap-3">
                <WhatsAppGlyph className="size-5 shrink-0 text-sky" />
                <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white">
                  Conversar pelo WhatsApp
                </a>
              </li>
            )}
          </ul>
        </address>

        <nav aria-label="Rodapé">
          <p className="text-[1.1rem] font-bold">Navegação</p>
          <ul className="mt-4 grid gap-2.5 text-white/80">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#perguntas" className="hover:text-white">
                Perguntas frequentes
              </a>
            </li>
            <li>
              <a href="#inicio" className="inline-flex items-center gap-1.5 font-semibold text-white">
                Voltar ao topo <ArrowUp aria-hidden className="size-4" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-[0.82rem] text-white/60">
        <div className="wrap flex flex-col gap-1 sm:flex-row sm:justify-between">
          <span>
            © {year} {site.name}.
          </span>
          <span>{footer.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
