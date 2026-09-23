import type { LucideIcon } from "lucide-react";

/**
 * Shared content schema for a product landing page.
 *
 * Every field here is copy or data — never JSX, never Tailwind classes
 * beyond the semantic `tone` enums below. Section components in
 * /components/sections only ever render this shape; they must never
 * import a product file directly or hardcode strings that belong here.
 *
 * See CLAUDE.md → "Adding a new product landing page" for how to use this.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteMeta {
  productName: string;
  logo: { src: string; alt: string };
  /** Logo variant for dark surfaces (the hero mockup sidebar). Falls back to the product name as text. */
  logoOnDark?: { src: string; alt: string };
  supportEmail: string;
  whatsapp: {
    /** Human-readable phone number, e.g. "42-3035-4030". */
    phoneDisplay: string;
    /** Full wa.me deep link, including prefilled message. */
    link: string;
  };
}

export interface HeaderContent {
  nav: NavLink[];
  cta: CtaLink;
}

export interface HeroStat {
  label: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  tone: "brand" | "accent" | "positive";
}

export interface HeroOrder {
  /** e.g. "Pedido #3821". */
  title: string;
  /** e.g. "Cliente: Mercado Central". */
  subtitle: string;
  amount: string;
  status: string;
  statusTone: "positive" | "brand" | "warning";
}

export interface HeroFloatingNote {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** `positive` renders the icon on a filled green badge. Defaults to `brand`. */
  tone?: "brand" | "positive";
}

/** Stylized dashboard screenshot shown beside the hero copy. */
export interface HeroPreview {
  /** Sidebar menu of the mockup; the first item renders as the active one. */
  sidebar: { icon: LucideIcon; label: string }[];
  searchPlaceholder: string;
  userName: string;
  title: string;
  subtitle: string;
  stats: HeroStat[];
  chart: {
    label: string;
    /** Bar heights as a percentage of the chart height. */
    values: number[];
    /** One axis label per value. */
    labels: string[];
    /** Legend entries — first is brand blue, second accent green. */
    legend?: [string, string];
  };
  ordersTitle: string;
  orders: HeroOrder[];
  floatingNotes: HeroFloatingNote[];
}

export interface TrustBadge {
  icon?: LucideIcon;
  label: string;
}

export interface HeroContent {
  badgeText: string;
  headlineLine1: string;
  headlineLine2Prefix: string;
  headlineHighlight: string;
  /** Optional closing line after the highlight, rendered in the regular heading color. */
  headlineSuffix?: string;
  /** Optional bold lead-in clause before `subheadRest`. */
  subheadBold?: string;
  subheadRest: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  /** Short trust-signal line under the CTAs, e.g. ["100% web", "Acesso de onde estiver"]. */
  trustBadges: TrustBadge[];
  preview: HeroPreview;
  /** Optional decorative background image behind the hero content. */
  backgroundImage?: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeaturesContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: FeatureItem[];
  /** Optional decorative background image behind the section. */
  backgroundImage?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  badge: string;
  heading: string;
  description: string;
  callout: { icon: LucideIcon; title: string; description: string };
  steps: ProcessStep[];
  /** Optional decorative background image behind the section. */
  backgroundImage?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  cta: CtaLink;
  highlighted?: boolean;
  badge?: string;
}

export interface PricingContent {
  heading: string;
  description: string;
  /** Empty when pricing isn't finalized yet — the section then renders the fallback CTA below instead of plan cards. */
  plans: PricingPlan[];
  /** Fallback CTA shown when `plans` is empty. */
  fallbackCta?: CtaLink;
  fallbackSubtext?: string;
  /** Optional decorative background image behind the section. */
  backgroundImage?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface BenefitsContent {
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  /** Omitted until a compliance claim (LGPD, hosting, etc.) is formally confirmed. */
  complianceBadge?: { icon: LucideIcon; label: string };
  items: BenefitItem[];
  /** Optional decorative background image behind the section. */
  backgroundImage?: string;
}

export interface AppShowcaseContent {
  eyebrow: { icon?: LucideIcon; label: string };
  heading: string;
  description: string;
  pills: { icon: LucideIcon; label: string }[];
  cta: CtaLink;
  /** Optional dark highlight card shown beside the phone mockup. */
  sideCard?: { icon: LucideIcon; title: string; description: string };
  mockup: {
    greeting: string;
    stats: { label: string; value: string; tone: "brand" | "accent" }[];
    listItems: { title: string; subtitle: string }[];
  };
  /** Optional decorative background image layered under the gradient card. */
  backgroundImage?: string;
}

export interface SupportChannel {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Optional direct contact (email address, phone) shown under the description. */
  contact?: CtaLink;
}

export interface SupportContent {
  heading: string;
  description: string;
  /** Omitted until a real, backed response-time claim exists. */
  statusLabel?: string;
  channels: SupportChannel[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface TestimonialsContent {
  items: Testimonial[];
}

export interface CtaBannerContent {
  /** Omitted until there's a real, time-bound offer to announce. */
  badgeText?: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  /** Omitted when the section has a single, centered CTA instead of two. */
  primaryCta?: CtaLink;
  secondaryCta: CtaLink;
  /** Short icon + label trust signals under the description. */
  highlights?: { icon: LucideIcon; label: string }[];
  /** Plain-text fallback for `highlights`. */
  footnote?: string;
  /** Direct contact email shown alongside the site's general phone number. */
  contactEmail?: string;
}

export interface FooterColumn {
  title: string;
  items: string[];
}

export interface FooterContent {
  description: string;
  /** Omitted until the underlying claims (LGPD, hosting, SSL) are formally confirmed. */
  complianceBadges?: string[];
  columns: FooterColumn[];
  contactColumnTitle: string;
  /** Copyright line. Use the literal token "{year}" — it is replaced at render time. */
  copyrightTemplate: string;
  legalLinks: string[];
}

export interface WhatsAppButtonContent {
  tooltip: string;
}

export interface EvolutionPanel {
  icon: LucideIcon;
  badge?: string;
  title: string;
  items: string[];
}

/**
 * "Before / after" comparison section for a product that evolved from an
 * earlier, narrower Teorema solution. Optional — see CLAUDE.md → "Optional
 * sections"; a product with no prior-product story should omit it.
 */
export interface EvolutionContent {
  badge: string;
  heading: string;
  description: string;
  before: EvolutionPanel;
  after: EvolutionPanel;
  calloutIcon: LucideIcon;
  calloutText: string;
  /** Optional decorative background image behind the section. */
  backgroundImage?: string;
}

/** Full content contract a product landing page must provide. */
export interface ProductContent {
  meta: SiteMeta;
  header: HeaderContent;
  hero: HeroContent;
  features: FeaturesContent;
  process: ProcessContent;
  /** Optional — see CLAUDE.md → "Optional sections". */
  evolution?: EvolutionContent;
  pricing: PricingContent;
  benefits: BenefitsContent;
  appShowcase: AppShowcaseContent;
  support: SupportContent;
  /** Optional — see CLAUDE.md → "Optional sections". */
  testimonials?: TestimonialsContent;
  ctaBanner: CtaBannerContent;
  footer: FooterContent;
  whatsappButton: WhatsAppButtonContent;
}
