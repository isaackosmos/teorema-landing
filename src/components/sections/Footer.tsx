import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { FooterContent, SiteMeta } from "@/content/types";

/**
 * Site footer on a light background: brand blurb + compliance badges,
 * link columns, a contact column (phone, WhatsApp, email) and the legal
 * links + copyright. Always the last section before the
 * WhatsAppFloatingButton.
 */
export function Footer({ meta, content }: { meta: SiteMeta; content: FooterContent }) {
  const copyright = content.copyrightTemplate.replace("{year}", String(new Date().getFullYear()));

  return (
    <footer className="bg-white">
      <Container className="grid gap-10 pb-12 pt-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))_minmax(0,1.6fr)]">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Image
            src={meta.logo.src}
            alt={meta.logo.alt}
            width={480}
            height={160}
            className="h-14 w-auto self-start object-contain"
          />
          <p className="max-w-[320px] text-body-xs leading-relaxed text-muted">{content.description}</p>
          {content.complianceBadges && (
            <div className="flex flex-wrap gap-2">
              {content.complianceBadges.map((badge) => (
                <div
                  key={badge}
                  className="grid h-8 place-items-center rounded-full border border-gray-200 bg-surface-subtle px-3 text-[11px] text-ink"
                >
                  {badge}
                </div>
              ))}
            </div>
          )}
        </div>

        {content.columns.map((column) => (
          <div key={column.title}>
            <div className="text-[13px] font-bold text-ink">{column.title}</div>
            <div className="mt-3 space-y-2 text-body-xs text-muted">
              {column.items.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <div className="text-[13px] font-bold text-ink">{content.contactColumnTitle}</div>
          <div className="mt-3 space-y-2 text-body-xs text-muted">
            <a
              href={meta.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-brand"
            >
              {meta.whatsapp.phoneDisplay}
            </a>
            <a
              href={meta.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-brand"
            >
              WhatsApp
            </a>
            <a href={`mailto:${meta.supportEmail}`} className="block break-all transition hover:text-brand">
              {meta.supportEmail}
            </a>
          </div>
        </div>

        <div className="text-body-xs text-muted lg:self-end">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {content.legalLinks.map((link, i) => (
              <span key={link} className="flex gap-3 whitespace-nowrap">
                {i > 0 && <span className="text-gray-300">|</span>}
                {link}
              </span>
            ))}
          </div>
          <div className="mt-2">{copyright}</div>
        </div>
      </Container>
    </footer>
  );
}
