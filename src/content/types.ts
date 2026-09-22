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
  id: string;
  client: string;
  amount: string;
  status: string;
}

export interface HeroFloatingNote {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  position: "top-left" | "bottom-right";
}

export interface HeroPreview {
  windowTitle: string;
  syncedLabel: string;
  stats: HeroStat[];
  chart: { label: string; values: number[] };
  ordersTitle: string;
  ordersLinkLabel: string;
  orders: HeroOrder[];
  floatingNotes: HeroFloatingNote[];
}

export interface HeroContent {
  badgeText: string;
  headlineLine1: string;
  headlineLine2Prefix: string;
  headlineHighlight: string;
  /** Optional bold lead-in clause before `subheadRest`. */
  subheadBold?: string;
  subheadRest: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  /** Short trust-signal line under the CTAs, e.g. ["100% web", "Acesso de onde estiver"]. */
  trustBadges: string[];
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
  eyebrow: { icon: LucideIcon; label: string };
  heading: string;
  description: string;
  pills: { icon: LucideIcon; label: string }[];
  cta: CtaLink;
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
  footnote: string;
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
