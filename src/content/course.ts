/**
 * TEXTOS DA PÁGINA — preservados da página original do curso APH.
 *
 * Convenção dos títulos (componente <Headline>):
 *   "|"      → quebra de linha
 *   *texto*  → trecho em destaque (serifada itálica)
 */

/**
 * DADOS COMERCIAIS — fonte única. Preço, prazo, carga horária e turmas aparecem em
 * várias seções (capa, faixa, investimento, FAQ, barra fixa do celular, imagem de
 * compartilhamento). Altere aqui e todas acompanham.
 */
export const commercial = {
  hours: "240h",
  duration: "4 meses",
  frequency: "2 vezes por semana",
  lessons: "30",
  simulations: "2",
  /** Próximas turmas — "xxxxx" até o EDASI confirmar a data. */
  nextCohort: "xxxxx",
  followingCohort: "abril/2027",
  deadline: "31/12/2026",
  deadlineShort: "31/12",
  boleto: { value: "R$ 1.400", installments: "em até 4x" },
  card: { value: "R$ 1.200", discount: "R$ 200 de desconto", installments: "em até 6x" },
  from2027: {
    card: { value: "R$ 1.850", installments: "em até 10x" },
    boleto: { value: "R$ 2.100", installments: "em até 5x" },
  },
};

const c = commercial;

export const ctaLabels = {
  registration: "Quero garantir minha vaga",
  whatsapp: "Tirar dúvidas no WhatsApp",
  /** Versão curta usada apenas em espaços reduzidos (barra fixa no celular). */
  registrationShort: "Fazer inscrição",
};

export const nav = [
  { href: "#programa", label: "Metodologia 360°" },
  { href: "#conteudos", label: "O que você aprende" },
  { href: "#turmas", label: "Turmas e dias" },
  { href: "#conteudos-visuais", label: "Veja por dentro", requires: "videos" as const },
  { href: "#investimento", label: "Investimento" },
];

export const hero = {
  eyebrow: "Formação em Atendimento Pré-Hospitalar · Grupo EDASI",
  title: "Na emergência, não basta|conhecer a técnica.|*É preciso saber aplicá-la.*",
  intro:
    "Uma formação que conecta conhecimento técnico, prática realística, comunicação e desenvolvimento profissional por meio da metodologia APH 360° do Grupo EDASI.",
  factsStrong: `${c.hours.replace("h", " horas")} · Aulas presenciais · Simulados realísticos`,
  factsText: `Próximas turmas: ${c.nextCohort} e ${c.followingCohort}.`,
  stamp: { year: "2027", label: "APH" },
  ledger: [
    { kicker: "Carga horária", value: c.hours, note: `${c.duration} · ${c.frequency}` },
    { kicker: "Aulas", value: c.lessons, note: `Incluindo ${c.simulations} simulados` },
    { kicker: "Módulo", value: "Aquático", note: "Salvamento aquático" },
    { kicker: `Matrícula até ${c.deadlineShort}`, value: c.boleto.value, note: `no boleto · ${c.card.value} no cartão` },
  ] as { kicker: string; value: string; note: string; unit?: string }[],
};

/** Seção 2 — metodologia APH 360° em quatro pilares (uma competência por pilar). */
export const methodology = {
  title: "Por que o APH EDASI|*é diferente?*",
  lead: "Ensinamos com a metodologia APH 360°. Cada pilar é uma competência que você desenvolve ao longo do curso.",
  pillars: [
    { title: "Domínio técnico", text: "Protocolos, avaliação de vítimas e fundamentos do APH." },
    { title: "Vivência operacional", text: "Práticas, equipamentos, ambulância e cenários simulados." },
    { title: "Desenvolvimento humano", text: "Comunicação, oratória, postura e trabalho em equipe." },
    { title: "Consciência profissional", text: "Ética, compliance, sigilo e inovação na saúde." },
  ],
};

export const schedule = {
  eyebrow: "Duração e organização das aulas",
  title: "Quatro meses.|*Dois encontros por semana.*",
  lead: "O curso de APH tem duração de quatro meses, com aulas duas vezes por semana.",
  cohorts: [
    { label: "Próxima turma", month: "xxxxx", year: "" },
    { label: "Turma seguinte", month: "Abril", year: "2027" },
  ],
  morning: {
    eyebrow: "Turma da manhã",
    title: "Dias alternados|*a cada semana.*",
    weeks: [
      { label: "Uma semana", days: "Segunda e quarta-feira", active: [0, 2] },
      { label: "Na semana seguinte", days: "Terça e quinta-feira", active: [1, 3] },
    ],
    text: "Os dois pares de dias se alternam semanalmente. A equipe confirmará o calendário de referência de cada turma.",
  },
  night: {
    eyebrow: "Turma noturna",
    title: "Terça e quinta-feira.|*Todas as semanas.*",
    weeks: [{ label: "Todas as semanas", days: "Terça e quinta-feira", active: [1, 3] }],
    text: "Dois encontros por semana, sempre às terças e quintas-feiras, durante os quatro meses de curso.",
  },
  weekdays: ["Seg", "Ter", "Qua", "Qui", "Sex"],
};

