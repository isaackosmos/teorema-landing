"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { EvolutionContent, EvolutionPanel } from "@/content/types";

/** Decorative rising bars at the bottom of the callout card (percent heights). */
const CALLOUT_BARS = [16, 28, 40, 58, 82];

function Panel({ panel, highlighted }: { panel: EvolutionPanel; highlighted?: boolean }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-white",
        highlighted ? "border-brand-tint-border shadow-card-hover" : "border-gray-100 shadow-card",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 px-5 py-3.5",
          highlighted ? "pb-2" : "border-b border-gray-100 bg-surface-tint/70",
        )}
      >
        {panel.image ? (
          <Image src={panel.image.src} alt={panel.image.alt} width={164} height={85} className="h-8 w-auto shrink-0" />
        ) : (
          <panel.icon className="h-9 w-9 shrink-0 text-brand" strokeWidth={1.5} />
        )}
        <div>
          {panel.badge && (
            <div
              className={cn(
                "text-[10.5px] uppercase tracking-wider",
                highlighted ? "font-bold text-accent-strong" : "font-medium text-muted",
              )}
            >
              {panel.badge}
            </div>
          )}
          <div
            className={cn(
              "font-bold leading-tight",
              highlighted ? "whitespace-nowrap font-heading text-[18px] text-brand" : "text-[16px] text-ink",
            )}
          >
            {panel.title}
          </div>
        </div>
      </div>
      <div className={cn("px-5 py-3.5", highlighted ? "space-y-1" : "space-y-3 py-4")}>
        {panel.items.map((item) => (
          <div key={item} className="flex items-start gap-2.5 text-[12.5px] leading-tight text-ink/80">
            <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-strong">
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
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-14">
      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          aria-hidden
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Container className="relative grid gap-8 lg:grid-cols-[minmax(0,4.4fr)_minmax(0,7.6fr)] lg:items-center">
        <SectionHeading
          eyebrow={content.badge}
          heading={content.heading}
          description={content.description}
          size="compact"
          className="max-w-[500px]"
        />

        <div className="grid items-center gap-3 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1.05fr)] xl:grid-cols-[minmax(0,1fr)_48px_minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Panel panel={content.before} />
          </motion.div>

          <div className="flex items-center justify-center">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-white shadow-button-brand">
              <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" />
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

          <div className="relative min-h-[260px] self-stretch overflow-hidden rounded-lg bg-gradient-to-b from-navy to-navy-mid p-6 text-white shadow-dark md:col-span-3 xl:col-span-1">
            <p className="relative z-10 max-w-[260px] font-heading text-[16px] font-semibold leading-snug">
              {content.calloutText}
            </p>
            <div className="absolute inset-x-5 bottom-0 flex h-[42%] items-end gap-2.5" aria-hidden>
              {CALLOUT_BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-brand/20 to-brand-light/55"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            {/* Rising trend arrow sweeping over the bars. */}
            <svg
              viewBox="0 0 200 140"
              preserveAspectRatio="none"
              className="absolute inset-x-4 bottom-[18%] h-[38%] w-[calc(100%-2rem)] text-brand-light"
              aria-hidden
            >
              <path d="M6 132 C 70 122, 125 92, 184 26" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M194 14 L168 22 L187 42 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
