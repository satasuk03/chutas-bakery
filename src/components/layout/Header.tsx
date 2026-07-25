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
 * The header is the shop's sign rail — a pine bar across the top of the teal
 * wall. It is pine and not teal for a measured reason: cream on pine is
 * 4.61:1, while cream on teal is 2.48:1 and fails at every size.
 */
const navItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "เมนู", href: "/menu" },
  { label: "เรื่องราวของเรา", href: "/story" },
];

const PHONE = "064-549-2982";
const PHONE_HREF = "tel:0645492982";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="press-pine sticky top-0 z-40 w-full border-b-[3px] border-pine-deep">
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
                className={
                  active
                    ? "border-b-2 border-cream pb-0.5 font-display text-[17px] font-bold text-cream"
                    : "border-b-2 border-transparent pb-0.5 font-display text-[17px] font-medium text-cream transition-colors hover:border-cream/60"
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
            className="hidden min-h-11 items-center gap-2 border-2 border-cream/80 bg-vermillion px-4 py-2 font-display text-[15px] font-semibold text-cream shadow-sign transition-[transform,box-shadow,background-color] hover:bg-vermillion-deep hover:shadow-sign-lifted active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            <span>โทรสั่ง {PHONE}</span>
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="-m-1 inline-flex min-h-11 min-w-11 items-center justify-center p-1 text-cream md:hidden"
                aria-label="เปิดเมนู"
              >
                <Menu className="size-7" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="press-pine w-[19rem] border-l-[3px] border-pine-deep text-cream"
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
                            ? "flex min-h-14 items-center gap-3 border-b border-cream/25 font-display text-xl font-bold text-cream"
                            : "flex min-h-14 items-center gap-3 border-b border-cream/25 font-display text-xl font-medium text-cream"
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
                  className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 border-2 border-cream/80 bg-vermillion px-4 py-3 font-display text-base font-semibold text-cream shadow-sign active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <Phone className="size-5" aria-hidden />
                  โทรสั่ง {PHONE}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
