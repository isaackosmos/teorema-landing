import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "w-8 h-8 rounded-sm",
  md: "w-10 h-10 rounded-sm",
  lg: "w-11 h-11 rounded-md",
} as const;

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-5 h-5",
} as const;

const toneClasses = {
  "brand-tint": "bg-brand-tint border border-brand-tint-border text-brand",
  "accent-soft": "bg-accent-soft border border-accent-soft-border text-accent-ink",
  dark: "bg-ink text-white",
} as const;

/**
 * Rounded icon chip used across feature cards, support cards and
 * benefit checklist items. Pass `className` to layer interactive states
 * (e.g. `group-hover:bg-brand group-hover:text-white`) without forking
 * this component.
 */
export function IconTile({
  icon: Icon,
  size = "md",
  tone = "brand-tint",
  className,
}: {
  icon: LucideIcon;
  size?: keyof typeof sizeClasses;
  tone?: keyof typeof toneClasses;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid shrink-0 place-items-center transition",
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      <Icon className={iconSizeClasses[size]} />
    </div>
  );
}
