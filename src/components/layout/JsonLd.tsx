import {
  SITE_URL,
  SITE_NAME,
  SITE_NAME_EN,
  BAKERY_NAME,
  BAKERY_ALTERNATE_NAMES,
  MAPS_URL,
  DEFAULT_OG_IMAGE,
} from "@/lib/seo";

/**
 * Site-wide structured data (JSON-LD): the Bakery as a LocalBusiness and the
 * WebSite it publishes, linked by @id. Route-specific nodes (Menu, BlogPosting,
 * BreadcrumbList) are rendered by their own pages.
 */
export default function JsonLd() {
  const bakery = {
    "@type": "Bakery",
    "@id": `${SITE_URL}/#bakery`,
    name: BAKERY_NAME,
    alternateName: [...new Set(BAKERY_ALTERNATE_NAMES)],
    description:
      "ร้านขนมมงคลทำมือ ซาลาเปา ฮวกก้วย (ฮวกเปา) ซิ่วท้อ และขนมตามเทศกาล สำหรับไหว้เจ้า ไหว้บรรพบุรุษ และงานมงคล ทำสดใหม่ทุกวัน ไม่ใส่สารกันบูด ฝีมือคุณชุตาตั้งแต่เยาวราช ปี 2540",
    knowsLanguage: "th",
    url: SITE_URL,
    telephone: "+66-64-549-2982",
    priceRange: "฿฿",
    servesCuisine: ["ขนมไหว้เจ้า", "เบเกอรี่จีน", "Chinese"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "64 ซอยเพชรเกษม 55/2 แขวงหลักสอง",
      addressLocality: "เขตบางแค",
      addressRegion: "กรุงเทพมหานคร",
      postalCode: "10160",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.708214281606999,
      longitude: 100.39429540947636,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/chutasbakery",
      "https://www.instagram.com/chutasbakery",
    ],
    image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
    logo: `${SITE_URL}/icon.png`,
    hasMenu: `${SITE_URL}/menu`,
    hasMap: MAPS_URL,
    areaServed: { "@type": "City", name: "กรุงเทพมหานคร" },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_EN, "fromchuta.com"],
    url: SITE_URL,
    inLanguage: "th",
    publisher: { "@id": `${SITE_URL}/#bakery` },
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [bakery, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
