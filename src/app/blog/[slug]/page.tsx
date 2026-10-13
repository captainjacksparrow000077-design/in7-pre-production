import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock, ExternalLink } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
} from '@/lib/seo';
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/content/blog';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    image: {
      url: post.image.src,
      alt: post.image.alt,
      width: post.image.width,
      height: post.image.height,
    },
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, 3);
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const jsonLd = [
    articleJsonLd({
      slug: post.slug,
      title: post.title,
      description: post.description,
      image: post.image.src,
      author: post.author,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      category: post.category,
      keywords: [
        post.category,
        'IN7',
        'online casino India',
        'casino guide',
      ],
    }),
    breadcrumbJsonLd(breadcrumbs),
    faqJsonLd(post.faqs),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="pt-32 pb-16 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Article header */}
          <header className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full">
              {post.category}
            </span>

            <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight mb-4">
              {post.title}
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 border-t border-white/10 pt-4">
              <span>By {post.author}</span>
              <span className="flex items-center gap-1">
                <Calendar size={12} aria-hidden="true" />
                <time dateTime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} aria-hidden="true" />
                {post.readMinutes} min read
              </span>
            </div>
          </header>

          {/* Featured image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 mb-10">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="object-cover"
            />
          </div>

          {/* Article body */}
          <article className="space-y-5">
            {post.intro.map((paragraph, i) => (
              <p key={i} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-xl font-bold text-white mt-8 mb-3 tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base leading-relaxed">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          {/* FAQ (visible, matches FAQPage JSON-LD) */}
          {post.faqs.length > 0 && (
            <section className="mt-12" aria-labelledby="article-faq-heading">
              <h2 id="article-faq-heading" className="text-xl font-bold text-white mb-6 tracking-tight">
                Frequently asked questions
              </h2>
              <div className="space-y-5">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Sources */}
          {post.sources.length > 0 && (
            <section className="mt-12" aria-labelledby="article-sources-heading">
              <h2 id="article-sources-heading" className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500 mb-4">
                Sources & further reading
              </h2>
              <ul className="space-y-2">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
                    >
                      {source.label}
                      <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Related links */}
          {post.related.length > 0 && (
            <section className="mt-12" aria-labelledby="article-related-heading">
              <h2 id="article-related-heading" className="text-xl font-bold text-white mb-6 tracking-tight">
                Related reading
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {post.related.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-2xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.03] transition-colors p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    <span className="flex items-center gap-1 text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">
                      {link.label}
                      <ArrowRight size={13} aria-hidden="true" />
                    </span>
                    {link.note && (
                      <span className="block mt-1.5 text-xs text-gray-400 leading-relaxed">
                        {link.note}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related posts by category */}
          {related.length > 0 && (
            <section className="mt-12" aria-labelledby="article-more-heading">
              <h2 id="article-more-heading" className="text-xl font-bold text-white mb-6 tracking-tight">
                More from the blog
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.03] transition-colors p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gold">
                      {item.category}
                    </span>
                    <span className="block mt-2 text-sm font-semibold text-white leading-snug group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Footer disclaimer */}
          <div className="mt-12 pt-8 border-t border-white/10 text-xs text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-500">Disclaimer:</strong> This article is for informational purposes only and does not constitute financial, legal, or gambling advice. Online gambling involves financial risk. You must be 18+ to participate. Availability may be subject to local laws and regulations.
            </p>
          </div>

          {/* Back to blog */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Read more articles
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
