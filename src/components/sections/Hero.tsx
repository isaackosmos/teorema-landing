"use client";

import Image from "next/image";
import { ArrowRight, Bell, ChevronDown, CircleHelp, Search, Settings, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";
import type { HeroContent, HeroFloatingNote, HeroOrder, HeroStat, SiteMeta } from "@/content/types";

const statToneClasses: Record<HeroStat["tone"], { tile: string; delta: string }> = {
  brand: { tile: "bg-brand-tint text-brand", delta: "text-emerald-600" },
  accent: { tile: "bg-accent-soft text-accent-ink", delta: "text-accent-ink-alt" },
  positive: { tile: "bg-emerald-50 text-emerald-600", delta: "text-emerald-600" },
};

const orderStatusClasses: Record<HeroOrder["statusTone"], string> = {
  positive: "bg-emerald-50 text-emerald-700",
  brand: "bg-brand-tint text-brand",
  warning: "bg-amber-50 text-amber-700",
};

const notePositionClasses: Record<HeroFloatingNote["position"], string> = {
  "top-left": "-left-6 top-10",
  "top-right": "-right-6 -top-10",
  "bottom-left": "-left-8 bottom-16",
  "bottom-right": "-right-4 bottom-16",
};

/**
 * Hero section: headline, CTAs, trust badges and a stylized dashboard
 * preview with floating notification chips. Always the section directly
 * below the Header.
 */
export function Hero({ meta, content }: { meta: SiteMeta; content: HeroContent }) {
  const { preview } = content;
  const initials = preview.userName.slice(0, 2).toUpperCase();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-tint to-white pb-16 pt-[120px] lg:pb-20 lg:pt-[136px]">
      {content.backgroundImage && (
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
          <Image src={content.backgroundImage} alt="" fill priority className="object-cover opacity-80" />
        </div>
      )}

      <Container className="relative grid min-w-0 items-center gap-12 xl:grid-cols-[minmax(0,11fr)_minmax(0,13fr)] xl:gap-10">
        <div className="min-w-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Pill tone="accent">{content.badgeText}</Pill>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 font-heading text-h1 font-extrabold text-ink md:text-h1-lg"
          >
            {content.headlineLine1}
            <br />
            {content.headlineLine2Prefix}
            <span className="text-brand">{content.headlineHighlight}</span>
            {content.headlineSuffix && (
              <>
                <br />
                {content.headlineSuffix}
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-[500px] text-body-lg text-muted"
          >
            {content.subheadBold && <strong className="font-semibold text-ink">{content.subheadBold}</strong>}
            {content.subheadRest}
          </motion.p>

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

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-body-sm text-ink/80">
            {content.trustBadges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2">
                {badge.icon && <badge.icon className="h-5 w-5 text-brand" />} {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[760px] xl:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="relative flex w-full overflow-hidden rounded-xl border border-gray-200/70 bg-white shadow-elevated"
          >
            <aside className="hidden w-[148px] shrink-0 flex-col gap-4 bg-navy p-3 sm:flex">
              <div className="px-1 pt-1">
                {meta.logoOnDark ? (
                  // The dark-background logo is a JPEG; `mix-blend-lighten`
                  // lets its near-black backdrop melt into the navy sidebar.
                  <Image
                    src={meta.logoOnDark.src}
                    alt={meta.logoOnDark.alt}
                    width={1600}
                    height={520}
                    className="h-8 w-auto mix-blend-lighten"
                  />
                ) : (
                  <span className="font-heading text-[13px] font-bold text-white">{meta.productName}</span>
                )}
              </div>
              <div className="space-y-0.5">
                {preview.sidebar.map((item, i) => (
                  <div
                    key={item.label}
                    className={cn(
                      "flex h-8 items-center gap-2 rounded-sm px-2.5 text-[11px] font-medium",
                      i === 0 ? "bg-brand text-white" : "text-white/70",
                    )}
                  >
                    <item.icon className="h-3.5 w-3.5 shrink-0" /> {item.label}
                  </div>
                ))}
              </div>
            </aside>

            <div className="min-w-0 flex-1 bg-surface-tint/60">
              <div className="flex h-12 items-center gap-3 border-b border-gray-100 bg-white px-4">
                <div className="flex h-7 min-w-0 max-w-[220px] flex-1 items-center gap-2 rounded-sm border border-gray-100 bg-surface-subtle px-2.5 text-[10px] text-muted">
                  <Search className="h-3 w-3 shrink-0" />
                  <span className="truncate">{preview.searchPlaceholder}</span>
                </div>
                <div className="ml-auto hidden items-center gap-3 text-muted md:flex">
                  <Bell className="h-3.5 w-3.5" />
                  <CircleHelp className="h-3.5 w-3.5" />
                  <Settings className="h-3.5 w-3.5" />
                </div>
                <div className="ml-auto flex shrink-0 items-center gap-1.5 md:ml-2">
                  <div className="grid h-6 w-6 place-items-center rounded-full bg-navy text-[9px] font-bold text-white">
                    {initials}
                  </div>
                  <span className="text-[11px] font-semibold text-ink">{preview.userName}</span>
                  <ChevronDown className="h-3 w-3 text-muted" />
                </div>
              </div>

              <div className="p-4">
                <div className="text-[15px] font-bold text-ink">{preview.title}</div>
                <div className="text-[11px] text-muted">{preview.subtitle}</div>

                <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-2.5">
                  {preview.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex min-w-0 flex-col gap-2 rounded-md border border-gray-100 bg-white p-2.5 sm:flex-row sm:items-center sm:p-3"
                    >
                      <div
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-sm",
                          statToneClasses[stat.tone].tile,
                        )}
                      >
                        <stat.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-[10px] text-muted">{stat.label}</div>
                        <div className="truncate text-[12px] font-bold text-ink sm:text-[14px]">{stat.value}</div>
                        <div className={cn("truncate text-[10px] font-semibold", statToneClasses[stat.tone].delta)}>
                          {stat.delta}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2.5 grid gap-2.5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                  <div className="rounded-md border border-gray-100 bg-white p-3">
                    <div className="text-[11px] font-semibold text-ink">{preview.chart.label}</div>
                    <div className="mt-3 flex h-28 items-end gap-2 border-b border-gray-100 px-1">
                      {preview.chart.values.map((v, i) => (
                        <div key={i} className="flex h-full flex-1 items-end justify-center">
                          <div
                            className="w-full max-w-[18px] rounded-t-sm bg-gradient-to-t from-accent-strong to-brand"
                            style={{ height: `${v}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-1 flex gap-2 px-1">
                      {preview.chart.labels.map((label) => (
                        <div key={label} className="flex-1 text-center text-[8px] text-muted">
                          {label}
                        </div>
                      ))}
                    </div>
                    {preview.chart.legend && (
                      <div className="mt-2 flex justify-end gap-3 text-[9px] text-muted">
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {preview.chart.legend[0]}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-strong" /> {preview.chart.legend[1]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="rounded-md border border-gray-100 bg-white p-3">
                    <div className="text-[11px] font-semibold text-ink">{preview.ordersTitle}</div>
                    <div className="mt-2 divide-y divide-gray-100">
                      {preview.orders.map((order) => (
                        <div key={order.title} className="flex items-center gap-2 py-2">
                          <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-tint">
                            <TrendingUp className="h-3 w-3 text-brand" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-[10px] font-bold text-ink">{order.title}</div>
                            <div className="truncate text-[9px] text-muted">{order.subtitle}</div>
                            <div className="truncate text-[9px] text-muted">{order.amount}</div>
                          </div>
                          <span
                            className={cn(
                              "shrink-0 rounded-full px-2 py-0.5 text-[8.5px] font-semibold",
                              orderStatusClasses[order.statusTone],
                            )}
                          >
                            {order.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {preview.floatingNotes.map((note, i) => (
            <motion.div
              key={note.title}
              animate={{ y: i % 2 === 0 ? [0, -8, 0] : [0, 8, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
              className={cn(
                // Only shown once the hero switches to its two-column
                // layout (xl:) — below that, the card is full-width and
                // this chip's negative offset would sit under the fixed
                // WhatsApp button (see WhatsAppFloatingButton).
                "absolute hidden items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-pill xl:flex",
                notePositionClasses[note.position],
              )}
            >
              <div
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full",
                  note.tone === "positive" ? "bg-accent-strong text-white" : "text-brand",
                )}
              >
                <note.icon
                  className={note.tone === "positive" ? "h-5 w-5" : "h-7 w-7"}
                  strokeWidth={note.tone === "positive" ? 3 : 1.75}
                />
              </div>
              <div className="pr-1 text-[13px] font-bold leading-tight text-ink">
                <div>{note.title}</div>
                {note.subtitle && <div>{note.subtitle}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
