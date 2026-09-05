# ADR 0002 — One router, one font mechanism, current image props

**Status:** accepted

## Context

The project was generated with the App Router (`src/app/layout.tsx`) but kept
a Pages-router `src/app/_app.js` that loaded `Lato` through `next/font` —
a file the App Router never executes. `tsconfig.json` listed it explicitly.
`@fontsource/lato` was also a dependency, imported nowhere. Tailwind declared
`font-lato: ["Lato"]` and the page root used `font-lato`; `globals.css` set the
body to Arial. Result: the design's body font never loaded. The built CSS
contained no `Lato` at all.

`next/image` was used with `layout="fill"`, a Next 12 prop removed in 13; in
development every render logged a warning about it, and the images relied on a
prop that no longer sized them. Alt texts were `"100"`, `"/track.png"`,
`"/mode1.jpg"`.

## Decision

- `Lato` is loaded once, in `app/layout.tsx`, via `next/font/google` with a CSS
  variable; Tailwind's `font-lato` resolves to that variable. `_app.js`,
  `@fontsource/lato` and the unused `lucide-react` are removed. CI greps the
  built CSS for the font.
- `fill` + `sizes` replace `layout="fill"`; a test renders the page with
  `console.error`/`console.warn` spied and fails on any output.
- Every image is either described (from looking at it) or `alt=""` when the
  adjacent heading carries the meaning; a test rejects path-like and numeric
  alts.

## Consequences

- The page looks the way its design system says it should, and stays that way:
  the font check is in CI.
- Two dependencies fewer; one router.
