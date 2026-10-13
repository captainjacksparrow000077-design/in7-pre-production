import Image from 'next/image';

export default function GameShowcaseLogo() {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center mx-auto drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
      <Image alt="IN7 Game Official Emblem" className="object-contain hover:scale-105 transition-transform duration-300" fill loading="lazy" sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px" src="/in7.com-favicon.ico" unoptimized />
    </div>
  );
}
