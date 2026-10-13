import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block the affiliate redirect route — no SEO value
        disallow: ['/go'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
