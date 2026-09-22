"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import type { EvolutionContent } from "@/content/types";

/**
 * "Before / after" comparison for a product that evolved from an earlier,
 * narrower Teorema solution. Optional — see CLAUDE.md → "Optional sections";
 * a product with no prior-product story omits this section entirely.
 */
export function ProductEvolution({ content }: { content: EvolutionContent }) {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-section-y">
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
        <Pill tone="accent">{content.badge}</Pill>
        <h2 className="mt-5 max-w-[640px] font-heading text-h2 font-bold leading-[1.05] tracking-tight text-ink md:text-h2-lg">
          {content.heading}
        </h2>
        <p className="mt-4 max-w-[640px] text-body leading-relaxed text-muted">{content.description}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="grid items-center gap-4 md:grid-cols-[1fr_44px_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-100 bg-surface-subtle p-6"
            >
              <div className="text-[12px] font-bold uppercase tracking-widest text-muted">Antes</div>
              <div className="mt-3 flex items-center gap-2.5">
                <content.before.icon className="h-5 w-5 text-muted" />
                <span className="text-[16px] font-bold text-ink">{content.before.title}</span>
              </div>
              <div className="mt-4 space-y-2.5">
                {content.before.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[14px] text-muted">
                    <Check className="h-4 w-4 shrink-0 text-gray-400" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex justify-center">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-white">
                <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-xl border border-brand-tint-border bg-brand-tint p-6"
            >
              {content.after.badge && (
                <div className="text-[12px] font-bold uppercase tracking-widest text-brand">{content.after.badge}</div>
              )}
              <div className="mt-3 flex items-center gap-2.5">
                <content.after.icon className="h-5 w-5 text-brand" />
                <span className="text-[16px] font-bold text-ink">{content.after.title}</span>
              </div>
              <div className="mt-4 space-y-2.5">
                {content.after.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[14px] text-ink">
                    <Check className="h-4 w-4 shrink-0 text-brand" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-ink-deep p-6 text-white">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent opacity-20 blur-[30px]" />
            <content.calloutIcon className="relative h-6 w-6 text-accent" />
            <p className="relative mt-4 text-[15px] font-medium leading-relaxed">{content.calloutText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
