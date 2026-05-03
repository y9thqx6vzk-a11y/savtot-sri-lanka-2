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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'bg-transparent py-4 text-white'}`} style={scrolled ? { backgroundColor: '#faf7f2', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' } : {}}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <Link 
          href="/register"
          className={`text-xl cursor-pointer flex items-center gap-2 ${scrolled ? 'text-stone-800' : 'text-white'}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.01em' }}
          title={lang === 'he' ? 'להרשמה' : 'Sign Up'}
        >
          <Leaf className="w-5 h-5" style={{ color: '#c4704f' }} />
          <span>Savtot <span className="italic font-normal opacity-70">in Sri Lanka</span></span>
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
              className={`text-sm tracking-wide transition-colors font-light ${pathname === item.id ? 'font-medium' : ''} ${scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'}`}
              style={pathname === item.id ? { color: '#c4704f' } : {}}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/register"
            className="text-white px-5 py-2 text-sm tracking-wide font-light transition-all hover:opacity-90 inline-block"
            style={{ backgroundColor: '#c4704f', borderRadius: '1px' }}
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
