import Link from 'next/link';
import FallbackImage from '@/components/ui/FallbackImage';
import { CONTACT_EMAIL } from '@/lib/constants';
import { Gamepad2, Dices, Spade, ShieldCheck, ChevronRight } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 3-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 3"/><path d="M2 3v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V3"/></svg>
);

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Casino Lobby', href: '/lobby' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'Blog', href: '/blog' },
    { name: 'IN7 App Guide', href: '/blog/in7-app-guide' },
    { name: 'Game Types Guide', href: '/blog/casino-game-types-guide' },
    { name: 'Responsible Gaming', href: '/blog/responsible-gaming-tips' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <footer className="bg-[#050505] border-t border-brand-red/20 pt-16 pb-24 md:pb-8 relative overflow-hidden text-gray-400">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-red/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          {/* Brand/About Bio */}
          <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <FallbackImage 
                src="/in7.com-favicon.ico"
                alt="IN7 Game Logo" 
                width={48} 
                height={48} 
                className="rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                fallbackType="logo"
                unoptimized
              />
              <div className="flex flex-col -gap-1">
                 <span className="font-extrabold text-2xl tracking-tight text-white leading-none">IN7</span>
                 <span className="font-bold text-[11px] tracking-[0.2em] text-brand-gold leading-none">CASINO</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              IN7 is a marketing and referral platform connecting players to leading online casino operators. Explore games, check available offers, and download the app.
            </p>
            <div className="flex gap-3 text-brand-gold">
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 w-10 h-10">
                <Gamepad2 size={18} aria-hidden="true" />
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 w-10 h-10">
                <Dices size={18} aria-hidden="true" />
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 w-10 h-10">
                <Spade size={18} aria-hidden="true" />
              </div>
            </div>
            {/* Social Icons — no heading label */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/in7game"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IN7 on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/in7game"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IN7 on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://youtube.com/@in7game"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IN7 on YouTube"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://t.me/in7game"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IN7 on Telegram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"
              >
                <TelegramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center hover:text-brand-gold transition-colors">
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 mr-1 transition-all duration-300 text-brand-gold" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Certifications */}
          <div className="col-span-1 space-y-6">
             <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider relative inline-block">
              Secure Gaming
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h3>
            <div className="p-4 rounded-xl border border-brand-gold/20 bg-brand-gold/5 flex items-start gap-4">
               <ShieldCheck size={32} className="text-brand-gold shrink-0 mt-1" aria-hidden="true" />
               <div>
                 <h4 className="text-white font-semibold mb-1 text-sm">Industry-Standard Security</h4>
                 <p className="text-xs">Your data and transactions are handled by licensed third-party casino operators using industry-standard security protocols.</p>
               </div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs leading-relaxed">
              <p className="font-semibold text-white mb-1">Responsible Gaming</p>
              <p>Must be 18+ to participate. Please gamble responsibly. Seek help if needed.</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-500 text-xs mb-1">Support enquiries</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-gold hover:underline text-sm">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

        </div>
        
        {/* Legal Disclaimer */}
        <div className="border-t border-white/10 pt-8 pb-6 text-center md:text-left text-[11px] leading-relaxed text-gray-500 max-w-5xl">
          <p className="mb-2">
            <strong className="text-gray-400">Disclaimer:</strong> IN7 acts as a marketing and referral platform connecting players to licensed third-party casino operators. We do not operate or manage any real-money gaming activities directly. All gameplay, deposits, withdrawals, and dispute resolutions are handled solely by the respective third-party platforms.
          </p>
          <p>
            Users must be 18+ (or the legal age of majority in their jurisdiction) to participate. Online gambling may be restricted or illegal in certain regions; it is your responsibility to comply with local laws. Play responsibly. If you or someone you know has a gambling problem, please seek help from professional organizations.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-semibold text-xs text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} IN7. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <span className="w-1 h-1 rounded-full bg-gray-600"></span>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
             <span className="w-1 h-1 rounded-full bg-gray-600"></span>
             <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
