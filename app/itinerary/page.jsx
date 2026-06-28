'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useSite } from '../../contexts/SiteContext';

export default function ItineraryRootPage() {
  const router = useRouter();
  const { lang } = useSite();

  return (
    <div className="pt-32 pb-20 min-h-screen" style={{ backgroundColor: '#faf7f2' }}>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <div className="mb-16">
          <span className="font-serif italic text-lg md:text-xl font-medium text-[#c4704f] block mb-2">
            {lang === 'he' ? 'תוכנית המסלולים שלנו' : 'Our Itineraries'}
          </span>
          <h1 className="text-5xl font-serif font-bold text-stone-800 mb-4">
            {lang === 'he' ? 'בחרו את המסע שלכן' : 'Choose Your Journey'}
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === 'he' 
              ? 'שני מסלולים ייחודיים שנתפרו במיוחד עבורנו, בקצב הנכון ובשיא הפינוק' 
              : 'Two unique itineraries tailored especially for us, at the perfect pace and with ultimate comfort.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Summer Card */}
          <div className="bg-white p-8 rounded-3xl border border-[#eaddcd] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[260px] text-start">
            <div>
              <span className="text-[#c4704f] font-serif italic text-sm md:text-base font-medium block mb-1">
                {lang === 'he' ? 'חוויית קיץ חמה' : 'Warm Summer Vibe'}
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                {lang === 'he' ? 'מסע קיץ 2027' : 'Summer 2027'}
              </h3>
              <p className="text-stone-600 text-sm mb-6 font-light leading-relaxed">
                {lang === 'he' 
                  ? "ג'ונגלים, אתרים מפורסמים וחופים מהיפים בעולם - עשרה ימים של שמש והרפתקה." 
                  : 'Jungles, famous sites and some of the most beautiful beaches in the world - ten days of sun and adventure.'}
              </p>
            </div>
            <button 
              onClick={() => router.push('/itinerary/summer')}
              className="w-full bg-[#c4704f] hover:bg-[#b05d3d] text-white py-3 rounded-full font-bold text-sm tracking-wider transition-colors shadow-md cursor-pointer text-center"
            >
              {lang === 'he' ? 'למסלול הקיץ ←' : 'Summer Itinerary →'}
            </button>
          </div>

          {/* Winter Card */}
          <div className="bg-white p-8 rounded-3xl border border-[#eaddcd] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[260px] text-start">
            <div>
              <span className="text-[#8ca38f] font-serif italic text-sm md:text-base font-medium block mb-1">
                {lang === 'he' ? 'בריחה טרופית בחורף' : 'Tropical Winter Escape'}
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                {lang === 'he' ? 'מסע חורף 2027' : 'Winter (February) 2027'}
              </h3>
              <p className="text-stone-600 text-sm mb-6 font-light leading-relaxed">
                {lang === 'he' 
                  ? 'קפה בהרים, שקיעות בים ובעיקר הרבה שמש - בריחה חמימה ומרגיעה מהקור.' 
                  : 'Coffee in the mountains, sunsets at sea and above all lots of sun - a warm and relaxing winter escape.'}
              </p>
            </div>
            <button 
              onClick={() => router.push('/itinerary/winter')}
              className="w-full bg-[#8ca38f] hover:bg-[#798e7c] text-white py-3 rounded-full font-bold text-sm tracking-wider transition-colors shadow-md cursor-pointer text-center"
            >
              {lang === 'he' ? 'למסלול החורף ←' : 'Winter Itinerary →'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
