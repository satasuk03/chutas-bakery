import menuData from "@/data/menu-items.json";
import type { MenuData, MenuItem } from "@/types/menu";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const { categories, items } = menuData as MenuData;

/** Only real price data: single price, or a low–high range across variants. */
function offerFor(item: MenuItem) {
  const prices = item.variants?.length
    ? item.variants.map((v) => v.price)
    : item.price !== undefined
      ? [item.price]
      : [];
  if (prices.length === 0) return undefined;

  const low = Math.min(...prices);
  const high = Math.max(...prices);
  if (low === high) {
    return { "@type": "Offer", price: low, priceCurrency: "THB" };
  }
  return {
    "@type": "AggregateOffer",
    lowPrice: low,
    highPrice: high,
    offerCount: prices.length,
    priceCurrency: "THB",
  };
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
