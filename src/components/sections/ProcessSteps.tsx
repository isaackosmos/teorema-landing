"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProcessContent } from "@/content/types";

/**
 * Growth-path section: an intro on the left (with a navy callout card)
 * and a stack of numbered step cards on the right.
 */
export function ProcessSteps({ content }: { content: ProcessContent }) {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-14">
      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          aria-hidden
          className="pointer-events-none select-none object-cover opacity-70"
        />
      )}
      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={content.badge}
            eyebrowTone="accent"
            heading={content.heading}
            description={content.description}
            className="max-w-[480px]"
          />

          <div className="mt-8 hidden max-w-[480px] lg:block">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-navy-teal via-navy to-brand-hover px-6 py-7 text-white shadow-dark">
              {/* Green glow behind the icon, fading into the blue side. */}
              <div className="absolute -left-10 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-accent opacity-20 blur-[50px]" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-light opacity-30 blur-[60px]" />
              <div className="relative flex items-center gap-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-accent/15 ring-1 ring-accent/25">
                  <content.callout.icon className="h-9 w-9 text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-heading text-[18px] font-bold">{content.callout.title}</div>
                  <div className="mt-1 text-body-sm text-white/80">{content.callout.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          {content.steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white px-5 py-3.5 shadow-card"
            >
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-[11px] font-bold text-white">
                {step.step}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[15px] font-bold leading-tight text-ink">{step.title}</div>
                <div className="mt-1 max-w-[500px] text-body-xs text-muted">{step.description}</div>
              </div>
              <div className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-gray-100 bg-surface-subtle md:grid">
                <ArrowUpRight className="h-4 w-4 text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
