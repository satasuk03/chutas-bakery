"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { BrandMark } from "@/components/brand/Wordmark";
import { Seal } from "@/components/brand/Seal";

/**
 * The header is an old Yaowarat shopfront sign: a deep-lacquer-red bar with a
 * brass hairline running under it. The hairline is the detail that makes it
 * read as a painted enamel sign rather than a coloured div — brass is the
 * ornament of this palette and this is its most visible job.
 *
 * Lacquer #a81a10 lives here and nowhere else. As a section ground it would
 * blow the ~20% red budget and put a vermillion CTA on a red field.
 *
 * Contrast on this bar, measured:
 *   paper on lacquer      6.85  ✓ wordmark, nav links
 *   cream on lacquer      6.08  ✓
 *   vermillion on lacquer 1.19  ✗ — which is why the phone CTA inverts to a
 *     paper plate with vermillion text and a brass border. It then becomes
 *     the brightest object on the bar, which is the correct hierarchy for the
 *     one action the shop actually takes orders through.
 *   brass on lacquer      2.14  ✗ — borders and rules only, never a word.
 */
const navItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "เมนู", href: "/menu" },
  { label: "เรื่องราวของเรา", href: "/story" },
];

const PHONE = "064-549-2982";
const PHONE_HREF = "tel:0645492982";

/** The inverted CTA. Paper plate, vermillion label, brass frame, 44px min. */
const CTA_CLASS =
  "press-paper border-2 border-brass font-display font-bold text-vermillion shadow-sign transition-[transform,box-shadow,color] hover:text-vermillion-deep hover:shadow-sign-lifted active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="press-lacquer w-full border-b-2 border-lacquer-deep">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-2.5 md:px-6">
          <Link
            href="/"
            className="-m-1 p-1"
            aria-label="Chuta's Bakery — ไปหน้าแรก"
          >
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  /* Active is a paper underline plus bold; inactive is medium.
                     Both are full-strength paper — the primary customer is
                     43–58 and a faded nav item is the first thing that reader
                     loses. No opacity anywhere in this bar. */
                  className={
                    active
                      ? "border-b-2 border-paper pb-0.5 font-display text-[17px] font-bold text-paper"
                      : "border-b-2 border-transparent pb-0.5 font-display text-[17px] font-medium text-paper transition-colors hover:border-brass"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Ordering happens on the phone — LINE and calls are the only
                channels. So the number is the primary action, not a nicety. */}
            <a
              href={PHONE_HREF}
              className={`hidden min-h-11 items-center gap-2 px-4 py-2 text-[15px] md:inline-flex ${CTA_CLASS}`}
            >
              <Phone className="size-4" aria-hidden />
              <span>โทรสั่ง {PHONE}</span>
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="-m-1 inline-flex min-h-11 min-w-11 items-center justify-center p-1 text-paper md:hidden"
                  aria-label="เปิดเมนู"
                >
                  <Menu className="size-7" aria-hidden />
                </button>
              </SheetTrigger>
              {/* Umber, not lacquer: a full-height red panel is far too much
                  red for a palette that budgets it at a fifth of the page. */}
              <SheetContent
                side="right"
                className="press-umber w-[19rem] border-l-2 border-brass text-cream"
              >
                <SheetTitle className="sr-only">เมนูนำทาง</SheetTitle>
                <div className="flex h-full flex-col gap-8 px-6 pt-14 pb-8">
                  <BrandMark />

                  <nav className="flex flex-col">
                    {navItems.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={
                            active
                              ? "flex min-h-14 items-center gap-3 border-b border-brass font-display text-xl font-bold text-paper"
                              : "flex min-h-14 items-center gap-3 border-b border-brass font-display text-xl font-medium text-cream"
                          }
                        >
                          {active ? (
                            <Seal glyph="福" className="size-7 text-[13px]" />
                          ) : (
                            <span aria-hidden className="size-7" />
                          )}
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>

                  <a
                    href={PHONE_HREF}
                    className={`mt-auto inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 text-base ${CTA_CLASS}`}
                  >
                    <Phone className="size-5" aria-hidden />
                    โทรสั่ง {PHONE}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* The brass hairline under the bar. This is the shopfront-sign detail:
          a painted board is finished with a metal edge, not left to butt
          straight into the wall. It sits inside the sticky header, so it
          counts toward the header height MenuSection's filter bar offsets
          against — those two numbers are measured, not derived. */}
      <div aria-hidden className="h-[2px] w-full bg-brass" />
    </header>
  );
}
