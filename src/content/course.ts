/**
 * TEXTOS DA PÁGINA — preservados da página original do curso APH.
 *
 * Convenção dos títulos (componente <Headline>):
 *   "|"      → quebra de linha
 *   *texto*  → trecho em destaque (serifada itálica)
 */

export const ctaLabels = {
  registration: "Já quero realizar minha inscrição",
  whatsapp: "Ainda tenho dúvidas, quero falar com a equipe",
  /** Versão curta usada apenas em espaços reduzidos (barra fixa no celular). */
  registrationShort: "Fazer inscrição",
};

export const nav = [
  { href: "#programa", label: "O curso APH" },
  { href: "#turmas", label: "Turmas e dias" },
  { href: "#conteudos-visuais", label: "Veja por dentro", requires: "videos" as const },
  { href: "#cursos", label: "Outros cursos" },
  { href: "#investimento", label: "Investimento" },
];

export const hero = {
  eyebrow: "Curso de Atendimento Pré-Hospitalar · Grupo EDASI",
  title: "Na hora da emergência,|*você age ou trava?*",
  intro:
    "Aperfeiçoe seus conhecimentos em técnicas e protocolos de urgência e emergência com aulas práticas e simulados de APH. Ao longo do curso, a proposta 360° integra comunicação, trabalho em equipe e postura ética à formação técnica — respeitando protocolos e as atribuições de cada função.",
  factsStrong: "4 meses · 2 vezes por semana",
  factsText: "Turmas de manhã e à noite · Próximas turmas: xxxxx e abril/2027.",
  factsLink: "Veja os dias das aulas",
  stamp: { year: "2027", label: "APH" },
  ledger: [
    { kicker: "Carga horária", value: "240h", note: "4 meses · 2 vezes por semana" },
    { kicker: "Aulas", value: "30", note: "Incluindo 2 simulados" },
    { kicker: "Módulo", value: "Aquático", note: "Salvamento aquático" },
    { kicker: "Matrícula até 31/12", value: "R$ 1.400", note: "Sem reajuste" },
  ] as { kicker: string; value: string; note: string; unit?: string }[],
};

export const priceBand = [
  "Curso APH · Turma 2027",
  "R$ 1.400 até 31/12/2026",
  "Economia de R$ 450",
  "24,3% em relação ao valor regular",
];

export const presentation = {
  eyebrow: "Aperfeiçoamento em Atendimento Pré-Hospitalar",
  title: "Técnicas e protocolos.|*Prática com contexto.*",
  lead: "O ponto de partida é o APH: estudar fundamentos, aprofundar conhecimentos e exercitar a aplicação de técnicas e protocolos em cenários de urgência e emergência.",
  pillars: [
    {
      title: "Aprofundar a base técnica",
      text: "Revisar fundamentos e compreender a lógica das técnicas e dos protocolos para organizar o raciocínio no atendimento pré-hospitalar.",
    },
    {
      title: "Levar o conteúdo à prática",
      text: "Aulas práticas e simulados para exercitar leitura de cenário, sequência de atendimento e tomada de decisão em ambiente de aprendizagem.",
    },
    {
      title: "Ampliar o repertório de APH",
      text: "Módulo aquático e animais peçonhentos entre os temas previstos para discutir particularidades de diferentes cenários e reconhecer riscos.",
    },
  ],
};

export const method = {
  eyebrow: "Formação teórico-prática em APH",
  title: "Estudar a técnica.|*Exercitar sua aplicação.*",
  steps: [
    {
      title: "Compreender",
      text: "Estudar fundamentos, técnicas e protocolos de urgência e emergência, relacionando o conteúdo aos cenários de APH.",
    },
    {
      title: "Praticar",
      text: "Exercitar procedimentos e organização do atendimento em aulas práticas e simulados, integrando decisão, comunicação e equipe.",
    },
    {
      title: "Revisar as escolhas",
      text: "Refletir sobre raciocínio, execução técnica e postura durante as atividades para consolidar o aprendizado.",
    },
  ],
  disclaimer:
    "A metodologia descrita é uma apresentação preliminar e pode ser ajustada na confirmação final do programa.",
};

