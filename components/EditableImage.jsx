'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Upload } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';

export default function EditableImage({ id, src, alt, className }) {
  const { isAdmin } = useSite();
  // Ensure we use the new .webp extension for local defaults
  const webpSrc = src.replace(/\.jpg$/i, '.webp').replace(/\.jpeg$/i, '.webp');
  
  // Start with the passed src (converted to webp) since uploads are offline
  const [imgSrc, setImgSrc] = useState(webpSrc);
  const [hasError, setHasError] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('image', file);
      formData.append('id', id);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) throw new Error("Upload failed");
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to save image to server.");
      }
    }
  };

  return (
    <div className={`relative group overflow-hidden rounded-2xl h-full ${isAdmin ? 'cursor-pointer' : ''} ${className}`}>
      <Image 
        src={hasError ? '/home1.webp' : imgSrc} 
        alt={alt} 
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover" 
        onError={() => {
          if (!hasError) setHasError(true);
        }}
        unoptimized={false}
      />
      
      {isAdmin && (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 z-10">
          <Upload className="text-white w-8 h-8 mb-2" />
          <span className="text-white text-sm font-bold bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">החלף תמונה</span>
          <input 
            type="file" 
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" 
            onChange={handleFileChange} 
            accept="image/*" 
            title="לחץ להחלפת תמונה"
          />
        </div>
      )}
    </div>
  );
}
