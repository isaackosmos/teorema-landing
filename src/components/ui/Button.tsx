import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  // Brand blue pill — the main call to action.
  primary: "bg-brand text-white hover:bg-brand-hover shadow-button-brand",
  // Near-black pill — secondary emphasis on light sections.
  dark: "bg-ink text-white hover:bg-black",
  // White pill with a hairline border — secondary action on light sections.
  outline: "bg-white text-ink border border-ink/10 hover:bg-gray-50",
  // White pill with no border — primary/secondary action on dark sections.
  light: "bg-white text-ink hover:bg-gray-100",
} as const;

const sizeClasses = {
  sm: "h-10 px-6 text-[14px]",
  md: "h-11 px-6 text-[14px]",
  lg: "h-12 px-7 text-[15px]",
  xl: "h-[52px] px-8 text-[15px]",
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * Pill-shaped call-to-action link. All CTAs in this design system are
 * anchors (hash links, external WhatsApp links, mailto, etc.), never
 * buttons that submit forms — so this renders an `<a>`, not a `<button>`.
 */
export function Button({
  children,
  variant = "primary",
  size = "lg",
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
