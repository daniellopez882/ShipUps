# ADR 0001 — Controls do what they say

**Status:** accepted

## Context

The page had six navigation items (two with dropdown arrows), five call-to-
action buttons, a burger icon and a three-field quote form. None of them did
anything: the nav items were `<div>`s, the buttons had no handlers or hrefs,
the burger was an icon, and "Check Price" was a button next to three inputs
with no form around them. Four of the six nav labels named sections that do
not exist.

The README called the repository "a modern SaaS platform … with powerful
features to streamline shipping workflows" and, in the same paragraph, "a
premium SaaS landing page". It is the second.

## Decision

- Navigation links to the sections that exist (`#services`, `#how-it-works`,
  `#warehouse`, `#contact`), on desktop and in a real mobile menu with
  `aria-expanded`/`aria-controls`. Labels that had no target are gone.
- "Join Now" and "Request Quote" are links to the quote form. "Play Demo" is
  disabled with a title that says there is no demo video.
- The quote inputs are a `<form>` with labels, validation and error messages
  wired through `aria-describedby`. A valid submission shows the request back
  and states that the demo is not connected to a carrier. It does not invent a
  price.
- The README describes a landing page.

## Consequences

- Nothing on the page pretends. A screen reader gets landmarks, labels and
  states; keyboard users can reach every control.
- The form's validation is a pure function with its own tests; wiring it to a
  rates API later is a fetch in `onSubmit`, and the honest message is the
  fallback when that fails.
