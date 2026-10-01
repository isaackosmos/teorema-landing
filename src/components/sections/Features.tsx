"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { FeaturesContent } from "@/content/types";

/** xl spans on a 12-column grid, so every row of up to 4 cards fills the width. */
const XL_SPAN: Record<number, string> = {
  1: "xl:col-span-12",
  2: "xl:col-span-6",
  3: "xl:col-span-4",
  4: "xl:col-span-3",
};

/**
 * Feature grid — "everything in one place": the section heading on the
 * left, module cards on the right in rows of four; a shorter last row
 * stretches to fill the width. Anchor target for the header's "Recursos"
 * nav link (`id="recursos"`).
 */
export function Features({ content }: { content: FeaturesContent }) {
  const total = content.items.length;
  const lastRowStart = total - (total % 4 || 4);

  return (
    <section id="recursos" className="relative overflow-hidden border-t border-gray-100 bg-white py-14">
      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          aria-hidden
          className="pointer-events-none select-none object-cover opacity-70"
        />
      )}
      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start">
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          className="max-w-[440px]"
        />

        <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-12">
          {content.items.map((item, i) => {
            const rowSize = i >= lastRowStart ? total - lastRowStart : 4;
            // On the 2-column layout an odd last card takes the whole row.
            const loneOnSm = total % 2 === 1 && i === total - 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={cn(
                  "group rounded-md border border-brand-tint-border/70 bg-white px-3.5 py-3 shadow-card transition hover:border-brand-tint-border hover:shadow-card-hover",
                  loneOnSm && "sm:col-span-2",
                  XL_SPAN[rowSize],
                )}
              >
                <IconTile
                  icon={item.icon}
                  size="sm"
                  className="h-7 w-7 rounded-[10px] group-hover:bg-brand group-hover:text-white"
                />
                <div className="mt-2.5 text-[13.5px] font-bold leading-tight text-ink">{item.title}</div>
                <div className="mt-1 text-[11px] leading-[1.4] text-muted">{item.description}</div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
