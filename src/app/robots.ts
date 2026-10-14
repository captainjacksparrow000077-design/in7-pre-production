import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

// ---------------------------------------------------------------------------
// Crawler access policy (production).
//
// Decision: this site is public, informational and wants maximum discovery by
// both classic search engines and AI assistants, so every crawler is allowed by
// default. The only exclusion is the affiliate redirect route (/go), which has
// no content value and must never be indexed.
//
// AI/search and AI-training crawlers are listed explicitly so the intent is
// documented and survives future edits to the wildcard group. Listing a crawler
// here is a policy signal only — robots.txt is not access control and does not
// guarantee inclusion in any AI answer.
// ---------------------------------------------------------------------------

const DISALLOWED_PATHS = ['/go']

// Search indexers and user-triggered browsing agents (fetch on a user's behalf).
const SEARCH_AND_USER_TRIGGERED_BOTS = [
  'Googlebot',
  'Bingbot',
  'DuckDuckBot',
  'Applebot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'Claude-User',
  'DuckAssistBot',
]

// Model-training crawlers. Allowed intentionally; the public guides are meant to
// be discoverable.
const AI_TRAINING_BOTS = [
  'GPTBot',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Amazonbot',
  'meta-externalagent',
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  // Never let preview/staging deployments get indexed.
  if (process.env.VERCEL_ENV === 'preview') {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: SEARCH_AND_USER_TRIGGERED_BOTS,
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: AI_TRAINING_BOTS,
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
