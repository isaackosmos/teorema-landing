import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { PricingContent } from "@/content/types";

/**
 * Pricing tiers (`id="planos"` — no longer nav-linked while pricing is
 * being finalized, but kept as a stable anchor for direct/campaign links).
 * When `plans` is empty, renders a single fallback CTA instead of plan cards.
 */
export function Pricing({ content }: { content: PricingContent }) {
  return (
    <section id="planos" className="relative overflow-hidden border-t border-gray-100 bg-white py-section-y-sm">
      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          aria-hidden
          className="pointer-events-none select-none object-cover opacity-70"
        />
      )}
      <Container className="relative">
        <SectionHeading heading={content.heading} description={content.description} align="center" className="mx-auto max-w-[720px]" />

        {content.plans.length === 0 ? (
          <div className="mx-auto mt-10 flex max-w-[480px] flex-col items-center gap-4 text-center">
            {content.fallbackCta && (
              <Button href={content.fallbackCta.href} size="lg">
                {content.fallbackCta.label} <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            {content.fallbackSubtext && <p className="text-body-sm text-muted">{content.fallbackSubtext}</p>}
          </div>
        ) : (
        <div className="mx-auto mt-12 grid max-w-[1080px] gap-6 lg:grid-cols-3">
          {content.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-lg border p-7",
                plan.highlighted
                  ? "border-navy bg-gradient-to-br from-navy to-navy-mid text-white shadow-elevated lg:-translate-y-2 lg:scale-[1.04]"
                  : "border-gray-100 bg-white shadow-card",
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-ink">
                  {plan.badge}
                </div>
              )}

              <div className={cn("text-[13px] font-semibold uppercase tracking-widest", plan.highlighted ? "text-white/60" : "text-muted")}>
                {plan.name}
              </div>
              <div className="mt-3 text-[32px] font-extrabold tracking-tight text-inherit">
                {plan.price}
                {plan.priceSuffix && <span className="text-[14px] font-medium opacity-60">{plan.priceSuffix}</span>}
              </div>
              <div className={cn("mt-2 text-[14px]", plan.highlighted ? "text-white/70" : "text-muted")}>{plan.description}</div>

              {/* A plan with no feature list yet (e.g. an unreleased tier)
                  renders no list at all, rather than an empty spaced block. */}
              <div className={cn("flex-1 space-y-3", plan.features.length > 0 && "mt-6")}>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 text-[14px]">
                    <div className={cn("grid h-5 w-5 place-items-center rounded-full", plan.highlighted ? "bg-white/10" : "bg-brand-tint")}>
                      <Check className={cn("h-3.5 w-3.5", plan.highlighted ? "text-accent" : "text-brand")} />
                    </div>
                    <span className={plan.highlighted ? "text-white/90" : "text-ink"}>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={plan.cta.href}
                target={plan.cta.external ? "_blank" : undefined}
                rel={plan.cta.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full text-[14px] font-semibold transition",
                  plan.highlighted ? "bg-brand text-white hover:bg-brand-hover" : "bg-navy text-white hover:bg-navy-mid",
                )}
              >
                {plan.cta.label} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        )}
      </Container>
    </section>
  );
}
