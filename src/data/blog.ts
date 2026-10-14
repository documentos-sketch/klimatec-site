export const blogCategories = [
  "Ar Condicionado",
  "Aquecimento",
  "Refrigeração",
  "Manutenção Preventiva",
  "Eficiência Energética",
  "Dicas Técnicas",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  image: string;
  readingMinutes: number;
  /** Conteúdo em blocos simples: parágrafos, subtítulos e listas */
  body: ({ h: string } | { p: string } | { ul: string[] })[];
};

export const posts: Post[] = [
  {
    slug: "quando-fazer-manutencao-ar-condicionado",
    title: "Quando deve fazer a manutenção do ar condicionado?",
    excerpt: "A periodicidade certa depende da utilização e do tipo de espaço. Saiba o que considerar e o que uma manutenção deve incluir.",
    category: "Manutenção Preventiva",
    image: "/img/servicos/ar-condicionado.webp",
    readingMinutes: 4,
    body: [
      { p: "Um equipamento de ar condicionado acumula pó, humidade e resíduos ao longo do tempo. Sem manutenção, perde rendimento, consome mais energia e fica mais exposto a avarias. A pergunta mais comum é: com que frequência deve ser feita?" },
      { h: "Depende da utilização" },
      { p: "Não existe uma resposta única. Em habitações com utilização sazonal, é habitual planear uma intervenção por ano, idealmente antes da época de maior utilização. Em espaços comerciais, restaurantes ou escritórios com utilização diária e prolongada, pode justificar-se uma periodicidade maior." },
      { ul: [
        "Intensidade de utilização (horas por dia e meses por ano).",
        "Tipo de espaço: cozinhas, zonas com pó ou grande circulação de pessoas sujam os filtros mais depressa.",
        "Recomendações do fabricante do equipamento.",
        "Presença de animais de estimação ou pessoas com sensibilidade à qualidade do ar.",
      ] },
      { h: "O que deve incluir uma manutenção" },
      { ul: [
        "Limpeza ou substituição de filtros.",
        "Limpeza das baterias (permutadores) da unidade interior e exterior.",
        "Verificação e limpeza do sistema de drenagem de condensados.",
        "Verificação do funcionamento geral, ruídos e temperaturas de insuflação.",
        "Inspeção visual de ligações elétricas e frigoríficas acessíveis.",
      ] },
      { h: "Entre manutenções" },
      { p: "Muitos equipamentos permitem que o utilizador limpe os filtros com regularidade, seguindo o manual. É um gesto simples que ajuda a manter o desempenho até à próxima intervenção técnica." },
      { p: "Se tem dúvidas sobre a periodicidade adequada ao seu caso, peça-nos uma avaliação: indicamos o plano de manutenção mais ajustado ao seu equipamento e à forma como o utiliza." },
    ],
  },
  {
    slug: "como-escolher-ar-condicionado-casa",
    title: "Como escolher o ar condicionado ideal para a sua casa?",
    excerpt: "Potência, tipo de sistema, eficiência e instalação: os fatores que fazem a diferença no conforto e na fatura.",
    category: "Ar Condicionado",
    image: "/img/particulares.webp",
    readingMinutes: 5,
    body: [
      { p: "Escolher um ar condicionado não é apenas escolher uma marca ou um preço. A solução certa depende do espaço, da forma como é utilizado e das condições da instalação." },
      { h: "1. Dimensionar a potência" },
      { p: "Um equipamento subdimensionado trabalha no limite e não garante conforto; um sobredimensionado liga e desliga com frequência, o que reduz a eficiência e o conforto. A potência adequada depende da área, do pé-direito, da exposição solar, do isolamento e do número de ocupantes. Por isso, a avaliação no local é importante." },
      { h: "2. Escolher o tipo de sistema" },
      { ul: [
        "Split (mural): uma unidade interior por unidade exterior; solução comum para uma divisão.",
        "Multi-split: várias unidades interiores ligadas a uma única unidade exterior.",
        "Condutas: distribuição de ar por condutas, discreta e adequada a várias divisões.",
      ] },
      { h: "3. Olhar para a eficiência energética" },
      { p: "A etiqueta energética e os valores de eficiência sazonal (SEER para arrefecimento e SCOP para aquecimento) ajudam a comparar modelos. Valores mais elevados indicam, em geral, menor consumo para o mesmo conforto." },
      { h: "4. Não esquecer a instalação" },
      { p: "Uma boa instalação é tão importante como o equipamento: localização das unidades, encaminhamento de tubagens e drenagem, alimentação elétrica adequada e arranque correto do sistema." },
      { p: "Na KlimaTEC, começamos sempre por perceber as suas necessidades e as características da casa antes de propor uma solução." },
    ],
  },
  {
    slug: "bomba-de-calor-ou-termoacumulador",
    title: "Bomba de calor ou termoacumulador: quais as diferenças?",
    excerpt: "Dois equipamentos para aquecer água, com princípios de funcionamento e consumos diferentes. Compare antes de decidir.",
    category: "Aquecimento",
    image: "/img/servicos/aquecimento.webp",
    readingMinutes: 4,
    body: [
      { p: "Para aquecer água quente sanitária, duas opções surgem com frequência: o termoacumulador elétrico e a bomba de calor. Ambos armazenam água quente num depósito, mas aquecem-na de forma muito diferente." },
      { h: "Termoacumulador elétrico" },
      { p: "Aquece a água através de uma resistência elétrica. É uma solução simples e com investimento inicial reduzido, mas toda a energia de aquecimento provém diretamente da eletricidade consumida." },
      { h: "Bomba de calor" },
      { p: "Retira energia do ar ambiente e transfere-a para a água através de um ciclo frigorífico. Por cada unidade de eletricidade consumida, consegue fornecer várias unidades de calor, o que se traduz, em geral, num consumo elétrico bastante inferior para a mesma quantidade de água quente." },
      { h: "O que comparar" },
      { ul: [
        "Investimento inicial e custo de utilização ao longo dos anos.",
        "Espaço disponível e localização (a bomba de calor precisa de circulação de ar).",
        "Consumo de água quente do agregado ou do negócio.",
        "Ruído de funcionamento e necessidades de manutenção.",
      ] },
      { p: "A escolha certa depende de cada caso. Uma avaliação técnica permite comparar as opções com base no seu consumo real e nas condições do local." },
    ],
  },
  {
    slug: "sinais-ar-condicionado-precisa-assistencia",
    title: "Sinais de que o ar condicionado precisa de assistência",
    excerpt: "Ruídos, cheiros, gotejamento ou perda de rendimento: saiba reconhecer os sinais de alerta antes que a avaria se agrave.",
    category: "Dicas Técnicas",
    image: "/img/hero-assistencia-mobile.webp",
    readingMinutes: 3,
    body: [
      { p: "Muitas avarias dão sinais antes de acontecerem. Estar atento a estes sintomas ajuda a intervir mais cedo e, muitas vezes, a evitar reparações mais complexas." },
      { h: "Sinais de alerta" },
      { ul: [
        "O equipamento arrefece ou aquece menos do que o habitual.",
        "Ruídos invulgares: estalidos, vibrações ou zumbidos.",
        "Cheiros desagradáveis ao ligar o equipamento.",
        "Água a pingar da unidade interior.",
        "Formação de gelo nas tubagens ou na unidade.",
        "Códigos de erro no visor ou no comando.",
        "Aumento inesperado do consumo de eletricidade.",
      ] },
      { h: "O que fazer" },
      { p: "Verifique primeiro se os filtros estão limpos e se o comando está corretamente configurado. Se o problema persistir, desligue o equipamento quando houver água a pingar, gelo ou cheiro a queimado, e peça uma avaliação técnica." },
      { p: "Ao contactar-nos, indique a marca e o modelo do equipamento e, se possível, envie fotografias: ajuda a preparar a intervenção." },
    ],
  },
  {
    slug: "reduzir-consumo-energetico-climatizacao",
    title: "Como reduzir o consumo energético da climatização?",
    excerpt: "Pequenos hábitos e uma manutenção regular podem fazer uma diferença significativa no consumo e no conforto.",
    category: "Eficiência Energética",
    image: "/img/equipamentos.webp",
    readingMinutes: 4,
    body: [
      { p: "A climatização pode representar uma parte importante da fatura de energia. A boa notícia é que há medidas simples que ajudam a reduzir o consumo sem abdicar do conforto." },
      { h: "Na utilização diária" },
      { ul: [
        "Defina temperaturas moderadas: cada grau a mais no arrefecimento (ou a menos no aquecimento) conta.",
        "Utilize a programação e os temporizadores para climatizar apenas quando necessário.",
        "Mantenha portas e janelas fechadas com o equipamento em funcionamento.",
        "Use estores e cortinas para reduzir o ganho solar no verão.",
      ] },
      { h: "No equipamento" },
      { ul: [
        "Mantenha os filtros limpos.",
        "Garanta que a unidade exterior tem espaço livre para circulação de ar.",
        "Faça manutenção preventiva com a periodicidade adequada.",
        "Ao substituir, considere equipamentos com melhor eficiência sazonal.",
      ] },
      { p: "Um equipamento bem dimensionado, bem instalado e bem mantido é a base de uma climatização eficiente." },
    ],
  },
  {
    slug: "manutencao-preventiva-hoteis-restaurantes",
    title: "A importância da manutenção preventiva em hotéis e restaurantes",
    excerpt: "Em negócios que dependem do conforto dos clientes e da conservação de produtos, uma avaria tem custos que vão além da reparação.",
    category: "Manutenção Preventiva",
    image: "/img/setores/restaurantes.webp",
    readingMinutes: 4,
    body: [
      { p: "Num hotel, um quarto sem climatização pode significar um cliente insatisfeito. Num restaurante, uma câmara frigorífica parada pode significar perda de produto e interrupção do serviço. Nestes negócios, prevenir é quase sempre mais económico do que reparar." },
      { h: "O que a manutenção preventiva permite" },
      { ul: [
        "Reduzir o risco de avarias inesperadas em momentos críticos.",
        "Manter o rendimento dos equipamentos e controlar o consumo de energia.",
        "Planear as intervenções fora das horas de maior atividade.",
        "Ter um histórico técnico de cada equipamento.",
        "Prever e organizar os custos de manutenção.",
      ] },
      { h: "Como organizar" },
      { p: "O primeiro passo é um levantamento dos equipamentos existentes: climatização, ventilação, extração e equipamentos de frio. A partir daí, define-se um plano de intervenções com a periodicidade adequada a cada sistema e à utilização do espaço." },
      { p: "A KlimaTEC prepara propostas de contrato de manutenção ajustadas à realidade de cada negócio. Fale connosco para avaliarmos as suas instalações." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const categorySlug = (c: string) =>
  c.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-");
