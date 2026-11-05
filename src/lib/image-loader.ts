/**
 * next/image loader for the static export.
 *
 * `output: "export"` has no image server, so this maps each width Next asks
 * for onto the variants pre-built by scripts/image-variants.sh (w400, w800)
 * or the original. Before this, every photo shipped at 1632px into slots of
 * 230–360px. Sources outside public/{menu,brand,posts} pass through as-is.
 */
const VARIANT_DIRS = /^\/(menu|brand|posts)\/.+\.webp$/;

export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (!VARIANT_DIRS.test(src)) return src;
  if (width <= 400) return src.replace(/\.webp$/, ".w400.webp");
  if (width <= 800) return src.replace(/\.webp$/, ".w800.webp");
  return src;
}
