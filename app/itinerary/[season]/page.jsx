'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Sun } from 'lucide-react';
import { useSite } from '../../../contexts/SiteContext';
import EditableText from '../../../components/EditableText';
import EditableImage from '../../../components/EditableImage';

export default function ItineraryPage() {
  const router = useRouter();
  const params = useParams();
  const { lang, t } = useSite();

  const season = params?.season === 'winter' ? 'winter' : 'summer';
  const itineraryData = t.itinerary[season] || t.itinerary.summer;
  const days = itineraryData?.days || [];

  const defaultImages = {
    summer: [
      '/home1.jpg', '/home2.jpg', '/home3.jpg', '/home4.jpg', '/home1.jpg',
      '/home2.jpg', '/home3.jpg', '/home4.jpg', '/home1.jpg', '/home2.jpg'
    ],
    winter: [
      '/home2.jpg', '/home3.jpg', '/home4.jpg', '/home1.jpg', '/home2.jpg',
      '/home3.jpg', '/home4.jpg', '/home1.jpg', '/home2.jpg'
    ]
  };

  const currentDefaultImages = defaultImages[season] || defaultImages.summer;
  const getImageId = (idx) => {
    if (season === 'winter') return `winter_day_${idx + 1}`;
    if (idx === 8) return '10';
    if (idx === 7) return 'itinerary_day_8';
    return `itinerary_day_${idx}`;
  };

  return (
    <div className="pt-32 pb-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span 
            className="font-serif italic text-lg md:text-xl font-medium block mb-2"
            style={{ color: season === 'winter' ? '#8ca38f' : '#c4704f' }}
          >
            {season === 'winter' 
              ? (lang === 'he' ? 'מסע חורף 2027' : 'Winter Trip 2027') 
              : (lang === 'he' ? 'מסע קיץ 2027' : 'Summer Trip 2027')}
          </span>
          <h1 className="text-5xl font-serif font-bold text-teal-900 mb-4">
            <EditableText path={`${lang}.itinerary.title`} text={t.itinerary.title} />
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            <EditableText path={`${lang}.itinerary.subtitle`} text={t.itinerary.subtitle} />
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute start-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-100 rounded-full"></div>

          <div className="space-y-12">
            {days.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-stretch gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="w-full md:w-1/2 p-4 flex">
                  <div className="bg-white p-2 rounded-2xl shadow-lg transition-transform duration-300 w-full h-full flex flex-col">
                    <div className="w-full bg-stone-200 rounded-xl overflow-hidden relative flex-1 min-h-[280px] max-h-[420px] isolation-isolate" style={{ transform: 'translateZ(0)' }}>
                       <EditableImage 
                        id={getImageId(index)} 
                        src={getImageId(index)} 
                        fallback={currentDefaultImages[index] || '/home1.jpg'}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        width={1000}
                        crop="fill"
                       />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-start p-6 bg-white rounded-2xl shadow-md border-s-4 border-e-0 relative flex flex-col justify-between" style={{ borderInlineStartColor: season === 'winter' ? '#8ca38f' : '#c4704f' }}>
                  <div className="absolute top-4 start-4 bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded-full text-sm">
                    {lang === 'he' ? `יום ${item.day}` : `Day ${item.day}`}
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-3 pt-8">
                    <EditableText path={`${lang}.itinerary.${season}.days.${index}.title`} text={item.title} />
                  </h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    <EditableText path={`${lang}.itinerary.${season}.days.${index}.desc`} text={item.desc} multiline />
                  </p>

                  {item.schedule && item.schedule.length > 0 && (
                    <details className="my-6 group border border-teal-100 bg-teal-50/30 rounded-xl overflow-hidden cursor-pointer">
                      <summary className="font-medium text-teal-800 px-4 py-3 bg-teal-100/50 hover:bg-teal-200/50 transition-colors flex justify-between items-center outline-none list-none">
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {lang === 'he' ? 'לו"ז מפורט' : 'Detailed Schedule'}
                        </span>
                        <span className="text-teal-600 group-open:rotate-180 transition-transform duration-300">
                          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </span>
                      </summary>
                      <div className="overflow-x-auto bg-white/40">
                        <table className="w-full text-sm text-start">
                          <thead className="text-teal-900 border-b border-teal-100/50 bg-teal-50/50">
                            <tr>
                              <th className="px-4 py-3 font-semibold">{t.itinerary.headers?.hour || 'Hour'}</th>
                              <th className="px-4 py-3 font-semibold">{t.itinerary.headers?.place || 'Place'}</th>
                              <th className="px-4 py-3 font-semibold">{t.itinerary.headers?.activity || 'Activity'}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-teal-100/30">
                            {item.schedule.map((row, rowIdx) => (
                              <tr key={rowIdx} className="hover:bg-white/80 transition-colors">
                                <td className="px-4 py-3 whitespace-nowrap font-medium text-teal-700" dir="ltr">{row.hour}</td>
                                <td className="px-4 py-3 text-stone-600">{row.place}</td>
                                <td className="px-4 py-3 text-stone-700">{row.activity}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </details>
                  )}

                  <div className="flex items-center gap-2 font-medium justify-center md:justify-start" style={{ color: season === 'winter' ? '#798e7c' : '#c4704f' }}>
                    <Sun className="w-5 h-5" />
                    <span>{lang === 'he' ? 'היילייט: ' : 'Highlight: '} <EditableText path={`${lang}.itinerary.${season}.days.${index}.highlight`} text={item.highlight} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking CTA */}
        <div className="mt-20 text-center bg-white rounded-3xl p-8 md:p-12 shadow-md max-w-3xl mx-auto border border-stone-100">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-teal-900 mb-4">
            {lang === 'he' ? 'מוכנות לצאת למסע?' : 'Ready to start your adventure?'}
          </h3>
          <p className="text-stone-600 mb-8 max-w-lg mx-auto font-light leading-relaxed">
            {lang === 'he'
              ? 'מספר המקומות מוגבל ל-16 משתתפות בלבד כדי להבטיח יחס אישי וחוויה אינטימית. שרייני את מקומך עוד היום!'
              : 'Spots are limited to 16 participants to ensure a personal and intimate experience. Secure your spot today!'}
          </p>
          <button
            onClick={() => router.push(`/register?season=${season}`)}
            className="text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: season === 'winter' ? '#8ca38f' : '#c4704f' }}
          >
            {lang === 'he' ? 'להרשמה למסע ←' : 'Register for the Trip →'}
          </button>
        </div>
      </div>
    </div>
  );
}
