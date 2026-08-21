import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import type { SupportContent } from "@/content/types";

/**
 * Support channels grid with a live-status indicator. Anchor target for
 * the header's "Suporte" nav link (`id="suporte"`).
 */
export function Support({ content }: { content: SupportContent }) {
  return (
    <section id="suporte" className="bg-white py-section-y">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-h2 font-bold leading-tight tracking-tight text-ink md:text-h2-lg">
              {content.heading}
            </h2>
            <p className="mt-3 max-w-[560px] text-body text-muted">{content.description}</p>
          </div>
          <div className="flex items-center gap-2 text-[13px] font-semibold text-ink">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> {content.statusLabel}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.channels.map((channel) => (
            <div key={channel.title} className="rounded-lg border border-gray-100 bg-surface-subtle p-6">
              <IconTile icon={channel.icon} size="lg" tone="dark" />
              <div className="mt-4 text-h4 font-bold text-ink">{channel.title}</div>
              <div className="mt-2 text-body-sm leading-relaxed text-muted">{channel.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
