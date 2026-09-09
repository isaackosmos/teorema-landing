import {
  Wallet,
  ShoppingCart,
  Package,
  FileText,
  Users,
  Factory,
  ShieldCheck,
  Smartphone,
  Check,
  Phone,
  Mail,
} from "lucide-react";
import type { ProductContent } from "@/content/types";

/**
 * Content for the V3ndor Praxis (ERP) landing page.
 * Copy extracted verbatim from reference/vendor-praxis-prototype.html — kept
 * in Portuguese because that is this product's actual target-market copy.
 */
const vendorPraxis: ProductContent = {
  meta: {
    productName: "V3ndor Praxis",
    logo: { src: "/logos/vendor-praxis-logo.jpg", alt: "V3ndor Praxis" },
    supportEmail: "teorema@teorema.inf.br",
    whatsapp: {
      phoneDisplay: "42-3035-4030",
      link: "https://wa.me/554230354030?text=Olá!%20Quero%20conhecer%20o%20V3ndor%20Praxis%20-%20Seu%20negócio%20muda.%20Seu%20sistema%20acompanha.",
    },
  },

  header: {
    nav: [
      { label: "Plataforma", href: "#plataforma" },
      { label: "Planos", href: "#planos" },
      { label: "Suporte", href: "#suporte" },
      { label: "Área Cliente", href: "#area" },
      { label: "Contato", href: "#contato" },
    ],
    cta: { label: "Começar agora", href: "#planos" },
  },

  hero: {
    badgeText: "Novo • 100% em nuvem",
    headlineLine1: "O ERP que cresce",
    headlineLine2Prefix: "junto com a ",
    headlineHighlight: "sua empresa.",
    subheadBold: "Seu negócio muda. Seu sistema acompanha.",
    subheadRest:
      " Unifique financeiro, vendas, estoque e fiscal em uma plataforma rápida, segura e sem limites para escalar.",
    primaryCta: { label: "Começar agora", href: "#planos" },
    secondaryCta: { label: "Ver plataforma", href: "#plataforma" },
    socialProof: {
      avatarCount: 3,
      customersLine: "+2.847 empresas",
      customersSuffix: "migraram este mês",
      rating: 4.9,
      ratingSuffix: "satisfação",
    },
    preview: {
      windowTitle: "Financeiro Geral • Hoje",
      syncedLabel: "Sincronizado",
      stats: [
        { label: "Financeiro", value: "R$ 284k", delta: "+12%", icon: Wallet, tone: "positive" },
        { label: "Vendas", value: "1.248", delta: "+8%", icon: ShoppingCart, tone: "brand" },
        { label: "Estoque", value: "98,2%", delta: "Ok", icon: Package, tone: "accent" },
      ],
      chart: {
        label: "Faturamento últimos 6 meses",
        values: [32, 48, 36, 64, 52, 80],
      },
      ordersTitle: "Pedidos recentes",
      ordersLinkLabel: "ver todos",
      orders: [
        { id: "#3821", client: "Mercado Central", amount: "R$ 1.420,00", status: "Pago" },
        { id: "#3820", client: "Distribuidora Sul", amount: "R$ 8.900,00", status: "Faturado" },
        { id: "#3819", client: "Loja Matriz", amount: "R$ 320,00", status: "Pendente" },
      ],
      floatingNotes: [
        { icon: Check, title: "NF-e emitida", subtitle: "há 2 min", position: "top-left" },
        { icon: Wallet, title: "+23% de margem", subtitle: "vs mês anterior", position: "bottom-right" },
      ],
    },
  },

  features: {
    eyebrow: "Plataforma completa",
    heading: "Tudo que você precisa em um só lugar",
    description:
      "Módulos integrados que conversam entre si. Sem integrações frágeis, sem retrabalho.",
    items: [
      { icon: Wallet, title: "Financeiro Completo", description: "Fluxo de caixa, contas a pagar e receber, DRE e conciliação automática." },
      { icon: ShoppingCart, title: "Vendas Inteligentes", description: "PDV, orçamentos, pedidos e comissões em um fluxo sem atrito." },
      { icon: Package, title: "Estoque Preciso", description: "Controle por lote, validade, grade e inventário com rastreabilidade." },
      { icon: FileText, title: "Fiscal Sem Dor", description: "NF-e, NFS-e, NFC-e e SPED com emissão e armazenamento automático." },
      { icon: Users, title: "CRM e Clientes", description: "Histórico completo, funil e régua de relacionamento integrada." },
      { icon: Factory, title: "Produção e OS", description: "Ordem de produção, apontamentos e cálculo de custo real." },
      { icon: ShieldCheck, title: "Segurança Total", description: "Backup diário, criptografia e permissões granulares por usuário." },
      { icon: Smartphone, title: "100% Mobile", description: "Acesse de qualquer lugar. App nativo e responsivo em nuvem." },
    ],
  },

  process: {
    badge: "Cresça com liberdade",
    heading: "Uma plataforma que evolui com você",
    description:
      "Do primeiro orçamento ao controle de múltiplas filiais. O V3ndor Praxis acompanha cada fase sem você precisar trocar de ERP.",
    callout: {
      icon: ShieldCheck,
      title: "Migração segura",
      description: "Trazemos seus dados sem parar a operação",
    },
    steps: [
      { step: "01", title: "Comece simples", description: "Ative apenas os módulos que você precisa hoje. Sem complexidade." },
      { step: "02", title: "Automatize processos", description: "Conecte vendas, estoque e financeiro. Elimine retrabalho e planilhas." },
      { step: "03", title: "Escale sem travar", description: "Adicione filiais, usuários e integrações sem trocar de sistema." },
      { step: "04", title: "Decida com dados", description: "Dashboards em tempo real para crescer com previsibilidade." },
    ],
  },

  pricing: {
    heading: "Planos que acompanham seu momento",
    description: "Transparente, sem fidelidade escondida. Cancele quando quiser.",
    plans: [
      {
        name: "Starter",
        price: "R$ 115",
        priceSuffix: "/mês",
        description: "Para quem está começando a organizar",
        features: [
          "1 usuário",
          "1 empresa",
          "Módulos financeiro, estoque e vendas",
          "500 NFs/mês",
          "Suporte humanizado",
        ],
        cta: { label: "Começar no Starter", href: "#contato" },
        // Destaque fica no Starter porque é o único plano disponível hoje —
        // o Business ainda não tem preço nem data de lançamento.
        highlighted: true,
      },
      {
        name: "Business",
        // Sem preço definido: o plano ainda não foi lançado. Nenhuma feature
        // listada até que o escopo do plano esteja fechado.
        price: "Em breve",
        description: "Para quem está escalando",
        features: [],
        cta: { label: "Quero ser avisado", href: "#contato" },
      },
      {
        name: "Enterprise",
        price: "Sob consulta",
        description: "Para operações com múltiplas filiais",
        features: [
          "Usuários ilimitados",
          "Filiais e centros de custo",
          "Onboarding dedicado",
          "Gerente de sucesso",
          "SLA garantido",
        ],
        cta: {
          label: "Falar com especialista",
          href: "https://wa.me/554230354030?text=Olá!%20Quero%20conhecer%20o%20V3ndor%20Praxis%20-%20Seu%20negócio%20muda.%20Seu%20sistema%20acompanha.",
          external: true,
        },
      },
    ],
  },

  benefits: {
    headingPrefix: "Por que empresas escolhem o ",
    headingHighlight: "V3ndor Praxis",
    description:
      "Não somos apenas um ERP. Somos a base operacional que tira você da planilha e coloca no controle total, com suporte que realmente responde.",
    complianceBadge: { icon: ShieldCheck, label: "LGPD compliant • Hospedado no Brasil" },
    items: [
      "Implantação assistida em até 7 dias",
      "Suporte humano em menos de 3 minutos",
      "100% em nuvem, sem servidor local",
      "Integração com marketplaces e bancos",
      "Atualizações constantes sem custo extra",
      "API aberta para suas integrações",
      "Treinamento incluso para toda equipe",
      "Performance mesmo com alto volume",
      "Dados criptografados e backup automático",
      "Cresce junto: do MEI ao grande varejo",
    ],
  },

  appShowcase: {
    eyebrow: { icon: Smartphone, label: "Área do Cliente" },
    heading: "Seu escritório no bolso, com governança total",
    description:
      "Acompanhe vendas em tempo real, aprove contas, libere pedidos e veja seu DRE onde estiver. Permissões por usuário para controle absoluto.",
    pills: [
      { icon: Wallet, label: "Dashboard executivo" },
      { icon: Users, label: "Gestão de equipes" },
      { icon: Check, label: "Sincronização instantânea" },
    ],
    cta: { label: "Acessar demonstração", href: "#contato" },
    mockup: {
      greeting: "Olá, Carlos \u{1F44B}",
      stats: [
        { label: "Hoje", value: "R$ 12.840", tone: "brand" },
        { label: "Pedidos", value: "24 novos", tone: "accent" },
      ],
      listItems: [
        { title: "Pedido #3821", subtitle: "Aguardando aprovação" },
        { title: "Pedido #3822", subtitle: "Aguardando aprovação" },
        { title: "Pedido #3823", subtitle: "Aguardando aprovação" },
      ],
    },
  },

  support: {
    heading: "Suporte que não te deixa na mão",
    description: "Humano, rápido e especialista no seu segmento. Não é bot lendo script.",
    statusLabel: "Online agora • Tempo médio 1m 42s",
    channels: [
      { icon: Phone, title: "Telefone e WhatsApp", description: "Fale com um especialista que conhece seu negócio. Segunda a sábado." },
      { icon: Mail, title: "E-mail", description: "Escreva para teorema@teorema.inf.br e receba resposta de um especialista." },
    ],
  },

  testimonials: {
    items: [
      {
        name: "Juliana M.",
        role: "Varejo • 12 lojas",
        text: "Saímos de 3 sistemas para 1. Fechamento que levava 3 dias agora leva 2 horas. Suporte é surreal de rápido.",
        rating: 5,
      },
      {
        name: "Rafael C.",
        role: "Distribuição • 80 colaboradores",
        text: "Implantação em 5 dias. O comercial acompanha pedidos pelo celular e o financeiro finalmente bate.",
        rating: 5,
      },
      {
        name: "Carlos E.",
        role: "Indústria • Faturamento 12M",
        text: "O Business nos deu visão de custo real. Descobrimos produtos com margem negativa que nem sabíamos.",
        rating: 5,
      },
    ],
  },

  ctaBanner: {
    badgeText: "Vagas limitadas para implantação este mês",
    headingPrefix: "Pronto para ter um ERP que ",
    headingHighlight: "não te limita?",
    description:
      "Migramos seus dados e treinamos sua equipe. Sem fidelidade, com suporte humano de verdade do primeiro dia em diante.",
    primaryCta: { label: "Começar agora", href: "#planos" },
    secondaryCta: { label: "Agendar demonstração", href: "#suporte" },
    footnote: "✓ Sem fidelidade • ✓ Suporte humano • ✓ Implantação assistida",
  },

  footer: {
    description:
      "O ERP em nuvem que cresce junto com a sua empresa. Financeiro, vendas, estoque e fiscal em um só lugar.",
    complianceBadges: ["LGPD", "SSL 256bits", "BR Hosting"],
    columns: [
      { title: "Plataforma", items: ["Financeiro", "Vendas e PDV", "Estoque", "Fiscal", "Produção"] },
      { title: "Empresa", items: ["Sobre nós", "Planos", "Suporte", "Área Cliente", "Contato"] },
    ],
    contactColumnTitle: "Contato",
    copyrightTemplate: "© {year} V3ndor Praxis. Todos os direitos reservados.",
    legalLinks: ["Termos", "Privacidade"],
  },

  whatsappButton: {
    tooltip: "Fale com um consultor",
  },
};

export default vendorPraxis;
