import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared page container. Every section's inner content should be wrapped
 * in this instead of repeating `max-w-container mx-auto px-6`.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-container px-6", className)}>{children}</div>;
}
