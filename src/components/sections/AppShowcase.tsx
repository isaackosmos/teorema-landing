"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";
import type { AppShowcaseContent } from "@/content/types";

const mockupStatToneClasses = {
  brand: { wrap: "bg-brand-tint", label: "text-muted" },
  accent: { wrap: "bg-accent-soft", label: "text-accent-ink" },
} as const;

/**
 * Customer-portal / mobile-app showcase: copy and access pills on the
 * left, a phone mockup and an optional navy highlight card on the right.
 * Anchor target for the header's "Área do Cliente" nav link (`id="area"`).
 * Optional for products without a companion app — see CLAUDE.md →
 * "Optional sections".
 */
export function AppShowcase({ content }: { content: AppShowcaseContent }) {
  return (
    <section id="area" className="relative overflow-hidden border-t border-gray-100 bg-surface-tint py-section-y-sm">
      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          aria-hidden
          className="pointer-events-none select-none object-cover opacity-70"
        />
      )}

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <Pill tone="brand">
              {content.eyebrow.icon && <content.eyebrow.icon className="h-3.5 w-3.5" />}
              {content.eyebrow.label}
            </Pill>
            <h2 className="mt-4 font-heading text-h2 font-bold text-ink md:text-h2-lg">{content.heading}</h2>
            <p className="mt-4 text-body leading-relaxed text-muted">{content.description}</p>
          </div>

          <div>
            <div className="space-y-4">
              {content.pills.map((pill) => (
                <div key={pill.label} className="flex items-center gap-3 text-body-sm font-medium text-ink">
                  <IconTile icon={pill.icon} size="sm" /> {pill.label}
                </div>
              ))}
            </div>
            <Button
              href={content.cta.href}
              target={content.cta.external ? "_blank" : undefined}
              rel={content.cta.external ? "noopener noreferrer" : undefined}
              size="md"
              className="mt-7 whitespace-nowrap"
            >
              {content.cta.label} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "grid items-center gap-8",
            content.sideCard && "sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]",
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-[270px]"
          >
            <div className="overflow-hidden rounded-2xl border-[7px] border-ink-deep bg-ink-deep shadow-elevated">
              <div className="flex h-5 items-center justify-center">
                <div className="h-1.5 w-14 rounded-full bg-white/20" />
              </div>
              <div className="rounded-xl bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[13px] font-bold text-ink">{content.mockup.greeting}</div>
                  <div className="h-7 w-7 rounded-full bg-brand-tint" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {content.mockup.stats.map((stat) => (
                    <div key={stat.label} className={cn("rounded-md p-3", mockupStatToneClasses[stat.tone].wrap)}>
                      <div className={cn("text-[10px]", mockupStatToneClasses[stat.tone].label)}>{stat.label}</div>
                      <div className="text-[15px] font-bold text-ink">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 space-y-2">
                  {content.mockup.listItems.map((row) => (
                    <div
                      key={row.title}
                      className="flex items-center justify-between gap-2 rounded-sm border border-gray-100 bg-white p-2.5 shadow-card"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-[12px] font-bold text-ink">{row.title}</div>
                        <div className="truncate text-[10px] text-muted">{row.subtitle}</div>
                      </div>
                      <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand">
                        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {content.sideCard && (
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-navy to-navy-mid p-6 text-white shadow-dark">
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-brand opacity-40 blur-[40px]" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-white/30">
                  <content.sideCard.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-heading text-[17px] font-bold leading-snug">{content.sideCard.title}</div>
                <div className="mt-3 text-body-sm text-white/75">{content.sideCard.description}</div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
