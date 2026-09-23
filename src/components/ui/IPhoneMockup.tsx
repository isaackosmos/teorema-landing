"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { BatteryFull, Signal, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Frame asset: a tilted iPhone with a transparent screen and background
 * (`public/mockups/iphone-frame.png`, 480×716).
 */
const FRAME = { src: "/mockups/iphone-frame.png", width: 480, height: 716 };

/**
 * Where the screen sits inside the frame image, in frame pixels. These are
 * the screen's "virtual" square corners (intersections of its straight
 * edges), pushed ~3px outward so the content tucks under the bezel.
 * Re-measure these if the frame asset changes.
 */
const SCREEN_QUAD = {
  tl: [107.7, 91.2],
  tr: [329, 106.8],
  br: [392.6, 642.2],
  bl: [161.8, 623.6],
} as const;

/** Logical size of the screen content (an iPhone-ish 390×844 aspect). */
export const IPHONE_SCREEN = { width: 300, height: 650 };

/**
 * CSS `matrix3d` that maps a `width`×`height` box (transform-origin 0 0)
 * onto the four quad corners — a projective (perspective) transform, so
 * the flat HTML screen follows the phone's tilt. Square-to-quad mapping
 * after Heckbert, "Fundamentals of Texture Mapping", 1989.
 */
function quadMatrix(width: number, height: number) {
  const [x0, y0] = SCREEN_QUAD.tl;
  const [x1, y1] = SCREEN_QUAD.tr;
  const [x2, y2] = SCREEN_QUAD.br;
  const [x3, y3] = SCREEN_QUAD.bl;
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (dx3 * dy2 - dx2 * dy3) / den;
  const h = (dx1 * dy3 - dx3 * dy1) / den;
  const a = x1 - x0 + g * x1, b = x3 - x0 + h * x3, c = x0;
  const d = y1 - y0 + g * y1, e = y3 - y0 + h * y3, f = y0;
  const m = [a / width, d / width, 0, g / width, b / height, e / height, 0, h / height, 0, 0, 1, 0, c, f, 0, 1];
  return `matrix3d(${m.map((v) => +v.toFixed(8)).join(",")})`;
}

const SCREEN_TRANSFORM = quadMatrix(IPHONE_SCREEN.width, IPHONE_SCREEN.height);

/**
 * Tilted iPhone mockup: a transparent PNG frame on top, with `children`
 * rendered as live HTML "on the screen" underneath it. Design the children
 * for a {@link IPHONE_SCREEN} (300×650) screen — the component projects
 * that box into the frame's perspective and scales everything to whatever
 * width the mockup is given (set it with `className`, e.g. `w-64`).
 */
export function IPhoneMockup({
  children,
  time = "9:41",
  className,
  screenClassName,
}: {
  children: ReactNode;
  /** Clock shown in the status bar. */
  time?: string;
  className?: string;
  screenClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // 0 until measured, so the screen never flashes at the wrong size.
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / FRAME.width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ aspectRatio: `${FRAME.width} / ${FRAME.height}` }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: FRAME.width, height: FRAME.height, transform: `scale(${scale})`, opacity: scale ? 1 : 0 }}
      >
        <div
          className={cn("absolute left-0 top-0 flex origin-top-left flex-col overflow-hidden rounded-[44px] bg-white", screenClassName)}
          style={{ width: IPHONE_SCREEN.width, height: IPHONE_SCREEN.height, transform: SCREEN_TRANSFORM }}
        >
          <div className="flex h-12 shrink-0 items-end justify-between px-8 pb-1.5 text-[14px] font-semibold text-ink">
            <span>{time}</span>
            <span className="flex items-center gap-1">
              <Signal className="h-3.5 w-3.5" strokeWidth={2.5} />
              <Wifi className="h-3.5 w-3.5" strokeWidth={2.5} />
              <BatteryFull className="h-4 w-4" strokeWidth={2} />
            </span>
          </div>
          <div className="min-h-0 flex-1">{children}</div>
        </div>
      </div>

      <Image
        src={FRAME.src}
        alt=""
        aria-hidden
        fill
        sizes="(min-width: 1280px) 320px, 280px"
        className="pointer-events-none select-none object-contain"
      />
    </div>
  );
}
