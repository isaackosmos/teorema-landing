import { cn } from "@/lib/utils";

/**
 * Plain uppercase kicker label placed above a section heading
 * (e.g. "Plataforma completa"). For a badge/pill with a background,
 * use `Pill` instead.
 */
export function Eyebrow({
  children,
  tone = "brand",
  className,
}: {
  children: string;
  tone?: "brand" | "accent" | "light";
  className?: string;
}) {
  const toneClasses = {
    brand: "text-brand",
    accent: "text-accent-ink",
    light: "text-white/70",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex text-eyebrow font-semibold uppercase",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