/** Seção 4 — grandes grupos de conteúdo (não é grade curricular). */
export const curriculum = {
  title: "O que você|*vai aprender?*",
  lead: `${c.hours} organizadas em cinco grandes grupos de conteúdo.`,
  items: [
    "Emergências clínicas, SBV e reanimação",
    "Trauma, imobilizações e remoção",
    "Emergências pediátricas e situações especiais",
    "Módulo aquático e animais peçonhentos",
    "Comunicação operacional, ética e inovação",
  ],
};

export const experience = {
  eyebrow: "Veja o curso por dentro",
  title: "APH na prática.|*O percurso em vídeo.*",
};

/** Seção 3 — vivências em fotos reais (ver galleryPhotos em media.ts). */
export const gallery = {
  title: "Aqui você aprende|*vivendo a experiência.*",
  lead: "Simulados, ambulância, piscina e formatura: o curso acontece na prática.",
};

export const testimonials = {
  eyebrow: "Depoimentos de alunos",
  title: "Quem viveu o curso|pode contar a sua *experiência.*",
};

export const investment = {
  eyebrow: "Matrículas abertas",
  title: "Seu próximo passo|no *aperfeiçoamento em APH.*",
  text: "Curso de Atendimento Pré-Hospitalar do Grupo EDASI: técnicas, protocolos, aulas práticas e simulados, com a metodologia de ensino APH 360°.",
  cohortNote: `Quem se matricula até ${c.deadline} garante o valor atual, sem reajuste.`,
  deadline: { strong: `Válida até ${c.deadline}`, text: "Após essa data, passam a valer os valores de 2027." },
  card: {
    tag: `APH Presencial · ${c.hours}`,
    condition: `Matrícula até ${c.deadline}`,
    currency: "R$",
    price: c.boleto.value.replace(/^R\$\s*/, ""),
    priceNote: `no boleto, ${c.boleto.installments}`,
    card: { label: "No cartão de crédito", value: c.card.value, note: `${c.card.discount}, ${c.card.installments}` },
    seal: { top: "Sem", bottom: `reajuste até ${c.deadlineShort}` },
    future: {
      label: "A partir de 2027",
      rows: [
        { method: "Cartão de crédito", value: c.from2027.card.value, note: c.from2027.card.installments },
        { method: "Boleto", value: c.from2027.boleto.value, note: c.from2027.boleto.installments },
      ],
    },
  },
  footnote: "* Programação e condições complementares seguem sujeitas à confirmação final.",
};

export const faq = {
  eyebrow: "Perguntas frequentes",
  title: "Clareza antes|de *decidir.*",
  items: [
    {
      q: "O foco do curso é Atendimento Pré-Hospitalar?",
      a: `Sim. O curso é dedicado a técnicas e protocolos de urgência e emergência, com ${c.lessons} aulas e ${c.simulations} simulados de APH.`,
    },
    {
      q: "O que é a metodologia APH 360°?",
      a: "É a metodologia de ensino do Grupo EDASI. Nas aulas, a técnica é trabalhada junto com comunicação, trabalho em equipe, postura ética, cuidado com dados e inovação em saúde. Não é um curso à parte e não muda o foco do curso, que continua sendo o APH.",
    },
    {
      q: "Qual é a duração e a frequência das aulas?",
      a: `O curso tem ${c.hours}, ao longo de ${c.duration}, com aulas ${c.frequency}. Há turma da manhã e turma noturna.`,
    },
    {
      q: "O curso é só para quem é da área da saúde?",
      a: "Não. O Grupo EDASI recebe tanto profissionais da saúde quanto pessoas que estão começando na área.",
    },
  
    {
      q: "Moro longe ou não consigo ir duas vezes por semana. Existe outra opção?",
      a: "Sim. O APH Híbrido (150h) combina atividades online e presenciais, com maior flexibilidade, e a próxima turma está prevista para a primeira semana de dezembro. Também há o APH EAD, para alunos de outras regiões do Brasil.",
    },
    {
      q: "Quais são as formas de pagamento?",
      a: `Para matrículas até ${c.deadline}: ${c.boleto.value} no boleto, ${c.boleto.installments}, ou ${c.card.value} no cartão de crédito (${c.card.discount}), ${c.card.installments}. A partir de 2027, o curso passa a custar ${c.from2027.card.value} no cartão, ${c.from2027.card.installments}, e ${c.from2027.boleto.value} no boleto, ${c.from2027.boleto.installments}.`,
    },
    {
      q: "As capacitações complementares estão incluídas no valor do APH?",
      a: "Não. Inteligência emocional, marketing pessoal, gestão financeira e empreendedorismo são citados como opções complementares oferecidas separadamente e de forma opcional. Consulte disponibilidade, valores e condições.",
    },
    {
      q: "Como faço a inscrição ou tiro dúvidas?",
      a: `Clique em “${ctaLabels.registration}” para fazer a pré-matrícula no portal do Grupo EDASI. Para tirar dúvidas, use o botão “${ctaLabels.whatsapp}”.`,
    },
  ],
};

