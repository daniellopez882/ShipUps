# Threat model

Scope: a static marketing page rendered by Next.js and served either from
Vercel or from the standalone server in the container image. It has no
backend, no accounts, and collects nothing: the quote form validates in the
browser and sends nothing anywhere.

## What it holds

Nothing. No secrets, no user data. CI fails if a `.env` file is ever tracked
and runs gitleaks over history.

## Threats

### T1 — Missing browser hardening headers *(was open)*

`next.config.ts` was empty. **Controls.** `headers()` sets
`Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy` and `Permissions-Policy` on every route; the container job
checks two of them. **Residual.** `script-src` and `style-src` include
`'unsafe-inline'`: Next injects inline hydration scripts, and a strict
nonce-based policy needs middleware that this static page does not otherwise
need. Fonts are self-hosted by `next/font`, so `font-src` is `'self'`.

### T2 — Framework advisories *(was open)*

The lockfile pinned `next@15.1.2`; `npm audit` reported high-severity
advisories against it (including the middleware authorisation bypass fixed in
15.2.3 — this page has no middleware, but the pin was still vulnerable
software). **Controls.** Next is updated within 15.x and CI runs
`npm audit --audit-level=high`.

### T3 — Container runs as root

**Controls.** The image runs the standalone server as uid 10001; the container
job asserts it. The build stage is separate; the runtime image holds only the
built server, static assets and `public/`.

### T4 — Third-party runtime resources

**Controls.** None are loaded: fonts are bundled at build time, images are in
`public/`. The CSP's `connect-src 'self'` would block any that crept in.

## Not addressed

- If the quote form is ever connected to a rates API, that endpoint needs its
  own model (input validation server-side, rate limiting, no PII in logs).
