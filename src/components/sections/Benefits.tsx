"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import type { BenefitsContent } from "@/content/types";

/**
 * "Why choose us" — a sticky headline on the left, a checklist grid on
 * the right. Distinct from Features: this section sells outcomes/trust
 * rather than product modules.
 */
export function Benefits({ content }: { content: BenefitsContent }) {
  return (
    <section className="border-t border-gray-100 bg-surface-subtle py-20">
      <Container className="grid items-start gap-10 lg:grid-cols-2">
        <div className="lg:sticky lg:top-[100px]">
          <h2 className="font-heading text-h2 font-bold leading-[1.05] tracking-tight text-ink md:text-h2-lg">
            {content.headingPrefix}
            <span className="text-brand">{content.headingHighlight}</span>
          </h2>
          <p className="mt-4 max-w-[520px] text-body leading-relaxed text-muted">{content.description}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium">
            <content.complianceBadge.icon className="h-4 w-4 text-brand" /> {content.complianceBadge.label}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {content.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex gap-3 rounded-md border border-gray-100 bg-white p-4"
            >
              <IconTile icon={Check} size="sm" tone="accent-soft" />
              <div className="pt-1 text-[14px] font-medium leading-snug text-ink">{item}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
