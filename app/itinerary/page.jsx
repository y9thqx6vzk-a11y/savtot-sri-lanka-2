'use client';

import React from 'react';
import { Sun } from 'lucide-react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';

export default function ItineraryPage() {
  const { lang, t } = useSite();

  const dayImages = [
    '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/8.jpg', '/9.jpg', '/10.jpg', '/arugam.jpg'
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
                       />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-start p-6 bg-white rounded-2xl shadow-md border-r-4 border-l-0 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-r-0 border-orange-400 relative">
                  <div className="absolute top-4 start-4 bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded-full text-sm">
                    Day {item.day}
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-3 pt-8">
                    <EditableText path={`${lang}.itinerary.days.${index}.title`} text={item.title} />
                  </h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    <EditableText path={`${lang}.itinerary.days.${index}.desc`} text={item.desc} multiline />
                  </p>
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
