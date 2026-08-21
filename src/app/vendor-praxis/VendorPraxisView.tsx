"use client";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Pricing } from "@/components/sections/Pricing";
import { Benefits } from "@/components/sections/Benefits";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Support } from "@/components/sections/Support";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloatingButton } from "@/components/sections/WhatsAppFloatingButton";
import vendorPraxis from "@/content/products/vendor-praxis";

/**
 * Section order follows the shared convention documented in
 * docs/PROJECT.md — do not reorder without updating that doc too.
 *
 * Content is imported directly here (not passed down as a prop from the
 * server-component page) because it contains Lucide icon components,
 * which are functions and can't cross the server/client boundary as
 * props — only plain data can.
 */
export function VendorPraxisView() {
  const content = vendorPraxis;

  return (
    <main className="overflow-x-hidden bg-surface-subtle text-ink selection:bg-brand selection:text-white">
      <Header meta={content.meta} content={content.header} />
      <Hero meta={content.meta} content={content.hero} />
      <Features content={content.features} />
      <ProcessSteps content={content.process} />
      <Pricing content={content.pricing} />
      <Benefits content={content.benefits} />
      <AppShowcase content={content.appShowcase} />
      <Support content={content.support} />
      <Testimonials content={content.testimonials} />
      <CtaBanner content={content.ctaBanner} />
      <Footer meta={content.meta} content={content.footer} />
      <WhatsAppFloatingButton meta={content.meta} content={content.whatsappButton} />
    </main>
  );
}
