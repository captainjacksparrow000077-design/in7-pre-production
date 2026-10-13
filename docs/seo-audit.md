# IN7India.in — SEO Audit & Change Log

**Date:** 2026-10-13
**Scope:** technical SEO, on-page metadata, structured data, internal linking,
content depth and AI-discoverability for `https://in7india.in`.

**Verification method:** production build (`next build`) inspected via an
automated HTML audit (`npm run seo:audit` → `scripts/seo-audit.mjs`), which
parses every prerendered page in `.next/server/app`, plus `sitemap.xml` and
`robots.txt`.

> Everything below is what the codebase actually produces. No ranking or traffic
> outcome is claimed — results depend on Google, competition and time.

---

## 1. Baseline problems found

| # | Problem | Impact |
| --- | --- | --- |
| 1 | Titles/descriptions did not consistently contain the brand token `IN7India` | Weak brand association in SERPs |
| 2 | Homepage relied on a name-only title; several pages had generic or duplicated descriptions | Poor CTR / duplication |
| 3 | Unverified claims in copy ("Official", "2000+ slots", "Instant UPI deposits") | Trust + policy risk |
| 4 | No breadcrumbs on most pages | Weaker crawl paths and SERP breadcrumbs |
| 5 | Only partial structured data (no ItemList, no BreadcrumbList on inner pages) | Missed rich-result opportunities |
| 6 | Weak internal linking between pages and guides | Orphan-ish content, poor link equity flow |
| 7 | Duplicate FAQ reused across homepage and about page | Duplicate structured data |
| 8 | No automated way to catch metadata regressions | Silent SEO drift |

---

## 2. Changes implemented

### Configuration
- Centralised site/domain/identity in `src/lib/constants.ts` (`SITE_URL`,
  `SITE_NAME`, `SITE_TAGLINE`, `SITE_DESCRIPTION`, `CONTACT_EMAIL`,
  `PUBLISHER_NAME`, `EDITORIAL_AUTHOR`, `DEFAULT_OG_IMAGE`, `SOCIAL_PROFILES`).
- Canonical origin is fixed to `https://in7india.in` — never derived from request
  headers.

### Metadata engine (`src/lib/seo.ts`)
- `buildMetadata()` produces title, description, canonical, robots, OpenGraph and
  Twitter cards from one call. The `title` key is now omitted when no page title
  is supplied, so the homepage correctly inherits the layout's branded default.
- Layout (`src/app/layout.tsx`) sets:
  - default title: `IN7India — Online Casino Game Portal & App Guide`
  - template: `%s | IN7India.in`
- Every indexable page now ships a unique, branded title (30–65 chars) and
  description (90–165 chars).

### Structured data (server-rendered JSON-LD)
- `Organization` + `WebSite` (site-wide).
- `BreadcrumbList` on all inner pages.
- `BlogPosting` on every article.
- `FAQPage` on homepage (shared with visible FAQ), about and support — each with
  its **own unique** question set.
- `ItemList` on the lobby page (game categories).

### Content & trust
- Removed unverified claims: no "Official", no slot counts, no "instant" payment
  promises. Copy now states that the operator sets the catalogue, offers and
  terms.
- About page wording corrected so "IN7India" describes the portal truthfully and
  the affiliate/referral nature is disclosed.
- All FAQ answers are rendered as static, visible HTML (no JS accordion) so they
  are crawlable and match the JSON-LD.

### Blog system
- Data-driven articles under `src/content/blog/posts/*` with a typed schema and
  aggregator (`getAllPosts`, `getPostBySlug`, `getAllSlugs`,
  `getUsedCategories`, `getRelatedPosts`).
- 9 articles, each with one clear intent; legacy duplicate slugs 308-redirect to
  the canonical article (`next.config.ts`).
- Each article includes: byline (`IN7India.in Editorial Team`), published/updated
  dates, sources (`BlogSource[]`), FAQ block and related links.

### Internal linking
- Homepage "Learn before you play" guide hub.
- Contextual links from lobby, promotions, about and support into the relevant
  articles.
- Footer now links the key cluster pages; footer social/contact come from
  constants.

### Machine-readable
- `sitemap.xml` is generated from live data (includes blog `lastModified`).
- `robots.txt` references the canonical sitemap and disallows the `/go` referral
  redirect.

### Quality gate
- `scripts/seo-audit.mjs` (`npm run seo:audit`) fails the run on: missing
  title/description/canonical, brand token absent, wrong canonical, 0 or >1 H1,
  duplicate titles/descriptions, sitemap omissions or non-canonical origins.

---

## 3. Verification results

```
SEO audit — 17 prerendered pages
sitemap.xml: 17 URLs
All SEO checks passed.
```

- 17 indexable pages, every one: unique branded title, unique branded
  description, one `<h1>`, self-referencing canonical, JSON-LD present.
- `tsc --noEmit` clean; ESLint clean on touched files.
- Build: 23 routes (17 static pages + 9 SSG blog routes + `/go` dynamic +
  robots/sitemap).

### Title / description lengths (characters)

| Route | Title | Desc |
| --- | --- | --- |
| / | 48 | 151 |
| /about | 58 | 151 |
| /blog | 54 | 126 |
| /blog/casino-game-types-guide | 61 | 137 |
| /blog/gaming-account-security-guide | 62 | 136 |
| /blog/gaming-app-safety-checklist | 56 | 130 |
| /blog/gaming-bonus-terms-explained | 63 | 133 |
| /blog/how-to-get-started-in7 | 59 | 143 |
| /blog/how-upi-payments-work-in7 | 55 | 139 |
| /blog/in7-app-guide | 59 | 139 |
| /blog/live-casino-vs-online-slots | 61 | 131 |
| /blog/responsible-gaming-tips | 52 | 143 |
| /lobby | 56 | 146 |
| /privacy | 48 | 154 |
| /promotions | 48 | 147 |
| /support | 49 | 152 |
| /terms | 46 | 146 |

---

## 4. Recommended next steps (require data/manual access — not done here)

1. **Search Console:** verify the property, submit `sitemap.xml`, review
   coverage and Core Web Vitals in the field. Connect to real query data before
   choosing final keyword targets.
2. **Validate structured data** with Google's Rich Results Test / Schema.org
   validator on the deployed URLs.
3. **Content:** expand the 9 guides with original detail and keep them current;
   add new articles only when they serve a distinct intent (avoid keyword-swapped
   duplicates).
4. **Backlinks/E-E-A-T:** genuine editorial mentions and a real author bio if a
   named author is ever used (do not invent credentials).
5. **Performance:** monitor LCP/CLS after deploy; images are pre-optimised via
   `scripts/optimize-images.mjs`.
6. **Turbopack root warning:** optionally set `turbopack.root` in
   `next.config.ts` to silence the `package-lock.json` location warning.
7. **Keep the gate green:** run `npm run build && npm run seo:audit` in CI.
