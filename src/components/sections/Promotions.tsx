import Image from 'next/image';
import Link from 'next/link';

const promotions = [
  {
    title: 'First deposit bonus',
    highlight: 'Up to ₹777',
    description: 'Make your first eligible deposit to access the current welcome bonus. Terms and eligibility apply.',
    cta: 'View welcome bonus',
    image: '/optimized/images/hero-casino-floor.webp',
    imageAlt: 'Roulette and card tables inside a casino',
  },
  {
    title: 'Exclusive rewards',
    highlight: 'Offers for IN7 players',
    description: 'Browse the latest available rewards and promotions after setting up your IN7 account.',
    cta: 'Explore offers',
    image: '/optimized/images/vip-exclusive-bg.webp',
    imageAlt: 'Premium casino table with gold details',
  },
];

export default function Promotions() {
  return (
    <section id="promotions" aria-labelledby="promotions-heading" className="bg-[#080808] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-xl text-center sm:mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">Current promotions</p>
          <h2 id="promotions-heading" className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            More ways to play
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
            Explore the available IN7 offers before you get started.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {promotions.map((promotion) => (
            <article key={promotion.title} className="relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-black sm:min-h-[380px]">
              <Image
                src={promotion.image}
                alt={promotion.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.7)_47%,rgba(5,5,5,0.96)_100%)]" />

              <div className="relative flex min-h-[340px] flex-col justify-end p-6 sm:min-h-[380px] sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F8E7A0]">IN7 rewards</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {promotion.title}
                </h3>
                <p className="mt-1 text-lg font-semibold text-[#E8C66F]">{promotion.highlight}</p>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                  {promotion.description}
                </p>
                <Link
                  href="/go"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-red-300/50 bg-gradient-to-b from-[#E53440] to-[#A90E19] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:from-[#F0424D] hover:to-[#BE1520] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] sm:w-auto sm:self-start"
                >
                  {promotion.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-white/45">
          Offers may be subject to eligibility requirements and applicable terms.
        </p>
      </div>
    </section>
  );
}
