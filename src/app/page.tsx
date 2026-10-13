import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AnimatedLobbyMarquee from '@/components/sections/AnimatedLobbyMarquee';
import ProviderTicker from '@/components/sections/ProviderTicker';
import ScreenshotGallery from '@/components/sections/ScreenshotGallery';
import CasinoLobby from '@/components/sections/CasinoLobby';
import DepositSection from '@/components/sections/DepositSection';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, faqJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  description:
    'IN7India is a casino referral portal for India. Explore casino games, slots, live tables and Aviator, learn about app safety, and download the IN7 app.',
  path: '/',
});

// FAQPage structured data. Content mirrors the visible FAQ section rendered by
// <FAQ /> so the schema matches what a reader — and a crawler — can see.
const FAQ_ITEMS = [
  {
    question: 'How do I register for an IN7 account?',
    answer:
      "Click the 'Download APK' or 'Play Now' button, follow the registration steps on the IN7 platform, and verify your mobile number via OTP to create your account.",
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'Payment methods and deposit options are managed by the third-party casino operator. Commonly supported methods in India include UPI, IMPS, PhonePe, and Paytm — check the platform directly for current options.',
  },
  {
    question: 'How fast are withdrawals processed?',
    answer:
      'Withdrawal processing times depend on the third-party casino operator. Check their support section for the current processing times applicable to your account.',
  },
  {
    question: 'Is the IN7 app safe to download?',
    answer:
      "The APK linked from this site directs to the official IN7 platform. Always download from the official source. If you have security concerns, verify the file with your device's security software before installation.",
  },
  {
    question: 'How do I claim the welcome bonus?',
    answer:
      'Welcome bonus availability, terms, and eligibility conditions are set by the third-party casino operator. Review the current offer terms on the platform before registering.',
  },
  {
    question: 'Are the games fair?',
    answer:
      "Games on the IN7 platform are provided by third-party game studios. Check the platform's licensing and certification details for information about RNG testing and fairness audits.",
  },
  {
    question: 'What games are available on IN7?',
    answer:
      'The IN7 platform features a broad selection of casino-style games including slots, live dealer games, crash games, card games, and more. The exact catalogue is subject to change — visit the Casino Lobby for current availability.',
  },
  {
    question: 'Is IN7 available in my region?',
    answer:
      'Availability is subject to local laws and regulations. Online gambling may be restricted in certain regions. You are responsible for ensuring that your participation complies with the laws in your jurisdiction before using the platform.',
  },
];

export default function Home() {
  return (
    <>
      {/* FAQPage structured data — server-rendered, crawler-visible */}
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <Navbar />
      <main>
        <HeroSection referralUrl="/go" />
        <AnimatedLobbyMarquee />
        <ProviderTicker />
        <ScreenshotGallery />
        <DepositSection />
        <CasinoLobby />
        <GuidesHub />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

const guides = [
  {
    title: 'Getting started on IN7',
    description: 'A step-by-step first-session walkthrough, from downloading the app to exploring the lobby.',
    href: '/blog/how-to-get-started-in7',
  },
  {
    title: 'IN7 app guide',
    description: 'What to check about compatibility, installation and permissions before you install.',
    href: '/blog/in7-app-guide',
  },
  {
    title: 'Casino game types',
    description: 'How slots, roulette, blackjack, baccarat, poker, crash and live games work.',
    href: '/blog/casino-game-types-guide',
  },
  {
    title: 'Bonus terms explained',
    description: 'How to read wagering requirements, eligibility and restrictions before opting in.',
    href: '/blog/gaming-bonus-terms-explained',
  },
];

function GuidesHub() {
  return (
    <section
      aria-labelledby="guides-heading"
      className="border-t border-brand-gold/10 bg-[#080808] py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-2">
            IN7India guides
          </p>
          <h2 id="guides-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Learn before you play
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
            Practical guides that explain how the platform and popular game
            categories work, so you can make informed decisions.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.03] transition-colors p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span className="flex items-center gap-1 text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">
                {guide.title}
                <ArrowRight size={13} aria-hidden="true" />
              </span>
              <span className="block mt-2 text-xs text-gray-400 leading-relaxed">
                {guide.description}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
          >
            Browse all guides <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
