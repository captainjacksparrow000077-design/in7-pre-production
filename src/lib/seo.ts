import type { Metadata } from "next";

import {
  CONTACT_EMAIL,
  DEFAULT_OG_IMAGE,
  LOGO_PATH,
  PUBLISHER_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SOCIAL_PROFILES,
  TWITTER_HANDLE,
} from "./constants";

// ---------------------------------------------------------------------------
// URL helpers
// ---------------------------------------------------------------------------

/**
 * Build an absolute, canonical URL from an internal path.
 * The production origin comes from validated config — never from host headers.
 * Trailing slashes are normalised so each route has exactly one canonical form.
 */
export function absoluteUrl(path = "/"): string {
  const base = SITE_URL.replace(/\/+$/, "");
  const clean = path.trim();
  if (!clean || clean === "/") return base;
  return `${base}/${clean.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

// ---------------------------------------------------------------------------
// Metadata builder
// ---------------------------------------------------------------------------

export interface MetadataImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface BuildMetadataInput {
  /**
   * Unique, descriptive base <title>. Omit it on the homepage so the layout's
   * `title.default` (an absolute, branded title) applies. When provided, the
   * layout `title.template` appends " | IN7India.in" automatically.
   */
  title?: string;
  /** Unique meta description for the page. */
  description: string;
  /** Internal route path, e.g. "/blog/in7-app-guide". */
  path: string;
  /** Optional social/featured image; falls back to the site default. */
  image?: MetadataImage;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  /** Override robots directives. Defaults to index,follow. */
  robots?: Metadata["robots"];
}

const DEFAULT_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

/**
 * Produce a complete, consistent Metadata object for an indexable page.
 * Canonical URL is always derived from `path` against the configured origin.
 */
export function buildMetadata(input: BuildMetadataInput): Metadata {
  const url = absoluteUrl(input.path);
  const image = input.image ?? DEFAULT_OG_IMAGE;
  const ogImage = {
    url: absoluteUrl(image.url),
    width: image.width ?? DEFAULT_OG_IMAGE.width,
    height: image.height ?? DEFAULT_OG_IMAGE.height,
    alt: image.alt,
  };

  const pageTitle = input.title ?? defaultTitleFallback();

  const openGraph =
    input.type === "article"
      ? {
          type: "article" as const,
          title: pageTitle,
          description: input.description,
          url,
          siteName: SITE_NAME,
          locale: "en_IN",
          images: [ogImage],
          publishedTime: input.publishedTime,
          modifiedTime: input.modifiedTime,
          authors: [PUBLISHER_NAME],
        }
      : {
          type: "website" as const,
          title: pageTitle,
          description: input.description,
          url,
          siteName: SITE_NAME,
          locale: "en_IN",
          images: [ogImage],
        };

  return {
    ...(input.title ? { title: input.title } : {}),
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: url },
    robots: input.robots ?? DEFAULT_ROBOTS,
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: input.description,
      images: [absoluteUrl(image.url)],
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },
  };
}

function defaultTitleFallback(): string {
  return `${SITE_NAME} | ${SITE_TAGLINE}`;
}

// ---------------------------------------------------------------------------
// JSON-LD builders
// ---------------------------------------------------------------------------

/** Site-wide Organization schema. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(LOGO_PATH),
    description: SITE_DESCRIPTION,
    sameAs: [...SOCIAL_PROFILES],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
      },
    ],
  };
}

/** Site-wide WebSite schema. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
  };
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

/** BreadcrumbList schema built from visible breadcrumb links. */
export function breadcrumbJsonLd(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface ArticleJsonLdInput {
  slug: string;
  title: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified: string;
  category: string;
  keywords: string[];
}

/** BlogPosting schema for an article. */
export function articleJsonLd(post: ArticleJsonLdInput) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [absoluteUrl(post.image)],
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: PUBLISHER_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(LOGO_PATH),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "en-IN",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

/** FAQPage schema. Content must also be visible on the page. */
export function faqJsonLd(faqs: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface ItemListEntry {
  name: string;
  url: string;
}

/** ItemList schema for collections of links to pages (e.g. the casino lobby). */
export function itemListJsonLd(items: ItemListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}
