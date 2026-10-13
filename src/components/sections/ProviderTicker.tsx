import Image from 'next/image';

const providers = [
  {
    name: 'Evolution',
    src: '/images/providers/evolution.svg',
    alt: 'Evolution gaming provider logo',
  },
  {
    name: 'Playtech',
    src: '/images/providers/playtech.svg',
    alt: 'Playtech gaming provider logo',
  },
  {
    name: 'JILI',
    src: '/images/providers/jili.svg',
    alt: 'JILI gaming provider logo',
  },
  {
    name: 'PG Soft',
    src: '/images/providers/pg-soft.svg',
    alt: 'PG Soft gaming provider logo',
  },
  {
    name: 'JDB',
    src: '/images/providers/jdb.svg',
    alt: 'JDB gaming provider logo',
  },
  {
    name: 'Koolbet',
    src: '/images/providers/koolbet.svg',
    alt: 'Koolbet gaming provider logo',
  },
];

export default function ProviderTicker() {
  return (
    <section id="partners" aria-labelledby="providers-heading" className="border-y border-brand-gold/10 bg-[#080808] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-7 max-w-xl text-center sm:mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">Game providers</p>
          <h2 id="providers-heading" className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Explore leading game studios
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6" aria-label="Game providers">
          {providers.map((provider) => (
            <li key={provider.name} className="flex min-h-24 items-center justify-center border border-white/10 bg-white/[0.025] px-3 py-4 transition-colors hover:border-brand-gold/45 hover:bg-brand-gold/[0.04] sm:min-h-28 sm:px-4">
              <Image
                src={provider.src}
                alt={provider.alt}
                width={180}
                height={56}
                sizes="(max-width: 639px) 42vw, (max-width: 1023px) 27vw, 150px"
                className="h-auto max-h-12 w-full max-w-[150px] object-contain"
                unoptimized
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
