import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy: How We Handle Data',
  description:
    'Read the IN7India privacy policy. Learn what information this referral portal collects, how it is used, and how cookies and third-party links are handled.',
  path: '/privacy',
});

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: '/privacy' },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Navbar />
      <main className="pt-28 pb-12 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl font-heading font-black text-white drop-shadow-md mb-6">
            Privacy Policy
          </h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left text-gray-300 space-y-6 backdrop-blur-sm shadow-xl text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Information We Collect</h2>
              <p>
                We may collect information you voluntarily provide, such as your name and email address, as well as usage data such as pages visited, browser type, and IP address for analytics purposes.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. How We Use Information</h2>
              <p>
                Information collected is used solely to improve the platform experience, respond to support requests, and comply with applicable laws. We do not sell your personal data to third parties.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Cookies</h2>
              <p>
                We use functional cookies to maintain session state. No tracking cookies or advertising cookies are set without your consent.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. Third-Party Links</h2>
              <p>
                Our platform links to third-party casino operators. We are not responsible for the privacy practices of those external sites. Please review their policies separately.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">6. Contact</h2>
              <p>
                For privacy-related enquiries, contact us at{' '}
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
