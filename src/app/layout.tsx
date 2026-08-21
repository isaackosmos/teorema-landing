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
  title: "Teorema Landing",
  description: "Landing pages for Teorema products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
