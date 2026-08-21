"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import type { SiteMeta, WhatsAppButtonContent } from "@/content/types";

/**
 * Fixed WhatsApp button in the bottom-right corner, with a pulsing ring
 * and a hover tooltip. Rendered once at the end of every landing page,
 * outside the normal section flow.
 */
export function WhatsAppFloatingButton({
  meta,
  content,
}: {
  meta: SiteMeta;
  content: WhatsAppButtonContent;
}) {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[60] flex items-center gap-3 md:bottom-8 md:right-8">
      <div className="group relative pointer-events-auto">
        <div className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full border border-gray-100 bg-white px-4 py-2.5 text-[13px] font-semibold text-ink opacity-0 shadow-pill transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          {content.tooltip}
        </div>

        <motion.a
          href={meta.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${meta.whatsapp.phoneDisplay}`}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            boxShadow: [
              "0 0 0 0 rgba(37,211,102,0.7)",
              "0 0 0 12px rgba(37,211,102,0)",
              "0 0 0 0 rgba(37,211,102,0)",
            ],
          }}
          transition={{
            scale: { delay: 1, type: "spring", stiffness: 260, damping: 20 },
            boxShadow: { delay: 1.5, duration: 2.2, repeat: Infinity, ease: "easeOut" },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-2xl transition-shadow hover:shadow-[0_16px_40px_rgba(37,211,102,0.4)] md:h-[60px] md:w-[60px]"
        >
          <MessageCircle className="h-7 w-7 text-white md:h-[28px] md:w-[28px]" strokeWidth={2.2} />
        </motion.a>
      </div>
    </div>
  );
}