export const finalCta = {
  eyebrow: "Curso APH · Grupo EDASI",
  title: `Turmas de manhã e à noite.|*Valor sem reajuste até ${c.deadlineShort}.*`,
  text: `Próximas turmas: ${c.nextCohort} e ${c.followingCohort}. São ${c.hours} de APH presencial em ${c.duration}. Para matrículas até ${c.deadline}: ${c.boleto.value} no boleto ou ${c.card.value} no cartão.`,
};

export const footer = {
  course: "Curso de Atendimento Pré-Hospitalar · APH 2027",
  place: "São Bernardo do Campo · SP",
  disclaimer: "Sem promessa de habilitação, emprego ou certificação.",
};

/**
 * Formulário curto de inscrição. Não há servidor: ao enviar, abre o WhatsApp oficial
 * com os dados já preenchidos na mensagem (nada é armazenado pela página).
 */
export const leadForm = {
  title: "Garanta sua vaga",
  subtitleLabel: "Próxima turma:",
  subtitleValue: c.nextCohort,
  fields: { name: "Nome completo", email: "E-mail", phone: "(00) 00000-0000" },
  consent: "Autorizo a equipe do Grupo EDASI a entrar em contato comigo sobre o curso.",
  submit: "Enviar e continuar no WhatsApp",
  note: `Matrícula até ${c.deadline}: ${c.boleto.value} no boleto ou ${c.card.value} no cartão.`,
  message: (d: { name: string; email: string; phone: string }) =>
    `Olá! Quero garantir minha vaga no curso APH 2027 do Grupo EDASI.\nNome: ${d.name}\nE-mail: ${d.email}\nWhatsApp: ${d.phone}`,
};

/** Outras formações — prioridades comerciais informadas pelo EDASI. */
export const otherCourses = {
  eyebrow: "Outras formações do Grupo EDASI",
  title: "Encontre o formato|que cabe na *sua rotina.*",
  lead: "Para quem mora mais longe ou precisa de mais flexibilidade, o EDASI também oferece formações híbridas, imersivas e a distância.",
  items: [
    {
      name: "APH Híbrido",
      tag: "Híbrido · 150h",
      text: "Formação que combina atividades online e presenciais, oferecendo maior flexibilidade aos alunos.",
      meta: "Próxima turma: primeira semana de dezembro",
      photo: { src: "/images/fotos/curativo-imobilizacao.webp", alt: "Socorristas fazem curativo e imobilização no braço de uma vítima", width: 1156, height: 769 },
    },
    {
      name: "Plantão 12 – APH",
      tag: "Imersão · 12h",
      text: "Experiência imersiva de 12 horas, com foco em simulações e situações reais do atendimento pré-hospitalar.",
      meta: "Simulações e situações reais",
      photo: { src: "/images/fotos/imobilizacao-prancha.webp", alt: "Socorrista imobiliza vítima com colar cervical em prancha rígida", width: 1000, height: 1000 },
    },
    {
      name: "Suporte Básico de Vida (SBV)",
      tag: "Turmas mensais",
      text: "Capacitação voltada ao reconhecimento de emergências e às técnicas fundamentais de suporte à vida.",
      meta: "Turmas uma vez por mês",
      photo: { src: "/images/fotos/monitorizacao-ecg.webp", alt: "Socorristas monitoram vítima com eletrodos de eletrocardiograma", width: 768, height: 512 },
    },
    {
      name: "Cursos EAD",
      tag: "A distância",
      text: "Atendimento Pré-Hospitalar (APH) e Condutor de Veículo de Emergência, ampliando o alcance para outras regiões do Brasil.",
      meta: "APH · Condutor de Veículo de Emergência",
      photo: { src: "/images/fotos/atendimento-ambulancia.webp", alt: "Equipe de socorristas atende paciente dentro da ambulância", width: 1300, height: 1953, focus: "50% 22%" },
    },
  ] as {
    name: string;
    tag: string;
    text: string;
    meta: string;
    photo: { src: string; alt: string; width: number; height: number; focus?: string };
  }[],
};
