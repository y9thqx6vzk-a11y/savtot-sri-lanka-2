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
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EditableImage
            id="hero_bg"
            src="hero_bg"
            alt="Hero Background"
            className="w-full h-full object-cover"
            width={1920}
            crop="fill"
          />
          <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16 pointer-events-none">
          <p className="text-sm uppercase tracking-[0.4em] mb-4 opacity-80 font-medium">
            {lang === 'he' ? 'חוויה של פעם בחיים' : 'The trip of a lifetime'}
          </p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 drop-shadow-lg leading-tight whitespace-pre-line pointer-events-auto relative">
            <EditableText path={`${lang}.hero.title`} text={t.hero.title} multiline />
            <span className="absolute -top-10 -right-10 text-orange-500 text-6xl opacity-40 select-none hidden md:block">🍃</span>
          </h1>
          <p className="text-lg md:text-2xl font-light mb-10 opacity-90 max-w-2xl mx-auto pointer-events-auto leading-relaxed">
            <EditableText path={`${lang}.hero.subtitle`} text={t.hero.subtitle} multiline />
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
            <button
              onClick={() => router.push('/itinerary')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30"
            >
              {t.hero.cta_plan}
            </button>
            <button
              onClick={() => router.push('/discovery')}
              className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              {t.hero.cta_discover}
            </button>
          </div>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-teal-900 mb-4">
              <EditableText path={`${lang}.features.title`} text={t.features.title} />
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Order: Kosher → Authentic → Wellness */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Utensils className="w-10 h-10 text-orange-500" />, title: t.features.f3_title, desc: t.features.f3_desc, key: 'f3' },
              { icon: <MapPin   className="w-10 h-10 text-orange-500" />, title: t.features.f2_title, desc: t.features.f2_desc, key: 'f2' },
              { icon: <Users    className="w-10 h-10 text-orange-500" />, title: t.features.f1_title, desc: t.features.f1_desc, key: 'f1' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-stone-100 group">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-teal-800">
                  <EditableText path={`${lang}.features.${feature.key}_title`} text={feature.title} />
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  <EditableText path={`${lang}.features.${feature.key}_desc`} text={feature.desc} multiline />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery / CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-teal-900 mb-6">
                <EditableText path={`${lang}.gallery.title`} text={t.gallery.title} />
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                <EditableText path={`${lang}.gallery.desc`} text={t.gallery.desc} multiline />
              </p>
              <button
                onClick={() => router.push('/register')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
              >
                {t.gallery.cta}
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <EditableImage id="gal_1" src="gal_1" alt="Gallery 1" className="rounded-2xl shadow-lg transform translate-y-8 w-full h-auto" width={800} crop="fill" />
              <EditableImage id="gal_2" src="gal_2" alt="Gallery 2" className="rounded-2xl shadow-lg w-full h-auto" width={800} crop="fill" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}
