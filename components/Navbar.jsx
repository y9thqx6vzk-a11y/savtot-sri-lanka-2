'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, Leaf } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';

export default function Navbar() {
  const { lang, t, toggleLanguage } = useSite();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '/', label: t.nav.home },
    { id: '/itinerary', label: t.nav.itinerary },
    { id: '/essentials', label: t.nav.essentials },
    { id: '/discovery', label: t.nav.discovery },
    { id: '/about', label: t.nav.about },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <Link 
          href="/register"
          className={`text-2xl font-serif font-bold cursor-pointer flex items-center gap-2 ${scrolled ? 'text-teal-900' : 'text-white'}`}
          title={lang === 'he' ? 'להרשמה' : 'Sign Up'}
        >
          <Leaf className="w-6 h-6 text-orange-500" />
          <span>Savtot <span className="font-light italic">in Sri Lanka</span></span>
        </Link>

        <div className="hidden md:flex gap-6 items-center font-medium">
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3 py-1 rounded-full border ${scrolled ? 'border-teal-900 text-teal-900' : 'border-white text-white'} hover:bg-white/10 transition`}
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs uppercase font-bold">{lang === 'he' ? 'EN' : 'HE'}</span>
          </button>

          {navItems.map((item) => (
            <Link 
              key={item.id}
              href={item.id}
              className={`hover:text-orange-500 transition-colors ${pathname === item.id ? 'text-orange-500 font-bold' : (scrolled ? 'text-stone-600' : 'text-white/90')}`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-transform hover:scale-105 shadow-md inline-block"
          >
            {t.nav.register}
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={scrolled ? 'text-teal-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-teal-900' : 'text-white'} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t text-stone-800">
           <div className="p-4 border-b flex justify-between items-center bg-stone-50">
             <span className="text-sm font-bold text-stone-500">{t.nav.toggle}</span>
             <button onClick={toggleLanguage} className="flex items-center gap-2 text-teal-700 font-bold">
               <Globe className="w-5 h-5" /> {lang === 'he' ? 'English' : 'עברית'}
             </button>
           </div>
          <div className="flex flex-col p-4 gap-4">
             {[...navItems, { id: '/register', label: t.nav.register }].map((item) => (
              <Link 
                key={item.id}
                href={item.id}
                onClick={() => setIsMenuOpen(false)}
                className={`text-${lang === 'he' ? 'right' : 'left'} font-medium py-2 border-b border-stone-100 last:border-0`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
