/**
 * One alt per photo, not per item: several items share a photo, so an alt
 * keyed to the item would mis-describe some of them.
 */
const photoAlts: Record<string, string> = {
  "/menu/bao-basket.webp": "ซาลาเปาเรียงเต็มตะกร้า ประทับตราสีแดงทุกลูก แต่งใบไม้สีเขียว",
  "/menu/fa-gao-bao.webp": "ฮวกก้วยใบใหญ่ นึ่งจนฟูแตกบาน ประทับตราสีแดง วางบนถาดไม้",
  "/menu/fa-gao-small-bao.webp": "ฮวกก้วยใบเล็กนึ่งสด ฟูแตกบาน วางซ้อนกันบนถาดไม้",
  "/menu/peach-bao.webp": "ซิ่วท้อ ขนมมงคลรูปลูกท้อ เรียงซ้อนเป็นทรงสูงบนถาดไม้",
  "/menu/sao-bing.webp": "เซาปิ่ง ขนมแป้งกรอบนอกนุ่มใน ไส้หวานมัน วางบนถาดไม้",
  "/menu/bbq-and-pork-bun.webp": "ซาลาเปาไส้หมูสับและไส้หมูแดง ผ่าครึ่งให้เห็นไส้",
  "/menu/cream-bun.webp": "ซาลาเปาไส้ครีม ผ่าครึ่งให้เห็นไส้ครีมนุ่ม",
};

export function photoAlt(src: string, fallback: string): string {
  return photoAlts[src] ?? fallback;
}
