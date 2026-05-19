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
  const isHome = pathname === '/';
  const isSolid = scrolled || !isHome;

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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'} ${isSolid ? '' : 'bg-transparent text-white'}`} style={isSolid ? { backgroundColor: '#faf7f2', boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none' } : {}}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <Link 
          href="/"
          className={`text-xl cursor-pointer flex items-center gap-2 ${isSolid ? 'text-stone-800' : 'text-white'}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.01em' }}
          title={lang === 'he' ? 'להרשמה' : 'Sign Up'}
        >
          <Leaf className="w-5 h-5" style={{ color: '#c4704f' }} />
          <span>Savtot <span className="italic font-normal opacity-70">in Sri Lanka</span></span>
        </Link>

        <div className="hidden md:flex gap-6 items-center font-medium">
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${isSolid ? 'border-teal-900 text-teal-900 bg-teal-50/50 hover:bg-teal-100' : 'border-white/80 text-white bg-white/10 hover:bg-white/20'} transition shadow-sm`}
            title={lang === 'he' ? 'Change Language' : 'החלף שפה'}
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold tracking-wide">{lang === 'he' ? 'English' : 'עברית'}</span>
          </button>

          {navItems.map((item) => (
            <Link 
              key={item.id}
              href={item.id}
              className={`text-sm tracking-wide transition-colors font-light ${pathname === item.id ? 'font-medium' : ''} ${isSolid ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'}`}
              style={pathname === item.id ? { color: '#c4704f' } : {}}
            >
              {item.label}
            </Link>
          ))}
          <a 
            href="https://www.instagram.com/srilankasavtot/" 
            target="_blank" 
            rel="noreferrer"
            className={`transition-colors ${isSolid ? 'text-stone-600 hover:text-orange-500' : 'text-white/80 hover:text-white'}`}
            title={lang === 'he' ? 'לעמוד האינסטגרם שלנו' : 'Our Instagram Page'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
          <Link 
            href="/register"
            className="text-white px-5 py-2 text-sm tracking-wide font-light transition-all hover:opacity-90 inline-block"
            style={{ backgroundColor: '#c4704f', borderRadius: '1px' }}
          >
            {t.nav.register}
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isSolid ? 'text-teal-900' : 'text-white'} /> : <Menu className={isSolid ? 'text-teal-900' : 'text-white'} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full start-0 w-full bg-white shadow-xl border-t text-stone-800">
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
                className={`text-start font-medium py-2 border-b border-stone-100 last:border-0`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="https://www.instagram.com/srilankasavtot/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 font-medium py-2 text-teal-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
