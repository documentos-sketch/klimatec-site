export const navigation = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos", children: true },
  { label: "Empresas", href: "/empresas" },
  { label: "Sobre Nós", href: "/sobre-nos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Blog", href: "/blog" },
  { label: "Contactos", href: "/contactos" },
] as const;

export const differentiators = [
  { icon: "ruler", title: "Rigor técnico", text: "Cada intervenção é planeada e executada com método, atenção ao detalhe e respeito pelas boas práticas." },
  { icon: "sliders", title: "Soluções personalizadas", text: "Avaliamos o espaço e a utilização antes de propor. Não há duas soluções iguais." },
  { icon: "leaf", title: "Foco na eficiência energética", text: "Procuramos sistemas que garantam conforto com um consumo de energia controlado." },
  { icon: "message", title: "Comunicação clara", text: "Explicamos o que vamos fazer, porquê e o que está incluído, sem linguagem complicada." },
  { icon: "calendar", title: "Manutenção preventiva", text: "Ajudamos a planear a manutenção para evitar avarias e prolongar a vida dos equipamentos." },
  { icon: "handshake", title: "Compromisso com a satisfação do cliente", text: "Acompanhamos o trabalho até ao fim e mantemo-nos disponíveis depois da intervenção." },
] as const;

export const processSteps = [
  { title: "Contacto", text: "O cliente apresenta a sua necessidade." },
  { title: "Avaliação", text: "A equipa analisa o pedido." },
  { title: "Proposta", text: "Apresentação de uma solução e orçamento, quando aplicável." },
  { title: "Intervenção", text: "Execução dos trabalhos acordados." },
  { title: "Acompanhamento", text: "Apoio posterior conforme o serviço contratado." },
] as const;

export const sectors = [
  { slug: "hoteis", title: "Hotéis e Alojamento", image: "/img/setores/hotel.webp", text: "Climatização dos quartos, espaços comuns e equipamentos técnicos." },
  { slug: "restaurantes", title: "Restaurantes", image: "/img/setores/restaurantes.webp", text: "Refrigeração comercial, ventilação, climatização e manutenção dos equipamentos abrangidos." },
  { slug: "comercio", title: "Comércio", image: "/img/setores/comercio.webp", text: "Sistemas de climatização para lojas e espaços comerciais." },
  { slug: "escritorios", title: "Escritórios", image: "/img/setores/escritorios.webp", text: "Conforto térmico, ventilação e manutenção dos sistemas instalados." },
  { slug: "industria", title: "Indústria", image: "/img/setores/industria.webp", text: "Manutenção de equipamentos e instalações técnicas conforme a capacidade operacional da empresa." },
  { slug: "condominios", title: "Condomínios", image: "/img/setores/condominios.webp", text: "Assistência a equipamentos e sistemas técnicos de utilização comum." },
] as const;

export const maintenanceContract = [
  "Levantamento dos equipamentos",
  "Planeamento de intervenções preventivas",
  "Inspeções e verificações técnicas",
  "Manutenção corretiva",
  "Registo das intervenções",
  "Relatórios técnicos, quando contratados",
  "Condições de assistência definidas em proposta",
];

export const values = ["Profissionalismo", "Rigor técnico", "Transparência", "Responsabilidade", "Inovação", "Orientação para o cliente"];
