import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  referralUrl: string;
  downloadUrl?: string;
};

const heroSlides = [
  {
    src: "/images/hero-premium-bg.webp",
    position: "object-[60%_center] lg:object-[68%_center]",
    animation: "animate-[hero-fade-one_18s_ease-in-out_infinite] motion-reduce:animate-none",
  },
  {
    src: "/images/hero-casino-floor.webp",
    position: "object-[54%_center] lg:object-[58%_center]",
    animation: "animate-[hero-fade-two_18s_ease-in-out_infinite] motion-reduce:hidden",
  },
  {
    src: "/images/hero-in7-bg.webp",
    position: "object-[50%_center] lg:object-[54%_center]",
    animation: "animate-[hero-fade-three_18s_ease-in-out_infinite] motion-reduce:hidden",
  },
];

export default function HeroSection({
  referralUrl,
  downloadUrl,
}: HeroSectionProps) {
  const primaryUrl = downloadUrl ?? referralUrl;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[590px] items-center overflow-hidden bg-[#080507] px-5 pb-12 pt-28 sm:min-h-[680px] sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-[760px] lg:px-12 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {heroSlides.map(({ src, position, animation }, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            sizes="100vw"
            quality={80}
            className={`object-cover ${position} ${animation}`}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,5,7,0.55)_0%,rgba(8,5,7,0.82)_76%,#080507_100%)] lg:bg-[linear-gradient(90deg,rgba(8,5,7,0.98)_0%,rgba(8,5,7,0.85)_46%,rgba(8,5,7,0.45)_73%,rgba(8,5,7,0.35)_100%)]"
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl text-center lg:max-w-2xl lg:text-left">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#E8C66F] sm:mb-6 sm:text-xs">
            IN7 India
          </p>

          <h1
            id="hero-heading"
            className="font-serif text-[clamp(2rem,9.3vw,5rem)] font-bold leading-[1.04] tracking-tight text-white"
          >
            <span className="block">Play bigger with</span>
            <span className="mt-1 block bg-gradient-to-r from-[#BD8E3C] via-[#F8E7A0] to-[#C69B4C] bg-clip-text text-transparent">
              the IN7 gaming app
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-6 text-white/85 sm:mt-7 sm:text-lg sm:leading-8 lg:mx-0">
            Download the official APK, set up your account, and explore the latest IN7 games and available offers.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-2 sm:mx-auto sm:max-w-md sm:gap-3 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center">
            <a
              href={primaryUrl}
              className="inline-flex min-h-14 items-center justify-center rounded-lg border border-red-300/50 bg-gradient-to-b from-[#E53440] to-[#A90E19] px-5 py-3 text-[13px] font-extrabold uppercase tracking-wide text-white transition-colors duration-200 hover:from-[#F0424D] hover:to-[#BE1520] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080507] sm:px-6 sm:text-sm"
            >
              Download APK &amp; Claim Free Bonus
            </a>
            <Link
              href="/promotions"
              className="inline-flex min-h-10 items-center justify-center px-4 py-2 text-sm font-semibold text-[#F8E7A0] underline decoration-[#C69B4C]/70 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8E7A0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080507]"
            >
              View available offers
            </Link>
          </div>

          <p className="mx-auto mt-5 max-w-xl border-l-2 border-[#C69B4C] pl-3 text-left text-[13px] leading-5 text-[#F8E7A0] sm:text-sm sm:leading-6 lg:mx-0">
            New players can claim a free welcome bonus after registration.
          </p>
        </div>
      </div>
    </section>
  );
}
