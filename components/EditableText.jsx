'use client';

import React, { useState, useEffect } from 'react';
import { useSite } from '../contexts/SiteContext';

export default function EditableText({ path, text, multiline = false, className = '' }) {
  const { isAdmin, handleUpdateContent } = useSite();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text || '');

  useEffect(() => { setValue(text || ''); }, [text]);

  const handleSave = async (e) => {
    e.stopPropagation();
    setIsEditing(false);
    if (value !== text) {
      try {
        const response = await fetch('/api/content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path, newValue: value }),
        });
        if (response.ok) {
          handleUpdateContent(path, value);
        } else {
          alert('Failed to save text');
          setValue(text);
        }
      } catch (err) {
        alert('Error saving text');
        setValue(text);
      }
    }
  };

  if (!isAdmin) {
    return <span className={className}>{text}</span>;
  }

  if (isEditing) {
    return (
      <span className="flex flex-col gap-2 relative z-50 text-base font-sans" onClick={(e) => e.stopPropagation()}>
        {multiline ? (
          <textarea 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="text-stone-900 p-3 border-2 border-orange-500 rounded-lg min-h-[120px] w-full min-w-[300px] shadow-xl text-right"
            dir="auto"
          />
        ) : (
          <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="text-stone-900 p-2 border-2 border-orange-500 rounded-lg w-full min-w-[300px] shadow-xl text-right"
            dir="auto"
          />
        )}
        <span className="flex gap-2">
          <button onClick={handleSave} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-md text-sm font-bold">שמור</button>
          <button onClick={(e) => { e.stopPropagation(); setIsEditing(false); setValue(text); }} className="bg-stone-400 hover:bg-stone-500 text-white px-4 py-2 rounded-lg shadow-md text-sm font-bold">ביטול</button>
        </span>
      </span>
    );
  }

  return (
    <span 
      className={`cursor-pointer hover:outline-dashed hover:outline-2 hover:outline-orange-400 hover:bg-orange-50/50 relative group inline-block transition-all ${className}`}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsEditing(true); }}
      title="לחץ לעריכה"
    >
      {text}
      <span className="absolute -top-8 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 font-sans">
        ✎ ערוך טקסט
      </span>
    </span>
  );
}
