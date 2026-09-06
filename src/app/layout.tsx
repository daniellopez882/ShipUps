import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

// The design's body font. It was declared in tailwind.config.ts as `font-lato`
// but never loaded: @fontsource/lato was a dependency nothing imported, and the
// next/font call lived in a Pages-router `_app.js` that the App Router ignores.
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShipUp — Warehousing and Logistics",
  description:
    "Landing page for ShipUp, a warehousing, freight and packaging service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-lato antialiased`}>{children}</body>
    </html>
  );
}
