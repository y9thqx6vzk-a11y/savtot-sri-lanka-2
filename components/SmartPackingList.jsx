'use client';

import React, { useState } from 'react';
import { Loader2, Sparkles } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';

export default function SmartPackingList() {
  const { lang, t } = useSite();
  const [userInput, setUserInput] = useState('');
  const [generatedList, setGeneratedList] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!userInput.trim()) return;
    setIsLoading(true);
    setGeneratedList('');

    const systemPrompt = `
      You are a travel expert for 'Savtot in Sri Lanka'. 
      User Language: ${lang === 'he' ? 'Hebrew' : 'English'}.
      Create a short, bulleted packing list based on the user's description for a 10-day trip to Sri Lanka.
      Keep it creative and helpful. Output in ${lang === 'he' ? 'Hebrew' : 'English'}.
    `;
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, systemInstruction: systemPrompt }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setGeneratedList(data.reply || "Error generating content.");
    } catch (error) {
      console.error("Chat API Error:", error);
      setGeneratedList("Error communicating with AI.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-lg p-8 border border-teal-100 my-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-teal-500"></div>
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm mb-4 border border-teal-100">
           <Sparkles className="w-4 h-4 text-orange-500" />
           <span className="text-sm font-bold text-teal-800">AI Powered</span>
        </div>
        <h3 className="text-3xl font-serif font-bold text-teal-900 mb-3">{t.essentials.ai_title}</h3>
        <p className="text-stone-600 mb-6">{t.essentials.ai_desc}</p>

        <div className="flex flex-col gap-4">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={t.essentials.ai_placeholder}
            className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:outline-none min-h-[100px] text-start"
          />
          <button 
            onClick={handleGenerate}
            disabled={isLoading || !userInput}
            className="bg-teal-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-teal-800 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            {isLoading ? '...' : t.essentials.ai_btn}
          </button>
        </div>

        {generatedList && (
          <div className="mt-8 bg-white p-6 rounded-xl shadow-inner text-start border-r-4 border-orange-400 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="font-bold text-lg mb-4 text-teal-900 border-b pb-2">הרשימה שלך:</h4>
            <div className="whitespace-pre-line text-stone-700 leading-relaxed">{generatedList}</div>
          </div>
        )}
      </div>
    </div>
  );
}
