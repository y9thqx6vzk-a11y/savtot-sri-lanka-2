'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';

export default function Footer() {
  const { lang, t, isAdmin, setIsAdmin } = useSite();

  const handleAdminToggle = async () => {
    if (isAdmin) {
      if (confirm('האם לצאת ממצב עריכה?')) {
        await fetch('/api/logout', { method: 'POST' });
        localStorage.setItem('isAdmin', 'false');
        setIsAdmin(false);
        window.location.reload();
      }
    } else {
      const pass = prompt('סיסמת מנהל:');
      if (pass !== null) {
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: pass.trim() })
          });
          const data = await response.json();
          if (data.success) {
            localStorage.setItem('isAdmin', 'true');
            setIsAdmin(true);
            alert('מצב עריכה הופעל! כעת ניתן לשנות תמונות וטקסטים.');
            window.location.reload();
          } else {
            alert('סיסמה שגויה');
          }
        } catch (e) {
          alert('שגיאת התחברות לשרת');
        }
      }
    }
  };

  return (
    <footer className="bg-[#faf7f2] text-stone-500 py-6 border-t border-stone-200 text-xs font-light relative" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
          <span className="font-serif font-bold text-stone-800 text-sm">Savtot in Sri Lanka</span>
          <span className="text-stone-300 hidden sm:inline">|</span>
          <Link href="/itinerary" className="hover:text-[#c4704f] transition-colors">{t.nav.itinerary}</Link>
          <Link href="/essentials" className="hover:text-[#c4704f] transition-colors">{t.nav.essentials}</Link>
          <Link href="/register" className="hover:text-[#c4704f] transition-colors">{t.nav.register}</Link>
        </div>

        {/* Right: Contacts & Socials */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
          <a href="https://wa.me/972543510664" target="_blank" rel="noreferrer" className="hover:text-[#c4704f] transition-colors" dir="ltr">WhatsApp Eyal</a>
          <a href="https://wa.me/972546639597" target="_blank" rel="noreferrer" className="hover:text-[#c4704f] transition-colors" dir="ltr">WhatsApp Naomi</a>
          <a href="mailto:srilankasavtot@gmail.com" className="hover:text-[#c4704f] transition-colors">srilankasavtot@gmail.com</a>
          <span className="text-stone-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/srilankasavtot/" target="_blank" rel="noreferrer" className="hover:text-[#c4704f] transition-colors" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/share/g/1Dt8BR383e/" target="_blank" rel="noreferrer" className="hover:text-[#c4704f] transition-colors" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom thin copyright & admin link */}
      <div className="container mx-auto px-6 mt-4 pt-4 border-t border-stone-200/50 flex flex-row items-center justify-between opacity-50 text-[10px]">
        <span>© 2026 Savtot in Sri Lanka. Planning & Love: Aliza, Eyal, Naomi.</span>
        
        <button 
          onClick={handleAdminToggle}
          className="opacity-10 hover:opacity-100 transition-opacity text-sm p-1"
          title="Admin Login"
        >
          🔒
        </button>
      </div>
    </footer>
  );
}
