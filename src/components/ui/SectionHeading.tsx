import type { ReactNode } from "react";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

/**
 * Standard section header: optional kicker pill, an h2, and a short
 * description. `heading` accepts ReactNode so a section can highlight
 * a word (e.g. the product name) with a `<span className="text-brand">`.
 */
export function SectionHeading({
  eyebrow,
  eyebrowTone = "brand",
  heading,
  description,
  align = "left",
  size = "default",
  className,
}: {
  eyebrow?: string;
  eyebrowTone?: "brand" | "accent";
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** `compact` keeps the smaller h2 size at every breakpoint, for headings sharing a row with dense content. */
  size?: "default" | "compact";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Pill tone={eyebrowTone} className="mb-4">
          {eyebrow}
        </Pill>
      )}
      <h2 className={cn("font-heading text-h2 font-bold text-ink", size === "default" && "md:text-h2-lg")}>{heading}</h2>
      {description && <p className="mt-4 text-body leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
