"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronUp, MousePointerClick, Tag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PlanWidgetContent, SiteMeta } from "@/content/types";

/** Wide screens get the card opened automatically while the hero is in view. */
const AUTO_EXPAND_QUERY = "(min-width: 1280px)";
/** Scroll depth (px) past which the auto-opened card tucks itself away. */
const COLLAPSE_AFTER = 240;
/** A card the visitor opened by hand closes again after this much scrolling. */
const MANUAL_SCROLL_BUDGET = 600;

/** Decorative rising bars in the navy panel (percent heights). */
const BARS = [22, 34, 48, 66, 88];

function PlanCard({
  meta,
  content,
  onClose,
}: {
  meta: SiteMeta;
  content: PlanWidgetContent;
  onClose: () => void;
}) {
  const { cta } = content;

  return (
    <div className="relative grid overflow-hidden rounded-xl bg-white md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
      {/* Top-right of the whole card: over the white panel on phones (stacked),
          over the navy panel from md (side by side). */}
      <button
        type="button"
        onClick={onClose}
        aria-label={content.labels.close}
        className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full bg-ink/5 text-ink/70 transition hover:bg-ink/10 hover:text-ink md:h-7 md:w-7 md:bg-white/10 md:text-white/80 md:hover:bg-white/20 md:hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="p-5">
        <Image src={meta.logo.src} alt={meta.logo.alt} width={480} height={160} className="h-9 w-auto" />
        <span className="mt-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-accent-ink">
          {content.badge}
        </span>
        {content.pricePrefix && <div className="mt-2.5 text-[11px] text-muted">{content.pricePrefix}</div>}
        <div className={cn("flex flex-wrap items-baseline gap-x-1.5", content.pricePrefix ? "mt-0.5" : "mt-2.5")}>
          <span className="whitespace-nowrap font-heading text-[26px] font-bold leading-none text-brand">{content.price}</span>
          {content.priceSuffix && <span className="text-[13px] text-muted">{content.priceSuffix}</span>}
        </div>
        {content.note && <p className="mt-2 text-[11px] leading-snug text-muted">{content.note}</p>}

        <div className="my-3 h-px bg-gray-100" />

        <p className="text-[12px] font-bold leading-snug text-ink">{content.listTitle}</p>
        <ul className="mt-2 space-y-1">
          {content.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[12px] text-ink/80">
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-strong">
                <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex min-h-[230px] flex-col overflow-hidden bg-gradient-to-b from-navy to-navy-mid p-5 text-white md:min-h-[300px]">
        <p className="relative z-10 font-heading text-[18px] font-bold leading-tight md:pr-6 md:text-[21px]">
          {content.pitch.prefix}
          <span className="text-brand-light">{content.pitch.highlight}</span>
          {content.pitch.suffix}
        </p>
        <div className="relative z-10 mt-3 h-1 w-8 rounded-full bg-brand-light" />
        {content.pitchSubtext && (
          <p className="relative z-10 mt-3 text-[12px] leading-snug text-white/75">{content.pitchSubtext}</p>
        )}

        {/* Rising bars + trend arrow behind the CTA. */}
        <div className="absolute inset-x-4 bottom-0 flex h-[38%] items-end gap-2" aria-hidden>
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-brand/20 to-brand-light/50"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <svg
          viewBox="0 0 200 140"
          preserveAspectRatio="none"
          className="absolute inset-x-4 bottom-[22%] h-[30%] w-[calc(100%-2rem)] text-brand-light"
          aria-hidden
        >
          <path d="M6 132 C 70 122, 125 92, 184 26" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M194 14 L168 22 L187 42 Z" fill="currentColor" />
        </svg>

        <a
          href={cta.href}
          target={cta.external ? "_blank" : undefined}
          rel={cta.external ? "noopener noreferrer" : undefined}
          className="group relative z-10 mt-auto flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white py-2.5 pl-3.5 pr-4 text-ink shadow-elevated ring-2 ring-brand/30 transition hover:ring-brand"
        >
          <MousePointerClick className="h-6 w-6 shrink-0 text-brand" />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-[15px] font-bold text-brand">{cta.label}</span>
            {cta.sublabel && <span className="text-[10.5px] text-muted">{cta.sublabel}</span>}
          </span>
        </a>
      </div>
    </div>
  );
}

/**
 * Floating plan card that travels with the visitor. On wide screens it opens
 * on its own while the hero is in view and tucks into a small pill once the
 * visitor scrolls; elsewhere it starts as the pill. The pill reopens it, the
 * X / Esc close it, and a card opened by hand closes again after some
 * scrolling so it never sits over the content for long. Rendered once,
 * outside the normal section flow, just before the WhatsApp button —
 * whose corner it shares (stacked above it from md up).
 */
export function PlanWidget({ meta, content }: { meta: SiteMeta; content: PlanWidgetContent }) {
  const [wide, setWide] = useState(false);
  const [nearTop, setNearTop] = useState(true);
  // null = automatic behavior; true / false = the visitor's explicit choice.
  const [userOpen, setUserOpen] = useState<boolean | null>(null);
  const openedAt = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia(AUTO_EXPAND_QUERY);
    const onMedia = () => setWide(mq.matches);
    const onScroll = () => setNearTop(window.scrollY < COLLAPSE_AFTER);
    onMedia();
    onScroll();
    mq.addEventListener("change", onMedia);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      mq.removeEventListener("change", onMedia);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const expanded = userOpen ?? (wide && nearTop);

  // A hand-opened card goes back to automatic once the visitor scrolls on.
  useEffect(() => {
    if (userOpen !== true) return;
    const onScroll = () => {
      if (Math.abs(window.scrollY - openedAt.current) > MANUAL_SCROLL_BUDGET) setUserOpen(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [userOpen]);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setUserOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  const open = () => {
    openedAt.current = window.scrollY;
    setUserOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="plan-card"
            role="dialog"
            aria-label={content.badge}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            // Phone: a bottom sheet. md+: a popover anchored where the pill sits.
            className="fixed inset-x-3 bottom-3 z-[65] max-h-[82vh] origin-bottom overflow-y-auto rounded-xl shadow-elevated md:inset-x-auto md:bottom-[112px] md:right-8 md:max-h-[calc(100vh-200px)] md:w-[470px] md:origin-bottom-right"
          >
            <PlanCard meta={meta} content={content} onClose={() => setUserOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!expanded && (
          <motion.button
            key="plan-pill"
            type="button"
            onClick={open}
            aria-label={content.labels.open}
            aria-expanded={false}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 left-5 z-[55] flex items-center gap-3 rounded-full bg-gradient-to-r from-navy to-brand-hover py-1.5 pl-1.5 pr-4 text-left text-white shadow-button-access ring-1 ring-inset ring-white/20 transition hover:brightness-110 md:bottom-[112px] md:left-auto md:right-8"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent-mint to-accent-teal">
              <Tag className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold tracking-wide text-accent-mint">{content.badge}</span>
              <span className="whitespace-nowrap text-[13px] font-semibold">
                {[content.pricePrefix, content.price, content.priceSuffix].filter(Boolean).join(" ")}
              </span>
            </span>
            <ChevronUp className="h-4 w-4 text-white/80" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
