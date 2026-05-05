'use client';

import React from 'react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';

export default function EssentialsPage() {
  const { lang, t } = useSite();

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-teal-900 mb-4">
            <EditableText path={`${lang}.essentials.title`} text={t.essentials.title} />
          </h1>
          <p className="text-xl text-stone-600">
            <EditableText path={`${lang}.essentials.subtitle`} text={t.essentials.subtitle} />
          </p>
        </div>

        <div className="space-y-6">
          {t.essentials.categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">
                <EditableText path={`${lang}.essentials.categories.${idx}.title`} text={cat.title} />
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                    <span className="text-stone-700">
                      <EditableText path={`${lang}.essentials.categories.${idx}.items.${i}`} text={item} multiline />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
