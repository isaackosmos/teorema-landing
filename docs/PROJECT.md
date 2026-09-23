# Project conventions

This file holds our own project documentation. It lives here — not in
`CLAUDE.md` — because `next dev` auto-generates and rewrites the
`<!-- BEGIN:nextjs-agent-rules -->` block in `AGENTS.md` on every run, so
that file is not a safe place for anything we want to persist. `CLAUDE.md`
imports both `AGENTS.md` (Next.js version rules, machine-managed) and this
file (`@docs/PROJECT.md`, human-managed) — edit this one.

## What this repo is

This repo hosts **multiple, separate product landing pages** over time —
not one landing page. It started with V3ndor Praxis; more products will
be added later. Each landing page is independent: its own route, its own
content, its own copy, no shared state with any other product. What *is*
shared across all of them is the component library and design tokens.

```
/components/ui        shared — generic UI primitives (Button, Pill, ...)
/components/sections   shared — page sections (Hero, Pricing, Footer, ...)
/content/types.ts      shared — the ProductContent schema every product fills in
/content/products/*.ts per-product — copy and data only, one file per product
/app/<product>/        per-product — route, page composition, metadata
```

**The rule:** adding a new product must never require touching another
product's files. If a change to `/components/ui` or `/components/sections`
is needed to support a new product, that change must not alter the
rendered output for existing products (add a new prop/variant with a
default, don't repurpose an existing one).

## Stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS** for styling — all design tokens are declared in
  `tailwind.config.ts`, nowhere else
- **motion** (Framer Motion's successor package, imported as `motion/react`)
  for scroll/entrance animations
- **lucide-react** for icons
- `clsx` + `tailwind-merge` (wrapped as `cn()` in `src/lib/utils.ts`) for
  conditional class composition

## Design tokens

Extracted from `reference/vendor-praxis-prototype.html` and defined in
`tailwind.config.ts`. Components must always reach for a token — never a
raw hex code or an arbitrary `text-[15px]` value — so that a future
product with different brand colors only requires changing the config,
not every component.

| Group | Tokens | Use |
|---|---|---|
| `brand` | `DEFAULT #0F52FF`, `hover`, `light`, `tint`, `tint-border` | Primary actions, links, active states |
| `accent` | `DEFAULT #8FE000` (lime), `ink`, `ink-alt`, `soft`, `soft-border`, `strong #5CB81C` | "Growth"/positive signal, used sparingly; `strong` fills the check badges |
| `ink` | `DEFAULT #0B1220`, `deep #101B36` | Headings/text; `deep` for the phone-mockup frame |
| `navy` | `DEFAULT #0A1B4D`, `mid #11318A` | Dark-blue surfaces (callout cards, CTA banner, mockup sidebar), usually as a `from-navy to-navy-mid` gradient |
| `muted` | `#5A667D` | Secondary text on light backgrounds |
| `surface` | `DEFAULT #FFFFFF`, `subtle #FCFCFD`, `tint #F4F7FF` | Page/section backgrounds; `tint` is the pale-blue alternate section |
| `star`, `whatsapp` | `#FFC224`, `#25D366` | Single-purpose literal-brand colors |
| `fontFamily` | `heading` (Sora, via `--font-heading`), `sans` (Inter, via `--font-sans`) | Loaded with `next/font/google` in `app/layout.tsx` |
| `fontSize` | `body-xs`/`body-sm`/`body`/`body-lg`, `eyebrow`, `h4`, `h2`/`h2-lg`, `h1`/`h1-lg`, `display`/`display-lg` | Semantic type scale — `h1` is hero-only, `display` is CTA-banner-only |
| `spacing` | `header` (72px), `section-y` (96px), `section-y-sm` (80px) | Fixed header height, standard section vertical rhythm |
| `boxShadow` | `card`, `card-hover`, `elevated`, `pill`, `button-brand(-lg)`, `dark` | Named elevation levels instead of ad hoc shadow values |

A new product that needs different brand colors should extend these token
groups (or add a per-product override mechanism) rather than hardcoding
colors in a section component.

## Section-order convention

Every product page composes sections from `/components/sections` in this
fixed order:

1. `Header` (fixed, always first)
2. `Hero`
3. `Features`
4. `ProcessSteps`
5. `ProductEvolution` *(optional — see below)*
6. `Pricing`
7. `Benefits`
8. `AppShowcase` *(optional — see below)*
9. `Support`
10. `Testimonials` *(optional — see below)*
11. `CtaBanner`
12. `Footer` (always last in normal flow)
13. `WhatsAppFloatingButton` (fixed, outside normal flow, rendered last)

Don't reorder sections for a single product — the anchor-linked nav
(`#recursos`, `#por-que`, `#suporte`, `#area`, `#contato`) assumes this
order. If a product's story genuinely needs a different order, that's a
page-level decision to make deliberately, and this doc should be updated
to say so.

**Optional sections:** `AppShowcase` assumes a companion customer
app/portal. `ProductEvolution` assumes the product replaces an earlier,
narrower Teorema solution (a before/after story). `Testimonials` needs
real customer quotes — don't ship it with fabricated ones. A product
without one of these should omit that field from its content file
(the type marks each optional) rather than rendering the section with
fabricated content.

## Content/component separation rule

Section components in `/components/sections` render `ProductContent`
shapes (defined in `/content/types.ts`) — they never import a product
file directly, never hardcode copy, and never hardcode Tailwind classes
beyond the semantic `tone` enums already in the type definitions. All
copy, numbers, and structure for a given product live in that product's
file under `/content/products/`.

This means: to reskin a section for brand purposes, edit the content
file. To change what a section renders or how it looks, edit the shared
component — and check that the change makes sense for every product using
that section.

## Adding a new product landing page

1. **Content** — create `/content/products/<product-slug>.ts` exporting a
   default object typed as `ProductContent` (from `/content/types.ts`).
   Fill in every field; the type system will catch anything missing.
2. **Assets** — drop the product's logo (and any other static assets)
   under `/public/logos/` (or a new subfolder if it needs more than a
   logo).
3. **Route** — create `/app/<product-slug>/page.tsx` as a **server
   component** (no `"use client"`) that only exports product-specific
   `metadata` and renders a `<ProductNameView />`. Put the actual section
   composition in a sibling `ProductNameView.tsx` marked `"use client"`,
   which imports the product's content directly and composes the shared
   sections in the standard order. Content must be imported inside the
   client component, not passed down as a prop from the server page —
   content objects contain Lucide icon components (functions), and only
   plain serializable data can cross the server→client prop boundary.
   See `/app/vendor-praxis/page.tsx` and
   `/app/vendor-praxis/VendorPraxisView.tsx` for the reference shape.
4. **Nothing else.** Don't touch `/components/ui`, `/components/sections`,
   other products' content files, or other products' routes. If the new
   product genuinely needs a section variant that doesn't exist yet, add
   it as a new prop/variant with a safe default in the shared component —
   never branch shared component logic on a specific product's identity.
5. The root route (`/`) currently redirects to `/vendor-praxis` as a
   placeholder since it's the only product. Once there's more than one
   product worth listing, replace that redirect with a real portfolio
   index — don't just repoint it at whichever product was added most
   recently.
