import type { Metadata, Viewport } from "next";
import { Prompt, Sarabun } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/layout/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";

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
const HOME_TITLE = "ซาลาเปา ฮวกก้วย ซิ่วท้อ ขนมไหว้เจ้า บางแค | ชุตาเบเกอรี่";
const HOME_DESCRIPTION =
  "ซาลาเปา ฮวกก้วย ซิ่วท้อ ขนมไหว้เจ้าทำมือ สดใหม่ทุกวัน ไม่ใส่สารกันบูด รับจัดถาดไหว้ ส่งตามระยะทางหรือรับเองที่ร้าน บางแค โทร 064-549-2982";

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

// Lacquer, the navbar colour — tints the mobile browser chrome.
export const viewport: Viewport = { themeColor: "#a81a10" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,

  // Open Graph — controls how the link looks when shared on Facebook/LINE
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
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
        className={`${prompt.variable} ${sarabun.variable} press-paper font-body text-ink antialiased overflow-x-hidden`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
