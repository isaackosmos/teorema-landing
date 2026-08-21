import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import type { TestimonialsContent } from "@/content/types";

/**
 * Customer quotes grid. Purely social proof — no CTA, no headline,
 * sits between Support and the closing CtaBanner.
 */
export function Testimonials({ content }: { content: TestimonialsContent }) {
  return (
    <section className="border-y border-gray-100 bg-surface-subtle py-20">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((testimonial) => (
            <div key={testimonial.name} className="rounded-lg border border-gray-100 bg-white p-6 shadow-card">
              <StarRating rating={testimonial.rating} className="mb-3" />
              <div className="text-[14px] leading-relaxed text-ink">&ldquo;{testimonial.text}&rdquo;</div>
              <div className="mt-4 flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-tint text-[11px] font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-ink">{testimonial.name}</div>
                  <div className="text-[11px] text-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
