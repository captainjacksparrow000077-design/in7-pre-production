import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  PUBLISHER_NAME,
  DEFAULT_OG_IMAGE,
} from "@/lib/constants";
import {
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const defaultTitle = "IN7India — Online Casino Game Portal & App Guide";

// Preview/staging deployments (Vercel) must never be indexed.
const IS_PREVIEW = process.env.VERCEL_ENV === "preview";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  icons: {
    icon: [
      { url: '/in7.com-favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    shortcut: '/in7.com-favicon.ico',
    apple: '/in7.com-favicon.ico',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "IN7 India", "IN7 Game", "IN7 Games", "IN7 App",
    "online casino India", "IN7 login", "IN7 registration", "IN7 game review",
    "casino app India", "IN7 APK download", "casino UPI",
  ],
  authors: [{ name: PUBLISHER_NAME, url: SITE_URL }],
  creator: PUBLISHER_NAME,
  publisher: PUBLISHER_NAME,
  robots: IS_PREVIEW
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
  openGraph: {
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE.url,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
    creator: "@in7game",
    site: "@in7game",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/* Organization & WebSite structured data (single source in lib/seo) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className="font-sans bg-[#0A0A0A] text-white antialiased min-h-full flex flex-col pb-20 md:pb-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