export const schedule = {
  eyebrow: "Duração e organização das aulas",
  title: "Quatro meses.|*Dois encontros por semana.*",
  lead: "O curso de APH tem duração de quatro meses, com aulas duas vezes por semana. Conheça a organização da turma da manhã e da turma noturna em São Bernardo do Campo, SP.",
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
  validation:
    "Meses das turmas e organização semanal informados pela instituição. Dias exatos de início, horários de cada turno e calendário detalhado serão confirmados pela equipe.",
};

export const curriculum = {
  eyebrow: "Programa previsto do curso APH",
  title: "Do fundamento|ao *simulado.*",
  intro:
    "Técnicas e protocolos de urgência e emergência como base, com prática orientada e temas para ampliar o repertório de APH. Ao longo desse percurso, entram as dimensões da capacitação 360°. São 240 horas em 30 aulas, com 2 simulados e módulo de salvamento aquático.",
  reference: {
    title: "Referência curricular",
    text: "Portaria GM/MS 2048/2002. Citação de referência; não representa certificação, homologação ou reconhecimento oficial.",
  },
  /** is360: itens que o próprio texto associa às dimensões da capacitação 360°. */
  items: [
    {
      title: "Fundamentos, técnicas e protocolos de APH",
      text: "Estudar a lógica do atendimento pré-hospitalar e a organização de condutas em urgência e emergência.",
    },
    {
      title: "Aulas práticas e simulados",
      text: "Exercitar a aplicação do conteúdo, leitura de cenário, sequência e tomada de decisão em atividades orientadas.",
    },
    {
      title: "Módulo de salvamento aquático",
      text: "Vivência temática para discutir particularidades, riscos e cuidados relacionados ao cenário aquático.",
    },
    {
      title: "Animais peçonhentos",
      text: "Tema previsto para ampliar o reconhecimento de riscos e o repertório de situações abordadas no APH.",
    },
    {
      title: "Comunicação, oratória e passagem de casos",
      text: "Como parte do percurso 360°, praticar a transmissão clara das informações sobre o atendimento e as condutas realizadas.",
      is360: true,
    },
    {
      title: "Trabalho em equipe e comunicação por rádio",
      text: "Integrar a prática técnica à coordenação, escuta e troca de informações em atividades em grupo.",
      is360: true,
    },
    {
      title: "Ética, compliance e cuidado com dados",
      text: "Refletir sobre postura, sigilo e responsabilidade no cuidado de informações de saúde.",
      is360: true,
    },
    {
      title: "Inovação e transformações digitais em saúde",
      text: "Um olhar introdutório sobre tendências tecnológicas, incluindo inteligência artificial.",
      is360: true,
    },
    {
      title: "Formatura",
      text: "Momento de encerramento previsto, sujeito à confirmação do formato institucional.",
    },
  ] as { title: string; text: string; is360?: boolean }[],
};

export const aph360 = {
  statement: "Você sabe a técnica.|*Mas consegue conduzir a cena?*",
  statementNote:
    "A proposta 360° se soma à formação técnica em APH, sem substituir seu foco. Não é promessa de habilitação profissional, emprego ou resultado individual.",
  eyebrow: "O diferencial integrado ao curso: APH 360°",
  title: "Base técnica.|*Visão mais ampla.*",
  body: "Durante o curso de APH, comunicação, trabalho em equipe e postura ética entram como dimensões do atendimento, junto ao raciocínio e à execução técnica. A proposta também aborda sigilo e cuidado com dados de saúde, inovação e transformação digital.",
  /** Dimensões citadas no texto acima, usadas no diagrama. */
  dimensions: [
    "Raciocínio e execução técnica",
    "Comunicação",
    "Trabalho em equipe",
    "Postura ética",
    "Sigilo e cuidado com dados de saúde",
    "Inovação e transformação digital",
  ],
  change: {
    label: "O que mudou no APH do EDASI",
    text: "Durante anos, o APH do EDASI teve foco no desenvolvimento das habilidades técnicas. Com o tempo, percebemos que os alunos também precisavam de habilidades comportamentais e de conhecimento nas disciplinas que o mercado passou a pedir. O novo APH mantém o foco na técnica e traz uma visão 360°, com disciplinas de desenvolvimento comportamental e inovação em saúde.",
  },
  complementLabel: "Fora do curso de APH",
  complement:
    "Fora do curso de APH, o Grupo também informa disponibilizar, em separado e de forma opcional, capacitações como inteligência emocional, marketing pessoal, gestão financeira e empreendedorismo. Consulte disponibilidade, valores e condições; elas não estão incluídas no valor do APH apresentado nesta página.",
};

