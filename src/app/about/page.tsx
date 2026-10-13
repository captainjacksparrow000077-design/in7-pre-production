import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Gamepad2, Users, FileText } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'About Us: Referral Portal & Editorial Policy',
  description:
    'IN7India is a marketing and referral portal for the IN7 casino platform. Learn how the site works, our editorial approach and our affiliate disclosure.',
  path: '/about',
  keywords: ['IN7India', 'IN7 referral portal', 'about IN7', 'affiliate disclosure'],
});

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

const sections = [
  {
    icon: Gamepad2,
    title: 'What IN7India does',
    body: `IN7India is a marketing and referral platform. This website provides information about the IN7 gaming platform, including available game types, promotional offers, and how to download the app. When you click a "Play Now" or "Download APK" link, you are directed to a third-party casino operator's platform where all actual gameplay, deposits, withdrawals, and account management take place.`,
  },
  {
    icon: Users,
    title: 'Who this site is for',
    body: 'This site is intended for adult visitors (18+) in jurisdictions where accessing online casino platforms is permitted. If you are unsure about the legal status of online gambling in your region, please seek appropriate legal guidance before proceeding.',
  },
  {
    icon: ShieldCheck,
    title: 'How we approach content',
    body: 'We aim to provide accurate, useful, and honest information about the IN7 platform and online casino gaming in general. We do not invent statistics, fabricate reviews, or make unverified claims about payouts, safety, or licensing. Where information is subject to change (such as bonus amounts or game availability), we note that terms apply and direct visitors to the platform for current details.',
  },
  {
    icon: FileText,
    title: 'Affiliate disclosure',
    body: 'This website earns referral commissions when visitors register on the IN7 platform through our links. This does not affect the content we publish or the accuracy of information we provide. Our editorial goal is to give visitors a clear, honest picture of what the IN7 platform offers.',
  },
];

const aboutFaqs = [
  {
    question: 'What is IN7India?',
    answer:
      'IN7India is a marketing and referral website that provides information about the IN7 online casino platform, including game guides, app safety guidance and promotional details. It is not the casino operator itself.',
  },
  {
    question: 'Does IN7India operate the games or handle payments?',
    answer:
      'No. This site does not operate games, take deposits, process withdrawals or manage player accounts. Registration, gameplay and payments are handled entirely by the third-party operator that you are referred to.',
  },
  {
    question: 'How does IN7India make money?',
    answer:
      'The site earns referral commissions when visitors register on the IN7 platform through its links. This is disclosed openly so visitors understand the commercial relationship.',
  },
  {
    question: 'How is content on this site created?',
    answer:
      'Content is written and maintained by the IN7India editorial team. We avoid fabricating reviews, ratings or licensing claims, and we tell visitors when details such as bonuses or game availability can change.',
  },
  {
    question: 'Is IN7India an official operator site?',
    answer:
      'No. IN7India is an independent information and referral portal. It does not claim to be the operator and directs visitors to the official platform for account and payment matters.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(aboutFaqs)]} />
      <Navbar />
      <main className="pt-28 pb-16 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-3">About us</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              About IN7India
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              IN7India is a referral and information portal for the IN7 online
              casino platform. Here is how it works and what to expect.
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-6 mb-14">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-gold/20 bg-brand-gold/10 text-brand-gold mt-0.5">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-base mb-2 tracking-tight">{section.title}</h2>
                      <p className="text-gray-400 text-sm leading-relaxed">{section.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Responsible Gaming notice */}
          <div className="mb-14 p-6 rounded-2xl border border-brand-gold/20 bg-brand-gold/[0.04]">
            <h2 className="text-white font-bold text-base mb-2 tracking-tight">Responsible gaming</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Online gambling involves financial risk. Only participate if you are comfortable with
              the possibility of losing the money you deposit. If you or someone you know is
              struggling with gambling, please reach out to a professional support organisation.
              Read our{' '}
              <Link href="/blog/responsible-gaming-tips" className="text-brand-gold hover:underline">
                responsible gaming guide
              </Link>
              .
            </p>
            <ul className="text-gray-500 text-xs space-y-1">
              <li>Must be 18 or older (or legal age of majority in your jurisdiction) to participate.</li>
              <li>Online gambling may be restricted or illegal in certain regions. You are responsible for compliance with local laws.</li>
              <li>Set deposit and time limits before you start playing.</li>
            </ul>
          </div>

          {/* FAQ */}
          <section aria-labelledby="about-faq-heading" className="mb-14">
            <h2 id="about-faq-heading" className="text-xl font-bold text-white mb-6 tracking-tight">
              About IN7India: frequently asked questions
            </h2>
            <div className="space-y-4">
              {aboutFaqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{faq.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Links section */}
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            <Link
              href="/lobby"
              className="group p-5 rounded-xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.04] transition-colors block"
            >
              <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">Explore</p>
              <p className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors">Casino Lobby →</p>
              <p className="text-gray-500 text-xs mt-1">Browse available games on the IN7 platform</p>
            </Link>
            <Link
              href="/promotions"
              className="group p-5 rounded-xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.04] transition-colors block"
            >
              <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">Offers</p>
              <p className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors">Current Promotions →</p>
              <p className="text-gray-500 text-xs mt-1">View available bonuses and promotional offers</p>
            </Link>
            <Link
              href="/blog"
              className="group p-5 rounded-xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.04] transition-colors block"
            >
              <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">Resources</p>
              <p className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors">Game Guides & Tips →</p>
              <p className="text-gray-500 text-xs mt-1">Articles on game types, bonuses, and responsible play</p>
            </Link>
            <Link
              href="/support"
              className="group p-5 rounded-xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.04] transition-colors block"
            >
              <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">Help</p>
              <p className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors">Support Centre →</p>
              <p className="text-gray-500 text-xs mt-1">Common questions and how to get assistance</p>
            </Link>
          </div>

          {/* Legal links */}
          <div className="text-center text-xs text-gray-600 border-t border-white/10 pt-6 flex flex-wrap gap-4 justify-center">
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <a href="mailto:support@in7game.com" className="text-gray-500 hover:text-white transition-colors">support@in7game.com</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
