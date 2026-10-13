import Image from 'next/image';
import Link from 'next/link';
import GameShowcaseLogo from '@/components/ui/GameShowcaseLogo';

interface EmblemCTAProps {
  referralUrl: string;
}

export default function EmblemCTA({ referralUrl }: EmblemCTAProps) {
  return (
    <section className="relative w-full py-24 flex items-center justify-center bg-[#09090B] overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-red-600/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Emblem Image */}
        <GameShowcaseLogo />

        <h2 className="mt-8 text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
          Enter the <span className="text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">IN7 Arena</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-md">
          Join the elite tables. Claim your exclusive rewards and start winning today.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <Link className="group relative inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-bold text-white uppercase tracking-wider bg-gradient-to-r from-red-700 via-red-600 to-red-800 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:scale-105 active:scale-95 transition-all duration-300" href={referralUrl}>
            <span className="absolute inset-0 w-full h-full rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            Play Now & Claim Bonus
          </Link>
        </div>
      </div>
    </section>
  );
}
