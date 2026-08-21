import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import type { CtaBannerContent } from "@/content/types";

/**
 * Closing call-to-action banner on a dark background. Anchor target for
 * the header's "Contato" nav link and the final conversion point before
 * the Footer (`id="contato"`).
 */
export function CtaBanner({ content }: { content: CtaBannerContent }) {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink-deep py-section-y">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand opacity-20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[520px] w-[520px] rounded-full bg-accent opacity-[0.12] blur-[140px]" />
      </div>

      <Container className="relative text-center">
        <Pill tone="dark">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {content.badgeText}
        </Pill>

        <h2 className="mx-auto mt-6 max-w-[760px] font-heading text-display font-bold leading-[0.95] tracking-tight text-white md:text-display-lg">
          {content.headingPrefix}
          <span className="text-accent">{content.headingHighlight}</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[560px] text-body leading-relaxed text-white/60">{content.description}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={content.primaryCta.href} size="xl" className="shadow-button-brand-lg">
            {content.primaryCta.label} <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={content.secondaryCta.href} variant="light" size="xl">
            {content.secondaryCta.label}
          </Button>
        </div>

        <div className="mt-6 text-[12px] text-white/40">{content.footnote}</div>
      </Container>
    </section>
  );
}
