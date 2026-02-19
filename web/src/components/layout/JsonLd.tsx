/**
 * LocalBusiness + Bakery structured data (JSON-LD).
 *
 * This is what powers Google's Knowledge Panel, star ratings in search
 * results, and "bakery near me" / Google Maps visibility.
 *
 * TODO: fill in your real address, phone, GPS coordinates, and social URLs.
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Chuta's Bakery",
    alternateName: "ชูตาเบเกอรี่",
    description:
      "ขนมปังโฮมเมด ซาวโดว์ ครัวซองต์ และขนมอบสดใหม่ทุกวัน ทำด้วยใจ ไม่ใส่สารกันเสีย",
    url: "https://chutasbakery.com", // TODO: replace with real domain
    telephone: "+66-XX-XXX-XXXX", // TODO: real phone
    priceRange: "฿฿",
    servesCuisine: ["เบเกอรี่", "ขนมปังโฮมเมด", "ของอบ"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "", // TODO: your street address
      addressLocality: "", // TODO: your district / city
      addressRegion: "", // TODO: province e.g. กรุงเทพมหานคร
      postalCode: "", // TODO: postal code
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0, // TODO: paste from Google Maps
      longitude: 0,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      // TODO: paste your real social profile URLs
      // "https://www.facebook.com/chutasbakery",
      // "https://www.instagram.com/chutasbakery",
    ],
    image: "https://chutasbakery.com/og-image.jpg", // TODO: real image
    hasMap: "", // TODO: paste Google Maps share link
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
