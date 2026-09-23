import type { Config } from "tailwindcss";

// ---------------------------------------------------------------------------
// Design tokens extracted from reference/vendor-praxis-prototype.html.
// These are the ONLY brand values that should ever be used in components —
// never reach for a raw hex code or an arbitrary `text-[15px]` in JSX.
// See CLAUDE.md → "Design tokens" for the rationale behind each group.
// ---------------------------------------------------------------------------

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand blue — primary actions, links, active states.
        brand: {
          DEFAULT: "#0F52FF",
          hover: "#0B44E0",
          light: "#6A8DFF",
          tint: "#EEF2FF", // soft background for icon chips, badges
          "tint-border": "#DDE6FF",
        },
        // Lime accent — "growth" / positive signal, used sparingly.
        accent: {
          DEFAULT: "#8FE000",
          ink: "#2F5C00", // text sitting on top of accent tints
          "ink-alt": "#3A5A00",
          soft: "#E8FFB0", // light fill
          "soft-border": "#D6F58A",
          strong: "#5CB81C", // filled check badges (white glyph on top)
        },
        // Ink — near-black text and dark surfaces.
        ink: {
          DEFAULT: "#0B1220", // headings, primary text, dark cards
          deep: "#101B36", // phone-mockup frame, legacy dark surfaces
        },
        // Navy — the brand's dark-blue surfaces: callout cards, the CTA
        // banner, the dashboard mockup sidebar. Usually used as a
        // `from-navy to-navy-mid` gradient.
        navy: {
          DEFAULT: "#0A1B4D",
          mid: "#11318A",
        },
        // Muted secondary text on light backgrounds.
        muted: "#5A667D",
        // Surfaces.
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#FCFCFD", // off-white section background
          tint: "#F4F7FF", // pale-blue section background
        },
        // Single-purpose accents that show up as literal brand colors
        // (star ratings, WhatsApp), kept as tokens so they're never
        // retyped as raw hex in a component.
        star: "#FFC224",
        whatsapp: "#25D366",
      },
      fontFamily: {
        // Headings (h1–h3). Loaded via next/font as --font-heading.
        heading: ["var(--font-heading)", "sans-serif"],
        // Body copy and everything else. Loaded as --font-sans.
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        // Small print: card meta, nav links, footer text.
        "body-xs": ["12px", { lineHeight: "1.4" }],
        "body-sm": ["13.5px", { lineHeight: "1.5" }],
        // Default paragraph size.
        body: ["16px", { lineHeight: "1.6" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        // Uppercase kicker/eyebrow labels ("Plataforma completa").
        eyebrow: ["12px", { lineHeight: "1.2", letterSpacing: "0.08em" }],
        // Card / list-item titles.
        h4: ["17px", { lineHeight: "1.3" }],
        // Standard section heading, e.g. "Tudo que você precisa em um só lugar".
        h2: ["32px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "h2-lg": ["40px", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        // Hero headline only.
        h1: ["40px", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "h1-lg": ["50px", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        // High-emphasis display heading, reserved for the closing CTA banner.
        display: ["36px", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["56px", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        sm: "12px",
        DEFAULT: "16px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
      },
      maxWidth: {
        container: "1280px", // shared page container width
      },
      spacing: {
        header: "72px", // fixed header height
        "section-y": "96px", // standard section vertical padding
        "section-y-sm": "80px", // secondary/tighter sections
      },
      boxShadow: {
        card: "0 8px 24px rgba(8, 15, 31, 0.04)",
        "card-hover": "0 16px 40px rgba(8, 15, 31, 0.06)",
        elevated:
          "0 32px 80px rgba(8, 15, 31, 0.12), 0 8px 24px rgba(8, 15, 31, 0.06)",
        pill: "0 12px 32px rgba(0, 0, 0, 0.12)",
        "button-brand": "0 8px 24px rgba(15, 82, 255, 0.28)",
        "button-brand-lg": "0 8px 32px rgba(15, 82, 255, 0.4)",
        dark: "0 16px 40px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
