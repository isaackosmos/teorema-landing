# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md
@docs/PROJECT.md

The two files above carry most of the guidance:

- **`AGENTS.md`** — machine-managed. `next dev` rewrites its
  `<!-- BEGIN:nextjs-agent-rules -->` block on every run. Never hand-edit it;
  if a run dirties it, commit the regenerated block alongside your work.
- **`docs/PROJECT.md`** — human-managed, and the file to edit when project
  conventions change. It is the authority on the multi-product architecture,
  the design-token table, the fixed section order, the content/component
  separation rule, and the checklist for adding a new product landing page.
  Read it before touching anything under `src/`.

What follows is only what those two files don't cover.

## Commands

```bash
npm run dev        # next dev — also rewrites the AGENTS.md rules block
npm run build      # next build
npm run start      # serve the production build
npm run lint       # eslint . (flat config, eslint.config.mjs)
npm run typecheck  # tsc --noEmit
```

There is **no test framework** in this repo — no test runner, no test files, no
`test` script. `npm run typecheck && npm run lint` is the full verification
pass; the type system is the main safety net (a `ProductContent` object that
misses a field fails `typecheck`). Don't add a test harness unless asked.

## Stack versions

Next.js 16 (App Router), React 19, TypeScript 6, Tailwind **3** (not 4 — config
lives in `tailwind.config.ts`, with `postcss.config.js` + `autoprefixer`).
`AGENTS.md` is correct that this Next.js differs from older training data:
consult `node_modules/next/dist/docs/` before writing framework-level code.

## Paths

`docs/PROJECT.md` writes paths as `/components/...`, `/content/...`,
`/app/...` — on disk these all live under `src/`. The import alias `@/*` maps
to `./src/*` (`tsconfig.json`), and every internal import uses it.

## Conventions not in docs/PROJECT.md

- **Client boundary.** Every section component in `src/components/sections/` is
  `"use client"` (they use `motion/react` `whileInView` entrance animations).
  The only server components are `src/app/page.tsx`, `src/app/layout.tsx`, and
  each product's `page.tsx`.
- **CTAs are anchors.** `src/components/ui/Button.tsx` renders an `<a>`, never a
  `<button>` — every CTA in this design system is a hash link, `mailto:`, or
  external `wa.me` link. `CtaLink` in `src/content/types.ts` is shaped for that.
- **Design source of truth.** `reference/vendor-praxis-prototype.html` is the
  original static prototype the tokens and layouts were extracted from. Check it
  when a visual detail is ambiguous; it is reference material, not build input.
- **Copy is Brazilian Portuguese.** Product content, UI strings,
  `openGraph.locale` (`pt_BR`), and `<html lang>` (`pt-BR`) are all pt-BR.
  Match the existing language when editing content files.
- **Metadata.** `metadataBase` in `src/app/layout.tsx` reads
  `NEXT_PUBLIC_SITE_URL` and falls back to an *assumed* production domain — set
  the env var per deploy rather than editing the fallback. Favicons come from
  the file-convention routes `src/app/icon.tsx` / `apple-icon.tsx`; per-product
  OG images from `src/app/<product>/opengraph-image.tsx`.
- **Mobile overflow.** `globals.css` pins `overflow-x-hidden` on `html`/`body`
  and the product `<main>` repeats it — a deliberate safety net from a past
  mobile overflow fix. Don't remove it; fix the offending section instead.
