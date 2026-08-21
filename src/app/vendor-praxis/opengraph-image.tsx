import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import vendorPraxis from "@/content/products/vendor-praxis";

// Open Graph / link-preview image for the V3ndor Praxis landing page.
// Shown by WhatsApp, iMessage, Slack, etc. when the page URL is shared.
export const alt = "V3ndor Praxis — o ERP que cresce junto com a sua empresa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await readFile(
    join(process.cwd(), "public/logos/vendor-praxis-logo.jpg"),
  );
  const logoSrc = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080F1F",
          padding: "80px",
        }}
      >
        <img src={logoSrc} width={640} height={208} alt="" />
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 40,
            fontWeight: 700,
            fontFamily: "sans-serif",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          {vendorPraxis.hero.subheadBold}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 26,
            fontFamily: "sans-serif",
            color: "#8FE000",
            textAlign: "center",
          }}
        >
          Financeiro • Vendas • Estoque • Fiscal — tudo em nuvem
        </div>
      </div>
    ),
    { ...size },
  );
}
