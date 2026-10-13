// ---------------------------------------------------------------------------
// SEO audit — runs against the rendered production build.
//
// Usage:
//   npm run build        # produces .next/server/app/**/*.html
//   npm run seo:audit    # this script
//
// It parses the pre-rendered HTML in .next/server/app and validates metadata,
// canonicals, headings and structured data, plus sitemap.xml and robots.txt.
// Character-length checks are editorial warnings, not hard limits.
// ---------------------------------------------------------------------------

import { readFileSync, existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const APP_DIR = join(ROOT, ".next", "server", "app");
const SITE_URL = "https://in7india.in";

const TITLE_MIN = 30;
const TITLE_MAX = 65;
const DESC_MIN = 90;
const DESC_MAX = 165;
const BRAND = /in7india/i;

const errors = [];
const warnings = [];

function decodeHtml(input = "") {
  return input
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function firstMatch(html, re) {
  const m = html.match(re);
  return m ? decodeHtml(m[1]) : null;
}

function collectHtmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      out.push(...collectHtmlFiles(full));
    } else if (entry.endsWith(".html") && !entry.startsWith("_")) {
      out.push(full);
    }
  }
  return out;
}

function fileToRoute(file) {
  let rel = relative(APP_DIR, file).split(sep).join("/");
  rel = rel.replace(/\.html$/, "");
  if (rel === "index") return "/";
  if (rel.endsWith("/index")) rel = rel.slice(0, -"/index".length);
  return "/" + rel;
}

function expectedCanonical(route) {
  return route === "/" ? SITE_URL : `${SITE_URL}${route}`;
}

function extractPage(file) {
  const html = readFileSync(file, "utf8");
  const route = fileToRoute(file);

  const title = firstMatch(html, /<title>([\s\S]*?)<\/title>/i);
  const description = firstMatch(
    html,
    /<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i,
  );
  const canonical = firstMatch(
    html,
    /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i,
  );
  const robots = firstMatch(
    html,
    /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i,
  );
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  const jsonLdCount = (html.match(/application\/ld\+json/gi) || []).length;

  return { route, title, description, canonical, robots, h1Count, jsonLdCount };
}

function checkPage(page) {
  const { route } = page;
  const label = `[${route}]`;

  if (!page.title) errors.push(`${label} missing <title>`);
  if (!page.description) errors.push(`${label} missing meta description`);
  if (!page.canonical) errors.push(`${label} missing canonical link`);
  if (page.h1Count === 0) errors.push(`${label} has no <h1>`);
  if (page.h1Count > 1) errors.push(`${label} has ${page.h1Count} <h1> elements (expected 1)`);

  if (page.title && !BRAND.test(page.title)) {
    errors.push(`${label} title is missing the "IN7India" brand token`);
  }
  if (page.description && !BRAND.test(page.description)) {
    errors.push(`${label} meta description is missing the "IN7India" brand token`);
  }
  if (page.canonical && page.canonical !== expectedCanonical(route)) {
    errors.push(
      `${label} canonical is "${page.canonical}" but expected "${expectedCanonical(route)}"`,
    );
  }
  if (page.title && (page.title.length < TITLE_MIN || page.title.length > TITLE_MAX)) {
    warnings.push(`${label} title length ${page.title.length} (target ${TITLE_MIN}-${TITLE_MAX})`);
  }
  if (
    page.description &&
    (page.description.length < DESC_MIN || page.description.length > DESC_MAX)
  ) {
    warnings.push(
      `${label} description length ${page.description.length} (target ${DESC_MIN}-${DESC_MAX})`,
    );
  }
}

function checkDuplicates(pages, key) {
  const seen = new Map();
  for (const page of pages) {
    const value = page[key];
    if (!value) continue;
    if (seen.has(value)) {
      errors.push(`duplicate ${key} on ${page.route} and ${seen.get(value)}: "${value}"`);
    } else {
      seen.set(value, page.route);
    }
  }
}

function checkSitemap(routes) {
  const sitemapPath = join(APP_DIR, "sitemap.xml.body");
  if (!existsSync(sitemapPath)) {
    errors.push("sitemap.xml.body not found — run `npm run build` first");
    return;
  }
  const xml = readFileSync(sitemapPath, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const sitemapRoutes = new Set(locs.map((loc) => loc.replace(SITE_URL, "") || "/"));

  for (const route of routes) {
    if (!sitemapRoutes.has(route)) {
      errors.push(`[sitemap] indexable route "${route}" is missing from sitemap.xml`);
    }
  }
  for (const loc of locs) {
    if (!loc.startsWith(SITE_URL)) {
      errors.push(`[sitemap] URL does not use the canonical origin: ${loc}`);
    }
  }
  return { count: locs.length };
}

function checkRobots() {
  const robotsPath = join(APP_DIR, "robots.txt.body");
  if (!existsSync(robotsPath)) {
    errors.push("robots.txt.body not found — run `npm run build` first");
    return;
  }
  const txt = readFileSync(robotsPath, "utf8");
  if (!/sitemap:\s*https:\/\/in7india\.in\/sitemap\.xml/i.test(txt)) {
    errors.push("[robots] robots.txt does not reference the canonical sitemap URL");
  }
  if (!/disallow:\s*\/go\b/i.test(txt)) {
    warnings.push("[robots] robots.txt does not disallow /go");
  }
}

function main() {
  if (!existsSync(APP_DIR)) {
    console.error(
      `\n  No build found at ${relative(ROOT, APP_DIR)}.\n  Run \`npm run build\` then re-run \`npm run seo:audit\`.\n`,
    );
    process.exit(1);
  }

  const files = collectHtmlFiles(APP_DIR);
  const pages = files.map(extractPage).sort((a, b) => a.route.localeCompare(b.route));

  for (const page of pages) checkPage(page);
  checkDuplicates(pages, "title");
  checkDuplicates(pages, "description");
  const sitemapResult = checkSitemap(pages.map((p) => p.route));
  checkRobots();

  console.log("\n  SEO audit —", pages.length, "prerendered pages");
  console.log("  " + "=".repeat(72));
  for (const page of pages) {
    const titleLen = page.title ? page.title.length : 0;
    const descLen = page.description ? page.description.length : 0;
    const schema = page.jsonLdCount > 0 ? `${page.jsonLdCount} JSON-LD` : "no JSON-LD";
    console.log(
      `  ${page.route.padEnd(34)} h1:${page.h1Count}  title:${String(titleLen).padStart(3)}  desc:${String(descLen).padStart(3)}  ${schema}`,
    );
  }
  if (sitemapResult) {
    console.log(`\n  sitemap.xml: ${sitemapResult.count} URLs`);
  }

  if (warnings.length) {
    console.log(`\n  WARNINGS (${warnings.length})`);
    for (const w of warnings) console.log(`   ! ${w}`);
  }

  console.log("");
  if (errors.length) {
    console.log(`  ERRORS (${errors.length})`);
    for (const e of errors) console.log(`   x ${e}`);
    console.log("");
    writeFileSync(
      join(ROOT, "seo-audit-report.json"),
      JSON.stringify({ pages, errors, warnings }, null, 2),
    );
    process.exit(1);
  }

  writeFileSync(
    join(ROOT, "seo-audit-report.json"),
    JSON.stringify({ pages, errors, warnings }, null, 2),
  );
  console.log("  All SEO checks passed.\n");
}

main();
