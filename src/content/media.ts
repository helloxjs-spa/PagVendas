/**
 * MATERIAIS REAIS DO EDASI — fotos, vídeos e depoimentos.
 *
 * A página original não possui nenhum desses materiais (todos eram placeholders).
 * Cada espaço abaixo está pronto para receber o arquivo real:
 *
 *   FOTOS  → coloque o arquivo em /public/images/ e preencha `photo`:
 *            photo: { src: "/images/hero.jpg", alt: "Descrição objetiva da cena", width: 1600, height: 2000 }
 *   VÍDEOS → `video: { kind: "youtube", id: "ID_DO_VIDEO" }`
 *            `video: { kind: "file", src: "/videos/aula.mp4", poster: "/images/capa.jpg" }`
 *            `video: { kind: "embed", src: "https://www.instagram.com/reel/XXXX/embed" }`
 *   DEPOIMENTOS → adicione objetos ao array `testimonials` (somente com autorização).
 *
 * Com `reviewMode: false` (src/content/site.ts), espaços vazios deixam de aparecer.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Ponto de enquadramento (CSS object-position), ex.: "50% 30%". */
  focus?: string;
};

export type Video =
  | { kind: "youtube"; id: string }
  | { kind: "file"; src: string; poster?: string }
  | { kind: "embed"; src: string };

export type PhotoSlot = {
  code: string;
  /** Formato na galeria em faixa horizontal. */
  shape?: "portrait" | "landscape" | "square";
  label: string;
  note: string;
  photo: Photo | null;
};

export type VideoSlot = {
  title: string;
  note: string;
  video: Video | null;
};

export type Testimonial = {
  quote?: string;
  name: string;
  /** Turma, função ou cidade — apenas se informado pelo aluno. */
  detail?: string;
  photo?: Photo;
  video?: Video;
};

/**
 * Fotos estruturais do layout. As atuais são imagens ilustrativas enviadas pelo cliente
 * (banco de imagens — confirmar licença). Substituir por fotos reais do EDASI quando houver.
 */
export const heroPhoto: PhotoSlot = {
  code: "FOTO 01",
  label: "Turma em aula prática",
  note: "Horizontal, alunos em atividade com rostos visíveis — fundo da capa (recebe camada azul).",
  photo: {
    src: "/images/fotos/aph-ventilacao-rcp.webp",
    alt: "Socorristas realizam ventilação com bolsa-válvula-máscara e compressões torácicas em uma vítima",
    width: 1920,
    height: 960,
    focus: "60% 50%",
  },
};

export const coursePhoto: PhotoSlot = {
  code: "FOTO 02",
  label: "Simulado em equipe",
  note: "Vertical ou quadrada, equipe atendendo uma vítima simulada — ao lado do APH 360°.",
  photo: {
    src: "/images/fotos/atendimento-ambulancia.webp",
    alt: "Dois socorristas acolhem e conversam com uma paciente imobilizada na maca, dentro da ambulância",
    width: 1300,
    height: 1953,
    focus: "50% 35%",
  },
};

export const closingPhoto: PhotoSlot = {
  code: "FOTO 03",
  label: "Formatura ou turma reunida",
  note: "Horizontal, alunos reunidos ou formatura — fundo da seção de investimento.",
  photo: {
    src: "/images/fotos/imobilizacao-prancha.webp",
    alt: "Socorrista imobiliza vítima com colar cervical em prancha rígida",
    width: 1000,
    height: 1000,
    focus: "50% 45%",
  },
};

export const videos: VideoSlot[] = [
  { title: "Técnicas e protocolos de APH", note: "", video: null },
  { title: "Aulas práticas e simulados", note: "", video: null },
  { title: "Módulo aquático", note: "", video: null },
  { title: "APH 360°: equipe e passagem de casos", note: "", video: null },
];

/**
 * Seção 3 — "Aqui você aprende vivendo a experiência". Quatro fotos REAIS do EDASI
 * (selecionadas do Drive do cliente); são elas que fazem o convencimento da seção.
 */
export const galleryPhotos: PhotoSlot[] = [
  {
    code: "02",
    label: "Simulados realísticos",
    note: "",
    photo: { src: "/images/simulados.jpeg", alt: "Alunos de luvas atendem uma vítima deitada no chão durante simulado, acompanhados por uma instrutora", width: 1280, height: 854, focus: "45% 50%" },
  },
  {
    code: "03",
    label: "Vivência com ambulância",
    note: "",
    photo: { src: "/images/ambulancia.jpeg", alt: "Socorristas preparam a maca na porta traseira aberta de uma ambulância", width: 1280, height: 854, focus: "55% 50%" },
  },
  {
    code: "04",
    label: "Treino de RCP",
    note: "",
    photo: { src: "/images/aquatico.jpeg", alt: "Aluna faz compressões torácicas em manequim enquanto colega prepara o ressuscitador manual", width: 1280, height: 854, focus: "38% 50%" },
  },
  {
    code: "05",
    label: "Formatura EDASI",
    note: "",
    photo: { src: "/images/formaturaedasi.jpeg", alt: "Turma de formandos do Grupo EDASI, de uniforme, posa com os canudos dos certificados", width: 1280, height: 960, focus: "50% 75%" },
  },
];

export const testimonialSlots = [
  { code: "Vídeo", note: "Depoimento em vídeo de aluno" },
  { code: "Relato", note: "Relato de aluno" },
];

export const testimonialsList: Testimonial[] = [];

/* Helpers ------------------------------------------------------------- */

export const filledPhotos = galleryPhotos.filter((s) => s.photo);
export const filledVideos = videos.filter((s) => s.video);
