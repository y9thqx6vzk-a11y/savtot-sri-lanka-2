'use client';

import React from 'react';
import Link from 'next/link';
import { useSite } from '../contexts/SiteContext';

export default function Footer() {
  const { lang, t, isAdmin, setIsAdmin } = useSite();

  const handleAdminToggle = async () => {
    if (isAdmin) {
      if (confirm('האם לצאת ממצב עריכה?')) {
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
            body: JSON.stringify({ password: pass })
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
    <footer className="bg-teal-900 text-teal-100 py-12 mt-12 relative" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-start">
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Savtot in Sri Lanka</h3>
          <p className="opacity-80 leading-relaxed whitespace-pre-line">
            {lang === 'he' 
              ? "סבתות בסרי לנקה\nחוויה ייחודית ובלתי נשכחת שעוצבה במיוחד עבור אימהות וסבתות.\nהמארחים שלכן: עליזה, אייל ונעמי | קיץ 2026" 
              : "Savtot in Sri Lanka\nA unique, unforgettable experience designed exclusively for mothers and grandmothers.\nYour hosts: Aliza, Eyal & Naomi | Summer 2026"}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 text-lg">{lang === 'he' ? 'קישורים' : 'Links'}</h4>
          <ul className="space-y-2">
            <li><Link href="/itinerary" className="hover:text-orange-400">{t.nav.itinerary}</Link></li>
            <li><Link href="/essentials" className="hover:text-orange-400">{t.nav.essentials}</Link></li>
            <li><Link href="/register" className="hover:text-orange-400">{t.nav.register}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 text-lg">{lang === 'he' ? 'צרו קשר' : 'Contact Us'}</h4>
          <p className="opacity-80">Eyal: 054-351-0664</p>
          <p className="opacity-80">Naomi: +972 54-663-9597</p>
          <div className="mt-4 flex justify-center md:justify-start gap-4">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 cursor-pointer transition-colors">📷</div>
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 cursor-pointer transition-colors">📘</div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 pt-8 border-t border-teal-800 text-sm opacity-60 flex flex-col items-center gap-2">
        <span>© 2026 Savtot in Sri Lanka. Planning & Love: Aliza, Eyal, Naomi.</span>
        
        <button 
          onClick={handleAdminToggle}
          className="opacity-30 hover:opacity-100 transition-opacity p-2 text-2xl"
          title="Admin Login"
        >
          🔒
        </button>
      </div>
    </footer>
  );
}
