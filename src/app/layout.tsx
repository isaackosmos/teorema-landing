import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

// Heading font — matches the reference prototype's `h1,h2,h3 { font-family: 'Sora' }`.
const fontHeading = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

// Body font — matches the reference prototype's default text font.
const fontSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  // NOTE: still an ASSUMED production domain — it was originally guessed from
  // a V3ndor Praxis support email that has since been replaced by
  // teorema@teorema.inf.br, so nothing confirms it any more. Required so
  // Next.js can resolve absolute URLs for Open Graph / Twitter images —
  // confirm the real deploy domain before launch, or set NEXT_PUBLIC_SITE_URL.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://v3ndorpraxis.com.br",
  ),
  title: "Teorema Landing",
  description: "Landing pages for Teorema products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fontHeading.variable} ${fontSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
