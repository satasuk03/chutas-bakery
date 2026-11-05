import { Phone } from "lucide-react";
import menuData from "@/data/menu-items.json";
import type { MenuData, MenuItem } from "@/types/menu";
import { ORDER_LEAD_DAYS, TRAY_SERVICE } from "@/lib/seo";
import { VegetarianMark } from "./VegetarianMark";

const { categories, items } = menuData as MenuData;

/**
 * The whole price sheet, rendered on the server.
 *
 * The card grid above is interactive and its detail sheet only exists after a
 * click, so sizes, fillings and the ฟาก้าว / ingredient copy never reached the
 * HTML a crawler or AI assistant reads. This is the same data as a plain
 * printed list — which is also what a 43–58 reader comparing sizes wants:
 * every price on one page without opening anything.
 *
 * Category headings carry the category ids, so the footer's `/menu#huaykuay`
 * style links land here.
 */
function Price({ item }: { item: MenuItem }) {
  if (item.variants) {
    return (
      <table className="w-full border-2 border-brass">
        <caption className="sr-only">ราคา{item.nameTh}ตามขนาด</caption>
        <tbody>
          {item.variants.map((v, i) => (
            <tr
              key={v.label}
              className={`${i > 0 ? "border-t border-brass" : ""} ${
                i % 2 === 1 ? "bg-cream-bright" : ""
              }`}
            >
              <th scope="row" className="px-4 py-2.5 text-left font-body font-normal text-ink">
                {v.label}
              </th>
              <td className="px-4 py-2.5 text-right font-display text-[19px] font-bold text-vermillion">
                ฿{v.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <p className="font-display text-[26px] leading-none font-bold text-vermillion">
      ฿{item.price}
      <span className="ml-1 text-[17px] font-semibold text-ink">/{item.unit}</span>
    </p>
  );
}

export default function MenuPriceList() {
  const sections = categories
    .filter((c) => c.id !== "all")
    .map((c) => ({ ...c, items: items.filter((i) => i.category === c.id) }))
    .filter((c) => c.items.length > 0);

  return (
    <section
      aria-labelledby="price-list-heading"
      className="press-cream border-t-2 border-brass px-4 py-[clamp(48px,7vw,88px)] md:px-6"
    >
      <div className="mx-auto max-w-[900px]">
        <h2
          id="price-list-heading"
          className="text-center font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight font-bold text-ink"
        >
          ราคาและรายละเอียดขนมทั้งหมด
        </h2>

        <div className="press-paper frame-brass mx-auto mt-8 max-w-[640px] px-6 py-5 shadow-plate">
          <h3 className="font-display text-[19px] font-bold text-ink">วิธีสั่งขนม</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 font-body text-ink marker:text-vermillion">
            <li>สั่งล่วงหน้าอย่างน้อย {ORDER_LEAD_DAYS} วัน เพื่อให้ได้ขนมสดใหม่ทันวันไหว้</li>
            <li>รับ{TRAY_SERVICE}</li>
            <li>มีบริการจัดส่งคิดตามระยะทาง หรือมารับเองที่ร้าน</li>
            <li>
              ขนมที่มีป้าย <VegetarianMark /> เป็นขนมเจ ไส้ครีม ไส้หมูสับ และไส้หมูแดง ไม่ใช่ขนมเจ
            </li>
          </ul>
          <a
            href="tel:+66645492982"
            className="mt-4 inline-flex min-h-12 items-center gap-2 border-2 border-brass bg-vermillion px-5 py-2.5 font-display text-[17px] font-bold text-paper shadow-sign transition-colors hover:bg-vermillion-deep"
          >
            <Phone className="size-5" aria-hidden />
            โทรสั่ง 064-549-2982
          </a>
        </div>

        {sections.map((section) => (
          <div key={section.id} id={section.id} className="mt-14 scroll-mt-[150px]">
            <h3 className="border-b-2 border-brass pb-2 font-display text-[clamp(1.35rem,3vw,1.75rem)] font-bold text-vermillion">
              {section.label}
            </h3>

            <div className="mt-6 space-y-8">
              {section.items.map((item) => (
                <article key={item.id} className="grid gap-4 md:grid-cols-[1fr_260px] md:gap-8">
                  <div>
                    <h4 className="flex flex-wrap items-center gap-2.5 font-display text-[21px] leading-tight font-bold text-ink">
                      {item.nameTh}
                      {item.vegetarian && <VegetarianMark />}
                    </h4>
                    <p className="mt-1 font-body text-ink">{item.descriptionTh}</p>
                    {item.longDescription
                      ?.split("\n")
                      .filter(Boolean)
                      .map((para, i) => (
                        <p key={i} className="mt-2 font-body text-ink">
                          {para}
                        </p>
                      ))}
                    {item.flavors && (
                      <p className="mt-2 font-body text-ink">
                        <span className="font-semibold">ไส้:</span> {item.flavors.join(" · ")}
                      </p>
                    )}
                  </div>
                  <Price item={item} />
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
