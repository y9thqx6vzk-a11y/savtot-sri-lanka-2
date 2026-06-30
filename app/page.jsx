'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Users, MapPin, Utensils, ArrowRight, Calendar } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

export default function HomePage() {
  const router = useRouter();
  const { lang, t } = useSite();

  return (
    <div style={{ backgroundColor: '#faf7f2' }}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative min-h-[100svh] py-32 flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl z-10 mb-8">
        <div className="absolute inset-0 z-0">
          <EditableImage
            id="hero_bg"
            src="home-page.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
            width={1920}
            crop="fill"
            priority={true}
          />
          <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16 pointer-events-none">


          <p className="text-sm uppercase tracking-[0.4em] mb-4 opacity-80 font-medium">
            <EditableText path={`${lang}.hero.tagline`} text={t.hero.tagline} />
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg leading-tight whitespace-pre-line pointer-events-auto relative">
            <EditableText path={`${lang}.hero.title`} text={t.hero.title} multiline />
          </h1>
          <p className="text-base md:text-xl font-light mb-6 opacity-90 max-w-3xl mx-auto pointer-events-auto leading-relaxed whitespace-pre-line">
            <EditableText path={`${lang}.hero.subtitle`} text={t.hero.subtitle} multiline />
          </p>


          {/* Dynamic Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto pointer-events-auto text-stone-800">
            {/* Summer Card */}
            <div className="relative flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-[#eaddcd] p-6 md:p-8 text-start justify-between min-h-[220px]">
              <div>
                <span className="text-[#c4704f] font-serif italic text-sm md:text-base font-medium block mb-1">
                  {lang === 'he' ? 'חוויית קיץ חמה' : 'Warm Summer Vibe'}
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                  {lang === 'he' ? 'מסע קיץ 2027' : 'Summer 2027'}
                </h3>
                <p className="text-stone-600 text-[11px] md:text-xs mb-4 font-light leading-relaxed">
                  {lang === 'he' 
                    ? "ג'ונגלים, אתרים מפורסמים וחופים מהיפים בעולם" 
                    : 'Jungles, famous sites and some of the most beautiful beaches in the world'}
                </p>
              </div>
              <button 
                onClick={() => router.push('/itinerary/summer')}
                className="w-fit bg-[#c4704f] hover:bg-[#b05d3d] text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider transition-colors shadow-md cursor-pointer"
              >
                {lang === 'he' ? 'למסלול הקיץ ←' : 'Summer Itinerary →'}
              </button>
            </div>

            {/* Winter Card */}
            <div className="relative flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-[#eaddcd] p-6 md:p-8 text-start justify-between min-h-[220px]">
              <div>
                <span className="text-[#8ca38f] font-serif italic text-sm md:text-base font-medium block mb-1">
                  {lang === 'he' ? 'בריחה טרופית בחורף' : 'Tropical Winter Escape'}
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                  {lang === 'he' ? 'מסע חורף 2027' : 'Winter (February) 2027'}
                </h3>
                <p className="text-stone-600 text-[11px] md:text-xs mb-4 font-light leading-relaxed">
                  {lang === 'he' 
                    ? 'קפה בהרים, שקיעות בים ובעיקר הרבה שמש' 
                    : 'Coffee in the mountains, sunsets at sea and above all lots of sun'}
                </p>
              </div>
              <button 
                onClick={() => router.push('/itinerary/winter')}
                className="w-fit bg-[#8ca38f] hover:bg-[#798e7c] text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider transition-colors shadow-md cursor-pointer"
              >
                {lang === 'he' ? 'למסלול החורף ←' : 'Winter Itinerary →'}
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-xs md:text-sm font-light tracking-wide text-white/90 pointer-events-auto">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4704f]" />
              <EditableText path={`${lang}.hero.kosher`} text={t.hero.kosher} />
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4704f]" />
              <EditableText path={`${lang}.hero.yoga`} text={t.hero.yoga} />
            </span>
            <span className="flex items-center gap-2 text-[#ffd5a1]">
              <EditableText path={`${lang}.hero.dates_disclaimer`} text={t.hero.dates_disclaimer} />
            </span>
          </div>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-transparent relative">
        <div className="container mx-auto px-6 max-w-md text-center">
          <div className="bg-[#faf7f2] border border-[#eaddcd] rounded-3xl p-8 shadow-sm flex flex-col items-center gap-5">
            <div className="space-y-2">
              <span className="font-serif italic text-[#c4704f] text-sm md:text-base font-medium block">
                {lang === 'he' ? 'מוכנה לצאת לדרך?' : 'Ready to start your journey?'}
              </span>
              <p className="text-xl md:text-2xl font-bold text-stone-800 tracking-wide">
                {lang === 'he' ? '8,000 ₪* – הכל כלול (ללא טיסות)' : '8,000 ILS* – All-inclusive (excluding flights)'}
              </p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
                {lang === 'he' 
                  ? '* בהתאם לשער הדולר, לא כולל טיסות. פרטים מלאים בעמוד ההרשמה.' 
                  : '* Subject to USD exchange rate, excluding flights. Full details on the registration page.'}
              </p>
            </div>
            <button
              onClick={() => router.push('/register')}
              className="bg-[#c4704f] hover:bg-[#b05d3d] text-white px-10 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:-translate-y-0.5 cursor-pointer mt-1"
            >
              {lang === 'he' ? 'להרשמה למסע' : 'Register for the Journey'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
