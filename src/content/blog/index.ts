import type { BlogPost } from "./types";
import { BLOG_CATEGORIES } from "./types";

import in7AppGuide from "./posts/in7-app-guide";
import casinoGameTypesGuide from "./posts/casino-game-types-guide";
import gamingAppSafetyChecklist from "./posts/gaming-app-safety-checklist";
import gamingBonusTermsExplained from "./posts/gaming-bonus-terms-explained";
import gamingAccountSecurityGuide from "./posts/gaming-account-security-guide";
import howToGetStartedIn7 from "./posts/how-to-get-started-in7";
import responsibleGamingTips from "./posts/responsible-gaming-tips";
import howUpiPaymentsWorkIn7 from "./posts/how-upi-payments-work-in7";
import liveCasinoVsOnlineSlots from "./posts/live-casino-vs-online-slots";

// Single source of truth for all published articles. Pages, the sitemap and
// structured data all read from here so URLs, dates and metadata stay in sync.
const ALL_POSTS: BlogPost[] = [
  in7AppGuide,
  casinoGameTypesGuide,
  gamingAppSafetyChecklist,
  gamingBonusTermsExplained,
  gamingAccountSecurityGuide,
  howToGetStartedIn7,
  responsibleGamingTips,
  howUpiPaymentsWorkIn7,
  liveCasinoVsOnlineSlots,
];

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return [...ALL_POSTS].sort(
    (a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return ALL_POSTS.map((post) => post.slug);
}

/** Categories that actually have at least one published post. */
export function getUsedCategories(): string[] {
  const used = new Set(ALL_POSTS.map((post) => post.category));
  return BLOG_CATEGORIES.filter((category) => used.has(category));
}

/**
 * Up to `limit` related posts for a slug. Prefers same-category posts, then
 * fills from the remaining newest posts. Never includes the current post.
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const others = getAllPosts().filter((post) => post.slug !== slug);
  const sameCategory = others.filter(
    (post) => post.category === current.category,
  );
  const rest = others.filter((post) => post.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export type { BlogPost } from "./types";
