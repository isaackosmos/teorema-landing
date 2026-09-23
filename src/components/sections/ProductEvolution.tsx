"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { EvolutionContent, EvolutionPanel } from "@/content/types";

/** Decorative rising bars behind the callout card (percent heights). */
const CALLOUT_BARS = [18, 30, 26, 44, 58, 80];

function Panel({ panel, highlighted }: { panel: EvolutionPanel; highlighted?: boolean }) {
  return (
    <div
      className={cn(
        "h-full rounded-lg border bg-white p-5",
        highlighted ? "border-brand-tint-border shadow-card-hover" : "border-gray-100 shadow-card",
      )}
    >
      <div className="flex items-center gap-3">
        <panel.icon className="h-7 w-7 shrink-0 text-brand" strokeWidth={1.75} />
        <div>
          {panel.badge && (
            <div
              className={cn(
                "text-[11px] font-bold uppercase tracking-widest",
                highlighted ? "text-accent-strong" : "text-muted",
              )}
            >
              {panel.badge}
            </div>
          )}
          <div className={cn("font-bold leading-tight", highlighted ? "text-[18px] text-brand" : "text-[16px] text-ink")}>
            {panel.title}
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-2.5">
        {panel.items.map((item) => (
          <div key={item} className="flex items-start gap-2.5 text-body-sm text-ink/80">
            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-strong">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * "Before / after" comparison for a product that evolved from an earlier,
 * narrower Teorema solution. Optional — see CLAUDE.md → "Optional sections";
 * a product with no prior-product story omits this section entirely.
 */
export function ProductEvolution({ content }: { content: EvolutionContent }) {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-section-y-sm">
      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          aria-hidden
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
        <SectionHeading
          eyebrow={content.badge}
          heading={content.heading}
          description={content.description}
          className="max-w-[480px]"
        />

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)_minmax(0,0.8fr)]">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Panel panel={content.before} />
          </motion.div>

          <div className="flex items-center justify-center">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-white shadow-button-brand">
              <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <Panel panel={content.after} highlighted />
          </motion.div>

          <div className="relative min-h-[220px] overflow-hidden rounded-lg bg-gradient-to-br from-navy to-navy-mid p-6 text-white shadow-dark md:col-span-3 xl:col-span-1">
            <p className="relative z-10 font-heading text-[17px] font-semibold leading-snug">{content.calloutText}</p>
            <div className="absolute inset-x-5 bottom-0 flex h-28 items-end gap-2" aria-hidden>
              {CALLOUT_BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-brand/10 to-brand-light/50"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <content.calloutIcon className="absolute bottom-4 right-4 h-14 w-14 text-brand-light/80" aria-hidden />
          </div>
        </div>
      </Container>
    </section>
  );
}
