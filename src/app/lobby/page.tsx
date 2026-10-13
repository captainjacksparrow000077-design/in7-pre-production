import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CasinoLobby from '@/components/sections/CasinoLobby';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { breadcrumbJsonLd, buildMetadata, itemListJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Casino Lobby: Slots, Live Tables & Aviator',
  description:
    'Browse the IN7India casino lobby: slot-style games, live dealer tables, Aviator-style crash games and card games. See game guides before you play.',
  path: '/lobby',
  keywords: [
    'IN7 casino lobby',
    'IN7 games',
    'online slots India',
    'live dealer games',
    'Aviator game',
  ],
});

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Casino Lobby', path: '/lobby' },
];

const exploreLinks = [
  {
    title: 'Casino game types explained',
    description: 'How slots, roulette, blackjack, baccarat, poker and crash games work.',
    href: '/blog/casino-game-types-guide',
  },
  {
    title: 'Live casino vs online slots',
    description: 'Compare real-dealer tables with automated slots to choose where to start.',
    href: '/blog/live-casino-vs-online-slots',
  },
  {
    title: 'IN7 app guide',
    description: 'What to check about device compatibility, installation and permissions.',
    href: '/blog/in7-app-guide',
  },
  {
    title: 'How UPI payments work',
    description: 'How deposit methods generally work for Indian players, and what to verify.',
    href: '/blog/how-upi-payments-work-in7',
  },
];

export default function LobbyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          itemListJsonLd(exploreLinks.map((l) => ({ name: l.title, url: l.href }))),
        ]}
      />
      <Navbar />
      <main className="pt-28 pb-12 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <header className="max-w-3xl mb-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-3">
              IN7India Games
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              IN7 Casino Lobby: Slots, Live Tables & More
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Browse the categories available on the IN7 platform. The exact
              catalogue is set by the third-party operator and can change, so
              treat each title&apos;s in-game rules as the source of truth. New to
              casino games? Start with our{' '}
              <Link href="/blog/casino-game-types-guide" className="text-brand-gold hover:underline">
                guide to game types
              </Link>
              .
            </p>
          </header>
        </div>

        <CasinoLobby />

        {/* Internal-link cluster to supporting guides */}
        <section
          aria-labelledby="explore-guides-heading"
          className="border-t border-brand-gold/10 bg-[#080808] py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="explore-guides-heading"
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3"
            >
              Explore by game type
            </h2>
            <p className="text-sm sm:text-base text-white/65 max-w-2xl mb-8">
              Understand how each category plays before choosing where to spend
              your time and budget.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.03] transition-colors p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  <span className="flex items-center gap-1 text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">
                    {link.title}
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                  <span className="block mt-2 text-xs text-gray-400 leading-relaxed">
                    {link.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
