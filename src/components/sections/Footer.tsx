import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { CtaLink, FooterContent, SiteMeta } from "@/content/types";

const linkClass = "transition hover:text-brand";

function FooterItem({ item }: { item: string | CtaLink }) {
  if (typeof item === "string") return <div>{item}</div>;
  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={`block ${linkClass}`}
    >
      {item.label}
    </a>
  );
}

/**
 * Site footer on a light background: logo with the brand blurb beside it,
 * link columns, a contact column (phone, WhatsApp, email) and the legal
 * links + copyright. Always the last section before the
 * WhatsAppFloatingButton.
 */
export function Footer({ meta, content }: { meta: SiteMeta; content: FooterContent }) {
  const copyright = content.copyrightTemplate.replace("{year}", String(new Date().getFullYear()));
  const labels = content.contactLabels;

  return (
    <footer className="bg-white">
      <Container className="grid gap-8 pb-10 pt-6 sm:grid-cols-3 lg:grid-cols-[minmax(0,2.8fr)_repeat(3,minmax(0,0.8fr))_minmax(0,1.6fr)]">
        <div className="flex flex-col gap-4 sm:col-span-3 lg:col-span-1 xl:flex-row xl:items-start xl:gap-6">
          <Image
            src={meta.logo.src}
            alt={meta.logo.alt}
            width={480}
            height={160}
            className="h-14 w-auto shrink-0 self-start object-contain"
          />
          <div className="xl:pt-2">
            <p className="max-w-[320px] text-body-xs leading-relaxed text-muted">{content.description}</p>
            {content.complianceBadges && (
              <div className="mt-4 flex flex-wrap gap-2">
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
        </div>

        {content.columns.map((column) => (
          <div key={column.title}>
            <div className="text-[13px] font-bold text-ink">{column.title}</div>
            <div className="mt-2.5 space-y-1.5 text-body-xs text-muted">
              {column.items.map((item) => (
                <FooterItem key={typeof item === "string" ? item : item.label} item={item} />
              ))}
            </div>
          </div>
        ))}

        <div>
          <div className="text-[13px] font-bold text-ink">{content.contactColumnTitle}</div>
          <div className="mt-2.5 space-y-1.5 text-body-xs text-muted">
            <a href={meta.whatsapp.link} target="_blank" rel="noopener noreferrer" className={`block ${linkClass}`}>
              {labels?.phone ?? meta.whatsapp.phoneDisplay}
            </a>
            <a href={meta.whatsapp.link} target="_blank" rel="noopener noreferrer" className={`block ${linkClass}`}>
              {labels?.whatsapp ?? "WhatsApp"}
            </a>
            <a href={`mailto:${meta.supportEmail}`} className={`block break-all ${linkClass}`}>
              {labels?.email ?? meta.supportEmail}
            </a>
          </div>
        </div>

        <div className="text-body-xs text-muted sm:col-span-3 lg:col-span-1 lg:pt-7">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {content.legalLinks.map((link, i) => (
              <span key={link} className="flex gap-3 whitespace-nowrap">
                {i > 0 && <span className="text-gray-300">|</span>}
                {link}
              </span>
            ))}
          </div>
          <div className="mt-1.5">{copyright}</div>
        </div>
      </Container>
    </footer>
  );
}
