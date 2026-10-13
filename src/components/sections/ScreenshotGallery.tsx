'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

const screenshots = [
  { src: '/optimized/images/1.webp', alt: 'IN7 app screenshot showing an in-app bonus offer' },
  { src: '/optimized/images/2.webp', alt: 'IN7 app screenshot showing the casino home screen' },
  { src: '/optimized/images/3.webp', alt: 'IN7 app screenshot showing available casino games' },
  { src: '/optimized/images/4.webp', alt: 'IN7 app screenshot showing game categories' },
  { src: '/optimized/images/5.webp', alt: 'IN7 app screenshot showing a casino game selection' },
  { src: '/optimized/images/6.webp', alt: 'IN7 app screenshot showing live casino content' },
  { src: '/optimized/images/7.webp', alt: 'IN7 app screenshot showing account features' },
  { src: '/optimized/images/8.webp', alt: 'IN7 app screenshot showing casino promotions' },
  { src: '/optimized/images/9.webp', alt: 'IN7 app screenshot showing the IN7 game lobby' },
];

export default function ScreenshotGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    const firstCard = container?.querySelector<HTMLElement>('[data-screenshot-card]');

    if (!container || !firstCard) {
      return;
    }

    const scrollAmount = firstCard.offsetWidth + 16;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior,
    });
  };

  const handleImageError = (index: number) => {
    setFailedImages((current) => new Set(current).add(index));
  };

  return (
    <section id="app-experience" aria-labelledby="app-experience-heading" className="border-t border-brand-gold/10 bg-[#080808] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-7 max-w-xl px-5 text-center sm:mb-10 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">App experience</p>
          <h2 id="app-experience-heading" className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Explore the IN7 app
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
            Browse a preview of the app interface before you get started.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center border border-brand-gold/35 bg-black/75 p-3 text-white transition-colors hover:border-brand-gold hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:flex"
            aria-label="Show previous app screenshots"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center border border-brand-gold/35 bg-black/75 p-3 text-white transition-colors hover:border-brand-gold hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:flex"
            aria-label="Show next app screenshots"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-3 scroll-px-5 scroll-smooth scrollbar-hide sm:px-6 sm:scroll-px-6 lg:gap-6 lg:px-10 lg:scroll-px-10"
          >
            {screenshots.map((screenshot, index) => (
              <article
                key={screenshot.src}
                data-screenshot-card
                className="w-[66vw] max-w-[260px] shrink-0 snap-start md:w-[29vw] md:max-w-[300px] lg:w-[22vw]"
              >
                <div className="relative aspect-[9/19.5] overflow-hidden border border-white/10 bg-black">
                  {failedImages.has(index) ? (
                    <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center text-white/50">
                      <ImageIcon size={36} aria-hidden="true" />
                      <span className="text-xs font-medium">Screenshot unavailable</span>
                    </div>
                  ) : (
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(max-width: 639px) 66vw, (max-width: 1023px) 29vw, 22vw"
                      className="object-cover"
                      loading="lazy"
                      onError={() => handleImageError(index)}
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-3 px-5 text-center text-xs text-white/45 sm:hidden">Swipe to explore the app screens</p>
        </div>
      </div>
    </section>
  );
}
