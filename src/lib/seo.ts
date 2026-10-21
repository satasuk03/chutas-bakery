import type { Metadata } from "next";
import menu from "@/data/menu-items.json";

export const SITE_URL = "https://fromchuta.com";
export const SITE_NAME = "ชุตาเบเกอรี่";
export const SITE_NAME_EN = "Chuta's Bakery";

/** Name exactly as verified on the Google Business Profile. */
export const BAKERY_NAME = "Chutas Bakery (ชุตา เบเกอรี่)";
export const BAKERY_ALTERNATE_NAMES = [
  "ชุตาเบเกอรี่",
  "ชุตา เบเกอรี่",
  "Chuta's Bakery",
  "Chutas Bakery",
  "楚塔包子铺",
];
export const SHOP_ADDRESS =
  "64 ซอยเพชรเกษม 55/2 แขวงหลักสอง บางแค กรุงเทพมหานคร 10160";
export const MAPS_URL = "https://maps.app.goo.gl/j3jvUV4n1swc7HJm6";

/** Date of the last real content change to the home and menu pages. */
export const SITE_LAST_MODIFIED = "2026-07-25";

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "ซาลาเปา ฮวกก้วย และซิ่วท้อ ของชุตาเบเกอรี่ ร้านขนมมงคล เยาวราช 2540 — ขนมมงคลสดใหม่ ทำมือ ไม่ใส่สารกันบูด",
};

/**
 * /menu meta description. Prices are read from menu-items.json so a price
 * change cannot leave stale numbers in the meta.
 */
export function menuDescription(): string {
  const items = menu.items;
  const priceOf = (id: string) => items.find((i) => i.id === id)?.price;
  const huak = items.find((i) => i.id === "huakpao")?.variants?.map((v) => v.price) ?? [];
  const sweet = priceOf("siutao");
  const filled = priceOf("salapao-moosap");
  const range = `${Math.min(...huak)}–${Math.max(...huak)}`;
  return `ซิ่วท้อ ซาลาเปาไส้หวาน ใบละ ${sweet} บาท ไส้หมูสับ หมูแดง ไส้ครีม ${filled} บาท ฮวกก้วย ${range} บาทตามขนาด เซาปิ่ง รับจัดถาดไหว้ โทรสั่ง 064-549-2982`;
}

/**
 * Next merges metadata shallowly: a page-level `openGraph` replaces the
 * layout's whole object. This rebuilds the shared parts (site name, locale,
 * default image) so each route only states what is its own.
 */
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      type: "website",
      locale: "th_TH",
      siteName: SITE_NAME,
      url: `${SITE_URL}${path}`,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
