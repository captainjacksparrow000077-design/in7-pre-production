import Image from "next/image";
import Link from "next/link";

export default function AnimatedLobbyMarquee() {
  return (
    <section
      aria-labelledby="lobby-heading"
      className="relative w-full bg-[#080607] px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Collection card */}
        <div className="relative overflow-hidden border border-[#49301F] bg-[#10090B]">
          {/* Subtle brand accent */}
          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-transparent via-[#B99149] to-transparent"
          />

          <div className="grid items-center gap-7 px-5 py-8 sm:px-9 sm:py-10 md:grid-cols-[1fr_auto] md:gap-10 md:px-12 lg:px-16 lg:py-14">
            {/* Text content */}
            <div className="order-2 text-center md:order-1 md:text-left">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D6B15E] sm:text-xs">
                IN7 INDIA
              </p>

              <h2
                id="lobby-heading"
                className="font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Explore the
                <span className="block text-[#D8B45F]">
                  Game Collection
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7 md:mx-0">
                Discover available game categories, learn how different
                games work, and explore helpful information before
                choosing where to play.
              </p>

              <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
                <Link
                  href="/lobby"
                  className="inline-flex min-h-12 items-center justify-center border border-[#C8A45A] bg-[#C8A45A] px-7 py-3 text-sm font-semibold text-[#170F08] transition-colors duration-200 hover:bg-[#E0C477] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D991] focus-visible:ring-offset-2 focus-visible:ring-offset-[#10090B] motion-reduce:transition-none"
                >
                  Explore Games
                  <span aria-hidden="true" className="ml-3">
                    →
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex min-h-12 items-center justify-center border border-white/20 px-7 py-3 text-sm font-medium text-white/85 transition-colors duration-200 hover:border-[#C8A45A]/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D991] focus-visible:ring-offset-2 focus-visible:ring-offset-[#10090B] motion-reduce:transition-none"
                >
                  About IN7
                </Link>
              </div>
            </div>

            {/* Compact brand artwork */}
            <div className="order-1 flex justify-center md:order-2">
              <div className="flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28 lg:h-36 lg:w-36">
                <Image
                  src="/images/neon-red-in7.png"
                  alt="IN7 Game emblem"
                  width={144}
                  height={144}
                  sizes="(max-width: 639px) 96px, (max-width: 1023px) 112px, 144px"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-transparent via-[#49301F] to-transparent"
          />
        </div>
      </div>
    </section>
  );
}