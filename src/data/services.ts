export type ServiceSlug =
  | "ar-condicionado"
  | "aquecimento"
  | "refrigeracao"
  | "ventilacao"
  | "instalacoes-eletricas"
  | "manutencao-assistencia";

export type IconName =
  | "snowflake"
  | "flame"
  | "refrigerator"
  | "wind"
  | "zap"
  | "wrench";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  icon: IconName;
  image: string;
  imageAlt: string;
  summary: string;
  metaDescription: string;
  intro: string[];
  equipment: string[];
  interventions: { title: string; text: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
  /** Pôr a false para ocultar o serviço em todo o site (menu, cartões, formulários, sitemap). */
  enabled?: boolean;
};

const allServices: Service[] = [
  {
    slug: "ar-condicionado",
    title: "Ar Condicionado",
    shortTitle: "Ar Condicionado",
    icon: "snowflake",
    image: "/img/servicos/ar-condicionado.webp",
    imageAlt: "Técnico KlimaTEC a intervir numa unidade interior de ar condicionado",
    summary:
      "Instalação, manutenção preventiva, diagnóstico e reparação de sistemas de climatização.",
    metaDescription:
      "Instalação, manutenção e reparação de ar condicionado para particulares e empresas: split, multi-split, condutas e cassete. Peça orçamento à KlimaTEC.",
    intro: [
      "Um sistema de ar condicionado bem dimensionado e corretamente instalado faz toda a diferença no conforto, no consumo de energia e na durabilidade do equipamento.",
      "Avaliamos o espaço, as necessidades de utilização e as condições técnicas existentes antes de propor uma solução. Depois da instalação, acompanhamos o sistema com manutenção e assistência técnica.",
    ],
    equipment: [
      "Sistemas split (mural)",
      "Sistemas multi-split",
      "Unidades de cassete",
      "Sistemas de condutas",
      "Unidades de chão e teto",
      "Sistemas VRV / VRF para espaços comerciais",
    ],
    interventions: [
      { title: "Instalação", text: "Montagem de unidades interiores e exteriores, ligações frigoríficas, drenagem e arranque do sistema." },
      { title: "Substituição", text: "Remoção do equipamento antigo e instalação de um sistema mais adequado e eficiente." },
      { title: "Manutenção", text: "Limpeza de filtros e permutadores, verificação de drenos, pressões e funcionamento geral." },
      { title: "Reparação", text: "Diagnóstico de avarias, fugas, ruídos anómalos ou perda de rendimento." },
    ],
    benefits: [
      "Conforto térmico durante todo o ano",
      "Melhor qualidade do ar interior com filtros limpos",
      "Menor consumo com equipamentos bem dimensionados",
      "Maior vida útil dos equipamentos",
    ],
    faq: [
      { q: "Com que frequência deve ser feita a manutenção do ar condicionado?", a: "Depende da utilização e do tipo de espaço. Em habitações é comum uma manutenção anual; em espaços comerciais com utilização intensiva pode justificar-se uma periodicidade maior. Na avaliação indicamos o plano mais adequado." },
      { q: "Como sei que potência preciso?", a: "A potência depende da área, da exposição solar, do isolamento e da utilização do espaço. Por isso fazemos uma avaliação antes de apresentar a proposta." },
      { q: "Instalam equipamentos já comprados pelo cliente?", a: "Contacte-nos com a marca e o modelo do equipamento. Avaliamos a situação e indicamos se é possível realizar a instalação nas condições adequadas." },
    ],
  },
  {
    slug: "aquecimento",
    title: "Aquecimento",
    shortTitle: "Aquecimento",
    icon: "flame",
    image: "/img/servicos/aquecimento.webp",
    imageAlt: "Bomba de calor, depósito de águas quentes e piso radiante",
    summary:
      "Soluções de aquecimento e água quente, incluindo bombas de calor e outros equipamentos tecnicamente abrangidos.",
    metaDescription:
      "Bombas de calor, piso radiante, radiadores e águas quentes sanitárias. Instalação e manutenção de sistemas de aquecimento pela KlimaTEC.",
    intro: [
      "O aquecimento representa uma parte importante do consumo energético de uma casa ou de um negócio. Escolher o sistema certo é escolher conforto com eficiência.",
      "Trabalhamos com soluções de aquecimento ambiente e de águas quentes sanitárias, sempre com foco na eficiência energética e na adequação ao espaço.",
    ],
    equipment: [
      "Bombas de calor ar-água",
      "Bombas de calor para águas quentes sanitárias",
      "Piso radiante hidráulico",
      "Radiadores e ventiloconvetores",
      "Caldeiras",
      "Depósitos acumuladores",
    ],
    interventions: [
      { title: "Estudo e proposta", text: "Análise do espaço, das necessidades de aquecimento e dos sistemas existentes." },
      { title: "Instalação", text: "Montagem de equipamentos, circuitos hidráulicos e controlo." },
      { title: "Manutenção", text: "Verificação de pressões, purga de circuitos, limpeza e afinação." },
      { title: "Reparação", text: "Diagnóstico de falhas de aquecimento, fugas e anomalias de funcionamento." },
    ],
    benefits: [
      "Conforto uniforme nos dias frios",
      "Água quente disponível quando precisa",
      "Soluções orientadas para a eficiência energética",
      "Funcionamento fiável com manutenção regular",
    ],
    faq: [
      { q: "Uma bomba de calor serve para aquecimento e águas quentes?", a: "Existem soluções que fazem as duas coisas e outras dedicadas apenas a águas quentes sanitárias. A escolha depende do espaço e das necessidades, que avaliamos antes da proposta." },
      { q: "É possível aproveitar radiadores existentes?", a: "Em muitos casos sim, mas é necessário verificar o estado da instalação e as temperaturas de funcionamento. Avaliamos caso a caso." },
    ],
  },
  {
    slug: "refrigeracao",
    title: "Refrigeração",
    shortTitle: "Refrigeração",
    icon: "refrigerator",
    image: "/img/servicos/refrigeracao.webp",
    imageAlt: "Unidades exteriores de climatização e refrigeração",
    summary:
      "Assistência e manutenção de sistemas de refrigeração comercial e equipamentos de frio.",
    metaDescription:
      "Refrigeração comercial: câmaras frigoríficas, vitrinas, arcas e equipamentos de frio. Instalação, manutenção e assistência técnica pela KlimaTEC.",
    intro: [
      "Em restauração, comércio alimentar e indústria, uma falha no frio pode significar perda de produto e interrupção do negócio.",
      "Prestamos apoio na instalação, manutenção preventiva e reparação de equipamentos de refrigeração, com foco na fiabilidade e na continuidade da operação.",
    ],
    equipment: [
      "Câmaras frigoríficas de refrigeração e congelação",
      "Vitrinas e expositores refrigerados",
      "Arcas e armários frigoríficos",
      "Unidades condensadoras",
      "Equipamentos de frio para restauração",
    ],
    interventions: [
      { title: "Instalação", text: "Montagem de equipamentos e circuitos frigoríficos, com verificação e arranque." },
      { title: "Manutenção preventiva", text: "Limpeza de condensadores e evaporadores, verificação de temperaturas, pressões e controlos." },
      { title: "Reparação", text: "Diagnóstico de perda de frio, fugas, ruídos e falhas elétricas." },
      { title: "Acompanhamento", text: "Planos de manutenção ajustados à utilização e ao tipo de equipamento." },
    ],
    benefits: [
      "Conservação adequada dos produtos",
      "Menos paragens inesperadas",
      "Consumo energético mais controlado",
      "Equipamentos com maior longevidade",
    ],
    faq: [
      { q: "Fazem manutenção a equipamentos de várias marcas?", a: "Indique-nos a marca e o modelo dos equipamentos. Avaliamos cada situação e indicamos o tipo de intervenção possível." },
      { q: "Um equipamento a perder frio deve ser desligado?", a: "Depende da avaria. Se notar perda de frio, gelo excessivo ou ruídos anómalos, contacte-nos para avaliarmos e, se possível, proteja os produtos noutro equipamento." },
    ],
  },
  {
    slug: "ventilacao",
    title: "Ventilação",
    shortTitle: "Ventilação",
    icon: "wind",
    image: "/img/servicos/ventilacao.webp",
    imageAlt: "Unidade de cassete instalada no teto de um espaço comercial",
    summary:
      "Instalação e manutenção de sistemas de ventilação e renovação de ar.",
    metaDescription:
      "Ventilação mecânica, recuperadores de calor, extração e renovação de ar. Soluções de ventilação para casas e empresas pela KlimaTEC.",
    intro: [
      "A qualidade do ar interior influencia o conforto, o bem-estar e a conservação dos espaços. Uma ventilação adequada ajuda a controlar a humidade, os odores e a concentração de poluentes.",
      "Analisamos o espaço e a sua utilização para propor soluções de ventilação e renovação de ar ajustadas a cada caso.",
    ],
    equipment: [
      "Ventilação mecânica controlada (VMC)",
      "Recuperadores de calor",
      "Sistemas de extração",
      "Unidades de tratamento de ar",
      "Condutas e difusores",
      "Extração para cozinhas profissionais",
    ],
    interventions: [
      { title: "Avaliação", text: "Análise das necessidades de renovação de ar e das condições existentes." },
      { title: "Instalação", text: "Montagem de equipamentos, condutas, grelhas e difusores." },
      { title: "Manutenção", text: "Substituição e limpeza de filtros, verificação de ventiladores e caudais." },
      { title: "Reparação", text: "Diagnóstico de ruídos, perda de caudal e falhas de funcionamento." },
    ],
    benefits: [
      "Ar interior mais saudável",
      "Controlo de humidade e condensações",
      "Redução de odores",
      "Conforto em espaços com grande ocupação",
    ],
    faq: [
      { q: "Porque é importante a ventilação numa casa?", a: "Ajuda a renovar o ar, a controlar a humidade e a reduzir condensações e odores, contribuindo para um ambiente interior mais confortável." },
      { q: "Os filtros precisam de ser trocados?", a: "Sim. A periodicidade depende do equipamento e da utilização. Um plano de manutenção ajuda a manter o sistema eficiente." },
    ],
  },
  {
    slug: "instalacoes-eletricas",
    title: "Instalações Elétricas",
    shortTitle: "Instalações Elétricas",
    icon: "zap",
    image: "/img/servicos/instalacoes-eletricas.webp",
    imageAlt: "Técnico KlimaTEC a trabalhar num quadro elétrico",
    summary:
      "Soluções técnicas para instalações, manutenção e intervenções elétricas.",
    metaDescription:
      "Instalações elétricas, quadros elétricos, alimentação de equipamentos de climatização e manutenção elétrica. Peça orçamento à KlimaTEC.",
    intro: [
      "Os equipamentos de climatização, aquecimento e refrigeração precisam de uma instalação elétrica adequada para funcionarem com segurança e fiabilidade.",
      "Realizamos trabalhos elétricos de apoio a estes sistemas, bem como remodelações e manutenção de instalações em habitações e espaços comerciais.",
    ],
    equipment: [
      "Quadros elétricos",
      "Circuitos de alimentação de equipamentos",
      "Tomadas, interruptores e iluminação",
      "Proteções diferenciais e disjuntores",
      "Cablagem e caminhos de cabos",
    ],
    interventions: [
      { title: "Novas instalações", text: "Execução de circuitos e ligação de equipamentos." },
      { title: "Remodelação", text: "Atualização de quadros e circuitos em instalações existentes." },
      { title: "Manutenção", text: "Verificação de ligações, proteções e estado geral da instalação." },
      { title: "Diagnóstico de avarias", text: "Identificação de disparos, falhas de alimentação e pontos de risco." },
    ],
    benefits: [
      "Mais segurança para pessoas e equipamentos",
      "Instalação preparada para novos equipamentos",
      "Menos disparos e interrupções",
      "Um só parceiro para a parte técnica e elétrica",
    ],
    faq: [
      { q: "A instalação de um ar condicionado precisa de circuito próprio?", a: "Depende da potência do equipamento e do estado da instalação existente. Verificamos isso durante a avaliação." },
      { q: "Fazem pequenas reparações elétricas?", a: "Descreva-nos a situação no formulário de pedido. Avaliamos e indicamos se e como podemos ajudar." },
    ],
  },
  {
    slug: "manutencao-assistencia",
    title: "Manutenção e Assistência",
    shortTitle: "Manutenção e Assistência",
    icon: "wrench",
    image: "/img/servicos/manutencao-assistencia.webp",
    imageAlt: "Ferramentas de diagnóstico sobre plantas técnicas",
    summary:
      "Diagnóstico de avarias, manutenção preventiva e corretiva, com soluções adequadas a cada equipamento.",
    metaDescription:
      "Manutenção preventiva, assistência técnica e contratos de manutenção para climatização, aquecimento, refrigeração e ventilação. KlimaTEC.",
    intro: [
      "A manutenção regular é a forma mais eficaz de prevenir avarias, manter o rendimento dos equipamentos e proteger o investimento feito.",
      "Prestamos assistência técnica em caso de avaria e propomos planos e contratos de manutenção ajustados ao tipo de equipamento e à sua utilização.",
    ],
    equipment: [
      "Ar condicionado e climatização",
      "Bombas de calor e aquecimento",
      "Equipamentos de refrigeração",
      "Sistemas de ventilação",
      "Instalações elétricas associadas",
    ],
    interventions: [
      { title: "Manutenção preventiva", text: "Intervenções planeadas para limpeza, verificação e afinação dos equipamentos." },
      { title: "Assistência técnica", text: "Diagnóstico e reparação de avarias." },
      { title: "Contratos de manutenção", text: "Plano de intervenções periódicas definido em conjunto com o cliente." },
      { title: "Relatório da intervenção", text: "Registo do trabalho realizado e recomendações para o equipamento." },
    ],
    benefits: [
      "Menos avarias inesperadas",
      "Equipamentos mais eficientes",
      "Planeamento de custos de manutenção",
      "Histórico técnico dos equipamentos",
    ],
    faq: [
      { q: "O que inclui um contrato de manutenção?", a: "O conteúdo é definido em conjunto com o cliente, de acordo com os equipamentos, a utilização e a periodicidade pretendida. Peça-nos uma proposta." },
      { q: "Prestam assistência a equipamentos que não foram instalados pela KlimaTEC?", a: "Contacte-nos com a informação do equipamento e da avaria. Avaliamos cada situação." },
    ],
  },
];

export const services = allServices.filter((s) => s.enabled !== false);

export const getService = (slug: string) => services.find((s) => s.slug === slug);
