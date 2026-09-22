"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FeaturesContent } from "@/content/types";

/**
 * Feature grid — "everything in one place". Anchor target for the
 * header's "Recursos" nav link (`id="recursos"`).
 */
export function Features({ content }: { content: FeaturesContent }) {
  return (
    <section id="recursos" className="relative overflow-hidden border-t border-gray-100 bg-white py-section-y">
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
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          className="max-w-[640px]"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group rounded-xl border border-gray-100 bg-surface-subtle p-6 transition hover:border-gray-200 hover:shadow-card-hover"
            >
              <IconTile icon={item.icon} tone="dark" className="group-hover:bg-brand" />
              <div className="mt-4 text-[16px] font-bold leading-tight text-ink">{item.title}</div>
              <div className="mt-2 text-body-sm leading-[1.5] text-muted">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
