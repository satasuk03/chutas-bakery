import type { Metadata } from "next";
import { Prompt, Sarabun } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/layout/JsonLd";

/**
 * Two Thai families, each with one job (DESIGN.md → Typography).
 *
 * Prompt is owner-specified for Thai headlines and carries all display, title,
 * label, and navigation type. Sarabun is inherited from the previous build and
 * kept for body copy: a workhorse that stays legible at 17px for the primary
 * customer, aged 43–58.
 *
 * Mali — the previous brand's script face — is gone. Chinese seal glyphs are
 * self-hosted as a 15-glyph subset; see globals.css.
 *
 * The Latin wordmark is deliberately absent from this stack: its typeface is
 * unidentified, so it ships as the delivered image instead (see Wordmark.tsx).
 */
const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://fromchuta.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Chuta's Bakery — ฮวกเปา ซาลาเปา ขนมไหว้เจ้าโฮมเมด ทำสดด้วยมือทุกวัน",
    template: "%s | Chuta's Bakery",
  },
  description:
    "ฮวกเปา ฮวกก้วย ซาลาเปา ซิ่วท้อ และขนมไหว้พระจันทร์ ทำสดด้วยมือทุกวัน ไม่ใส่สารกันเสีย ส่งต่อความโชคดีด้วยรสมือแม่",
  keywords: [
    "ฮวกเปา",
    "ฮวกก้วย",
    "ซาลาเปา",
    "ซิ่วท้อ",
    "ขนมไหว้เจ้า",
    "ขนมไหว้พระจันทร์",
    "เบเกอรี่จีน",
    "Chuta's Bakery",
    "ชูตาเบเกอรี่",
    "ทำสดด้วยมือทุกวัน",
    "ไม่ใส่สารกันเสีย",
  ],

  // Open Graph — controls how the link looks when shared on Facebook/LINE
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_URL,
    siteName: "Chuta's Bakery",
    title: "Chuta's Bakery — ฮวกเปา ซิ่วท้อ ฮวกก้วย ซาลาเปา ขนมไหว้เจ้าโฮมเมด",
    description:
      "ฮวกเปา ฮวกก้วย ซาลาเปา ซิ่วท้อ และขนมไหว้พระจันทร์ ทำสดด้วยมือทุกวัน ไม่ใส่สารกันเสีย ส่งต่อความโชคดีด้วยรสมือแม่",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Chuta's Bakery — ขนมไหว้เจ้าโฮมเมดทำสดด้วยมือทุกวัน",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Chuta's Bakery — ฮวกเปา ซิ่วท้อ ฮวกก้วย ซาลาเปา ขนมไหว้เจ้าโฮมเมด",
    description:
      "ฮวกเปา ฮวกก้วย ซาลาเปา ซิ่วท้อ และขนมไหว้พระจันทร์ ทำสดด้วยมือทุกวัน ไม่ใส่สารกันเสีย ส่งต่อความโชคดีด้วยรสมือแม่",
    images: ["/og-image.webp"],
  },

  // Canonical URL (prevents duplicate-content penalty)
  alternates: {
    canonical: SITE_URL,
    languages: {
      "th-TH": SITE_URL,
    },
  },

  formatDetection: {
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${prompt.variable} ${sarabun.variable} press-cream font-body text-ink antialiased overflow-x-hidden`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
