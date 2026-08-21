import type { Metadata } from "next";
import vendorPraxis from "@/content/products/vendor-praxis";
import { VendorPraxisView } from "./VendorPraxisView";

export const metadata: Metadata = {
  title: vendorPraxis.meta.productName,
  description: vendorPraxis.hero.subheadRest,
};

export default function VendorPraxisPage() {
  return <VendorPraxisView />;
}
