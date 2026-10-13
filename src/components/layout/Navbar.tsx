'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FallbackImage from '@/components/ui/FallbackImage';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Casino Lobby', href: '/lobby' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#09090b]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <FallbackImage 
                  src="/in7.com-favicon.ico"
                  alt="IN7 Game Logo" 
                  width={42} 
                  height={42} 
                  className="rounded-lg object-cover shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  fallbackType="logo"
                  unoptimized
                />
                <div className="flex flex-col -gap-1">
                   <span className="font-extrabold text-2xl tracking-tight text-white leading-none drop-shadow-md">IN7</span>
                   <span className="font-bold text-[11px] tracking-[0.2em] text-brand-gold leading-none">CASINO</span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                      isActive 
                        ? 'text-brand-gold bg-white/5 border border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
                        : 'text-gray-200 bg-transparent border border-transparent hover:bg-brand-gold/10 hover:border-brand-gold/30 hover:text-brand-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right: CTA & Hamburger */}
            <div className="flex items-center space-x-4">
              {/* Primary CTA (Desktop & Mobile) */}
              <Link 
                href="/go" 
                className="px-5 py-2.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#dc2626] to-[#991b1b] border border-[#ef4444]/50 hover:brightness-110 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] transition-all uppercase tracking-wider"
              >
                Play Now
              </Link>
              
              {/* Hamburger Button (Hidden on Desktop) */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden text-gray-300 hover:text-brand-gold transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={toggleMenu} />
        
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-[#09090B] border-l border-brand-gold/20 shadow-2xl flex flex-col pt-24 px-6 pb-8 h-[100dvh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={toggleMenu}
                  className={`text-lg font-bold py-3 border-b transition-colors ${
                    isActive
                      ? 'text-brand-gold border-brand-gold'
                      : 'text-gray-200 border-white/5 hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
