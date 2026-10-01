"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { AccessButton } from "@/components/ui/AccessButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeaderContent, HeaderCta, SiteMeta } from "@/content/types";

/**
 * The header CTA: the two-line `AccessButton` when the content gives a
 * `sublabel`, otherwise the standard brand pill.
 */
function HeaderCtaLink({
  cta,
  size,
  className,
  onClick,
}: {
  cta: HeaderCta;
  size: "sm" | "lg";
  className?: string;
  onClick?: () => void;
}) {
  const link = {
    href: cta.href,
    onClick,
    ...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };
  if (cta.sublabel) {
    return <AccessButton {...link} label={cta.label} sublabel={cta.sublabel} className={className} />;
  }
  return (
    <Button {...link} size={size} className={className}>
      {cta.label} <ArrowRight className="h-4 w-4" />
    </Button>
  );
}

/**
 * Fixed top navigation with a slide-down mobile menu.
 * Section order: this is always the first section on a landing page.
 */
export function Header({ meta, content }: { meta: SiteMeta; content: HeaderContent }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-header border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <Container className="flex h-full items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src={meta.logo.src}
            alt={meta.logo.alt}
            width={480}
            height={160}
            className="h-11 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {content.nav.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-ink/80 transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <HeaderCtaLink cta={content.cta} size="sm" className="ml-3" />
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full bg-brand-tint text-ink xl:hidden"
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
            className="absolute inset-x-0 top-header border-y border-gray-100 bg-white px-6 py-8 shadow-card-hover xl:hidden"
          >
            <div className="flex flex-col gap-6">
              {content.nav.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[16px] font-semibold text-ink"
                >
                  {link.label}
                </a>
              ))}
              <HeaderCtaLink
                cta={content.cta}
                size="lg"
                onClick={() => setOpen(false)}
                className="mt-2 justify-center self-start"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
