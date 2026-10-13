import Link from 'next/link';
import { Gamepad2, Gift, Headset, Play } from 'lucide-react';

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-white/10 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        <Link href="/go" className="flex flex-col items-center justify-center w-16 text-gray-400 hover:text-white transition-colors">
          <Gamepad2 size={20} className="mb-1" />
          <span className="text-[10px] font-medium">Games</span>
        </Link>
        
        <Link href="/go" className="flex flex-col items-center justify-center w-16 text-gray-400 hover:text-white transition-colors">
          <Gift size={20} className="mb-1" />
          <span className="text-[10px] font-medium">Promos</span>
        </Link>
        
        {/* Center Big Play Button */}
        <Link href="/go" className="relative -top-5 flex flex-col items-center justify-center">
          <div className="w-14 h-14 bg-brand-red hover:bg-brand-red-light rounded-full flex items-center justify-center pl-1 shadow-[0_0_15px_rgba(229,9,20,0.5)] border-4 border-dark-900 transition-transform hover:scale-105">
            <Play size={24} className="text-white fill-white" />
          </div>
        </Link>
        
        <Link href="/go" className="flex flex-col items-center justify-center w-16 text-gray-400 hover:text-white transition-colors">
          <Headset size={20} className="mb-1" />
          <span className="text-[10px] font-medium">Support</span>
        </Link>
      </div>
    </div>
  );
}
