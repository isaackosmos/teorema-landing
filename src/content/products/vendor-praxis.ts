import {
  Wallet,
  ShoppingCart,
  ShoppingBag,
  Package,
  FileText,
  BarChart3,
  Globe,
  ShieldCheck,
  Smartphone,
  Eye,
  LayoutGrid,
  Check,
  Phone,
  Mail,
  Monitor,
  TrendingUp,
  House,
  Users,
  Cloud,
  Clock,
  Headphones,
  CircleDollarSign,
  ClipboardList,
  Receipt,
  Tablet,
} from "lucide-react";
import type { ProductContent } from "@/content/types";

/**
 * Content for the V3ndor Praxis (ERP) landing page.
 * Copy follows the marketing content brief (2026-09) — only recursos
 * already mapped for the current version of the Praxis are listed;
 * unconfirmed claims (implantation SLAs, integrations, compliance
 * badges, response-time stats) are left out until validated.
 */
const vendorPraxis: ProductContent = {
  meta: {
    productName: "V3ndor Praxis",
    logo: { src: "/logos/vendor-praxis-logo-gradient.png", alt: "V3ndor Praxis" },
    logoOnDark: { src: "/logos/vendor-praxis-logo.jpg", alt: "V3ndor Praxis" },
    supportEmail: "teorema@teorema.inf.br",
    whatsapp: {
      phoneDisplay: "42-3035-4030",
      link: "https://wa.me/554230354030?text=Olá!%20Quero%20conhecer%20o%20V3ndor%20Praxis.",
    },
  },

  header: {
    nav: [
      { label: "Plataforma", href: "#" },
      { label: "Recursos", href: "#recursos" },
      { label: "Por que V3ndor Praxis", href: "#por-que" },
      { label: "Suporte", href: "#suporte" },
      { label: "Área do Cliente", href: "#area" },
      { label: "Contato", href: "#contato" },
    ],
    cta: { label: "Acesse o Praxis", sublabel: "Entrar", href: "https://app.vendor.inf.br/auth", external: true },
  },

  hero: {
    badgeText: "100% WEB • GESTÃO INTEGRADA",
    headlineLine1: "Sua empresa evolui.",
    headlineLine2Prefix: "O ",
    headlineHighlight: "V3ndor Praxis",
    headlineSuffix: "evolui com ela.",
    subheadRest:
      "Uma plataforma de gestão 100% web que integra os principais processos da sua empresa e permite ampliar recursos conforme o seu negócio cresce.",
    primaryCta: { label: "Conheça o V3ndor Praxis", href: "#recursos" },
    secondaryCta: { label: "Ver recursos", href: "#recursos" },
    trustBadges: [
      { icon: Cloud, label: "100% web" },
      { icon: Smartphone, label: "Acesso de onde estiver" },
      { icon: BarChart3, label: "Gestão integrada" },
    ],
    backgroundImage: "/backgrounds/hero-waves.webp",
    preview: {
      sidebar: [
        { icon: House, label: "Início" },
        { icon: ShoppingCart, label: "Vendas" },
        { icon: ShoppingBag, label: "Compras" },
        { icon: Package, label: "Estoque" },
        { icon: Wallet, label: "Financeiro" },
        { icon: FileText, label: "Fiscal" },
        { icon: BarChart3, label: "Relatórios" },
        { icon: Users, label: "Cadastros" },
      ],
      searchPlaceholder: "Buscar no sistema...",
      userName: "Carlos",
      title: "Visão Geral",
      subtitle: "Acompanhe os principais indicadores da sua empresa",
      stats: [
        { label: "Financeiro", value: "R$ 284.320", delta: "↑ 12%", icon: Wallet, tone: "positive" },
        { label: "Vendas", value: "1.248", delta: "↑ 8%", icon: ShoppingCart, tone: "brand" },
        { label: "Estoque", value: "98,2%", delta: "● Em dia", icon: Package, tone: "brand" },
      ],
      chart: {
        label: "Evolução do faturamento",
        values: [22, 38, 58, 50, 66, 92],
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        legend: ["Vendas", "Receitas"],
      },
      ordersTitle: "Movimentações recentes",
      orders: [
        { title: "Pedido #3821", subtitle: "Cliente: Mercado Central", amount: "R$ 1.420,00", status: "Pago", statusTone: "positive" },
        { title: "Pedido #3820", subtitle: "Cliente: Distribuidora Sul", amount: "R$ 8.900,00", status: "Em separação", statusTone: "brand" },
        { title: "Pedido #3819", subtitle: "Cliente: Loja Matriz", amount: "R$ 320,00", status: "Pendente", statusTone: "warning" },
      ],
      floatingNotes: [
        { icon: Globe, title: "Acesse", subtitle: "de onde estiver", position: "top-right" },
        { icon: Check, title: "100% WEB", position: "bottom-left", tone: "positive" },
      ],
    },
  },

  features: {
    eyebrow: "GESTÃO INTEGRADA",
    heading: "Sua empresa em um único ambiente",
    description:
      "Vendas, estoque, financeiro, fiscal e informações gerenciais trabalhando de forma integrada para simplificar a rotina da sua empresa.",
    items: [
      { icon: ShoppingCart, title: "Vendas e Orçamentos", description: "Crie orçamentos, transforme em pedidos e acompanhe suas vendas de forma simples." },
      { icon: Package, title: "Estoque", description: "Controle entradas, saídas, inventário, produtos, grades e disponibilidade." },
      { icon: CircleDollarSign, title: "Financeiro", description: "Acompanhe contas a pagar e receber, contas bancárias e fluxo de caixa." },
      { icon: ClipboardList, title: "Compras", description: "Organize pedidos de compra e acompanhe o abastecimento da empresa." },
      { icon: Receipt, title: "Fiscal", description: "Tenha os recursos fiscais integrados à operação, com mais organização e segurança." },
      { icon: BarChart3, title: "Gestão e Relatórios", description: "Acompanhe informações importantes para apoiar suas decisões." },
      { icon: Users, title: "Produtos e Cadastros", description: "Centralize clientes, produtos, categorias e formas de pagamento." },
      { icon: Tablet, title: "100% Web", description: "Acesse o V3ndor Praxis pelo navegador, de onde estiver, sem depender de uma única máquina." },
    ],
  },

  process: {
    badge: "CRESÇA COM LIBERDADE",
    heading: "Uma plataforma que evolui com você",
    description:
      "Comece com os recursos que fazem sentido para sua empresa hoje e amplie sua gestão conforme novas necessidades surgirem. O V3ndor Praxis foi pensado para acompanhar cada etapa do seu negócio.",
    callout: {
      icon: ShieldCheck,
      title: "Evolução segura",
      description: "Sua empresa evolui para uma plataforma mais completa com o acompanhamento da equipe Teorema.",
    },
    steps: [
      { step: "01", title: "Comece com o que precisa", description: "Utilize os recursos necessários para sua operação atual, sem tornar sua rotina mais complicada." },
      { step: "02", title: "Integre sua operação", description: "Centralize vendas, estoque, financeiro e demais processos importantes em um único ambiente." },
      { step: "03", title: "Amplie quando precisar", description: "Novas necessidades surgiram? O Praxis está preparado para incorporar mais recursos à sua gestão." },
      { step: "04", title: "Tenha informação para decidir", description: "Acompanhe dados e relatórios da sua empresa para tomar decisões com mais segurança." },
    ],
  },

  evolution: {
    badge: "UMA EVOLUÇÃO DO QUE VOCÊ JÁ CONHECE",
    heading: "Do emissor de notas para uma plataforma completa.",
    description:
      "O V3ndor Praxis representa um novo passo na evolução das soluções Teorema. Além da emissão fiscal, sua empresa passa a contar com novos recursos para organizar e acompanhar diferentes áreas do negócio em um único ambiente.",
    before: {
      icon: Monitor,
      badge: "ANTES",
      title: "Emissor de Notas",
      items: ["Emissão de notas", "Cadastro de clientes", "Cadastro de produtos", "Exportação de XML e DANFE", "Controles essenciais"],
    },
    after: {
      icon: TrendingUp,
      image: { src: "/logos/vendor-praxis-mark.png", alt: "" },
      badge: "AGORA",
      title: "V3ndor Praxis",
      items: [
        "Plataforma 100% web",
        "Acesso de qualquer lugar",
        "Vendas e orçamentos",
        "Compras",
        "Controle de estoque",
        "Financeiro",
        "Informações gerenciais",
        "Novos recursos conforme a evolução da plataforma",
      ],
    },
    calloutText: "Você não está apenas mudando de sistema. Está ampliando as possibilidades da sua gestão.",
  },

  pricing: {
    heading: "Uma solução para cada momento",
    description:
      "O V3ndor Praxis acompanha a necessidade da sua empresa. Cada empresa tem uma realidade diferente. Por isso, o V3ndor Praxis permite combinar recursos de acordo com as necessidades da sua operação.",
    // Sem planos publicados ainda — os valores estão em definição com a
    // equipe comercial. A seção renderiza o CTA de fallback abaixo.
    plans: [],
    fallbackCta: { label: "Fale com nossa equipe", href: "#contato" },
    fallbackSubtext: "Conheça as possibilidades e encontre a configuração adequada para sua empresa.",
    backgroundImage: "/backgrounds/hero-waves.webp",
  },

  benefits: {
    // Non-breaking space keeps "o" on the line with the product name.
    headingPrefix: "Por que escolher o ",
    headingHighlight: "V3ndor Praxis?",
    description:
      "Porque gestão não precisa ser complicada. O V3ndor Praxis une tecnologia, informação e facilidade de uso em uma plataforma preparada para acompanhar a evolução da sua empresa.",
    items: [
      { title: "100% web", description: "Acesse pelo navegador, sem ficar preso a uma máquina." },
      { title: "Gestão integrada", description: "Informações reunidas em um único ambiente." },
      { title: "Mais mobilidade", description: "Acompanhe sua empresa de onde estiver." },
      { title: "Mais controle", description: "Informações organizadas para sua operação." },
      { title: "Recursos que evoluem", description: "Novas funcionalidades conforme sua necessidade." },
      { title: "Atualizações da plataforma", description: "O sistema evolui para novas demandas." },
      { title: "Controle por usuários", description: "Organize o acesso às informações." },
      { title: "Informação para decidir", description: "Relatórios e dados da sua gestão." },
      { title: "Experiência Teorema", description: "Tecnologia de quem conhece a realidade das empresas." },
      { title: "Suporte especializado", description: "Equipe preparada para orientar você." },
    ],
  },

  appShowcase: {
    eyebrow: { label: "ÁREA DO CLIENTE" },
    heading: "Sua empresa com você, onde estiver.",
    description:
      "Acesse informações importantes da sua operação pelo V3ndor Praxis e acompanhe sua empresa com mais praticidade, mobilidade e controle.",
    pills: [
      { icon: Eye, label: "Visão da empresa" },
      { icon: LayoutGrid, label: "Informações organizadas" },
      { icon: Globe, label: "Acesso pela web" },
    ],
    cta: { label: "Conhecer o V3ndor Praxis", href: "#contato" },
    sideCard: {
      icon: Clock,
      title: "Mais mobilidade para o seu dia a dia.",
      description: "Acesse pelo computador, notebook, tablet ou celular.",
    },
    mockup: {
      greeting: "Olá, Carlos \u{1F44B}",
      stats: [
        { label: "Vendas hoje", value: "R$ 12.840", tone: "brand" },
        { label: "Pedidos", value: "24", tone: "accent" },
      ],
      listItems: [
        { title: "Pedido #3821", subtitle: "Aguardando aprovação" },
        { title: "Pedido #3822", subtitle: "Aguardando aprovação" },
        { title: "Pedido #3823", subtitle: "Aguardando aprovação" },
      ],
    },
  },

  support: {
    heading: "Suporte para acompanhar sua empresa",
    description: "Conte com uma equipe que conhece o sistema e está preparada para orientar você sempre que precisar.",
    channels: [
      { icon: Phone, title: "Telefone e WhatsApp", description: "Entre em contato com nossa equipe para tirar dúvidas e receber orientação sobre o V3ndor Praxis." },
      {
        icon: Mail,
        title: "E-mail",
        description: "Envie sua solicitação para nossa equipe e receba o atendimento necessário.",
        contact: { label: "teorema@teorema.inf.br", href: "mailto:teorema@teorema.inf.br" },
      },
    ],
  },

  // Depoimentos ocultos temporariamente (omitidos) — os atuais eram
  // fictícios. Reative com depoimentos reais de clientes Teorema.

  ctaBanner: {
    headingPrefix: "Sua empresa está pronta para o ",
    headingHighlight: "próximo passo?",
    description:
      "Conheça o V3ndor Praxis e descubra como uma plataforma 100% web pode trazer mais organização, mobilidade e controle para sua gestão.",
    primaryCta: {
      label: "Quero conhecer o V3ndor Praxis",
      href: "https://wa.me/554230354030?text=Olá!%20Quero%20conhecer%20o%20V3ndor%20Praxis.",
      external: true,
    },
    secondaryCta: { label: "Falar com a Teorema", href: "#suporte" },
    highlights: [
      { icon: Cloud, label: "100% web" },
      { icon: BarChart3, label: "Gestão integrada" },
      { icon: Headphones, label: "Suporte especializado" },
    ],
    // contactEmail ("rui@teorema.inf.br") omitted — the reference layout has
    // no phone/email row in the banner. Restore it here to show it again.
  },

  footer: {
    description:
      "V3ndor Praxis é a plataforma de gestão 100% web da Teorema, criada para simplificar processos e acompanhar a evolução da sua empresa.",
    columns: [
      {
        title: "V3ndor Praxis",
        items: [
          { label: "Plataforma", href: "#" },
          { label: "Recursos", href: "#recursos" },
          { label: "100% Web", href: "#recursos" },
          { label: "Área do Cliente", href: "#area" },
        ],
      },
      {
        title: "Teorema",
        items: [
          { label: "Sobre a Teorema", href: "https://teorema.inf.br/sobre/", external: true },
          { label: "Suporte", href: "https://dicas.teorema.inf.br/", external: true },
          { label: "Contato", href: "#contato" },
        ],
      },
    ],
    contactColumnTitle: "Atendimento",
    contactLabels: { phone: "Telefone", whatsapp: "WhatsApp", email: "E-mail" },
    copyrightTemplate: "© {year} Teorema Sistemas. Todos os direitos reservados.",
    legalLinks: ["Termos de Uso", "Política de Privacidade"],
  },

  // TODO(comercial): o preço e o "Sem fidelização" vêm do mockup e ainda
  // precisam ser confirmados antes de publicar — "R$ 000,00" é placeholder.
  planWidget: {
    badge: "PLANO INTERMEDIÁRIO",
    pricePrefix: "A partir de",
    price: "R$ 000,00",
    priceSuffix: "mensais",
    note: "Sem fidelização e com o suporte que sua empresa merece.",
    listTitle: "Desfrute de um ERP completo, não apenas um emissor de notas.",
    items: [
      "Plataforma 100% web",
      "Acesso de qualquer lugar",
      "Vendas e orçamentos",
      "Compras",
      "Controle de estoque",
      "Financeiro",
      "Informações gerenciais",
      "Suporte especializado",
    ],
    pitch: { prefix: "Venha para o ", highlight: "V3ndor Praxis", suffix: " e amplie as possibilidades da sua gestão." },
    pitchSubtext: "ERP completo para a rotina da sua empresa.",
    cta: {
      label: "Contrate agora",
      sublabel: "Clique e contrate",
      href: "https://wa.me/554230354030?text=Olá!%20Quero%20contratar%20o%20V3ndor%20Praxis.",
      external: true,
    },
    labels: { open: "Ver plano", close: "Fechar plano" },
  },

  whatsappButton: {
    tooltip: "Fale com um consultor",
  },
};

export default vendorPraxis;
