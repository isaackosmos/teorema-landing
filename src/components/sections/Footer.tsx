import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { FooterContent, SiteMeta } from "@/content/types";

/**
 * Site footer: brand blurb + compliance badges, link columns, a contact
 * column (email + WhatsApp), and a bottom copyright bar. Always the last
 * section before the WhatsAppFloatingButton.
 */
export function Footer({ meta, content }: { meta: SiteMeta; content: FooterContent }) {
  const copyright = content.copyrightTemplate.replace("{year}", String(new Date().getFullYear()));

  return (
    <footer className="border-t border-white/10 bg-ink-deep">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src={meta.logo.src}
            alt={meta.logo.alt}
            width={400}
            height={130}
            className="h-12 w-auto object-contain"
          />
          <p className="mt-4 max-w-[300px] text-body-sm leading-relaxed text-white/50">{content.description}</p>
          {content.complianceBadges && (
            <div className="mt-6 flex flex-wrap gap-2">
              {content.complianceBadges.map((badge) => (
                <div
                  key={badge}
                  className="grid h-8 place-items-center rounded-full border border-white/10 bg-white/10 px-3 text-[11px] text-white/70"
                >
                  {badge}
                </div>
              ))}
            </div>
          )}
        </div>

        {content.columns.map((column) => (
          <div key={column.title}>
            <div className="text-[13px] font-semibold text-white">{column.title}</div>
            <div className="mt-4 space-y-2.5 text-body-sm text-white/60">
              {column.items.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <div className="text-[13px] font-semibold text-white">{content.contactColumnTitle}</div>
          <div className="mt-4 space-y-2.5 text-body-sm text-white/60">
            <a
              href={meta.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" /> {meta.whatsapp.phoneDisplay}
            </a>
            <a
              href={meta.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp {meta.whatsapp.phoneDisplay}
            </a>
            <div>{meta.supportEmail}</div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex h-16 items-center justify-between text-[12px] text-white/40">
          <div>{copyright}</div>
          <div className="flex gap-4">
            {content.legalLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
