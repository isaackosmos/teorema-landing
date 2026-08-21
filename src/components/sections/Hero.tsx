"use client";

import Image from "next/image";
import { ArrowRight, RefreshCw, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";
import type { HeroContent, SiteMeta } from "@/content/types";

const statToneClasses = {
  brand: "text-brand",
  accent: "text-accent-ink-alt",
  positive: "text-emerald-600",
} as const;

/**
 * Hero section: headline, CTAs, social proof and a stylized product
 * preview card with floating notification chips. Always the section
 * directly below the Header.
 */
export function Hero({ meta, content }: { meta: SiteMeta; content: HeroContent }) {
  const { preview } = content;

  return (
    <section className="relative overflow-hidden bg-surface-subtle pb-20 pt-[140px] lg:pb-[120px]">
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden>
        <Image
          src={meta.logo.src}
          alt=""
          width={1200}
          height={390}
          className="absolute left-1/2 top-[90px] w-[1200px] max-w-[90vw] -translate-x-1/2 opacity-[0.03] grayscale"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 to-surface-subtle" />

      <Container className="relative grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="min-w-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Pill tone="accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {content.badgeText}
            </Pill>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 font-heading text-h1 font-extrabold leading-[0.95] tracking-[-0.03em] text-ink md:text-h1-lg"
          >
            {content.headlineLine1}
            <br />
            {content.headlineLine2Prefix}
            <span className="text-brand">{content.headlineHighlight}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-[520px] text-body-lg text-muted"
          >
            <p>
              <strong className="font-semibold text-ink">{content.subheadBold}</strong>
              {content.subheadRest}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href={content.primaryCta.href} size="lg">
              {content.primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={content.secondaryCta.href} variant="outline" size="lg">
              {content.secondaryCta.label}
            </Button>
          </motion.div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {Array.from({ length: content.socialProof.avatarCount }).map((_, i) => (
                <div
                  key={i}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-gray-200 text-[11px] font-bold text-gray-600"
                  style={{ background: `hsl(${220 + i * 8} 20% 90%)` }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-body-sm leading-[1.2] text-muted">
              <span className="font-semibold text-ink">{content.socialProof.customersLine}</span>{" "}
              {content.socialProof.customersSuffix}
              <br />
              <span className="inline-flex items-center gap-1">
                <StarRating rating={5} />
                {content.socialProof.rating}/5 {content.socialProof.ratingSuffix}
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex min-w-0 items-center justify-center lg:h-[560px]">
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="relative w-full max-w-[560px] overflow-hidden rounded-xl border border-gray-200/70 bg-white shadow-elevated"
          >
            <div className="flex h-14 items-center justify-between gap-3 border-b border-gray-100 bg-surface-subtle px-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex shrink-0 gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27CA3F]" />
                </div>
                <span className="ml-3 truncate text-[13px] font-semibold text-ink">{preview.windowTitle}</span>
              </div>
              <div className="flex shrink-0 items-center gap-2 text-[12px] text-muted">
                <RefreshCw className="h-4 w-4 text-brand" /> {preview.syncedLabel}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 p-5">
              {preview.stats.map((stat) => (
                <div key={stat.label} className="rounded-md border border-gray-100 bg-surface-subtle p-3.5">
                  <div className="flex items-center justify-between">
                    <stat.icon className="h-4 w-4 text-gray-400" />
                    <span
                      className={cn(
                        "rounded-full border bg-gray-50 px-2 py-0.5 text-[11px] font-semibold",
                        statToneClasses[stat.tone],
                      )}
                    >
                      {stat.delta}
                    </span>
                  </div>
                  <div className="mt-2 text-[12px] text-muted">{stat.label}</div>
                  <div className="text-[16px] font-bold text-ink">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="px-5">
              <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-brand to-brand-light p-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-[13px] font-medium opacity-90">{preview.chart.label}</span>
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="mt-3 flex h-16 items-end gap-1.5">
                  {preview.chart.values.map((v, i) => (
                    <div key={i} className="flex-1 rounded-t-sm bg-white/90" style={{ height: `${v}%` }} />
                  ))}
                </div>
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-accent opacity-30 blur-[20px]" />
              </div>
            </div>

            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-ink">{preview.ordersTitle}</span>
                <span className="text-[11px] text-muted">{preview.ordersLinkLabel}</span>
              </div>
              <div className="space-y-2.5">
                {preview.orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between gap-2 rounded-sm border border-gray-100 px-3 py-2.5"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-tint">
                        <TrendingUp className="h-3.5 w-3.5 text-brand" />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-[12px] font-semibold text-ink">
                          {order.id} • {order.client}
                        </div>
                        <div className="truncate text-[11px] text-muted">{order.amount}</div>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-emerald-100 bg-[#F0FDF4] px-2 py-1 text-[10px] font-semibold text-emerald-700">
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {preview.floatingNotes.map((note) => (
            <motion.div
              key={note.title}
              animate={{ y: note.position === "top-left" ? [0, -8, 0] : [0, 10, 0] }}
              transition={{
                duration: note.position === "top-left" ? 3 : 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: note.position === "top-left" ? 0 : 0.6,
              }}
              className={cn(
                // Only shown once the hero switches to its two-column
                // layout (lg:) — below that, the card is full-width and
                // this badge's negative offset would sit under the fixed
                // WhatsApp button (see WhatsAppFloatingButton).
                "absolute hidden items-center gap-2.5 rounded-full px-4 py-2.5 shadow-pill lg:flex",
                note.position === "top-left"
                  ? "-left-6 top-[60px] border border-gray-100 bg-white"
                  : "-right-4 bottom-20 rounded-md bg-ink-deep shadow-dark",
              )}
            >
              <div
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full",
                  note.position === "top-left" ? "bg-accent-soft" : "bg-white/10",
                )}
              >
                <note.icon
                  className={cn("h-4 w-4", note.position === "top-left" ? "text-accent-ink" : "text-accent")}
                />
              </div>
              <div className="pr-2">
                <div
                  className={cn(
                    "text-[12px] font-bold leading-none",
                    note.position === "bottom-right" && "text-white",
                  )}
                >
                  {note.title}
                </div>
                <div className={cn("text-[11px]", note.position === "top-left" ? "text-muted" : "text-white/60")}>
                  {note.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
