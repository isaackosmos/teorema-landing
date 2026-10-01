import type { AnchorHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccessButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  label: string;
  sublabel: string;
}

/** Lucide's "log-in" glyph, split so the bracket and the arrow take different colors. */
function LogInGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" className="stroke-white" />
      <path d="m10 17 5-5-5-5M15 12H3" className="stroke-accent-mint" />
    </svg>
  );
}

/**
 * Two-line "log in to the app" pill: a blue-to-green gradient with a login
 * glyph, a hairline divider, the label over a spaced-out sublabel, and a
 * round green arrow badge. Like `Button`, it renders an anchor.
 */
export function AccessButton({ label, sublabel, className, ...props }: AccessButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex h-12 items-center gap-3 rounded-full bg-gradient-to-r from-brand via-brand-hover to-accent-teal pl-4 pr-1.5 text-white shadow-button-access ring-1 ring-inset ring-white/25 transition hover:brightness-110",
        className,
      )}
      {...props}
    >
      <LogInGlyph />
      <span className="h-7 w-px shrink-0 bg-white/25" aria-hidden />
      <span className="flex flex-col items-center leading-none">
        <span className="whitespace-nowrap font-heading text-[14.5px] font-bold">{label}</span>
        <span className="mt-1 text-[11px] font-medium tracking-[0.2em] text-white/80">{sublabel}</span>
      </span>
      <span className="ml-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent-mint to-accent-teal shadow-card">
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={2.5} />
      </span>
    </a>
  );
}
