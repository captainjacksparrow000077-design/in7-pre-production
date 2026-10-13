// ---------------------------------------------------------------------------
// Central site configuration.
//
// Everything that is domain-, brand-, or identity-specific lives here so that
// canonical URLs, Open Graph tags and structured data are generated from a
// single source of truth instead of being hard-coded per page.
//
// IMPORTANT: `SITE_URL` is the confirmed production origin. If the domain ever
// changes, update it here and every canonical / sitemap / JSON-LD URL follows.
// Never derive canonical URLs from request host headers.
// ---------------------------------------------------------------------------

export const SITE_URL = "https://in7india.in";

export const SITE_NAME = "IN7India.in";

export const SITE_SHORT_NAME = "IN7";

export const SITE_TAGLINE = "India's Online Casino Game Portal";

export const SITE_DESCRIPTION =
  "IN7India.in is a marketing and referral portal for the IN7 online casino platform. Explore game guides, app safety information, bonus terms and available promotions.";

// Affiliate / referral destination used by every call-to-action.
export const AFFILIATE_URL =
  "https://share.in7v.com/share/agent/AA60KH07?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

// Published support contact shown in the footer and support page.
export const CONTACT_EMAIL = "support@in7game.com";

// Identifies the organisation that publishes this website.
export const PUBLISHER_NAME = "IN7India.in";

// Clearly identified editorial attribution for blog content. This is an
// organisational byline, not a claim about a specific named individual.
export const EDITORIAL_AUTHOR = "IN7India.in Editorial Team";

// Square brand mark used as the publisher logo in structured data.
export const LOGO_PATH = "/images/neon-red-in7.png";

// Default social sharing image (also used as the site-wide Open Graph image).
export const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "IN7India.in — India's Online Casino Game Portal",
} as const;

// Social profiles referenced in the footer. Kept intentionally limited to the
// public handles published on the site.
export const SOCIAL_PROFILES = [
  "https://instagram.com/in7game",
  "https://facebook.com/in7game",
  "https://youtube.com/@in7game",
  "https://t.me/in7game",
] as const;

// Public social handles used for Twitter/X card metadata.
export const TWITTER_HANDLE = "@in7game";
