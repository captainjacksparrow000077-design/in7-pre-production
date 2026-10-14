import type { Metadata } from 'next';
import Link from 'next/link';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Promotions from '@/components/sections/Promotions';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'IN7India Promotions: Bonuses, Offers & Terms',
  description:
    'Explore IN7India promotions, deposit bonus details and offer terms. Check eligibility, availability, wagering requirements and restrictions before participating.',
  path: '/promotions',
  keywords: [
    'IN7 promotions',
    'IN7 bonus',
    'casino welcome bonus India',
    'wagering requirements',
  ],
});

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Promotions', path: '/promotions' },
];

export default function PromotionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Navbar />
      <main className="min-h-screen bg-dark-900 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <header className="max-w-3xl mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              IN7 Promotions & Available Offers
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Offers shown on this site are promotional information about the
              IN7 platform. The operator sets every offer&apos;s amount, eligibility
              and conditions, and they can change at any time. Read our{' '}
              <Link href="/blog/gaming-bonus-terms-explained" className="text-brand-gold hover:underline">
                explanation of bonus terms
              </Link>{' '}
              before opting in.
            </p>
          </header>
        </div>

        <Promotions />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white mb-3 tracking-tight">
              Before you accept any bonus
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2 text-sm text-gray-400 leading-relaxed list-disc pl-5">
              <li>Check the wagering requirement multiplier and what it applies to.</li>
              <li>Confirm which games count toward wagering, and at what percentage.</li>
              <li>Note the expiry window and any maximum withdrawal cap.</li>
              <li>Verify the minimum qualifying deposit and payment method.</li>
            </ul>
            <Link
              href="/blog/gaming-bonus-terms-explained"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
            >
              Read the full bonus-terms guide →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
