import menuData from "@/data/menu-items.json";
import type { MenuData, MenuItem } from "@/types/menu";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const { categories, items } = menuData as MenuData;

/** Only real price data: one Offer per size, or the single price. */
function offerFor(item: MenuItem) {
  if (item.variants?.length) {
    return item.variants.map((v) => ({
      "@type": "Offer",
      name: v.label,
      price: v.price,
      priceCurrency: "THB",
    }));
  }
  if (item.price === undefined) return undefined;
  return { "@type": "Offer", price: item.price, priceCurrency: "THB" };
}

function menuItem(item: MenuItem) {
  const offers = offerFor(item);
  return {
    "@type": "MenuItem",
    name: item.nameTh,
    description: item.descriptionTh,
    image: `${SITE_URL}${item.image}`,
    ...(offers && { offers }),
  };
}

/** schema.org Menu for /menu, built from the same data the page renders. */
export default function MenuJsonLd() {
  const sections = categories
    .filter((c) => c.id !== "all")
    .map((c) => ({
      "@type": "MenuSection",
      name: c.label,
      hasMenuItem: items.filter((i) => i.category === c.id).map(menuItem),
    }))
    .filter((s) => s.hasMenuItem.length > 0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_URL}/menu#menu`,
    name: `เมนูขนม ${SITE_NAME}`,
    url: `${SITE_URL}/menu`,
    inLanguage: "th",
    hasMenuSection: sections,
    mainEntityOfPage: `${SITE_URL}/menu`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "เมนูและราคา", item: `${SITE_URL}/menu` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumb]) }}
    />
  );
}
