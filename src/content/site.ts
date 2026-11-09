/**
 * CONFIGURAÇÃO GERAL DA PÁGINA
 *
 * Tudo o que depende de validação institucional fica aqui.
 * Nenhum link, telefone ou identificador foi inventado: os campos vazios
 * permanecem vazios até o EDASI informar os valores oficiais.
 */

export const site = {
  name: "Grupo EDASI",
  title: "APH 2027 | Grupo EDASI",
  description:
    "Curso de Atendimento Pré-Hospitalar APH 2027 do Grupo EDASI: técnicas e protocolos de urgência e emergência, aulas práticas e simulados, com a metodologia de ensino APH 360° do Grupo EDASI.",

  /**
   * Domínio final da página (canonical e Open Graph). Defina NEXT_PUBLIC_SITE_URL no
   * Cloudflare Pages com o domínio definitivo. Sem ela, usa a URL do deploy (CF_PAGES_URL).
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.CF_PAGES_URL || "http://localhost:3000",

  /**
   * MODO REVISÃO
   * true  → exibe a faixa "Página em revisão", os espaços reservados para fotos,
   *         vídeos e depoimentos e o painel de pendências no rodapé.
   * false → versão pública: seções sem material são ocultadas automaticamente.
   * Também pode ser desligado no deploy com NEXT_PUBLIC_REVIEW_MODE=false.
   */
  reviewMode: process.env.NEXT_PUBLIC_REVIEW_MODE !== "false",

  /** Portal oficial de pré-matrícula (informado pelo Grupo EDASI). */
  inscriptionUrl: "https://portal.grupoedasi.com.br/pre-matricula",

  /** Slogan institucional. */
  slogan: "Despertando mentes, transformando futuros.",

  /** WhatsApp oficial: DDI + DDD + número, só dígitos (ex.: 5511999999999). */
  whatsappNumber: "5511959520308",

  /** Telefone exibido no rodapé e link "tel:". */
  phone: { display: "(11) 95952-0308", tel: "+5511959520308" },

  /** Endereço informado pelo Grupo EDASI. */
  address: {
    street: "Rua Reducino Germano da Silva, 31",
    district: "Baeta Neves",
    city: "São Bernardo do Campo",
    state: "SP",
    postalCode: "09760-150",
  },

  /** Mensagem pré-preenchida — texto da página original. */
  whatsappMessage:
    "Olá! Tenho dúvidas sobre o curso APH 2027 do Grupo EDASI e quero falar com a equipe.",

  /** Mensagem dos botões de inscrição enquanto não houver portal (eles abrem o WhatsApp). */
  whatsappRegistrationMessage: "Olá! Quero realizar minha inscrição no curso APH 2027 do Grupo EDASI.",
} as const;

const isHttps = (value: string) => {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" && !parsed.username && !parsed.password;
  } catch {
    return false;
  }
};

export function whatsappHref(message: string = site.whatsappMessage): string | null {
  const number = site.whatsappNumber.trim();
  if (!/^\d{10,15}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Inscrição: portal oficial; na ausência dele, o WhatsApp oficial; senão, nada. */
export function registrationHref(): string | null {
  const url = site.inscriptionUrl.trim();
  if (isHttps(url)) return url;
  return whatsappHref(site.whatsappRegistrationMessage);
}

export function mapsHref(): string {
  const a = site.address;
  const q = `${a.street} - ${a.district}, ${a.city} - ${a.state}, ${a.postalCode}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

export const pendingMessage =
  "Portal de inscrição e WhatsApp oficiais serão ativados após configuração.";
