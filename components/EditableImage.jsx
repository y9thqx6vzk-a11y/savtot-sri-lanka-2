'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Upload, Loader } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';
import { getCloudinaryUrl } from '../lib/cloudinary';

export default function EditableImage({ id, src, fallback, alt, className, width, height, crop, imgClassName }) {
  const { isAdmin } = useSite();

  // Resolve to Cloudinary URL on first render
  const finalSrc = getCloudinaryUrl(src, { width, height, crop });
  const [imgSrc, setImgSrc] = useState(finalSrc);
  const [hasError, setHasError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview immediately with local blob
    const blobUrl = URL.createObjectURL(file);
    setImgSrc(blobUrl);
    setHasError(false);
    setIsUploading(true);
    setUploadSuccess(false);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('id', id);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      if (data.imageUrl) {
        // Use the permanent Cloudinary URL
        setImgSrc(data.imageUrl);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      // Keep local preview but warn admin
      alert('⚠️ שגיאה בשמירה לשרת. בדוק את הגדרות Cloudinary.');
    } finally {
      setIsUploading(false);
    }
  };

  const fallbackSrc = getCloudinaryUrl(fallback || '/home1.webp');

  return (
    <div className={`relative group overflow-hidden rounded-2xl h-full ${isAdmin ? 'cursor-pointer' : ''} ${className}`}>
      <Image
        src={hasError ? fallbackSrc : imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover ${imgClassName || ''}`}
        onError={() => {
          if (!hasError) setHasError(true);
        }}
        unoptimized={imgSrc.startsWith('blob:')}
      />

      {/* Admin overlay */}
      {isAdmin && (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 z-10">
          {isUploading ? (
            <>
              <Loader className="text-white w-8 h-8 mb-2 animate-spin" />
              <span className="text-white text-sm font-bold bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                מעלה...
              </span>
            </>
          ) : uploadSuccess ? (
            <>
              <span className="text-3xl mb-1">✅</span>
              <span className="text-white text-sm font-bold bg-green-500/60 px-3 py-1 rounded-full backdrop-blur-sm">
                נשמר בענן!
              </span>
            </>
          ) : (
            <>
              <Upload className="text-white w-8 h-8 mb-2" />
              <span className="text-white text-sm font-bold bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                החלף תמונה
              </span>
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                onChange={handleFileChange}
                accept="image/*"
                title="לחץ להחלפת תמונה"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
