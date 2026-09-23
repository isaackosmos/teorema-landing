import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const toneClasses = {
  // Lime accent tint — hero/process badges on light sections.
  accent: "bg-accent/10 border-accent/30 text-accent-ink",
  // Brand-blue tint — section kickers on light sections ("Gestão integrada").
  brand: "bg-brand-tint border-brand-tint-border text-brand",
  // Translucent white — badges on dark sections (CTA banner, app showcase).
  dark: "bg-white/10 border-white/10 text-white/80",
  // Neutral white — compliance/trust badges on light sections.
  neutral: "bg-white border-gray-200 text-ink",
} as const;

/**
 * Small rounded badge used for kicker pills, trust badges and status
 * indicators (e.g. "Novo • 100% em nuvem", "LGPD compliant").
 */
export function Pill({
  children,
  tone = "accent",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof toneClasses;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-body-xs font-bold tracking-wide",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
