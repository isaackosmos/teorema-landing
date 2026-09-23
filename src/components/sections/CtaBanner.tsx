import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import type { CtaBannerContent, CtaLink, SiteMeta } from "@/content/types";

function linkProps(cta: CtaLink) {
  return cta.external
    ? { href: cta.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: cta.href };
}

/**
 * Closing call-to-action: a rounded navy card with the heading, a short
 * pitch plus trust signals, and the CTAs. Anchor target for the header's
 * "Contato" nav link and the final conversion point before the Footer
 * (`id="contato"`).
 */
export function CtaBanner({ meta, content }: { meta: SiteMeta; content: CtaBannerContent }) {
  return (
    <section id="contato" className="bg-white py-8">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-mid shadow-elevated">
          <div className="absolute inset-0" aria-hidden>
            <div className="absolute -right-24 -top-32 h-[360px] w-[520px] rounded-full bg-brand opacity-40 blur-[120px]" />
            <div className="absolute -bottom-32 left-1/3 h-[260px] w-[420px] rounded-full bg-brand-light opacity-20 blur-[120px]" />
          </div>

          <div className="relative grid gap-8 px-6 py-10 md:px-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] lg:items-center">
            <div>
              {content.badgeText && (
                <Pill tone="dark" className="mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {content.badgeText}
                </Pill>
              )}
              <h2 className="font-heading text-h2 font-bold text-white">
                {content.headingPrefix}
                {content.headingHighlight}
              </h2>
            </div>

            <div>
              <p className="text-body-sm leading-relaxed text-white/75">{content.description}</p>
              {content.highlights ? (
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-body-xs text-white/70">
                  {content.highlights.map((item) => (
                    <span key={item.label} className="inline-flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-white/80" /> {item.label}
                    </span>
                  ))}
                </div>
              ) : (
                content.footnote && <div className="mt-4 text-body-xs text-white/50">{content.footnote}</div>
              )}
              {content.contactEmail && (
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-body-xs text-white/70">
                  <a
                    href={meta.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5" /> {meta.whatsapp.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${content.contactEmail}`}
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5" /> {content.contactEmail}
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {content.primaryCta && (
                <Button {...linkProps(content.primaryCta)} size="lg" className="h-auto min-h-12 py-3 text-center shadow-button-brand-lg">
                  {content.primaryCta.label} <ArrowRight className="h-4 w-4" />
                </Button>
              )}
              <Button {...linkProps(content.secondaryCta)} variant="outline-light" size="lg" className="h-auto min-h-12 py-3 text-center">
                {content.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
