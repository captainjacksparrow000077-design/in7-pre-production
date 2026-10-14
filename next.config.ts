import path from "node:path";
import type { NextConfig } from "next";

const securityHeaders = [
  // Enforce HTTPS for future requests (2 years). Omitted includeSubDomains/preload
  // until those are a deliberate, verified decision.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  // Prevent embedding in iframes (clickjacking protection)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Prevent MIME type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Enable XSS filter in older browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Referrer policy — send full URL for same-origin, no referrer for cross-origin
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Permissions policy — disable unnecessary browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  // Pin the Turbopack root to this project directory. A package-lock.json exists
  // in the parent directory (outside this Git repo), and without this Turbopack
  // warns that it is ignoring it.
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Legacy blog slugs consolidated into the current guides. Keeps inbound
  // links and any indexed URLs pointing at the canonical article instead of
  // serving duplicate content.
  async redirects() {
    return [
      {
        source: "/blog/understanding-casino-game-types",
        destination: "/blog/casino-game-types-guide",
        permanent: true,
      },
      {
        source: "/blog/understanding-bonuses-and-wagering",
        destination: "/blog/gaming-bonus-terms-explained",
        permanent: true,
      },
    ];
  },

  // Security headers applied to every route. On Vercel Preview deployments a
  // noindex tag is added so staging/preview URLs are never indexed.
  async headers() {
    const isPreview = process.env.VERCEL_ENV === "preview";
    const previewHeaders = isPreview
      ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
      : [];
    return [
      {
        source: "/(.*)",
        headers: [...securityHeaders, ...previewHeaders],
      },
    ];
  },

  images: {
    // Allow Unsplash images (existing)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Serve modern image formats automatically via Next.js Image Optimization
    formats: ["image/avif", "image/webp"],
    // Common screen widths for responsive srcset generation
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
