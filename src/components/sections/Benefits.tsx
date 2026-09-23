"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BenefitsContent } from "@/content/types";

/**
 * "Why choose us" — a sticky headline on the left, a checklist grid on
 * the right. Distinct from Features: this section sells outcomes/trust
 * rather than product modules. Anchor target for the header's "Por que
 * V3ndor Praxis" nav link (`id="por-que"`).
 */
export function Benefits({ content }: { content: BenefitsContent }) {
  return (
    <section id="por-que" className="relative overflow-hidden border-t border-gray-100 bg-white py-14">
      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          aria-hidden
          className="pointer-events-none select-none object-cover opacity-50"
        />
      )}
      <Container className="relative grid gap-8 lg:grid-cols-[minmax(0,3.5fr)_minmax(0,8.5fr)] lg:items-center">
        <div>
          <SectionHeading
            heading={
              <>
                {content.headingPrefix}
                <span className="text-brand">{content.headingHighlight}</span>
              </>
            }
            description={content.description}
            className="max-w-[440px]"
          />
          {content.complianceBadge && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium">
              <content.complianceBadge.icon className="h-4 w-4 text-brand" /> {content.complianceBadge.label}
            </div>
          )}
        </div>

        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex gap-2 rounded-md border border-brand-tint-border/70 bg-white px-2.5 py-3 shadow-card"
            >
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-strong">
                <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
              </span>
              <div>
                <div className="text-[12px] font-bold leading-tight tracking-tight text-ink">{item.title}</div>
                <div className="mt-1 text-[11px] leading-[1.35] text-muted">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
