'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const files = [
  "PXL_20250804_231312230.webp", "PXL_20250805_061834012.webp", "PXL_20250805_101202880.webp",
  "PXL_20250805_101212699.webp", "PXL_20250805_110950616.MP.webp", "PXL_20250805_110952829.MP.webp",
  "PXL_20250805_110954833.webp", "PXL_20250805_112807041.webp", "PXL_20250805_113440117.webp",
  "PXL_20250805_131932263.webp", "PXL_20250805_131935688.MP.webp", "PXL_20250806_022238016.webp",
  "PXL_20250806_043848103.webp", "PXL_20250806_103924168.webp", "PXL_20250806_104315164.webp",
  "PXL_20250807_024105138.webp", "PXL_20250807_090023481.webp", "PXL_20250807_090039580.webp",
  "PXL_20250807_090508332.MP.webp", "PXL_20250807_090635657.MP.webp", "PXL_20250807_100921999.mp4",
  "PXL_20250807_100946064.webp", "PXL_20250807_104232959.webp", "PXL_20250807_104328670.webp",
  "PXL_20250812_051612407.webp", "PXL_20250812_090458231.webp", "PXL_20250812_091006003.webp",
  "PXL_20250813_005516532.webp", "PXL_20250813_005533486.webp", "PXL_20250813_084419570.MP.webp",
  "PXL_20250813_090005700.MP.webp", "PXL_20250813_090011635.MP.webp", "PXL_20250813_090910761.webp",
  "PXL_20250813_092451170.webp"
];

// Shuffle files statically once so it looks random but doesn't cause hydration mismatch
const shuffledFiles = [...files].sort((a, b) => {
  const hashA = a.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hashB = b.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return (hashA % 10) - (hashB % 10);
});

// A set of messy rotations and slight translations
const styles = [
  '-rotate-3 translate-y-2',
  'rotate-2 translate-y-0',
  '-rotate-1 -translate-y-2',
  'rotate-4 translate-y-3',
  '-rotate-2 -translate-y-1',
  'rotate-1 translate-y-2',
  '-rotate-4 translate-y-1',
  'rotate-3 -translate-y-2'
];

const posterTitles = [
  "SRI LANKA LIVE", "SAVTOT ON TOUR", "SIGIRIYA SESSIONS", "ARUGAM BAY VIBES",
  "TEA COUNTRY TOUR", "WILDLIFE UNPLUGGED", "SUNSET DANCE", "ISLAND SOUL",
  "TROPICAL BEAT", "CEYLON DREAMS", "COASTAL RHYTHM", "NATURE REVELATION"
];

const colors = [
  "border-orange-500 text-orange-500", 
  "border-teal-400 text-teal-400", 
  "border-rose-500 text-rose-500", 
  "border-yellow-400 text-yellow-400", 
  "border-blue-400 text-blue-400"
];

export default function NoticeBoardGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="mt-10">
      <div className="relative p-4 md:p-12 bg-stone-950 rounded-3xl overflow-hidden border-4 border-stone-800 shadow-2xl" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }}>
        
        {/* Spray paint effect background */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-600/10 blur-[100px] rounded-full"></div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-12 pt-10 px-4">
          {shuffledFiles.map((file, idx) => {
            const isVideo = file.endsWith('.mp4');
            const styleClass = styles[idx % styles.length];
            const src = `/discovery-gallery/${file}`;
            const title = posterTitles[idx % posterTitles.length];
            const colorClass = colors[idx % colors.length];
            const date = `AUG ${10 + (idx % 20)} | 2025`;
            
            return (
              <div 
                key={idx} 
                className={`break-inside-avoid relative group cursor-pointer ${styleClass} transition-all duration-500 hover:!rotate-0 hover:!scale-105 hover:z-50`}
                onClick={() => setLightbox(src)}
              >
                {/* Poster Frame */}
                <div className={`bg-stone-900 border-4 ${colorClass.split(' ')[0]} p-1 shadow-[10px_10px_0px_rgba(0,0,0,0.5)] relative group-hover:shadow-[15px_15px_0px_rgba(0,0,0,0.6)] transition-all`}>
                  
                  {/* Poster Header */}
                  <div className={`text-center py-2 border-b-2 ${colorClass.split(' ')[0]} bg-stone-950`}>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">Presented by Savtot</span>
                  </div>

                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-800">
                    {isVideo ? (
                      <video 
                        src={src} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        preload="none"
                      />
                    ) : (
                      <Image 
                        src={src} 
                        alt={title} 
                        width={600} 
                        height={800}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                      />
                    )}
                    {/* Gritty overlay */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')]"></div>
                  </div>

                  {/* Poster Info */}
                  <div className="p-4 bg-stone-950 text-center space-y-1">
                    <h3 className={`text-xl font-black uppercase tracking-tighter leading-none ${colorClass.split(' ')[1]}`}>
                      {title}
                    </h3>
                    <div className="flex justify-between items-center pt-2 opacity-60 text-[10px] font-mono">
                      <span>{date}</span>
                      <span>SRI LANKA</span>
                    </div>
                  </div>

                  {/* "Torn" effect corner */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-stone-950 rotate-45 border-l-2 border-stone-800"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-orange-400 p-2 transition-colors">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          {lightbox.endsWith('.mp4') ? (
            <video src={lightbox} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border-4 border-stone-700" controls autoPlay />
          ) : (
            <img src={lightbox} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border-4 border-stone-700" alt="Enlarged view" />
          )}
        </div>
      )}
    </div>
  );
}
