'use client';

import React from 'react';
import { Sun } from 'lucide-react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';

export default function ItineraryPage() {
  const { lang, t } = useSite();

  const dayImages = [
    'itinerary_day_0', 'itinerary_day_1', 'itinerary_day_2', 'itinerary_day_3', 'itinerary_day_4',
    'itinerary_day_5', 'itinerary_day_6', 'itinerary_day_7', 'itinerary_day_8', '10'
  ];

  return (
    <div className="pt-32 pb-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
            {t.itinerary.days.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white p-2 rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="h-64 bg-stone-200 rounded-xl overflow-hidden relative">
                       <EditableImage 
                        id={`itinerary_day_${index}`} 
                        src={dayImages[index] || '/home1.jpg'} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        width={1000}
                        crop="fill"
                       />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-start p-6 bg-white rounded-2xl shadow-md border-s-4 border-e-0 border-orange-400 relative">
                  <div className="absolute top-4 start-4 bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded-full text-sm">
                    Day {item.day}
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-3 pt-8">
                    <EditableText path={`${lang}.itinerary.days.${index}.title`} text={item.title} />
                  </h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    <EditableText path={`${lang}.itinerary.days.${index}.desc`} text={item.desc} multiline />
                  </p>

                  {item.schedule && item.schedule.length > 0 && (
                    <details className="my-6 group border border-teal-100 bg-teal-50/30 rounded-xl overflow-hidden cursor-pointer">
                      <summary className="font-medium text-teal-800 px-4 py-3 bg-teal-100/50 hover:bg-teal-200/50 transition-colors flex justify-between items-center outline-none list-none">
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          לו"ז מפורט / Detailed Schedule
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

                  <div className="flex items-center gap-2 text-orange-600 font-medium justify-center md:justify-start">
                    <Sun className="w-5 h-5" />
                    <span>Highlight: <EditableText path={`${lang}.itinerary.days.${index}.highlight`} text={item.highlight} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
