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
          <div className="flex flex-col gap-3">
            <a href="https://wa.me/972543510664" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 hover:text-orange-400 transition-colors flex items-center gap-2 justify-center md:justify-start" dir="ltr">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12.031 0C5.394 0 0 5.385 0 12.016c0 2.115.548 4.184 1.594 6.008L.027 24l6.126-1.603A12.016 12.016 0 0012.031 24c6.635 0 12.031-5.385 12.031-12.016S18.667 0 12.031 0zm3.834 17.202c-.161.455-.93.882-1.332.966-.403.084-.897.136-2.585-.563-2.037-.84-3.344-2.91-3.444-3.047-.1-.137-1.096-1.464-1.127-2.977-.03-1.512.723-2.257.994-2.56.27-.302.588-.377.785-.377.197 0 .394.004.568.013.184.01.428-.066.65.467.229.549.785 1.916.854 2.054.07.138.116.299.016.498-.098.197-.148.32-.295.49-.148.169-.313.364-.446.49-.148.148-.306.313-.135.611.171.298.761 1.261 1.636 2.04.1.09.206.183.322.281.821.688 1.76 1.05 2.023 1.185.263.136.417.112.573-.064.156-.176.669-.78.85-1.047.18-.268.36-.223.599-.133.24.089 1.516.714 1.776.844.259.13.433.195.496.302.064.108.064.629-.098 1.084z" />
              </svg>
              Eyal: +972-54-351-0664
            </a>
            <a href="https://wa.me/972546639597" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 hover:text-orange-400 transition-colors flex items-center gap-2 justify-center md:justify-start" dir="ltr">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12.031 0C5.394 0 0 5.385 0 12.016c0 2.115.548 4.184 1.594 6.008L.027 24l6.126-1.603A12.016 12.016 0 0012.031 24c6.635 0 12.031-5.385 12.031-12.016S18.667 0 12.031 0zm3.834 17.202c-.161.455-.93.882-1.332.966-.403.084-.897.136-2.585-.563-2.037-.84-3.344-2.91-3.444-3.047-.1-.137-1.096-1.464-1.127-2.977-.03-1.512.723-2.257.994-2.56.27-.302.588-.377.785-.377.197 0 .394.004.568.013.184.01.428-.066.65.467.229.549.785 1.916.854 2.054.07.138.116.299.016.498-.098.197-.148.32-.295.49-.148.169-.313.364-.446.49-.148.148-.306.313-.135.611.171.298.761 1.261 1.636 2.04.1.09.206.183.322.281.821.688 1.76 1.05 2.023 1.185.263.136.417.112.573-.064.156-.176.669-.78.85-1.047.18-.268.36-.223.599-.133.24.089 1.516.714 1.776.844.259.13.433.195.496.302.064.108.064.629-.098 1.084z" />
              </svg>
              Naomi: +972-54-663-9597
            </a>
          </div>
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
