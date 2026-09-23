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
  className,
}: {
  eyebrow?: string;
  eyebrowTone?: "brand" | "accent";
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Pill tone={eyebrowTone} className="mb-4">
          {eyebrow}
        </Pill>
      )}
      <h2 className="font-heading text-h2 font-bold text-ink md:text-h2-lg">{heading}</h2>
      {description && <p className="mt-4 text-body leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
