// Shared shape for all blog articles. Content is authored as structured data
// so pages can render accessible, crawlable HTML and matching structured data
// from the same source of truth.

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogSection {
  /** H2 heading for the section. */
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
}

export interface BlogSource {
  label: string;
  url: string;
}

export interface BlogRelatedLink {
  label: string;
  href: string;
  /** Short explanation of why the destination is relevant. */
  note?: string;
}

export interface BlogImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogPost {
  slug: string;
  /** Visible H1 and default metadata title. */
  title: string;
  /** Meta description (unique per article). */
  description: string;
  /** Short summary shown on the blog index cards. */
  excerpt: string;
  category: string;
  /** Engagement estimate shown to readers. */
  readMinutes: number;
  /** ISO date (YYYY-MM-DD). Publication date of this content. */
  datePublished: string;
  /** ISO date (YYYY-MM-DD) of the most recent revision. */
  dateModified: string;
  /** Clearly identified editorial attribution. */
  author: string;
  image: BlogImage;
  /** Intro paragraphs shown before the first H2. */
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  sources: BlogSource[];
  related: BlogRelatedLink[];
}

export const BLOG_CATEGORIES = [
  "App & Safety",
  "Game Guides",
  "Bonuses",
  "Payments",
  "Responsible Gaming",
] as const;
