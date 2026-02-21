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
      "ฮวกเปา ฮวกก้วย ซาลาเปา ซิ่วท้อ และขนมไหว้พระจันทร์ ทำสดด้วยมือทุกวัน ไม่ใส่สารกันเสีย ส่งต่อความโชคดีด้วยรสมือแม่",
    url: "https://fromchuta.com",
    telephone: "+66-64-549-2982",
    priceRange: "฿฿",
    servesCuisine: [
      "ขนมไหว้เจ้า",
      "ฮวกเปา",
      "ฮวกก้วย",
      "ซาลาเปา",
      "ซิ่วท้อ",
      "ขนมไหว้พระจันทร์",
      "เบเกอรี่จีน",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "64 ซอยเพชรเกษม 55/2",
      addressLocality: "เขตบางแค แขวงหลักสอง",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/chutasbakery",
      "https://www.instagram.com/chutasbakery",
    ],
    image: "https://fromchuta.com/og-image.jpg", // TODO: real image
    hasMap: "https://maps.app.goo.gl/j3jvUV4n1swc7HJm6",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
