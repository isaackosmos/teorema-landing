import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { AppShowcaseContent } from "@/content/types";

const mockupStatToneClasses = {
  brand: { wrap: "bg-brand-tint", label: "text-muted" },
  accent: { wrap: "bg-accent-soft", label: "text-accent-ink" },
} as const;

/**
 * Customer-portal / mobile-app showcase: a gradient card containing a
 * phone mockup. Anchor target for the header's "Área Cliente" nav link
 * (`id="area"`). Optional for products without a companion app — see
 * CLAUDE.md → "Optional sections".
 */
export function AppShowcase({ content }: { content: AppShowcaseContent }) {
  return (
    <section id="area" className="px-6 py-8">
      <Container className="rounded-2xl bg-gradient-to-br from-brand via-brand-hover to-ink-deep p-px">
        <div className="relative overflow-hidden rounded-[31px] bg-gradient-to-br from-brand/10 to-ink-deep">
          {content.backgroundImage && (
            <Image
              src={content.backgroundImage}
              alt=""
              fill
              aria-hidden
              className="pointer-events-none select-none object-cover opacity-20 mix-blend-soft-light"
            />
          )}
          <div className="absolute inset-0">
            <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent opacity-[0.18] blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-brand opacity-50 blur-[80px]" />
          </div>

          <div className="relative grid items-center gap-10 p-8 md:p-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-bold uppercase tracking-widest text-white/70">
                <content.eyebrow.icon className="h-3.5 w-3.5" /> {content.eyebrow.label}
              </div>
              <h2 className="mt-5 font-heading text-h2 font-bold leading-[1.05] tracking-tight text-white md:text-h2-lg">
                {content.heading}
              </h2>
              <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-white/70">{content.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {content.pills.map((pill) => (
                  <div
                    key={pill.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[13px] text-white"
                  >
                    <pill.icon className="h-4 w-4" /> {pill.label}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <Button href={content.cta.href} variant="light" size="md">
                  {content.cta.label}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border-[8px] border-ink-deep bg-ink-deep shadow-dark">
                <div className="flex h-6 items-center justify-center bg-ink-deep">
                  <div className="h-1.5 w-16 rounded-full bg-white/20" />
                </div>
                <div className="bg-surface-subtle p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[13px] font-bold">{content.mockup.greeting}</div>
                    <div className="h-7 w-7 rounded-full bg-gray-200" />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {content.mockup.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className={cn("rounded-md p-3", mockupStatToneClasses[stat.tone].wrap)}
                      >
                        <div className={cn("text-[11px]", mockupStatToneClasses[stat.tone].label)}>{stat.label}</div>
                        <div className="text-[15px] font-bold">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 space-y-2">
                    {content.mockup.listItems.map((row) => (
                      <div
                        key={row.title}
                        className="flex items-center justify-between rounded-sm border border-gray-100 bg-white p-2.5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="grid h-8 w-8 place-items-center rounded-full bg-gray-100">
                            <Check className="h-4 w-4 text-gray-500" />
                          </div>
                          <div>
                            <div className="text-[12px] font-semibold">{row.title}</div>
                            <div className="text-[10px] text-muted">{row.subtitle}</div>
                          </div>
                        </div>
                        <div className="grid h-6 w-6 place-items-center rounded-full bg-brand">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
