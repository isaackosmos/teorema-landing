import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { cn } from "@/lib/utils";
import type { SupportContent } from "@/content/types";

/**
 * The grid follows the number of channels a product actually offers, so a
 * product with fewer than three doesn't leave empty columns. Three (or more)
 * channels keep the three-column layout.
 */
const columnClasses: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
};

/**
 * Compact support band: heading on the left, channel cards on the right,
 * with an optional live-status indicator. Anchor target for the header's
 * "Suporte" nav link (`id="suporte"`).
 */
export function Support({ content }: { content: SupportContent }) {
  return (
    <section id="suporte" className="border-t border-gray-100 bg-white py-14">
      <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <h2 className="font-heading text-h2 font-bold text-ink">{content.heading}</h2>
          <p className="mt-3 max-w-[560px] text-body text-muted">{content.description}</p>
          {content.statusLabel && (
            <div className="mt-4 flex items-center gap-2 text-[13px] font-semibold text-ink">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> {content.statusLabel}
            </div>
          )}
        </div>

        <div className={cn("grid gap-4", columnClasses[content.channels.length] ?? "md:grid-cols-3")}>
          {content.channels.map((channel) => (
            <div key={channel.title} className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5 shadow-card">
              <IconTile icon={channel.icon} size="lg" tone="navy" />
              <div className="min-w-0">
                <div className="text-[15px] font-bold text-ink">{channel.title}</div>
                <div className="mt-1 text-body-sm leading-relaxed text-muted">{channel.description}</div>
                {channel.contact && (
                  <a
                    href={channel.contact.href}
                    target={channel.contact.external ? "_blank" : undefined}
                    rel={channel.contact.external ? "noopener noreferrer" : undefined}
                    className="mt-2 inline-block break-all text-body-sm font-bold text-ink transition hover:text-brand"
                  >
                    {channel.contact.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
