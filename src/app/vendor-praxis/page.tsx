import type { Metadata } from "next";
import vendorPraxis from "@/content/products/vendor-praxis";
import { VendorPraxisView } from "./VendorPraxisView";

const title = `${vendorPraxis.meta.productName} — ${vendorPraxis.hero.headlineLine1} ${vendorPraxis.hero.headlineLine2Prefix}${vendorPraxis.hero.headlineHighlight}`;
const description = `${vendorPraxis.hero.subheadBold}${vendorPraxis.hero.subheadRest}`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: vendorPraxis.meta.productName,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function VendorPraxisPage() {
  return <VendorPraxisView />;
}
