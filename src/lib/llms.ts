// ---------------------------------------------------------------------------
// Generators for machine-readable discovery files (`/llms.txt` and
// `/llms-full.txt`).
//
// These follow the llms.txt convention (https://llmstxt.org/): a short,
// Markdown index that helps language models and browsing agents navigate the
// site's genuinely public content. They are generated from the same sources the
// website renders from — `src/lib/constants.ts` and the blog content in
// `src/content/blog` — so URLs, titles and summaries cannot drift from the
// published pages.
//
// This is a navigation aid, not a ranking factor and not a substitute for
// robots.txt, a sitemap, or clean HTML. Only canonical, indexable URLs are
// listed; the affiliate redirect (`/go`) and non-content routes are excluded.
// ---------------------------------------------------------------------------

import {
  EDITORIAL_AUTHOR,
  PUBLISHER_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./constants";
import { getAllPosts } from "@/content/blog";

/** Absolute canonical URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

interface PageEntry {
  title: string;
  path: string;
  description: string;
}

const CORE_PAGES: PageEntry[] = [
  {
    title: "Home",
    path: "/",
    description:
      "Starting point: what IN7India.in is, IN7 app download guidance, and an overview of what the site covers.",
  },
  {
    title: "Casino Lobby",
    path: "/lobby",
    description:
      "The game categories available on the IN7 platform — slots, live dealer tables, Aviator-style crash games and card games.",
  },
  {
    title: "Promotions",
    path: "/promotions",
    description:
      "How IN7 promotions and deposit bonuses are presented, plus eligibility and wagering-term considerations.",
  },
  {
    title: "Guides",
    path: "/blog",
    description:
      "All published IN7India guides on getting started, game types, app safety, bonus terms, payments and responsible gaming.",
  },
];

const POLICY_PAGES: PageEntry[] = [
  {
    title: "About IN7India",
    path: "/about",
    description:
      "What this portal does and does not handle, how content is created, and the affiliate/referral disclosure.",
  },
  {
    title: "Support",
    path: "/support",
    description:
      "Answers to common questions about accounts, payments and bonuses, and how to reach support through official channels.",
  },
  {
    title: "Privacy Policy",
    path: "/privacy",
    description:
      "What information this referral portal collects, how it is used, and how cookies and third-party links are handled.",
  },
  {
    title: "Terms of Service",
    path: "/terms",
    description:
      "Eligibility, rights and responsibilities, and the referral relationship between this site and the operator.",
  },
];

// Shared, factual framing used by both files.
const INTRO_SUMMARY = SITE_DESCRIPTION;

const KEY_FACTS = [
  `${SITE_NAME} is an independent information and referral portal. It does not operate the IN7 games, host the app, or process deposits or withdrawals.`,
  "Gameplay, account management, payments and support all take place on the third-party operator's platform.",
  "Content is intended for adults (18+) in jurisdictions where online casino access is permitted. Offers and game availability are set by the operator and can change.",
  `Publisher: ${PUBLISHER_NAME}. Editorial attribution: ${EDITORIAL_AUTHOR}.`,
];

function linkLine(entry: PageEntry): string {
  return `- [${entry.title}](${absoluteUrl(entry.path)}): ${entry.description}`;
}

/**
 * Concise index (`/llms.txt`). Introduces the site, groups the most useful
 * public pages by topic, and links only canonical URLs.
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE_NAME}`);
  lines.push("");
  lines.push(`> ${INTRO_SUMMARY}`);
  lines.push("");
  lines.push(
    "IN7India.in publishes independent guides and information about the IN7 online casino platform: game types, app safety, bonus terms and payment considerations. It is a referral site, not the operator.",
  );
  lines.push("");
  lines.push("## Key facts");
  lines.push("");
  for (const fact of KEY_FACTS) lines.push(`- ${fact}`);
  lines.push("");

  lines.push("## Core pages");
  lines.push("");
  for (const page of CORE_PAGES) lines.push(linkLine(page));
  lines.push("");

  lines.push("## Guides");
  lines.push("");
  for (const post of getAllPosts()) {
    lines.push(`- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`);
  }
  lines.push("");

  lines.push("## About & policies");
  lines.push("");
  for (const page of POLICY_PAGES) lines.push(linkLine(page));
  lines.push("");

  lines.push("## Optional");
  lines.push("");
  lines.push(
    `- [Sitemap](${absoluteUrl("/sitemap.xml")}): machine-readable list of every canonical URL on the site.`,
  );
  lines.push("");

  return lines.join("\n");
}

/**
 * Fuller overview (`/llms-full.txt`). Summarises what each public page covers
 * without duplicating the full body text, and preserves dates, attribution and
 * disclaimers so summaries cannot contradict the live pages.
 */
export function buildLlmsFullTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE_NAME} — Full Content Index`);
  lines.push("");
  lines.push(`> ${INTRO_SUMMARY}`);
  lines.push("");

  lines.push("## About this site");
  lines.push("");
  for (const fact of KEY_FACTS) lines.push(`- ${fact}`);
  lines.push(`- Canonical origin: ${SITE_URL}`);
  lines.push(`- Sitemap: ${absoluteUrl("/sitemap.xml")}`);
  lines.push(`- Short index: ${absoluteUrl("/llms.txt")}`);
  lines.push("");

  lines.push("## Core pages");
  lines.push("");
  for (const page of CORE_PAGES) {
    lines.push(`### [${page.title}](${absoluteUrl(page.path)})`);
    lines.push("");
    lines.push(page.description);
    lines.push("");
  }

  lines.push("## Guides");
  lines.push("");
  for (const post of getAllPosts()) {
    const url = absoluteUrl(`/blog/${post.slug}`);
    lines.push(`### [${post.title}](${url})`);
    lines.push("");
    lines.push(
      `- Category: ${post.category}  ·  Published: ${post.datePublished}  ·  Updated: ${post.dateModified}  ·  Author: ${post.author}`,
    );
    lines.push(`- Reading time: about ${post.readMinutes} minutes`);
    lines.push("");
    lines.push(post.excerpt);
    lines.push("");
    lines.push("**Covers:**");
    lines.push("");
    for (const section of post.sections) lines.push(`- ${section.heading}`);
    lines.push("");
    if (post.faqs.length > 0) {
      lines.push("**Common questions:**");
      lines.push("");
      for (const faq of post.faqs) lines.push(`- ${faq.question}`);
      lines.push("");
    }
    if (post.sources.length > 0) {
      lines.push("**Source references:**");
      lines.push("");
      for (const source of post.sources) {
        lines.push(`- ${source.label} — ${source.url}`);
      }
      lines.push("");
    }
  }

  lines.push("## About & policies");
  lines.push("");
  for (const page of POLICY_PAGES) {
    lines.push(`### [${page.title}](${absoluteUrl(page.path)})`);
    lines.push("");
    lines.push(page.description);
    lines.push("");
  }

  lines.push("## Content notes");
  lines.push("");
  lines.push(
    "- This file is generated from the same content source as the website and mirrors the published pages.",
  );
  lines.push(
    `- Links point to the canonical production origin (${SITE_URL}); the affiliate redirect route is intentionally not listed.`,
  );
  lines.push(
    "- Where a guide discusses operator-set details (bonuses, availability, payment methods), the operator's own terms are authoritative.",
  );
  lines.push("");

  return lines.join("\n");
}
