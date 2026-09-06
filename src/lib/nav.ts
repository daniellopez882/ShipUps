/**
 * The sections that exist on the page; the old nav listed six that did not.
 *
 * Plain module on purpose: it is imported by a client component (PrimaryBar)
 * and a server component (Footer). Exporting it from the "use client" module
 * handed the server a client-reference proxy instead of an array, and the
 * prerender failed with `NAV_LINKS.filter is not a function`.
 */
export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#warehouse", label: "Warehouse" },
  { href: "#contact", label: "Contact" },
] as const;
