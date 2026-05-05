'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';

export default function RegisterPage() {
  const { lang, t } = useSite();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', guests: '1', notes: '', website_url: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', guests: '1', notes: '', website_url: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="w-full md:w-5/12 bg-teal-900 text-teal-50 p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-4">
                <EditableText path={`${lang}.register.title`} text={t.register.title} />
              </h2>
              <p className="text-teal-200 text-lg mb-8">
                <EditableText path={`${lang}.register.subtitle`} text={t.register.subtitle} />
              </p>
              
              <div className="space-y-4 mb-12">
                {t.register.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="font-medium">
                      <EditableText path={`${lang}.register.details.${idx}`} text={detail} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700/50">
              <p className="font-bold mb-2"><EditableText path={`${lang}.register.contact_wa`} text={t.register.contact_wa} /></p>
              
              <div className="flex flex-col gap-4 mb-6">
                <div>
                  <p className="text-sm text-teal-200 mb-1">Eyal</p>
                  <a href="https://wa.me/972543510664" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-orange-400 transition-colors flex items-center gap-2" dir="ltr">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12.031 0C5.394 0 0 5.385 0 12.016c0 2.115.548 4.184 1.594 6.008L.027 24l6.126-1.603A12.016 12.016 0 0012.031 24c6.635 0 12.031-5.385 12.031-12.016S18.667 0 12.031 0zm3.834 17.202c-.161.455-.93.882-1.332.966-.403.084-.897.136-2.585-.563-2.037-.84-3.344-2.91-3.444-3.047-.1-.137-1.096-1.464-1.127-2.977-.03-1.512.723-2.257.994-2.56.27-.302.588-.377.785-.377.197 0 .394.004.568.013.184.01.428-.066.65.467.229.549.785 1.916.854 2.054.07.138.116.299.016.498-.098.197-.148.32-.295.49-.148.169-.313.364-.446.49-.148.148-.306.313-.135.611.171.298.761 1.261 1.636 2.04.1.09.206.183.322.281.821.688 1.76 1.05 2.023 1.185.263.136.417.112.573-.064.156-.176.669-.78.85-1.047.18-.268.36-.223.599-.133.24.089 1.516.714 1.776.844.259.13.433.195.496.302.064.108.064.629-.098 1.084z" />
                    </svg>
                    +972-54-351-0664
                  </a>
                </div>
                <div>
                  <p className="text-sm text-teal-200 mb-1">Naomi</p>
                  <a href="https://wa.me/972546639597" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-orange-400 transition-colors flex items-center gap-2" dir="ltr">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12.031 0C5.394 0 0 5.385 0 12.016c0 2.115.548 4.184 1.594 6.008L.027 24l6.126-1.603A12.016 12.016 0 0012.031 24c6.635 0 12.031-5.385 12.031-12.016S18.667 0 12.031 0zm3.834 17.202c-.161.455-.93.882-1.332.966-.403.084-.897.136-2.585-.563-2.037-.84-3.344-2.91-3.444-3.047-.1-.137-1.096-1.464-1.127-2.977-.03-1.512.723-2.257.994-2.56.27-.302.588-.377.785-.377.197 0 .394.004.568.013.184.01.428-.066.65.467.229.549.785 1.916.854 2.054.07.138.116.299.016.498-.098.197-.148.32-.295.49-.148.169-.313.364-.446.49-.148.148-.306.313-.135.611.171.298.761 1.261 1.636 2.04.1.09.206.183.322.281.821.688 1.76 1.05 2.023 1.185.263.136.417.112.573-.064.156-.176.669-.78.85-1.047.18-.268.36-.223.599-.133.24.089 1.516.714 1.776.844.259.13.433.195.496.302.064.108.064.629-.098 1.084z" />
                    </svg>
                    +972-54-663-9597
                  </a>
                </div>
              </div>
              
              <p className="font-bold mb-2"><EditableText path={`${lang}.register.contact_email`} text={t.register.contact_email} /></p>
              <a href="mailto:savtotinsrilanka@gmail.com" className="text-lg text-white hover:text-orange-400 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                savtotinsrilanka@gmail.com
              </a>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-10 md:p-14">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-teal-900"><EditableText path={`${lang}.register.form.success_title`} text={t.register.form.success_title} /></h3>
                <p className="text-stone-600"><EditableText path={`${lang}.register.form.success_desc`} text={t.register.form.success_desc} /></p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-orange-500 font-bold hover:underline">
                  <EditableText path={`${lang}.register.form.success_btn`} text={t.register.form.success_btn} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website_url">Website URL</label>
                  <input type="text" id="website_url" name="website_url" tabIndex="-1" autoComplete="off" value={formData.website_url} onChange={e => setFormData({...formData, website_url: e.target.value})} />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.name} *</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.phone} *</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.email} *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50" dir="ltr" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.guests}</label>
                  <select value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50">
                    {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.notes}</label>
                  <textarea value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50 min-h-[120px]"></textarea>
                </div>

                {status === 'error' && <p className="text-red-500 font-medium"><EditableText path={`${lang}.register.form.error`} text={t.register.form.error} /></p>}

                <button disabled={status === 'submitting'} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70">
                  {status === 'submitting' ? t.register.form.submitting : <>{t.register.form.submit} <Send className={`w-5 h-5 ${lang === 'he' ? 'rotate-180' : ''}`} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
