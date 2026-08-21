"use client";

import { TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import type { ProcessContent } from "@/content/types";

/**
 * Growth-path section: a sticky intro on the left (with a dark callout
 * card) and a vertical timeline of numbered steps on the right.
 */
export function ProcessSteps({ content }: { content: ProcessContent }) {
  return (
    <section className="border-y border-gray-100 bg-surface-subtle py-section-y">
      <Container className="grid gap-12 lg:grid-cols-[420px_1fr]">
        <div>
          <Pill tone="accent">{content.badge}</Pill>
          <h2 className="mt-5 font-heading text-[36px] font-bold leading-[0.95] tracking-tight text-ink md:text-[42px]">
            {content.heading}
          </h2>
          <p className="mt-4 max-w-[520px] text-body leading-relaxed text-muted">{content.description}</p>

          <div className="mt-8 hidden lg:block">
            <div className="relative overflow-hidden rounded-lg bg-ink-deep p-6 text-white">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand opacity-30 blur-[30px]" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent opacity-20 blur-[24px]" />
              <div className="relative flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <content.callout.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">{content.callout.title}</div>
                  <div className="text-[13px] text-white/70">{content.callout.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-gradient-to-b from-brand/20 via-gray-200 to-transparent md:block" />
          <div className="space-y-6">
            {content.steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex gap-5 rounded-lg border border-gray-100 bg-white p-6 shadow-card"
              >
                <div className="mt-1 hidden h-8 w-8 place-items-center rounded-full bg-ink text-[11px] font-bold text-white md:grid">
                  {step.step}
                </div>
                <div className="absolute -left-2 top-6 h-2 w-2 rounded-full bg-brand md:hidden" />
                <div>
                  <div className="text-[18px] font-bold text-ink">{step.title}</div>
                  <div className="mt-1 max-w-[520px] text-body-sm leading-relaxed text-muted">{step.description}</div>
                </div>
                <div className="ml-auto hidden md:block">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-gray-100 bg-surface-subtle">
                    <TrendingUp className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
