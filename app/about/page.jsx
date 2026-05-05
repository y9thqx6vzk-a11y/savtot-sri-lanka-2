'use client';

import React from 'react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';

export default function AboutPage() {
  const { lang, t } = useSite();

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-80 bg-stone-200 relative">
             <EditableImage 
                id="about_hero" 
                src="about_hero" 
                alt="Our Team"
                className="w-full h-full object-cover"
                width={1200}
                crop="fill"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <h1 className="absolute bottom-8 start-8 text-5xl font-serif font-bold text-white drop-shadow-md">
               <EditableText path={`${lang}.about.title`} text={t.about.title} />
             </h1>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-stone-700 space-y-6 leading-relaxed">
              <p><EditableText path={`${lang}.about.p1`} text={t.about.p1} multiline /></p>
              <p><EditableText path={`${lang}.about.p2`} text={t.about.p2} multiline /></p>
              <p><EditableText path={`${lang}.about.p3`} text={t.about.p3} multiline /></p>
            </div>

            <div className="mt-16 border-t pt-12 text-center">
              <h3 className="text-2xl font-bold text-teal-900 mb-8">
                {lang === 'he' ? 'הצוות שילווה אתכן' : 'Your Hosts'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-stone-200 rounded-full mb-4 overflow-hidden shadow-md">
                     <EditableImage id="team_eyal" src="team_eyal" alt="Eyal & Aliza" className="w-full h-full object-cover" width={300} height={300} crop="thumb" />
                  </div>
                  <h4 className="font-bold text-teal-800"><EditableText path={`${lang}.about.team.eyal`} text={t.about.team.eyal} /></h4>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-stone-200 rounded-full mb-4 overflow-hidden shadow-md">
                     <EditableImage id="team_naomi" src="team_naomi" alt="Naomi" className="w-full h-full object-cover" width={300} height={300} crop="thumb" />
                  </div>
                  <h4 className="font-bold text-teal-800"><EditableText path={`${lang}.about.team.naomi`} text={t.about.team.naomi} /></h4>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-stone-200 rounded-full mb-4 overflow-hidden shadow-md flex items-center justify-center bg-teal-50">
                     <span className="text-4xl">🚐</span>
                  </div>
                  <h4 className="font-bold text-teal-800"><EditableText path={`${lang}.about.team.guide`} text={t.about.team.guide} /></h4>
                </div>
              </div>

              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                <h4 className="text-xl font-bold text-teal-900 mb-4">{lang === 'he' ? 'צרו קשר' : 'Contact Us'}</h4>
                <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-orange-600">Eyal:</span>
                    <a href="tel:+972540000000" className="hover:text-orange-500">+972 54...</a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-orange-600">Naomi:</span>
                    <a href="tel:+972540000000" className="hover:text-orange-500">+972 54...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
