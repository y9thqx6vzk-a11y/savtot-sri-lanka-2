'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { getCloudinaryUrl } from '../lib/cloudinary';

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

// Deterministic pseudo-shuffle
const shuffledFiles = [...files].sort((a, b) => {
  const hashA = a.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const hashB = b.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return (hashA % 7) - (hashB % 7);
});

// Subtle organic size variations for masonry interest
const sizeVariants = [
  'row-span-1', 'row-span-2', 'row-span-1', 'row-span-1',
  'row-span-2', 'row-span-1', 'row-span-1', 'row-span-2',
];

export default function NoticeBoardGallery({ lang }) {
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const openLightbox = useCallback((src, idx) => {
    setLightbox(src);
    setLightboxIdx(idx);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setLightboxIdx(null);
  }, []);

  const navigate = useCallback((dir) => {
    const next = (lightboxIdx + dir + shuffledFiles.length) % shuffledFiles.length;
    const file = shuffledFiles[next];
    const src = getCloudinaryUrl(`/discovery-gallery/${file}`);
    setLightbox(src);
    setLightboxIdx(next);
  }, [lightboxIdx]);

  return (
    <div>
      {/* ——— Section label ——— */}
      <div className="flex items-center gap-6 mb-10">
        <div className="h-px flex-1 bg-stone-200" />
        <span className="text-[11px] uppercase tracking-[0.35em] text-stone-400 font-light whitespace-nowrap">
          {lang === 'he' ? 'הגלריה שלנו' : 'Our Gallery'}
        </span>
        <div className="h-px flex-1 bg-stone-200" />
      </div>

      {/* ——— Masonry Grid ——— */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
        {shuffledFiles.map((file, idx) => {
          const isVideo = file.endsWith('.mp4');
          const src = getCloudinaryUrl(`/discovery-gallery/${file}`);
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={idx}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden"
              style={{
                borderRadius: '2px',
                backgroundColor: '#ede8e0',
              }}
              onClick={() => openLightbox(src, idx)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Image / Video */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: idx % 5 === 0 ? '3/4' : idx % 3 === 0 ? '4/5' : '2/3' }}>
                {isVideo ? (
                  <video
                    src={src}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    style={{ transform: isHovered ? 'scale(1.04)' : 'scale(1)' }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={`Sri Lanka ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out"
                    style={{ transform: isHovered ? 'scale(1.04)' : 'scale(1)' }}
                    loading="lazy"
                  />
                )}

                {/* Hover overlay: minimal cream fade from bottom */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(250,247,242,0.5) 0%, transparent 50%)',
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Play icon for videos */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center backdrop-blur-sm opacity-80">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#2c2c2c">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ——— Footer note ——— */}
      <div className="mt-16 text-center">
        <p className="text-xs text-stone-400 tracking-widest uppercase font-light">
          {lang === 'he' ? 'כל התמונות צולמו בסרי לנקה · קיץ 2025' : 'All photos taken in Sri Lanka · Summer 2025'}
        </p>
      </div>

      {/* ——— Lightbox ——— */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(44, 44, 44, 0.96)', backdropFilter: 'blur(8px)' }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Media */}
          <div className="relative max-w-5xl max-h-[88vh] px-16" onClick={(e) => e.stopPropagation()}>
            {lightbox.endsWith('.mp4') ? (
              <video
                src={lightbox}
                className="max-w-full max-h-[88vh] object-contain"
                style={{ borderRadius: '2px' }}
                controls
                autoPlay
              />
            ) : (
              <img
                src={lightbox}
                className="max-w-full max-h-[88vh] object-contain"
                style={{ borderRadius: '2px' }}
                alt="Gallery view"
              />
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-[11px] tracking-widest uppercase">
              {lightboxIdx + 1} / {shuffledFiles.length}
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Next"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
