"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IPhoneMockup } from "@/components/ui/IPhoneMockup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { AppShowcaseContent } from "@/content/types";

const mockupStatToneClasses = {
  brand: "bg-brand-tint",
  accent: "bg-accent-soft",
} as const;

/** Screen content for the phone: greeting, two stat tiles and a task list. */
function PhoneScreen({ mockup }: { mockup: AppShowcaseContent["mockup"] }) {
  return (
    <div className="px-5 pt-4">
      <div className="flex items-center justify-between">
        <div className="text-[18px] font-bold text-ink">{mockup.greeting}</div>
        <div className="h-9 w-9 rounded-full bg-gray-100" />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {mockup.stats.map((stat) => (
          <div key={stat.label} className={cn("rounded-[18px] p-3.5", mockupStatToneClasses[stat.tone])}>
            <div className="text-[11px] text-muted">{stat.label}</div>
            <div className="mt-0.5 text-[19px] font-bold text-ink">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2.5">
        {mockup.listItems.map((row) => (
          <div
            key={row.title}
            className="flex items-center gap-3 rounded-[18px] border border-gray-100 bg-white p-3 shadow-card"
          >
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft">
              <Check className="h-4 w-4 text-accent-strong" strokeWidth={3} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[14px] font-bold text-ink">{row.title}</div>
              <div className="truncate text-[11px] text-muted">{row.subtitle}</div>
            </div>
            <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand">
              <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Customer-portal / mobile-app showcase: copy, access list + CTA, an iPhone
 * mockup and an optional navy highlight card. From xl up the phone rises
 * above the section's top edge (over the previous section) and is cropped
 * at its bottom edge. Anchor target for the header's "Área do Cliente" nav
 * link (`id="area"`). Optional for products without a companion app — see
 * CLAUDE.md → "Optional sections".
 */
export function AppShowcase({ content }: { content: AppShowcaseContent }) {
  return (
    // No overflow-hidden here: the phone deliberately pokes out of the top.
    // z-10 keeps it above the previous section, which paints earlier.
    <section id="area" className="relative z-10 border-t border-gray-100 bg-gradient-to-r from-surface-tint to-white py-14">
      {content.backgroundImage && (
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          aria-hidden
          className="pointer-events-none select-none object-cover opacity-70"
        />
      )}
      <Container className="relative grid items-center gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] xl:gap-8">
        <SectionHeading
          eyebrow={content.eyebrow.label}
          heading={content.heading}
          description={content.description}
          size="compact"
          className="max-w-[460px]"
        />

        <div>
          <div className="space-y-3.5">
            {content.pills.map((pill) => (
              <div key={pill.label} className="flex items-center gap-3 text-body-sm font-medium text-ink/85">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-tint-border bg-white">
                  <pill.icon className="h-4 w-4 text-brand" />
                </span>
                {pill.label}
              </div>
            ))}
          </div>
          <Button
            href={content.cta.href}
            target={content.cta.external ? "_blank" : undefined}
            rel={content.cta.external ? "noopener noreferrer" : undefined}
            size="lg"
            className="mt-7 whitespace-nowrap"
          >
            {content.cta.label} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Phone: in normal flow below xl; from xl an absolutely positioned
            window that starts above the section and clips at its bottom. */}
        <div className="relative xl:self-stretch">
          <div className="pointer-events-none xl:absolute xl:-bottom-14 xl:-left-24 xl:-right-24 xl:-top-[160px] xl:overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <IPhoneMockup className="mx-auto max-w-[400px] xl:max-w-none">
                <PhoneScreen mockup={content.mockup} />
              </IPhoneMockup>
            </motion.div>
          </div>
        </div>

        {content.sideCard && (
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-navy to-navy-mid px-6 py-9 text-white shadow-dark">
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-brand opacity-40 blur-[50px]" />
            <div className="relative flex items-center gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                <content.sideCard.icon className="h-6 w-6" />
              </div>
              <div className="font-heading text-[14px] font-bold leading-snug">{content.sideCard.title}</div>
            </div>
            <div className="relative mt-5 text-body-sm text-white/80">{content.sideCard.description}</div>
          </div>
        )}
      </Container>
    </section>
  );
}
