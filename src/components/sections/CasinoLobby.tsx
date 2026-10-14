import Link from 'next/link';
import GameCard from '@/components/ui/GameCard';

const lobbyGames = [
  { 
    id: 1, 
    name: "Mythic Slots", 
    imageUrl: "/images/lobby/slots-fantasy.webp",
    badge: "HOT" as const,
    // PROMPT: "Cinematic 3D render of a mythological Greek god themed slot machine, glowing gold coins, dark fantasy lighting, 8k resolution, highly detailed."
  },
  { 
    id: 2, 
    name: "Live Roulette", 
    imageUrl: "/images/lobby/live-roulette.webp",
    badge: "HOT" as const,
    // PROMPT: "Ultra-realistic photograph of a luxurious casino roulette table, glowing neon gold accents, dark rich background, depth of field."
  },
  { 
    id: 3, 
    name: "Neon Aviator", 
    imageUrl: "/images/lobby/crash-aviator.webp",
    badge: "NEW" as const,
    // PROMPT: "Sleek, glowing neon red airplane flying upwards on a dark background, high contrast, modern crash game aesthetic, 3D render."
  },
  { 
    id: 4, 
    name: "High-Stakes Poker", 
    imageUrl: "/images/lobby/card-poker.webp",
    // PROMPT: "High-stakes poker table with floating glowing playing cards and casino chips, dark cinematic lighting, luxury casino vibe."
  },
  { 
    id: 5, 
    name: "Jackpot Wheel", 
    imageUrl: "/images/lobby/jackpot-wheel.webp",
    badge: "HOT" as const,
    // PROMPT: "Massive glowing golden wheel of fortune, sparkling lights, dark background, premium casino interface element."
  },
  { 
    id: 6, 
    name: "Mythic Fishing", 
    imageUrl: "/images/lobby/fishing-game.webp",
    // PROMPT: "Vibrant, rich 3D fantasy underwater scene with glowing mythical fish and golden coins, modern arcade casino game style."
  },
];

export default function CasinoLobby() {
  return (
    <section id="lobby" className="py-24 bg-[#09090B] border-t border-brand-gold/10 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-2 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-gradient-to-br from-brand-gold to-brand-gold-dark flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Casino Lobby
            </h2>
            <p className="text-gray-400 font-medium max-w-xl">
              Experience the absolute pinnacle of high-stakes fantasy gaming. Select a title below to enter the lobby.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/lobby" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm sm:text-base font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2">
              View All Games
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* Responsive CSS Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {lobbyGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}
