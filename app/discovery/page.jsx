'use client';

import React from 'react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';
import NoticeBoardGallery from '../../components/NoticeBoardGallery';

export default function DiscoveryPage() {
  const { lang, t } = useSite();

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-teal-900 mb-4">
            <EditableText path={`${lang}.discovery.title`} text={t.discovery.title} />
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            <EditableText path={`${lang}.discovery.subtitle`} text={t.discovery.subtitle} />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.discovery.articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <div className="h-64 bg-stone-200 overflow-hidden relative">
                 <EditableImage 
                    id={`discovery_${idx}`} 
                    src={`/disco${idx+1}.jpg`} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-teal-900 mb-3">
                  <EditableText path={`${lang}.discovery.articles.${idx}.title`} text={article.title} />
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  <EditableText path={`${lang}.discovery.articles.${idx}.text`} text={article.text} multiline />
                </p>
              </div>
            </div>
          ))}
        </div>

        <NoticeBoardGallery title={lang === 'he' ? 'קצת מהקסם שלנו' : 'A Glimpse of the Magic'} />
      </div>
    </div>
  );
}
