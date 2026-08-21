import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

/**
 * Standard section header: optional eyebrow, an h2, and a short
 * description. `heading` accepts ReactNode so a section can highlight
 * a word (e.g. the product name) with a `<span className="text-brand">`.
 */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h2 className="font-heading text-h2 font-bold tracking-tight text-ink md:text-h2-lg">
        {heading}
      </h2>
      {description && <p className="mt-3 text-body text-muted leading-relaxed">{description}</p>}
    </div>
  );
}
