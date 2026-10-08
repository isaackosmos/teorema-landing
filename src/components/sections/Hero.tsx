"use client";

import Image from "next/image";
import {
  ArrowRight,
  Bell,
  ChevronDown,
  CircleHelp,
  Ellipsis,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";
import type { HeroContent, HeroFloatingNote, HeroOrder, HeroStat, SiteMeta } from "@/content/types";

const statToneClasses: Record<HeroStat["tone"], { icon: string; delta: string }> = {
  brand: { icon: "text-brand", delta: "text-emerald-600" },
  accent: { icon: "text-accent-ink", delta: "text-accent-ink-alt" },
  positive: { icon: "text-emerald-600", delta: "text-emerald-600" },
};

const orderStatusClasses: Record<HeroOrder["statusTone"], string> = {
  positive: "bg-emerald-50 text-emerald-700",
  brand: "bg-brand-tint text-brand",
  warning: "bg-amber-50 text-amber-700",
};

const notePositionClasses: Record<HeroFloatingNote["position"], string> = {
  "top-left": "-left-6 top-12",
  "top-right": "-right-3 top-20",
  "bottom-left": "-left-10 bottom-10",
  "bottom-right": "-right-6 bottom-12",
};

/** Horizontal guide lines behind the chart bars (percent from the bottom). */
const CHART_GRIDLINES = [25, 50, 75, 100];

/**
 * Hero section: headline, CTAs, trust badges and a stylized dashboard
 * preview with floating notification chips. Always the section directly
 * below the Header.
 */
export function Hero({ meta, content }: { meta: SiteMeta; content: HeroContent }) {
  const { preview } = content;
  const initials = preview.userName.slice(0, 2).toUpperCase();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-tint to-white pb-16 pt-[120px] xl:pb-20 xl:pt-[128px]">
      {content.backgroundImage && (
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
          <Image src={content.backgroundImage} alt="" fill priority className="object-cover opacity-80" />
        </div>
      )}

      <Container className="relative grid min-w-0 items-center gap-12 xl:grid-cols-[minmax(0,10fr)_minmax(0,14fr)] xl:gap-8">
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
            {content.secondaryCta && (
              <Button href={content.secondaryCta.href} variant="outline" size="lg">
                {content.secondaryCta.label}
              </Button>
            )}
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-body-sm text-ink/80">
            {content.trustBadges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2.5">
                {badge.icon && (
                  <span className="grid h-8 w-8 place-items-center rounded-sm border border-brand-tint-border bg-white/70">
                    <badge.icon className="h-4 w-4 text-brand" />
                  </span>
                )}
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[780px] xl:max-w-none">
          {/* Tilted like a monitor turned slightly toward the copy — only
              in the side-by-side layout, where there's room for it. */}
          <div className="xl:w-[110%] xl:[transform:perspective(1800px)_rotateY(10deg)_rotateX(2deg)] xl:[transform-origin:left_center]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="relative flex w-full overflow-hidden rounded-xl border border-white/80 bg-white shadow-elevated"
            >
              <aside className="hidden w-[150px] shrink-0 flex-col gap-2.5 bg-navy p-3 sm:flex">
                <div className="px-1 pt-0.5">
                  {meta.logoOnDark ? (
                    // The dark-background logo is a JPEG; `mix-blend-lighten`
                    // lets its near-black backdrop melt into the navy sidebar.
                    <Image
                      src={meta.logoOnDark.src}
                      alt={meta.logoOnDark.alt}
                      width={1600}
                      height={520}
                      className="h-7 w-auto mix-blend-lighten"
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
                        "flex h-6 items-center gap-2 rounded-sm px-2.5 text-[10.5px] font-medium",
                        i === 0 ? "bg-brand text-white" : "text-white/75",
                      )}
                    >
                      <item.icon className="h-3.5 w-3.5 shrink-0" /> {item.label}
                    </div>
                  ))}
                </div>
              </aside>

              <div className="min-w-0 flex-1 bg-surface-tint/60">
                <div className="flex h-11 items-center gap-3 border-b border-gray-100 bg-white px-4">
                  <div className="flex h-7 min-w-0 max-w-[240px] flex-1 items-center gap-2 rounded-sm border border-gray-100 bg-surface-subtle px-2.5 text-[10px] text-muted">
                    <Search className="h-3 w-3 shrink-0" />
                    <span className="truncate">{preview.searchPlaceholder}</span>
                  </div>
                  <div className="ml-auto hidden items-center gap-3 text-ink/70 md:flex">
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

                <div className="p-3.5">
                  <div className="text-[15px] font-bold leading-tight text-ink">{preview.title}</div>
                  <div className="text-[10.5px] text-muted">{preview.subtitle}</div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {preview.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex min-w-0 flex-col gap-1.5 rounded-md border border-brand-tint-border bg-brand-tint/60 p-2.5 sm:flex-row sm:items-center sm:gap-2.5 sm:px-3"
                      >
                        <stat.icon
                          className={cn("h-5 w-5 shrink-0 sm:h-6 sm:w-6", statToneClasses[stat.tone].icon)}
                          strokeWidth={1.75}
                        />
                        <div className="min-w-0">
                          <div className="truncate text-[9.5px] text-muted">{stat.label}</div>
                          <div className="truncate text-[12px] font-bold leading-tight text-ink sm:text-[15px]">
                            {stat.value}
                          </div>
                          <div className={cn("truncate text-[9.5px] font-semibold", statToneClasses[stat.tone].delta)}>
                            {stat.delta}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 grid gap-2 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                    <div className="rounded-md border border-gray-100 bg-white p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10.5px] font-semibold text-ink">{preview.chart.label}</span>
                        <Ellipsis className="h-3.5 w-3.5 text-muted" />
                      </div>
                      <div className="mt-2 flex gap-1.5">
                        {preview.chart.yAxis && (
                          <div className="flex h-20 flex-col-reverse justify-between text-right text-[7px] leading-none text-muted">
                            {preview.chart.yAxis.map((tick) => (
                              <span key={tick} className="-mb-[3px] -mt-[3px]">
                                {tick}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="relative h-20 min-w-0 flex-1">
                          {CHART_GRIDLINES.map((line) => (
                            <div
                              key={line}
                              className="absolute inset-x-0 border-t border-dashed border-gray-100"
                              style={{ bottom: `${line}%` }}
                            />
                          ))}
                          <div className="relative flex h-full items-end gap-2 border-b border-gray-200 px-1">
                            {preview.chart.values.map((v, i) => {
                              const second = preview.chart.secondaryValues?.[i];
                              return (
                                <div key={i} className="flex h-full flex-1 items-end justify-center gap-[2px]">
                                  {second === undefined ? (
                                    <div
                                      className="w-full max-w-[16px] rounded-t-[3px] bg-gradient-to-t from-accent-strong to-brand"
                                      style={{ height: `${v}%` }}
                                    />
                                  ) : (
                                    <>
                                      <div
                                        className="w-full max-w-[9px] rounded-t-[2px] bg-gradient-to-t from-brand-light to-brand"
                                        style={{ height: `${v}%` }}
                                      />
                                      <div
                                        className="w-full max-w-[9px] rounded-t-[2px] bg-gradient-to-t from-accent-strong to-accent-mint"
                                        style={{ height: `${second}%` }}
                                      />
                                    </>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className={cn("mt-1 flex gap-2 px-1", preview.chart.yAxis && "pl-9")}>
                        {preview.chart.labels.map((label) => (
                          <div key={label} className="flex-1 text-center text-[8px] text-muted">
                            {label}
                          </div>
                        ))}
                      </div>
                      {preview.chart.legend && (
                        <div className="mt-1.5 flex justify-end gap-3 text-[8.5px] text-ink/70">
                          <span className="inline-flex items-center gap-1">
                            <span className="h-2 w-2 rounded-[2px] bg-brand" /> {preview.chart.legend[0]}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <span className="h-2 w-2 rounded-[2px] bg-accent-mint" /> {preview.chart.legend[1]}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="rounded-md border border-gray-100 bg-white p-3">
                      <div className="text-[10.5px] font-semibold text-ink">{preview.ordersTitle}</div>
                      <div className="mt-1 divide-y divide-gray-100">
                        {preview.orders.map((order) => (
                          <div key={order.title} className="flex items-center gap-2 py-1">
                            <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-tint">
                              <TrendingUp className="h-3 w-3 text-brand" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="truncate text-[10px] font-bold leading-tight text-ink">{order.title}</div>
                              <div className="truncate text-[8.5px] leading-tight text-muted">{order.subtitle}</div>
                              <div className="truncate text-[8.5px] leading-tight text-muted">{order.amount}</div>
                            </div>
                            <span
                              className={cn(
                                "shrink-0 rounded-full px-2 py-0.5 text-[8px] font-semibold",
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
          </div>

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
                "absolute hidden items-center gap-3 rounded-lg border border-brand-tint-border bg-white/95 px-4 py-3 shadow-pill backdrop-blur xl:flex",
                notePositionClasses[note.position],
              )}
            >
              <div
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-full text-white",
                  note.tone === "positive" ? "bg-accent-strong" : "bg-brand",
                )}
              >
                <note.icon className="h-5 w-5" strokeWidth={note.tone === "positive" ? 3 : 2} />
              </div>
              <div className={cn("pr-1 font-bold leading-tight text-ink", note.subtitle ? "text-[13px]" : "text-[16px]")}>
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
