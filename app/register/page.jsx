"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send } from 'lucide-react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';
import TravelAgreement from '../../components/Agreements/TravelAgreement';
import ItineraryAppendix from '../../components/Agreements/ItineraryAppendix';
import AccommodationRates from '../../components/Agreements/AccommodationRates';
import MedicalWaiver from '../../components/Agreements/MedicalWaiver';

function RegisterFormContent() {
  const { lang, t } = useSite();
  const searchParams = useSearchParams();
  const querySeason = searchParams.get('season') === 'winter' ? 'winter' : 'summer';

  const [step, setStep] = useState(1);
  const [customStatus, setCustomStatus] = useState('idle'); // idle | submitting | error

  // Step 1 State
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    guests: '1', 
    notes: '', 
    website_url: '',
    season: querySeason
  });
  
  // Step 2 State
  const [agreements, setAgreements] = useState({ sectionA: false, sectionB: false, sectionC: false });
  const [digitalSignature, setDigitalSignature] = useState({ 
    fullName: '', 
    idNumber: '',
    date: new Date().toISOString().split('T')[0],
    emergencyName: '',
    emergencyPhone: ''
  });

  // Step 3 State
  const [paymentFile, setPaymentFile] = useState(null);
  const [isUploadingPayment, setIsUploadingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  const isSubmitting = customStatus === 'submitting';
  const hasError = customStatus === 'error';

  const allChecked = agreements.sectionA && agreements.sectionB && agreements.sectionC;
  const isFilled = digitalSignature.fullName.trim() !== '' && 
                   digitalSignature.idNumber.trim() !== '' &&
                   digitalSignature.emergencyName.trim() !== '' &&
                   digitalSignature.emergencyPhone.trim() !== '';
  const canProceedStep2 = allChecked && isFilled;

  // Handlers
  const handleStep1Submit = async (e) => {
    e.preventDefault();
    if (formData.website_url) {
      setStep(2); // Bot honeypot
      return;
    }
    
    setCustomStatus('submitting');
    
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          name: formData.name, 
          phone: formData.phone,
          guests: formData.guests,
          notes: formData.notes,
          season: formData.season,
          lang 
        })
      });
      
      if (!response.ok) {
        throw new Error("Email dispatch failed.");
      }
      
      setCustomStatus('idle');
      setStep(2);
    } catch (err) {
      console.error(err);
      setCustomStatus('error');
    }
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (canProceedStep2) {
      setStep(3);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPaymentError('');
    if (!file) return;

    // Validate size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setPaymentError(lang === 'he' ? 'גודל הקובץ עולה על 5MB. אנא בחרו קובץ קטן יותר.' : 'File size exceeds 5MB. Please choose a smaller file.');
      return;
    }

    // Validate type
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      setPaymentError(lang === 'he' ? 'פורמט לא נתמך. אנא העלו קובץ PDF או תמונה (PNG, JPG).' : 'Unsupported format. Please upload a PDF or image (PNG, JPG).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setPaymentFile({
        name: file.name,
        type: file.type,
        size: file.size,
        base64: event.target.result.split(',')[1]
      });
    };
    reader.onerror = () => {
      setPaymentError(lang === 'he' ? 'שגיאה בקריאת הקובץ.' : 'Error reading file.');
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    setPaymentFile(null);
    setPaymentError('');
  };

  const handleStep3Submit = async () => {
    if (paymentFile) {
      setIsUploadingPayment(true);
      setPaymentError('');
      try {
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'payment',
            email: formData.email,
            name: formData.name,
            phone: formData.phone,
            season: formData.season,
            file: {
              name: paymentFile.name,
              type: paymentFile.type,
              base64: paymentFile.base64
            },
            lang
          })
        });

        if (!response.ok) {
          throw new Error('Failed to send payment reference email');
        }

        setIsUploadingPayment(false);
        setStep(4);
      } catch (err) {
        console.error(err);
        setPaymentError(lang === 'he' ? 'שגיאה בשליחת האסמכתא. אנא נסו שנית.' : 'Failed to send payment reference. Please try again.');
        setIsUploadingPayment(false);
      }
    } else {
      // Proceed directly if no file is attached (optional)
      setStep(4);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Progress Bar */}
        {step < 4 && (
          <div className="mb-8 flex items-center justify-center space-x-4 space-x-reverse" dir={lang === 'he' ? 'rtl' : 'ltr'}>
            {[1, 2, 3].map(num => (
              <div key={num} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all ${step >= num ? 'bg-teal-600 text-white' : 'bg-stone-300 text-stone-600'}`}>
                  {num}
                </div>
                {num < 3 && <div className={`w-12 h-1 ${step > num ? 'bg-teal-600' : 'bg-stone-300'}`}></div>}
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Panel (Contact Info) */}
          <div className="w-full md:w-5/12 bg-teal-900 text-teal-50 p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-4">
                <EditableText path={`${lang}.register.title`} text={t.register.title} />
              </h2>
              <p className="text-teal-200 text-lg mb-8">
                <EditableText path={`${lang}.register.subtitle`} text={t.register.subtitle} />
              </p>
              
              {/* Price & Deposit Card */}
              <div className="bg-teal-800/40 border border-teal-700/60 rounded-2xl p-5 mb-8 space-y-4 text-sm text-start" dir={lang === 'he' ? 'rtl' : 'ltr'}>
                <div>
                  <span className="text-xs uppercase tracking-wider text-teal-300 font-bold block mb-1">
                    {lang === 'he' ? 'עלות המסע' : 'Trip Price'}
                  </span>
                  <div className="text-2xl font-bold text-white">
                    {lang === 'he' ? '8,000 ₪*' : '8,000 ILS*'}
                  </div>
                  <div className="text-teal-200 text-xs mt-0.5">
                    {lang === 'he' ? 'מחיר מבצע (Intro Price) | לאדם בחדר זוגי' : 'Intro Price | Per person in a double room'}
                  </div>
                </div>

                {/* Payment Timeline */}
                <div className="pt-2 border-t border-teal-700/40 space-y-3">
                  <span className="text-xs uppercase tracking-wider text-teal-300 font-bold block">
                    {lang === 'he' ? 'לוח תשלומים' : 'Payment Schedule'}
                  </span>

                  {/* Step 1 */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-400/90 flex items-center justify-center text-white text-xs font-bold mt-0.5">1</div>
                    <div>
                      <div className="text-white font-semibold">
                        {lang === 'he' ? 'מקדמה להבטחת מקום – 1,000 ₪' : 'Deposit to Secure Your Spot – 1,000 ILS'}
                      </div>
                      <div className="text-teal-200 text-xs mt-0.5 leading-relaxed">
                        {lang === 'he'
                          ? 'זהו הסכום היחיד שמשולם כעת. המקדמה מבטיחה את מקומך במסע ואינה ניתנת להחזר.'
                          : 'This is the only payment required at this stage. The deposit secures your spot and is non-refundable.'}
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/70 flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
                    <div>
                      <div className="text-white font-semibold">
                        {lang === 'he' ? 'השלמת התשלום – כחודש/חודשיים לפני הטיול' : 'Final Payment – 1–2 Months Before Departure'}
                      </div>
                      <div className="text-teal-200 text-xs mt-0.5 leading-relaxed">
                        {lang === 'he'
                          ? 'ניצור קשר אישית עם כל משתתפת להסדרת יתרת התשלום (7,000 ₪) בהתאם לשער הדולר במועד החיוב.'
                          : 'We will reach out personally to each participant to arrange the remaining balance (7,000 ILS), adjusted per the USD exchange rate at time of billing.'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-teal-700/40 space-y-2">
                  <div className="font-semibold text-white text-xs">
                    {lang === 'he' ? 'המחיר כולל:' : 'Price Includes:'}
                  </div>
                  <ul className="list-disc list-inside text-xs text-teal-100 space-y-1 opacity-90">
                    <li>{lang === 'he' ? '3 ארוחות' : '2 meals a day + Lunch Box'}</li>
                    <li>{lang === 'he' ? 'פעילויות' : 'Activities'}</li>
                    <li>{lang === 'he' ? 'תחבורה' : 'Transport'}</li>
                    <li>{lang === 'he' ? 'לינה במלונות 4-5 כוכבים' : 'Accommodation in 4-5 star hotels'}</li>
                  </ul>
                </div>

                <div className="text-[11px] text-teal-300 leading-normal space-y-1 opacity-80 pt-2 border-t border-teal-700/40">
                  <p>{lang === 'he' ? '* המחיר עשוי לרדת או לעלות בהתאם לשינויים בשער הדולר.' : '* Price may vary depending on the USD exchange rate.'}</p>
                  <p>{lang === 'he' ? '* המחיר אינו כולל טיסות, ויזה וביטוח.' : '* Price does not include flights, visa, and insurance.'}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
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
              <a href="mailto:srilankasavtot@gmail.com" className="text-lg text-white hover:text-orange-400 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                srilankasavtot@gmail.com
              </a>
            </div>
          </div>

          {/* Right Panel (Dynamic Content based on Step) */}
          <div className="w-full md:w-7/12 p-10 md:p-14">
            
            {/* STEP 1: Original Form */}
            {step === 1 && (
              <form onSubmit={handleStep1Submit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">
                  {lang === 'he' ? 'בקשת הרשמה' : 'Registration Request'}
                </h3>
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website_url">Website URL</label>
                  <input type="text" id="website_url" name="website_url" tabIndex="-1" autoComplete="off" value={formData.website_url} onChange={e => setFormData({...formData, website_url: e.target.value})} />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.name} *</label>
                  <input required name="name" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.phone} *</label>
                    <input required name="phone" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.email} *</label>
                    <input required name="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50" dir="ltr" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">
                      {lang === 'he' ? 'עונת הטיול *' : 'Trip Season *'}
                    </label>
                    <select 
                      name="season" 
                      value={formData.season} 
                      onChange={e => setFormData({...formData, season: e.target.value})} 
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50 cursor-pointer"
                    >
                      <option value="summer">{lang === 'he' ? 'קיץ 2027' : 'Summer 2027'}</option>
                      <option value="winter">{lang === 'he' ? 'חורף (פברואר) 2027' : 'Winter (February) 2027'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.guests}</label>
                    <select name="guests" value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50 cursor-pointer">
                      {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-teal-900 mb-2">{t.register.form.notes}</label>
                  <textarea name="notes" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-stone-50 min-h-[120px]"></textarea>
                </div>

                {hasError && <p className="text-red-500 font-medium"><EditableText path={`${lang}.register.form.error`} text={t.register.form.error} /></p>}

                <button disabled={isSubmitting} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70 mt-4 cursor-pointer">
                  {isSubmitting ? t.register.form.submitting : <>{t.register.form.submit} <Send className={`w-5 h-5 ${lang === 'he' ? 'rotate-180' : ''}`} /></>}
                </button>
              </form>
            )}

            {/* STEP 2: Terms and Signatures */}
            {step === 2 && (
              <form onSubmit={handleStep2Submit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-teal-900 mb-2">
                    {lang === 'he' ? 'תנאי הרשמה והצהרת בריאות' : 'Registration Terms & Health Declaration'}
                  </h3>
                  <p className="text-stone-600">
                    {lang === 'he' ? 'אנא קראו וסמנו אישור לכל הסעיפים מטה:' : 'Please read and agree to all sections below:'}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-teal-800">{lang === 'he' ? 'תנאי התקשרות וביטולים' : 'Terms & Cancellation Policy'}</h4>
                  <div className="h-64 overflow-y-auto bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm text-stone-700 shadow-inner">
                    <TravelAgreement />
                    <hr className="my-6 border-stone-300" />
                    <AccommodationRates />
                  </div>
                  <label htmlFor="sectionA" className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" id="sectionA" className="w-5 h-5 mt-1 rounded border-stone-300 text-teal-600 focus:ring-teal-500 cursor-pointer" checked={agreements.sectionA} onChange={(e) => setAgreements({...agreements, sectionA: e.target.checked})} />
                    <span className="text-stone-800 font-medium group-hover:text-teal-700">
                      {lang === 'he' ? 'קראתי ואני מסכים/ה לתנאי ההתקשרות והביטולים.' : 'I have read and agree to the terms and cancellation policy.'}
                    </span>
                  </label>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-teal-800">{lang === 'he' ? 'שקיפות אופרטיבית (נספח מסלול)' : 'Operational Transparency (Itinerary)'}</h4>
                  <div className="h-64 overflow-y-auto bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm text-stone-700 shadow-inner">
                    <ItineraryAppendix season={formData.season} />
                  </div>
                  <label htmlFor="sectionB" className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" id="sectionB" className="w-5 h-5 mt-1 rounded border-stone-300 text-teal-600 focus:ring-teal-500 cursor-pointer" checked={agreements.sectionB} onChange={(e) => setAgreements({...agreements, sectionB: e.target.checked})} />
                    <span className="text-stone-800 font-medium group-hover:text-teal-700">
                      {lang === 'he' ? 'קראתי ואני מסכים/ה לפרטי השקיפות האופרטיבית.' : 'I have read and agree to the operational transparency details.'}
                    </span>
                  </label>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-teal-800">{lang === 'he' ? 'נספח א\' - כתב ויתור והצהרת בריאות' : 'Appendix A - Health Declaration'}</h4>
                  <div className="h-64 overflow-y-auto bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm text-stone-700 shadow-inner">
                    <MedicalWaiver />
                  </div>
                  <label htmlFor="sectionC" className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" id="sectionC" className="w-5 h-5 mt-1 rounded border-stone-300 text-teal-600 focus:ring-teal-500 cursor-pointer" checked={agreements.sectionC} onChange={(e) => setAgreements({...agreements, sectionC: e.target.checked})} />
                    <span className="text-stone-800 font-medium group-hover:text-teal-700">
                      {lang === 'he' ? 'קראתי, הבנתי ואני מאשר/ת את כתב הוויתור והצהרת הבריאות.' : 'I have read, understood, and accept the health declaration.'}
                    </span>
                  </label>
                </div>

                <hr className="border-stone-200" />

                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                  <h4 className="text-xl font-bold text-teal-900 mb-4">{lang === 'he' ? 'חתימה דיגיטלית ופרטים אישיים' : 'Digital Signature & Personal Details'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? 'שם מלא (כפי שמופיע בדרכון) *' : 'Full Name (as in Passport) *'}</label>
                      <input type="text" id="fullName" value={digitalSignature.fullName} onChange={(e) => setDigitalSignature({...digitalSignature, fullName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500" required />
                    </div>
                    <div>
                      <label htmlFor="idNumber" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? 'תעודת זהות / דרכון *' : 'ID / Passport *'}</label>
                      <input type="text" id="idNumber" value={digitalSignature.idNumber} onChange={(e) => setDigitalSignature({...digitalSignature, idNumber: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? 'תאריך *' : 'Date *'}</label>
                      <input type="date" id="date" value={digitalSignature.date} onChange={(e) => setDigitalSignature({...digitalSignature, date: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500" required />
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                  <h5 className="font-bold text-teal-800 mb-3 mt-2">{lang === 'he' ? 'איש קשר בחירום' : 'Emergency Contact'}</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="emergencyName" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? 'שם איש קשר *' : 'Emergency Contact Name *'}</label>
                      <input type="text" id="emergencyName" value={digitalSignature.emergencyName} onChange={(e) => setDigitalSignature({...digitalSignature, emergencyName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500" required />
                    </div>
                    <div>
                      <label htmlFor="emergencyPhone" className="block text-sm font-bold text-teal-900 mb-1">{lang === 'he' ? 'טלפון איש קשר *' : 'Emergency Contact Phone *'}</label>
                      <input type="tel" id="emergencyPhone" value={digitalSignature.emergencyPhone} onChange={(e) => setDigitalSignature({...digitalSignature, emergencyPhone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-teal-200 focus:ring-2 focus:ring-teal-500" required dir="ltr" />
                    </div>
                  </div>
                </div>

                <button disabled={!canProceedStep2} type="submit" className={`w-full py-4 rounded-xl font-bold text-lg transition-all cursor-pointer ${canProceedStep2 ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-stone-300 text-stone-500 opacity-60 cursor-not-allowed'}`}>
                  {lang === 'he' ? 'המשך לשלב התשלום' : 'Proceed to Payment'}
                </button>
              </form>
            )}

            {/* STEP 3: Payment */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">
                  {lang === 'he' ? 'פרטי תשלום' : 'Payment Details'}
                </h3>
                
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl text-stone-800 text-sm leading-relaxed shadow-sm">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">{lang === 'he' ? 'פרטי תשלום ושקיפות קבלות' : 'Payment Details & Receipts Transparency'}</h4>
                  
                  <p className="font-bold text-blue-900 mb-2">{lang === 'he' ? 'אופן ביצוע התשלום והפקת קבלות' : 'Payment Method & Invoicing'}</p>
                  <p className="mb-3">
                    {lang === 'he' 
                      ? 'על מנת לחסוך בעמלות סליקה והמרת מט"ח מיותרות, התשלום יבוצע בהעברה בנקאית (או העברת זה"ב) לחשבון הפרויקט:' 
                      : 'To save on clearing and currency exchange fees, payment will be made via bank transfer to the project account:'}
                  </p>
                  <ul className="list-disc list-inside mb-6 space-y-1 font-medium text-blue-900">
                    <li>{lang === 'he' ? 'בנק: 10 (לאומי)' : 'Bank: 10 (Leumi)'}</li>
                    <li>{lang === 'he' ? 'סניף: 680 (מודיעין)' : 'Branch: 680 (Modi\'in)'}</li>
                    <li>{lang === 'he' ? 'מספר חשבון: 4422472' : 'Account Number: 4422472'}</li>
                    <li>{lang === 'he' ? 'שם בעל החשבון: איל גרנות' : 'Account Name: Eyal Granot'}</li>
                  </ul>

                  <p className="font-bold text-blue-900 mb-2">{lang === 'he' ? 'שקיפות פיננסית ופיצול קבלות:' : 'Financial Transparency & Split Invoicing:'}</p>
                  <p className="mb-3">
                    {lang === 'he' 
                      ? 'המודל שלנו בנוי על שקיפות מלאה. מאחר שרוב הכסף שאתן משלמות אינו נשאר אצלנו, אלא מועבר ישירות לספקי הקרקע בחו"ל (בתי מלון, אוטובוסים, אטרקציות וכדומה), אנו פועלים במודל של כספי נאמנות. לכן, לאחר ביצוע התשלום, תופקנה עבורכן שתי קבלות נפרדות:' 
                      : 'Our model is built on full transparency. Since most of the money does not stay with us but is transferred directly to ground suppliers abroad (hotels, buses, attractions, etc.), we operate on a trust fund model. Therefore, after payment, two separate receipts will be issued:'}
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li><strong>{lang === 'he' ? 'קבלת פיקדון: ' : 'Deposit Receipt: '}</strong> {lang === 'he' ? 'על החלק הארי של התשלום, אשר עובר דרכנו כ\"צינור\" ומיועד במלואו לתשלום לספקים בסרי לנקה.' : 'For the main part of the payment, which passes through us and is fully intended for suppliers in Sri Lanka.'}</li>
                    <li><strong>{lang === 'he' ? 'קבלה רגילה: ' : 'Standard Invoice: '}</strong> {lang === 'he' ? 'על החלק המהווה את התמורה הישירה שלנו בגין הארגון, הליווי וההדרכה.' : 'For the part that constitutes our direct remuneration for organization, accompaniment, and guidance.'}</li>
                  </ol>
                </div>

                {/* File Upload Box */}
                <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4 mt-6">
                  <h4 className="text-lg font-bold text-teal-900">
                    {lang === 'he' ? 'צירוף אסמכתת העברה בנקאית' : 'Attach Bank Transfer Reference'}
                  </h4>
                  <p className="text-stone-600 text-sm">
                    {lang === 'he' 
                      ? 'לאחר ביצוע ההעברה, אנא צרפו כאן את אישור ההעברה (קובץ PDF או צילום מסך) כדי שנוכל לאשר את הרשמתכם.' 
                      : 'After completing the transfer, please attach the confirmation (PDF or screenshot) so we can approve your registration.'}
                  </p>
                  
                  {!paymentFile ? (
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-stone-300 rounded-2xl p-6 hover:bg-stone-100 hover:border-teal-500 transition-all cursor-pointer group">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <svg className="w-10 h-10 text-stone-400 group-hover:text-teal-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <span className="font-bold text-stone-700 group-hover:text-teal-600">
                          {lang === 'he' ? 'לחצו לבחירת קובץ או גררו לכאן' : 'Click to select file or drag here'}
                        </span>
                        <span className="text-xs text-stone-500">
                          {lang === 'he' ? 'פורמטים נתמכים: PDF, PNG, JPG (עד 5MB)' : 'Supported formats: PDF, PNG, JPG (up to 5MB)'}
                        </span>
                      </div>
                      <input type="file" accept=".pdf,.png,.jpg,.jpeg" className="hidden" onChange={handleFileChange} />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between bg-teal-50 border border-teal-200 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        <div className="min-w-0">
                          <p className="font-bold text-teal-900 truncate max-w-[200px] sm:max-w-xs">{paymentFile.name}</p>
                          <p className="text-xs text-teal-600">{(paymentFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button onClick={handleRemoveFile} type="button" className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                  )}

                  {paymentError && (
                    <p className="text-red-500 text-sm font-medium">{paymentError}</p>
                  )}
                </div>

                <button 
                  disabled={isUploadingPayment} 
                  onClick={handleStep3Submit} 
                  className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all mt-6 flex justify-center items-center gap-2 cursor-pointer ${isUploadingPayment ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isUploadingPayment ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white shrink-0" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {lang === 'he' ? 'שולח אסמכתא...' : 'Sending Reference...'}
                    </>
                  ) : paymentFile ? (
                    lang === 'he' ? 'שלח אסמכתא וסיים הרשמה' : 'Send Reference & Complete Registration'
                  ) : (
                    lang === 'he' ? 'סיום הרשמה (ללא אסמכתא)' : 'Complete Registration (Without Reference)'
                  )}
                </button>
              </div>
            )}

            {/* STEP 4: Success Screen */}
            {step === 4 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-teal-900"><EditableText path={`${lang}.register.form.success_title`} text={t.register.form.success_title} /></h3>
                <p className="text-stone-600"><EditableText path={`${lang}.register.form.success_desc`} text={t.register.form.success_desc} /></p>
                
                <div className="py-6 flex flex-col gap-6 w-full max-w-md mx-auto">
                  {/* WhatsApp Block */}
                  <a href="https://chat.whatsapp.com/EfBba4Pilux40nrtu2vyjK?mode=gi_t" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1 relative z-10">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <path d="M12.031 0C5.394 0 0 5.385 0 12.016c0 2.115.548 4.184 1.594 6.008L.027 24l6.126-1.603A12.016 12.016 0 0012.031 24c6.635 0 12.031-5.385 12.031-12.016S18.667 0 12.031 0zm3.834 17.202c-.161.455-.93.882-1.332.966-.403.084-.897.136-2.585-.563-2.037-.84-3.344-2.91-3.444-3.047-.1-.137-1.096-1.464-1.127-2.977-.03-1.512.723-2.257.994-2.56.27-.302.588-.377.785-.377.197 0 .394.004.568.013.184.01.428-.066.65.467.229.549.785 1.916.854 2.054.07.138.116.299.016.498-.098.197-.148.32-.295.49-.148.169-.313.364-.446.49-.148.148-.306.313-.135.611.171.298.761 1.261 1.636 2.04.1.09.206.183.322.281.821.688 1.76 1.05 2.023 1.185.263.136.417.112.573-.064.156-.176.669-.78.85-1.047.18-.268.36-.223.599-.133.24.089 1.516.714 1.776.844.259.13.433.195.496.302.064.108.064.629-.098 1.084z" />
                    </svg>
                    <span dir={lang === 'he' ? 'rtl' : 'ltr'}>
                      {lang === 'he' ? 'הצטרפו לקבוצת הוואצאפ שלנו!' : 'Join our WhatsApp Group!'}
                    </span>
                  </a>
                </div>

                <button onClick={() => window.location.reload()} className="mt-4 text-stone-500 font-medium hover:text-stone-800 transition-colors cursor-pointer">
                  <EditableText path={`${lang}.register.form.success_btn`} text={t.register.form.success_btn} />
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="pt-40 pb-20 text-center text-teal-900 bg-stone-50 min-h-screen flex items-center justify-center font-serif text-2xl font-bold">
        Loading Registration Details... / טוען פרטי הרשמה...
      </div>
    }>
      <RegisterFormContent />
    </Suspense>
  );
}
