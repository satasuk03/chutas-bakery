# Data Directory

Static data files used by the site.

## Files

- **`menu-items.json`** — Menu categories and product items for the `/menu` page
- **`calendar-events.json`** — Calendar events data

## Posts (`posts/`)

MDX blog posts displayed on the `/story` page.

### Filename Convention

```
YYYY-MM-DD_HHMM_slug-name.mdx
```

Example: `2026-02-20_1430_our-bakery-story.mdx`

### Frontmatter Fields

| Field        | Type       | Required | Description                                      |
| ------------ | ---------- | -------- | ------------------------------------------------ |
| `title`      | `string`   | Yes      | Post title                                       |
| `date`       | `string`   | Yes      | Publication date (`YYYY-MM-DD`)                  |
| `coverImage` | `string`   | Yes      | Path to cover image (e.g. `/images/cover.jpg`)   |
| `excerpt`    | `string`   | Yes      | Short description shown on the card              |
| `author`     | `string`   | No       | Author name                                      |
| `tags`       | `string[]` | No       | Tags for filtering (e.g. `เรื่องราว`, `ครอบครัว`) |
| `pinned`     | `boolean`  | No       | `true` to pin the post to the top of the list    |
| `archive`    | `boolean`  | No       | `true` to hide the post from the listing         |

### Example Frontmatter

```yaml
---
title: "จากเยาวราช สู่มือของทุกคน"
date: "2026-02-20"
coverImage: "/images/story-cover.jpg"
excerpt: "ย้อนกลับไปเมื่อปี 2540..."
author: "Chuta's Bakery"
tags:
  - เรื่องราว
  - ครอบครัว
pinned: true
---
```
