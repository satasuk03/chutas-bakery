import type { Metadata } from "next";
import { Mali, Quicksand, Sarabun } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/layout/JsonLd";

const mali = Mali({
  variable: "--font-mali",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://fromchutas.com";

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
    title: "Chuta's Bakery — ฮวกเปา ซาลาเปา ขนมไหว้เจ้าโฮมเมด",
    description:
      "ฮวกเปา ฮวกก้วย ซาลาเปา ซิ่วท้อ และขนมไหว้พระจันทร์ ทำสดด้วยมือทุกวัน ไม่ใส่สารกันเสีย",
    images: [
      {
        url: "/og-image.jpg", // TODO: add a 1200×630 photo of your best product
        width: 1200,
        height: 630,
        alt: "Chuta's Bakery — ขนมไหว้เจ้าโฮมเมดทำสดด้วยมือทุกวัน",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Chuta's Bakery — ฮวกเปา ซาลาเปา ขนมไหว้เจ้าโฮมเมด",
    description:
      "ฮวกเปา ฮวกก้วย ซาลาเปา ซิ่วท้อ และขนมไหว้พระจันทร์ ทำสดด้วยมือทุกวัน ไม่ใส่สารกันเสีย",
    images: ["/og-image.jpg"],
  },

  // Canonical URL (prevents duplicate-content penalty)
  alternates: {
    canonical: SITE_URL,
    languages: {
      "th-TH": SITE_URL,
    },
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
        className={`${mali.variable} ${quicksand.variable} ${sarabun.variable} font-body antialiased bg-background-light text-text-main overflow-x-hidden`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
