import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CatPawCursor } from "@/components/cursor/cat-paw-cursor";
import { SiteNav } from "@/components/nav/site-nav";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaishnavivpatil.github.io"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Full-stack engineer building calm, scalable, playful products with React, Next.js, TypeScript, Node, and AWS.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Full-stack engineer building calm, scalable, playful products.",
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "website",
    // OG image auto-populated from src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Full-stack engineer building calm, scalable, playful products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable}`}
    >
      <body className="bg-bg text-text antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LenisProvider />
          <CatPawCursor />
          <SiteNav />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
