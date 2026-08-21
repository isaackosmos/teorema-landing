"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeaderContent, SiteMeta } from "@/content/types";

/**
 * Fixed top navigation with a slide-down mobile menu.
 * Section order: this is always the first section on a landing page.
 */
export function Header({ meta, content }: { meta: SiteMeta; content: HeaderContent }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-header border-b border-white/5 bg-ink-deep">
      <Container className="flex h-full items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src={meta.logo.src}
            alt={meta.logo.alt}
            width={400}
            height={130}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {content.nav.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14.5px] font-semibold text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button href={content.cta.href} size="sm" className="ml-2">
            {content.cta.label} <ArrowRight className="h-4 w-4" />
          </Button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-header border-t border-white/10 bg-ink-deep px-6 py-8 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {content.nav.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[16px] font-semibold text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={content.cta.href}
                size="lg"
                onClick={() => setOpen(false)}
                className="mt-2 justify-center"
              >
                {content.cta.label} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
