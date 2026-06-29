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
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const isHome = pathname === '/';
  const isSolid = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If user scrolls down by more than 10px, hide the navbar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        // If user scrolls up, show the navbar
        setVisible(true);
      }
      
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Pass active season param if the user is currently looking at an itinerary
  const seasonMatch = pathname.match(/^\/itinerary\/(summer|winter)/);
  const currentSeason = seasonMatch ? seasonMatch[1] : '';
  const registerUrl = currentSeason ? `/register?season=${currentSeason}` : '/register';

  const navItems = [
    { id: '/', label: t.nav.home, active: pathname === '/' },
    { id: '/itinerary', label: t.nav.itinerary, active: pathname.startsWith('/itinerary') },
    { id: '/essentials', label: t.nav.essentials, active: pathname === '/essentials' },
    { id: '/discovery', label: t.nav.discovery, active: pathname === '/discovery' },
    { id: '/about', label: t.nav.about, active: pathname === '/about' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'py-2' : 'py-4'} ${isSolid ? '' : 'bg-transparent text-white'}`} 
        style={isSolid ? { backgroundColor: '#faf7f2', boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none' } : {}}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <Link 
            href="/"
            className={`text-xl cursor-pointer flex items-center gap-2 ${isSolid ? 'text-stone-800' : 'text-white'}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.01em' }}
            title={lang === 'he' ? 'עמוד הבית' : 'Home'}
          >
            <Leaf className="w-5 h-5" style={{ color: '#c4704f' }} />
            <span>Savtot <span className="italic font-normal opacity-70">in Sri Lanka</span></span>
          </Link>

          <div className="hidden md:flex gap-6 items-center font-medium">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${isSolid ? 'border-stone-300 text-stone-700 bg-stone-100/50 hover:bg-stone-200/50' : 'border-white/80 text-white bg-white/10 hover:bg-white/20'} transition shadow-sm cursor-pointer`}
              title={lang === 'he' ? 'Change Language' : 'החלף שפה'}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wide">{lang === 'he' ? 'English' : 'עברית'}</span>
            </button>

            {navItems.map((item) => {
              if (item.id === '/itinerary') {
                return (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => setIsItineraryOpen(!isItineraryOpen)}
                      className={`text-sm tracking-wide transition-colors font-light flex items-center gap-1 cursor-pointer ${item.active ? 'font-medium text-[#c4704f]' : isSolid ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'}`}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isItineraryOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isItineraryOpen && (
                      <>
                        <div className="fixed inset-0 z-30" onClick={() => setIsItineraryOpen(false)} />
                        <div className="absolute top-full start-1/2 transform -translate-x-1/2 mt-2 w-48 bg-[#faf7f2] border border-stone-200 rounded-xl shadow-lg py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-200 text-start">
                          <Link
                            href="/itinerary/summer"
                            onClick={() => setIsItineraryOpen(false)}
                            className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-200/50 hover:text-stone-900 transition-colors"
                          >
                            {lang === 'he' ? 'מסלול קיץ 2027' : 'Summer Itinerary 2027'}
                          </Link>
                          <Link
                            href="/itinerary/winter"
                            onClick={() => setIsItineraryOpen(false)}
                            className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-200/50 hover:text-stone-900 transition-colors"
                          >
                            {lang === 'he' ? 'מסלול חורף 2027' : 'Winter Itinerary 2027'}
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                );
              }
              
              return (
                <Link 
                  key={item.id}
                  href={item.id}
                  className={`text-sm tracking-wide transition-colors font-light ${item.active ? 'font-medium' : ''} ${isSolid ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'}`}
                  style={item.active ? { color: '#c4704f' } : {}}
                >
                  {item.label}
                </Link>
              );
            })}
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
              href={registerUrl}
              className="text-white px-5 py-2 text-sm tracking-wide font-light transition-all hover:opacity-90 inline-block"
              style={{ backgroundColor: '#c4704f', borderRadius: '1px' }}
            >
              {t.nav.register}
            </Link>
          </div>

          <div className="md:hidden flex flex-col items-center gap-1 z-50">
            <button className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-stone-800" /> : <Menu className={isSolid ? 'text-stone-800' : 'text-white'} />}
            </button>
            {!isMenuOpen && (
              <button 
                onClick={toggleLanguage}
                className={`text-[10px] font-bold px-2 py-0.5 rounded border ${isSolid ? 'border-stone-300 text-stone-700 bg-stone-100/50' : 'border-white/50 text-white bg-white/10'} shadow-sm cursor-pointer`}
              >
                {lang === 'he' ? 'EN' : 'עב'}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-stone-50/95 backdrop-blur-md text-stone-800 flex flex-col justify-center items-center animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 text-center text-xl font-light">
             {navItems.map((item) => {
              if (item.id === '/itinerary') {
                return (
                  <div key={item.id} className="flex flex-col items-center">
                    <button
                      onClick={() => setIsItineraryOpen(!isItineraryOpen)}
                      className={`transition-colors py-2 px-6 rounded-full flex items-center gap-2 hover:bg-stone-100/50 cursor-pointer ${item.active ? 'text-[#c4704f] font-normal' : 'text-stone-600'}`}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isItineraryOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isItineraryOpen && (
                      <div className="flex flex-col gap-2 mt-2 bg-stone-100/60 rounded-2xl py-2 px-4 text-sm animate-in fade-in duration-200">
                        <Link 
                          href="/itinerary/summer"
                          onClick={() => { setIsMenuOpen(false); setIsItineraryOpen(false); }}
                          className="text-stone-600 hover:text-[#c4704f] py-1 px-4 block"
                        >
                          {lang === 'he' ? 'מסלול קיץ 2027' : 'Summer Itinerary 2027'}
                        </Link>
                        <Link 
                          href="/itinerary/winter"
                          onClick={() => { setIsMenuOpen(false); setIsItineraryOpen(false); }}
                          className="text-stone-600 hover:text-[#c4704f] py-1 px-4 block"
                        >
                          {lang === 'he' ? 'מסלול חורף 2027' : 'Winter Itinerary 2027'}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link 
                  key={item.id}
                  href={item.id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors py-2 px-6 rounded-full hover:bg-stone-100/50 ${item.active ? 'text-[#c4704f] font-normal' : 'text-stone-600'}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link 
              href={registerUrl}
              onClick={() => setIsMenuOpen(false)}
              className="text-white px-8 py-3 rounded-full text-lg mt-4 shadow-md transition-all hover:opacity-90 inline-block font-light"
              style={{ backgroundColor: '#c4704f' }}
            >
              {t.nav.register}
            </Link>
            
            <button 
              onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} 
              className="mt-6 flex items-center gap-2 text-stone-600 hover:text-stone-900 font-medium text-lg justify-center mx-auto cursor-pointer"
            >
              <Globe className="w-5 h-5" /> {lang === 'he' ? 'English' : 'עברית'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
