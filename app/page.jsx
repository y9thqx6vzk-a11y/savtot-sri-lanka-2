'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Users, MapPin, Utensils, ArrowRight } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

export default function HomePage() {
  const router = useRouter();
  const { lang, t } = useSite();

  return (
    <>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EditableImage 
            id="hero_bg" 
            src="/home1.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-transparent to-transparent pointer-events-none" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16 pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg leading-tight whitespace-pre-line pointer-events-auto">
            <EditableText path={`${lang}.hero.title`} text={t.hero.title} multiline />
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 opacity-90 max-w-2xl mx-auto whitespace-pre-line pointer-events-auto">
            <EditableText path={`${lang}.hero.subtitle`} text={t.hero.subtitle} multiline />
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
            <button onClick={() => router.push('/itinerary')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30">
              {t.hero.cta_plan}
            </button>
            <button onClick={() => router.push('/discovery')} className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              {t.hero.cta_discover}
            </button>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-teal-900 mb-4">
              <EditableText path={`${lang}.features.title`} text={t.features.title} />
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Users className="w-10 h-10 text-orange-500" />, title: t.features.f1_title, desc: t.features.f1_desc },
              { icon: <MapPin className="w-10 h-10 text-orange-500" />, title: t.features.f2_title, desc: t.features.f2_desc },
              { icon: <Utensils className="w-10 h-10 text-orange-500" />, title: t.features.f3_title, desc: t.features.f3_desc },
            ].map((feature, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-stone-100 group">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-teal-800">
                  <EditableText path={`${lang}.features.f${idx + 1}_title`} text={feature.title} />
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  <EditableText path={`${lang}.features.f${idx + 1}_desc`} text={feature.desc} multiline />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-start">
            <h2 className="text-4xl font-serif font-bold mb-6">
              <EditableText path={`${lang}.gallery.title`} text={t.gallery.title} />
            </h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              <EditableText path={`${lang}.gallery.desc`} text={t.gallery.desc} multiline />
            </p>
            <button onClick={() => router.push('/register')} className="flex items-center gap-2 text-orange-400 font-bold hover:gap-4 transition-all">
              {t.gallery.cta} <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <EditableImage id="gal_1" src="/home2.jpg" alt="Gallery 1" className="rounded-2xl shadow-lg transform translate-y-8 w-full h-auto" />
             <EditableImage id="gal_2" src="/home3.jpg" alt="Gallery 2" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}