export const experience = {
  eyebrow: "Veja o curso por dentro",
  title: "APH na prática.|*O percurso em vídeo.*",
  reviewNote:
    "Espaço preparado para os vídeos reais das disciplinas. Os blocos são placeholders: nenhum vídeo foi inventado ou incorporado.",
};

export const gallery = {
  eyebrow: "Galeria de vivências",
  title: "O que a imagem|*precisa contar.*",
  reviewNote:
    "Use estas áreas apenas com fotos reais, autorizadas e contextualizadas. Os espaços abaixo são marcadores de direção visual para a revisão.",
};

export const testimonials = {
  eyebrow: "Depoimentos de alunos",
  title: "Quem viveu o curso|pode contar a sua *experiência.*",
  reviewNote:
    "Reserve este espaço para vídeos ou relatos autênticos de alunos, usados somente após autorização de imagem e validação do conteúdo.",
};

export const investment = {
  eyebrow: "Matrículas abertas",
  title: "Seu próximo passo|no *aperfeiçoamento em APH.*",
  text: "Curso de Atendimento Pré-Hospitalar do Grupo EDASI: técnicas, protocolos, aulas práticas e simulados, com a proposta 360° integrada ao percurso.",
  cohortNote: "Quem se matricula até 31/12/2026 garante o valor atual, sem reajuste.",
  deadline: { strong: "Válida até 31/12/2026", text: "Após essa data, passam a valer os valores de 2027." },
  card: {
    tag: "APH Presencial · 240h",
    condition: "Matrícula até 31/12/2026",
    currency: "R$",
    price: "1.400",
    priceNote: "no boleto, em até 4x",
    card: { label: "No cartão de crédito", value: "R$ 1.200", note: "R$ 200 de desconto, em até 6x" },
    seal: { top: "Sem", bottom: "reajuste até 31/12" },
    future: {
      label: "A partir de 2027",
      rows: [
        { method: "Cartão de crédito", value: "R$ 1.850", note: "em até 10x" },
        { method: "Boleto", value: "R$ 2.100", note: "em até 5x" },
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
      a: "Sim. A proposta tem como base o estudo e o aperfeiçoamento em técnicas e protocolos de urgência e emergência, com aulas práticas e simulados de APH. Ao longo desse percurso, são integradas as dimensões da capacitação 360°.",
    },
    {
      q: "O que a capacitação 360° acrescenta ao APH?",
      a: "Ela amplia o olhar sobre o atendimento ao integrar comunicação, trabalho em equipe, postura, ética, cuidado com dados e inovação em saúde à formação técnica. Não substitui o foco em APH, não é um curso de comunicação separado nem uma alegação de exclusividade no mercado.",
    },
    {
      q: "Quando são as próximas turmas?",
      a: "A próxima turma é em xxxxx e a turma seguinte em abril de 2027. Os dias exatos de início e os horários de cada turno serão confirmados pela equipe.",
    },
    {
      q: "Qual é a duração e a frequência das aulas?",
      a: "O curso tem duração de quatro meses, com aulas duas vezes por semana. Há turma da manhã e turma noturna.",
    },
    {
      q: "Quais são os dias das aulas?",
      a: "A turma noturna tem aulas às terças e quintas-feiras. Na turma da manhã, uma semana é segunda e quarta-feira; na seguinte, terça e quinta-feira. Essa alternância se repete semanalmente, conforme o calendário de cada turma a ser informado pela equipe.",
    },
    {
      q: "Qual é a carga horária?",
      a: "São 240 horas, distribuídas em 30 aulas ao longo de quatro meses, incluindo 2 simulados e um módulo de salvamento aquático.",
    },
    {
      q: "O curso é só para quem é da área da saúde?",
      a: "Não. O Grupo EDASI recebe tanto profissionais da saúde quanto pessoas que estão começando na área.",
    },
    {
      q: "Ao me formar, já posso trabalhar no SAMU?",
      a: "O curso não garante contratação nem habilitação para atuar em um serviço específico. Em quatro meses, ninguém sai expert em APH: a proposta é desenvolver técnica, comportamento e a busca por mais conhecimento. Requisitos profissionais e oportunidades dependem de fatores externos e de cada serviço.",
    },
    {
      q: "Moro longe ou não consigo ir duas vezes por semana. Existe outra opção?",
      a: "Sim. O APH Híbrido (150h) combina atividades online e presenciais, com maior flexibilidade, e a próxima turma está prevista para a primeira semana de dezembro. Também há o APH EAD, para alunos de outras regiões do Brasil.",
    },
    {
      q: "Quais são as formas de pagamento?",
      a: "Para matrículas até 31/12/2026: R$ 1.400 no boleto, em até 4x, ou R$ 1.200 no cartão de crédito (R$ 200 de desconto), em até 6x. A partir de 2027, o curso passa a custar R$ 1.850 no cartão, em até 10x, e R$ 2.100 no boleto, em até 5x.",
    },
    {
      q: "O curso é certificado ou homologado pela Portaria GM/MS 2048/2002?",
      a: "Não. A Portaria GM/MS 2048/2002 é citada somente como referência curricular. Esta página não afirma certificação, homologação, credenciamento ou reconhecimento oficial.",
    },
    {
      q: "As capacitações complementares estão incluídas no valor do APH?",
      a: "Não. Inteligência emocional, marketing pessoal, gestão financeira e empreendedorismo são citados como opções complementares oferecidas separadamente e de forma opcional. Consulte disponibilidade, valores e condições.",
    },
    {
      q: "Como faço a inscrição ou tiro dúvidas?",
      a: "Clique em “Já quero realizar minha inscrição” para fazer a pré-matrícula no portal do Grupo EDASI. Para tirar dúvidas, fale com a equipe pelo WhatsApp.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Curso APH · Grupo EDASI",
  title: "Aprofunde a técnica.|*Amplie seu preparo em APH.*",
  text: "Próximas turmas: xxxxx e abril de 2027. São quatro meses de Atendimento Pré-Hospitalar, com técnicas, protocolos, prática e uma visão 360° integrada. Comece a inscrição no portal ou converse com a equipe.",
};

export const footer = {
  course: "Curso Atendimento Pré-Hospitalar · APH 2027",
  place: "São Bernardo do Campo · SP",
  disclaimer: "Sem promessa de habilitação, emprego ou certificação.",
};

/** Compromisso do EDASI — a partir das respostas do formulário institucional. */
export const commitment = {
  eyebrow: "Nosso compromisso",
  title: "Cuidado humano com o|*desenvolvimento de cada aluno.*",
  text: "Mais do que cursos e certificados: o Grupo EDASI desenvolve pessoas, conecta conhecimento à prática e contribui para a formação de profissionais mais preparados para o mercado de trabalho, especialmente na área da saúde.",
  quote: "Em quatro meses, ninguém sai expert em APH. O objetivo é que você mude o comportamento, desenvolva novas habilidades e siga buscando conhecimento.",
  values: ["Credibilidade", "Acolhimento", "Profissionalismo", "Inovação", "Qualidade", "Confiança"],
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
