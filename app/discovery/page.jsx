'use client';

import React from 'react';
import { useSite } from '../../contexts/SiteContext';
import NoticeBoardGallery from '../../components/NoticeBoardGallery';

export default function DiscoveryPage() {
  const { lang } = useSite();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf7f2' }}>
      
      {/* ——— Hero: full-bleed editorial title ——— */}
      <div className="pt-32 pb-16 px-6 md:px-16 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-stone-200 pb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-light mb-4">
              {lang === 'he' ? 'סרי לנקה · קיץ וחורף 2027 (תאריכים יפורסמו בהמשך)' : 'Sri Lanka · Summer & Winter 2027 (Dates TBA)'}
            </p>
            <h1 
              className="text-6xl md:text-8xl font-serif font-medium leading-none text-stone-800"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {lang === 'he' ? (
                <>
                  מגלים<br />
                  <span className="italic font-normal text-stone-500">עולם</span>
                </>
              ) : (
                <>
                  Discover<br />
                  <span className="italic font-normal text-stone-500">the Magic</span>
                </>
              )}
            </h1>
          </div>
          <p className="md:max-w-xs text-stone-500 leading-relaxed text-sm font-light md:text-start" dir={lang === 'he' ? 'rtl' : 'ltr'}>
            {lang === 'he' 
              ? 'רגעים אמיתיים, צבעים אמיתיים, חוויות שחייבים לחוות בעיניים שלכן' 
              : 'Real moments, real colors, experiences you simply have to see for yourself.'}
          </p>
        </div>
      </div>

      {/* ——— Gallery ——— */}
      <div className="px-4 md:px-12 pb-24 max-w-screen-xl mx-auto">
        <NoticeBoardGallery lang={lang} />
      </div>

    </div>
  );
}
