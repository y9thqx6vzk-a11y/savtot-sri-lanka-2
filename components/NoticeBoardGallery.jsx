'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const files = [
  "PXL_20250804_231312230.jpg", "PXL_20250805_061834012.jpg", "PXL_20250805_101202880.jpg",
  "PXL_20250805_101212699.jpg", "PXL_20250805_110950616.MP.jpg", "PXL_20250805_110952829.MP.jpg",
  "PXL_20250805_110954833.jpg", "PXL_20250805_112807041.jpg", "PXL_20250805_113440117.jpg",
  "PXL_20250805_131932263.jpg", "PXL_20250805_131935688.MP.jpg", "PXL_20250806_022238016.jpg",
  "PXL_20250806_043848103.jpg", "PXL_20250806_103924168.jpg", "PXL_20250806_104315164.jpg",
  "PXL_20250807_024105138.jpg", "PXL_20250807_090023481.jpg", "PXL_20250807_090039580.jpg",
  "PXL_20250807_090508332.MP.jpg", "PXL_20250807_090635657.MP.jpg", "PXL_20250807_100921999.mp4",
  "PXL_20250807_100946064.jpg", "PXL_20250807_104232959.jpg", "PXL_20250807_104328670.jpg",
  "PXL_20250812_051612407.jpg", "PXL_20250812_090458231.jpg", "PXL_20250812_091006003.jpg",
  "PXL_20250813_005516532.jpg", "PXL_20250813_005533486.jpg", "PXL_20250813_084419570.MP.jpg",
  "PXL_20250813_090005700.MP.jpg", "PXL_20250813_090011635.MP.jpg", "PXL_20250813_090910761.jpg",
  "PXL_20250813_092451170.jpg"
];

// Shuffle files statically once so it looks random but doesn't cause hydration mismatch
// A simple deterministic shuffle based on index
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

export default function NoticeBoardGallery({ title }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="mt-20">
      <div className="relative p-8 md:p-16 bg-[#e4d5b7] rounded-xl shadow-inner border-8 border-stone-300" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cork-board.png")' }}>
        
        {/* Gallery Header */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-3 shadow-md border border-stone-200 transform -rotate-2 z-20 flex items-center justify-center">
           <div className="w-3 h-3 rounded-full bg-red-500 absolute top-2 left-1/2 -translate-x-1/2 shadow-sm"></div>
           <h2 className="text-3xl font-serif text-stone-800 tracking-wide font-bold">{title || 'קצת מהקסם שלנו'}</h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6 pt-10">
          {shuffledFiles.map((file, idx) => {
            const isVideo = file.endsWith('.mp4');
            const styleClass = styles[idx % styles.length];
            const src = `/discovery-gallery/${file}`;
            
            return (
              <div 
                key={idx} 
                className={`break-inside-avoid relative group cursor-pointer ${styleClass} transition-all duration-300 hover:!rotate-0 hover:!scale-110 hover:z-50`}
                onClick={() => setLightbox(src)}
              >
                {/* Pin graphic */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-stone-700 shadow-md border border-stone-500 opacity-90"></div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-0 w-1 h-3 bg-stone-400"></div>

                {/* Polaroid styling */}
                <div className="bg-white p-2 pb-8 shadow-lg hover:shadow-2xl transition-shadow border border-stone-200 relative overflow-hidden">
                  {isVideo ? (
                    <video 
                      src={src} 
                      className="w-full h-auto object-cover bg-stone-100" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    />
                  ) : (
                    <Image 
                      src={src} 
                      alt={`Gallery item ${idx}`} 
                      width={500} 
                      height={500}
                      className="w-full h-auto object-cover bg-stone-100"
                      unoptimized={false}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-orange-400 p-2">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          {lightbox.endsWith('.mp4') ? (
            <video src={lightbox} className="max-w-full max-h-[90vh] rounded shadow-2xl" controls autoPlay />
          ) : (
            <img src={lightbox} className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl" alt="Enlarged view" />
          )}
        </div>
      )}
    </div>
  );
}
