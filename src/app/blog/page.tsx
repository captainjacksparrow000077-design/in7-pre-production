import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { getAllPosts, getUsedCategories } from '@/content/blog';

export const metadata = buildMetadata({
  title: 'Casino Guides, App Safety & Payment Tips',
  description:
    'Guides for IN7India players: getting started, casino game types, app safety, bonus terms, UPI payments and responsible gaming.',
  path: '/blog',
  keywords: [
    'IN7 blog',
    'casino guides India',
    'online casino tips',
    'gaming app safety',
    'responsible gaming',
  ],
});

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
];

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getUsedCategories();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Navbar />
      <main className="pt-32 pb-16 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-3">Resources</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              IN7 India Blog
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Guides, tips, and information for casino players — from getting
              started to understanding game mechanics, app safety and responsible play.
            </p>
          </div>

          {/* Category list (static, crawlable) */}
          <nav aria-label="Blog categories" className="mb-10 flex flex-wrap gap-2 justify-center">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold border bg-brand-gold/10 border-brand-gold/40 text-brand-gold">
              All
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-xs font-semibold border bg-white/[0.03] border-white/10 text-gray-400"
              >
                {cat}
              </span>
            ))}
          </nav>

          {/* Blog Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.03] transition-colors overflow-hidden"
              >
                <div className="p-6 flex flex-col flex-1">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-gray-500">
                      <Clock size={11} aria-hidden="true" />
                      {post.readMinutes} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-brand-gold transition-colors flex-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="focus-visible:outline-none focus-visible:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                    <time dateTime={post.datePublished} className="text-[10px] text-gray-600">
                      {new Date(post.datePublished).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-[11px] font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
                      aria-label={`Read ${post.title}`}
                    >
                      Read more <ArrowRight size={12} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="text-center text-xs text-gray-600 leading-relaxed max-w-2xl mx-auto border-t border-white/10 pt-8">
            <p>
              Articles on this blog are for informational purposes only. They do
              not constitute financial, legal, or gambling advice, and do not
              guarantee any specific outcome from gambling. You must be 18+ to
              participate. Online gambling may be restricted in certain
              jurisdictions.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
