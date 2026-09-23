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
    <section id="por-que" className="relative overflow-hidden border-t border-gray-100 bg-white py-section-y-sm">
      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          aria-hidden
          className="pointer-events-none select-none object-cover opacity-50"
        />
      )}
      <Container className="relative grid items-start gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <div className="lg:sticky lg:top-[100px]">
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

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex gap-3 rounded-md border border-gray-100 bg-white p-4 shadow-card"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-strong">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </span>
              <div>
                <div className="text-[14px] font-bold leading-snug text-ink">{item.title}</div>
                <div className="mt-1 text-body-xs text-muted">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
