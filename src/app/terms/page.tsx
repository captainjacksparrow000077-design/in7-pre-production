import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service: Platform Rules',
  description:
    'Read the IN7India terms of service. Understand your rights and responsibilities, eligibility, the referral relationship and how our content works.',
  path: '/terms',
});

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Terms of Service', path: '/terms' },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Navbar />
      <main className="pt-28 pb-12 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl font-heading font-black text-white drop-shadow-md mb-6">
            Terms of Service
          </h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left text-gray-300 space-y-6 backdrop-blur-sm shadow-xl text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the IN7India platform, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Eligibility</h2>
              <p>
                You must be 18 years of age or older (or the legal age of majority in your jurisdiction) to use this platform. By using this service, you represent that you meet this requirement.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Referral & Affiliate Disclosure</h2>
              <p>
                IN7India operates as a marketing and referral platform. We connect players to third-party casino operators. All actual gameplay, deposits, and withdrawals are handled by those third-party platforms, not by IN7India directly.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. Responsible Gaming</h2>
              <p>
                Online gambling carries financial risk. Please play responsibly. Set limits on your deposits and seek help if gambling becomes a problem. Resources are available at national responsible gambling organizations.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">5. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes your acceptance of the updated terms.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">6. Contact</h2>
              <p>
                For any questions regarding these Terms, please contact us at{' '}
                <a href="mailto:support@in7game.com" className="text-brand-gold hover:underline">
                  support@in7game.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
