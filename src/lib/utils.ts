import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's default font sizes, so it reads any
 * other `text-*` class as a color. Without this, a custom size token such
 * as `text-body-xs` or `text-h2` would be silently dropped whenever a text
 * color (`text-ink`, `text-brand`, ...) appears in the same class list.
 * Keep this list in sync with `theme.extend.fontSize` in tailwind.config.ts.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "body-xs",
            "body-sm",
            "body",
            "body-lg",
            "eyebrow",
            "h4",
            "h2",
            "h2-lg",
            "h1",
            "h1-lg",
            "display",
            "display-lg",
          ],
        },
      ],
    },
  },
});

/**
 * Merge Tailwind class lists safely (later classes win over earlier
 * conflicting ones). Use this in every component that accepts a
 * `className` override or composes conditional classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
