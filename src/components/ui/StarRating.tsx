import { cn } from "@/lib/utils";

/**
 * Row of filled star glyphs used for ratings and testimonials.
 * Renders `count` stars total, filling the first `rating` of them.
 */
export function StarRating({
  rating,
  count = 5,
  className,
}: {
  rating: number;
  count?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} out of ${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn("text-[14px] leading-none", i < rating ? "text-star" : "text-gray-200")}
        >
          ★
        </span>
      ))}
    </div>
  );
}
