'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { defaultContentData } from "../lib/defaultContent";
export { defaultContentData };

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [siteContent, setSiteContent] = useState(defaultContentData);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('/api/content', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => setSiteContent(data))
      .catch(e => console.error('Failed to load content:', e));
      
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  const handleUpdateContent = useCallback((path, newValue) => {
    setSiteContent(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = newValue;
      return newData;
    });
  }, []);

  const t = useMemo(() => {
    const base = defaultContentData[lang] || defaultContentData.he;
    const live = siteContent?.[lang];
    
    if (!live) return base;
    
    return {
      ...base,
      ...live,
      nav: { ...base.nav, ...live.nav },
      hero: { ...base.hero, ...live.hero },
      features: { ...base.features, ...live.features },
      gallery: { ...base.gallery, ...live.gallery },
      itinerary: { 
        ...base.itinerary, 
        ...live.itinerary,
        summer: { ...base.itinerary.summer, ...live.itinerary?.summer },
        winter: { ...base.itinerary.winter, ...live.itinerary?.winter }
      },
      essentials: { ...base.essentials, ...live.essentials },
      discovery: { ...base.discovery, ...live.discovery },
      about: { ...base.about, ...live.about },
      register: { ...base.register, ...live.register }
    };
  }, [siteContent, lang]);

  const toggleLanguage = useCallback(() => {
    setLang(prev => prev === 'he' ? 'en' : 'he');
  }, []);

  useEffect(() => {
    document.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <SiteContext.Provider value={{ lang, t, toggleLanguage, handleUpdateContent, isAdmin, setIsAdmin }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
