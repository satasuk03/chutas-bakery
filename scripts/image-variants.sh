#!/bin/sh
# Pre-builds the width variants that src/lib/image-loader.ts points at.
# Static export cannot resize at request time, so every next/image source
# under public/{menu,brand,posts} needs NAME.w400.webp and NAME.w800.webp
# beside it. Re-run after adding or replacing a photo; commit the output.
# Requires cwebp (brew install webp).
set -eu
cd "$(dirname "$0")/../public"
find menu brand posts -name '*.webp' ! -name '*.w[0-9]*.webp' | while read -r src; do
  width=$(sips -g pixelWidth "$src" 2>/dev/null | awk '/pixelWidth/ {print $2}')
  for w in 400 800; do
    out="${src%.webp}.w$w.webp"
    target=$w
    [ "$width" -lt "$w" ] && target=$width   # never upscale
    cwebp -quiet -q 78 -resize "$target" 0 "$src" -o "$out"
  done
done
