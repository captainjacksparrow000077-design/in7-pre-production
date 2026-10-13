import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getAllPosts } from '@/content/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date('2026-10-13'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/lobby`,
      lastModified: new Date('2026-10-13'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/promotions`,
      lastModified: new Date('2026-10-13'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date('2026-10-13'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date('2026-10-13'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/support`,
      lastModified: new Date('2026-10-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date('2026-10-13'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date('2026-10-13'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    ...blogPosts,
  ]
}
