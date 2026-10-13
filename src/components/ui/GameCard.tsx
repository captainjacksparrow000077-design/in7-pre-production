import Link from 'next/link';
import FallbackImage from '@/components/ui/FallbackImage';
import { Play } from 'lucide-react';

export interface GameCardProps {
  id: number | string;
  name: string;
  imageUrl: string;
  badge?: 'HOT' | 'NEW' | 'VIP';
}

export default function GameCard({ id, name, imageUrl, badge }: GameCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-[#09090B] aspect-square border border-brand-gold/10 hover:border-brand-gold/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 hover:-translate-y-1">
      {/* Base Layer: Rich Generative Image */}
      <FallbackImage 
        src={imageUrl}
        alt={`Play ${name} - Latest Fantasy Casino Game`}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      
      {/* Overlay Layer: Linear Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      
      {/* Play Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm z-10 pointer-events-none">
        <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(211,47,47,0.8)] pointer-events-auto cursor-pointer group-hover:scale-110 transition-transform duration-300">
          <Play className="text-white fill-white" size={24} />
        </div>
      </div>
      
      {/* Badge Layer */}
      {badge && (
        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-md backdrop-blur-md ${
            badge === 'HOT' ? 'bg-brand-red/90 text-white border border-brand-red' : 
            badge === 'NEW' ? 'bg-brand-gold/90 text-black border border-brand-gold' : 
            'bg-purple-600/90 text-white border border-purple-500'
          }`}>
            {badge}
          </span>
        </div>
      )}
      
      {/* Content Layer (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 pointer-events-none flex justify-between items-end">
         <div>
           <h3 className="text-white font-sans font-bold text-lg md:text-xl tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">{name}</h3>
           <p className="text-gray-300 text-xs font-medium mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             Live Now
           </p>
         </div>
      </div>
      
      {/* Full Card Link Overlay */}
      <Link href="/go" className="absolute inset-0 z-30" aria-label={`Play ${name}`}></Link>
    </div>
  );
}
