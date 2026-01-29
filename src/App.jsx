import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Calendar, 
  BookOpen, 
  Users, 
  Phone, 
  Menu, 
  X, 
  CreditCard, 
  Wifi, 
  Sun, 
  Utensils, 
  Camera, 
  ArrowRight,
  Leaf,
  Sparkles,
  MessageCircle,
  Send,
  Loader2,
  Bot,
  Globe,
  Upload,
  Mail
} from 'lucide-react';

// --- Gemini API Setup ---
// 🔴 שים כאן את המפתח שלך בתוך המרכאות!
const apiKey = "AIzaSyCY3e9I2VzeqVXxC7K9hSuSPcr7OubKKeo"; 
const MODEL_NAME = "gemini-2.5-flash-preview-09-2025";

async function callGemini(prompt, systemInstruction = "") {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] }
        }),
      }
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Error generating content.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with AI.";
  }
}

// --- תוכן האתר (מילון שפות) ---
const contentData = {
  he: {
    nav: {
      home: 'בית',
      itinerary: 'המסלול',
      essentials: 'מידע חשוב',
      discovery: 'מגלים עולם',
      about: 'הסיפור שלנו',
      register: 'הצטרפו למסע',
      toggle: 'Switch to English'
    },
    hero: {
      title: 'סבתות בסרי לנקה\nמסע משפחתי לקיץ 2026',
      subtitle: 'מסע בוטיק המיועד לנשים, אימהות וסבתות. אנחנו דואגים ללוגיסטיקה, אתן אוספות את הזיכרונות.',
      cta_plan: 'צפו בתוכנית',
      cta_discover: 'גלו עוד'
    },
    features: {
      title: 'יותר מסתם טיול',
      f1_title: 'וולנס ויוגה',
      f1_desc: 'תרגולי יוגה עדינים מול השקיעה, מותאמים לכל הרמות למתיחת הגוף והרגעת הנפש.',
      f2_title: 'תרבות אותנטית',
      f2_desc: 'מקוטפות התה בהרים ועד הדייגים על הכלונסאות. מפגש אמיתי עם האנשים של האי המחייך.',
      f3_title: 'קולינריה כשרה',
      f3_desc: 'מרכיבים טריים ומקומיים מוכנים בסטנדרטים של כשרות (כשר-סטייל). טעמים של סרי לנקה ללא פשרות.'
    },
    gallery: {
      title: 'רגעים של קסם',
      desc: 'מההרים הקרירים של אלה, דרך הרכבת הכחולה המפורסמת, ועד לחופים המוזהבים של ארוגם ביי.',
      cta: 'שריינו מקום בטיול'
    },
    itinerary: {
      title: 'פרטי המסע',
      subtitle: 'תוכנית מושלמת של 10 ימים, מהרים ועד אוקיינוס.',
      days: [
        { day: 1, title: "ברוכים הבאים לגן עדן", desc: "נחיתה בשדה התעופה (CMB). קבלת פנים ונסיעה ציורית להרים עם עצירות קוקוס. ארוחת ערב חגיגית וטעימות קארי.", highlight: "מעגל פתיחה וקבלת פנים" },
        { day: 2, title: "מפלים וטבע", desc: "ביקור במפלי ראבנה לצילומים. ביקור בגשר תשע הקשתות המפורסם וטיפוס ל'פסגת אדם הקטנה' לשקיעה.", highlight: "גשר תשע הקשתות" },
        { day: 3, title: "נסיעת הרכבת המפורסמת", desc: "ביקור במפעל תה ציילוני. עלייה לרכבת הכחולה מנאנו-אויה לאלה - הנסיעה היפה בעולם. זמן חופשי בעיירה אלה.", highlight: "הרכבת הכחולה" },
        { day: 4, title: "יורדים לחוף", desc: "ירידה מההרים לכיוון החוף המזרחי. עצירה בגילופי הסלע העתיקים בבודורווגאלה. הגעה לארוגם ביי.", highlight: "הגעה לארוגם ביי" },
        { day: 5, title: "ספארי וחיות בר", desc: "בוקר של יוגה או גלישה אופציונלית. ב-15:00 יציאה לספארי בלגונות פוטוויל - פילים, תנינים וטבע פראי.", highlight: "ספארי בלגונות" },
        { day: "6-7", title: "שבת וקהילה", desc: "הכנות לשישי. ארוחת שבת בבית חב\"ד המקומי. יום שבת הוא יום מנוחה מלא - קריאה, הליכה על החוף ומשחקים.", highlight: "שבת בבית חב\"ד" },
        { day: 8, title: "טעמים ותרבות", desc: "סדנת בישול: לומדים להכין קארי דלעת וסמבול קוקוס עם משפחה מקומית. ביקור במנזר קודומביגלה בלב הג'ונגל.", highlight: "סדנת בישול מקומית" },
        { day: 9, title: "המזרח הפראי", desc: "טיול לחופי פנמה וחוף הבוטנים (Peanut Farm). שקיעה אחרונה ב'סלע הפיל' (Elephant Rock) מעל הלגונה.", highlight: "שקיעה בסלע הפיל" },
        { day: 10, title: "פרידה וקולומבו", desc: "נסיעה חזרה לקולומבו דרך הכביש המהיר. קניות ב-Odel וכיכר העצמאות. העברה לשדה התעופה, חיבוקים וטיסה.", highlight: "קניות ופרידה" },
      ]
    },
    essentials: {
      title: 'מידע חשוב - טוב לדעת',
      subtitle: 'כל מה שצריך לדעת לפני שאורזים מזוודה.',
      ai_title: 'מה לארוז? שאל את המומחה',
      ai_desc: 'ספר לנו קצת על עצמך (למשל: "תמיד קר לי", "אני שומרת כשרות") וה-AI יכין לך רשימה.',
      ai_placeholder: 'דוגמה: אני רגיש ליתושים ואוהב נשנושים מהארץ...',
      ai_btn: 'צור רשימה אישית',
      categories: [
        { title: "ויזה (ETA)", items: ["ישראלים חייבים ויזה אלקטרונית (כ-50$ באתר eta.gov.lk)", "דרכון בתוקף ל-6 חודשים לפחות"] },
        { title: "כסף ומטבע", items: ["מטבע: רופי סרי-לנקי (LKR)", "להביא דולרים חדשים ונקיים להמרה", "אשראי עובד במלונות, מזומן לטוקטוקים"] },
        { title: "חשמל", items: ["מתח 230V, שקעים מסוג D (עגולים) או G (בריטי)", "מומלץ להביא מתאם אוניברסלי", "שיטת ה'עט' עובדת בזהירות"] },
        { title: "צניעות ומקדשים", items: ["כתפיים וברכיים מכוסות במקדשים", "להביא סארונג או צעיף בתיק", "חליצת נעליים בכניסה"] },
        { title: "אוכל וכשרות", items: ["אנו מספקים ארוחות כשר-סטייל", "בתי חב\"ד: קולומבו, אלה, ארוגם ביי", "פירות טרופיים בשפע"] }
      ]
    },
    discovery: {
      title: 'מגלים את סרי לנקה',
      subtitle: 'קצת רקע והיסטוריה שיעשו לכם חשק לארוז.',
      articles: [
        { title: "אלה (Ella): בין ההרים", text: "עיירה הררית קסומה מוקפת מטעי תה, מפלים ונופים ירוקים אינסופיים." },
        { title: "תה ציילוני: הזהב הירוק", text: "סרי לנקה היא מעצמת תה עולמית. נלמד איך הקלימט הקריר מייצר את הטעם המושלם." },
        { title: "ארוגם ביי: גלישה ושלווה", text: "אחד מאתרי הגלישה הטובים בעולם עם אווירה צעירה, לגונות ופילים משוטטים." }
      ]
    },
    about: {
      title: 'הסיפור שלנו',
      p1: 'אז הנה אנחנו, אייל, עליזה ונעמי 🙂. בקיץ 2025, שלושתנו נפגשנו בסרי לנקה אחרי שאייל ועליזה סיימו ירח דבש ארוך במזרח.',
      p2: 'אלו היו 10 ימים מופלאים. חזרנו לארץ, ונעמי אמרה: אם כל הצעירים מטיילים, למה לא להנגיש את זה גם לכן?',
      p3: 'אנחנו לא סוכנות נסיעות. אנחנו מביאים חוויה מיוחדת עם הדרכה ולב.',
      team: { eyal: 'אייל & עליזה - שפים ויוגה', naomi: 'נעמי - לוגיסטיקה', guide: 'מדריך מקומי צמוד' }
    },
    register: {
      title: 'שריינו את המקום שלכן',
      subtitle: 'מלאו פרטים ונחזור אליכם תוך 24 שעות.',
      contact_wa: 'שאלות? דברו עם אייל',
      contact_email: 'או שלחו מייל',
      details: ["מוגבל ל-15 משתתפות", "אין צורך בתשלום מיידי", "מדיניות ביטולים הוגנת"],
      form: { name: 'שם מלא', phone: 'טלפון', email: 'אימייל', guests: 'מספר משתתפים', notes: 'הערות', submit: 'שליחת בקשת הרשמה' }
    }
  },
  en: {
    nav: {
      home: 'Home',
      itinerary: 'Itinerary',
      essentials: 'Good to Know',
      discovery: 'Discovery',
      about: 'Our Story',
      register: 'Join Us',
      toggle: 'עבור לעברית'
    },
    hero: {
      title: 'Savtot in Sri Lanka\nSummer 2026',
      subtitle: 'An unforgettable journey connecting generations. A boutique experience designed for women, mothers, and grandmothers.',
      cta_plan: 'See the Plan',
      cta_discover: 'Explore'
    },
    features: {
      title: 'More Than Just a Trip',
      f1_title: 'Wellness & Yoga',
      f1_desc: 'Gentle yoga sessions facing the sunset, designed for all levels to stretch the body and calm the mind.',
      f2_title: 'Authentic Culture',
      f2_desc: 'From tea pickers in the mountains to fishermen on stilts. Meet the real people of this smiling island.',
      f3_title: 'Kosher & Culinary',
      f3_desc: 'Fresh, local ingredients prepared with Kosher standards. Experience the spice of Sri Lanka without compromise.'
    },
    gallery: {
      title: 'Moments of Magic',
      desc: 'From the blue train in the tea clouds to the golden shores of Arugam Bay. Sri Lanka is paradise.',
      cta: 'Secure Your Spot'
    },
    itinerary: {
      title: 'The Journey Details',
      subtitle: 'A Perfectly Curated 10-Day Plan',
      days: [
        { day: 1, title: "Welcome to Paradise", desc: "Landing at Bandaranaike International Airport (CMB). Scenic drive to the mountains. Welcome Dinner: Opening circle and curry tasting.", highlight: "Welcome Dinner" },
        { day: 2, title: "Waterfalls & Nature", desc: "Visit Ravana Falls. Visit the Nine Arch Bridge. Climb Little Adam's Peak for sunset.", highlight: "Nine Arch Bridge" },
        { day: 3, title: "The Famous Train Ride", desc: "Visit a Tea Factory. Board the Blue Train (Nanu Oya to Ella). Free time in Ella town.", highlight: "Blue Train Ride" },
        { day: 4, title: "Moving to the Coast", desc: "Descent towards the East Coast. Stopover at Buduruwagala ancient rock carvings. Arrival at Arugam Bay.", highlight: "Arugam Bay Arrival" },
        { day: 5, title: "Safari & Wildlife", desc: "Morning yoga or optional surfing. Lagoon Safari (Pottuvil) - Elephants, crocodiles, and nature.", highlight: "Lagoon Safari" },
        { day: "6-7", title: "Shabbat & Community", desc: "Friday preparations. Shabbat dinner at the local Chabad House. Saturday is a full rest day.", highlight: "Shabbat Dinner" },
        { day: 8, title: "Taste & Culture", desc: "Cooking Class: Learn to cook traditional Sri Lankan Pumpkin Curry. Visit Kudumbigala Monastery in the jungle.", highlight: "Cooking Class" },
        { day: 9, title: "The Wild East", desc: "Trip to Panama & Peanut Farm Beach. Elephant Rock for the final sunset of the trip. Closing Dinner party.", highlight: "Elephant Rock Sunset" },
        { day: 10, title: "Farewell Colombo", desc: "Drive back to Colombo via highway. Independence Square and Odel shopping. Transfer to airport.", highlight: "Shopping & Farewell" },
      ]
    },
    essentials: {
      title: 'Essential Information',
      subtitle: 'Everything you need to know before packing your bags.',
      ai_title: 'What to Pack? Ask AI',
      ai_desc: 'Tell us about yourself (e.g., "Always cold", "Love spicy food") and AI will generate a list.',
      ai_placeholder: 'Example: I am traveling with my grandmother...',
      ai_btn: 'Generate List',
      categories: [
        { title: "Visa (ETA)", items: ["Israelis need an ETA (~$50 USD)", "Apply at eta.gov.lk", "Passport valid for 6 months"] },
        { title: "Money & Currency", items: ["Currency: Sri Lankan Rupee (LKR)", "Bring clean USD notes", "Cash is needed for Tuk-Tuks"] },
        { title: "Electricity", items: ["Voltage: 230V, Type D or G plugs", "Bring a universal adapter", "Pen trick works for Type G"] },
        { title: "Modesty & Temples", items: ["Shoulders/knees covered in temples", "Bring a Sarong", "Remove shoes at entrance"] },
        { title: "Kosher Food", items: ["We provide kosher-style meals", "Chabad Houses: Colombo, Ella, Arugam Bay", "Fresh tropical fruit"] }
      ]
    },
    discovery: {
      title: 'Discover Sri Lanka',
      subtitle: 'Get excited about the destination.',
      articles: [
        { title: "Ella: Mountain Bliss", text: "A magical mountain town surrounded by tea plantations, waterfalls, and endless green views." },
        { title: "Ceylon Tea", text: "Sri Lanka is a world tea power. We'll learn how the cool climate creates the perfect flavor." },
        { title: "Arugam Bay", text: "One of the world's best surf spots with a young vibe, lagoons, and roaming elephants." }
      ]
    },
    about: {
      title: 'Our Journey',
      p1: 'So here we are, Eyal, Aliza, and Naomi. In summer 2025, we met in Sri Lanka after Eyal and Aliza\'s honeymoon.',
      p2: 'It was 10 miraculous days. We returned home, and Naomi had an idea: let\'s make this accessible to everyone.',
      p3: 'We are not a travel agency. We are just trying to bring this special experience with a little guidance.',
      team: { eyal: 'Eyal & Aliza (Chefs/Yoga)', naomi: 'Naomi (Logistics)', guide: 'Local Guide' }
    },
    register: {
      title: 'Secure Your Spot',
      subtitle: 'Fill out the details below, and we will contact you within 24 hours.',
      contact_wa: 'Contact Eyal',
      contact_email: 'Or Email Us',
      details: ["Limited to 15 participants", "No immediate payment", "Full refund policy"],
      form: { name: 'Full Name', phone: 'Phone', email: 'Email', guests: 'Number of Travelers', notes: 'Special Requests', submit: 'Send Request' }
    }
  }
};

// --- רכיב תמונה הניתנת לעריכה (עם הגנת מנהל) ---
const EditableImage = ({ id, src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  // בדיקה האם המשתמש הוא מנהל
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    const saved = localStorage.getItem(`savtot_img_${id}`);
    if (saved) setImgSrc(saved);
  }, [id, src]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result);
        localStorage.setItem(`savtot_img_${id}`, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative group overflow-hidden rounded-2xl h-full ${isAdmin ? 'cursor-pointer' : ''}`}>
      <img src={imgSrc} alt={alt} className={className} />
      
      {/* שכבת העריכה מוצגת רק אם אתה מנהל */}
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
};

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en');

  const t = contentData[lang]; 

  useEffect(() => {
    document.dir = lang === 'he' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'he' ? 'en' : 'he');
  };

  return (
    <div className={`min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-teal-200 ${lang === 'he' ? 'font-hebrew' : 'font-english'}`}>
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4 text-white'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <div 
            onClick={() => navigateTo('home')} 
            className={`text-2xl font-serif font-bold cursor-pointer flex items-center gap-2 ${scrolled ? 'text-teal-900' : 'text-white'}`}
          >
            <Leaf className="w-6 h-6 text-orange-500" />
            <span>Savtot <span className="font-light italic">in Sri Lanka</span></span>
          </div>

          <div className="hidden md:flex gap-6 items-center font-medium">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1 rounded-full border ${scrolled ? 'border-teal-900 text-teal-900' : 'border-white text-white'} hover:bg-white/10 transition`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs uppercase font-bold">{lang === 'he' ? 'EN' : 'HE'}</span>
            </button>

            {[
              { id: 'home', label: t.nav.home },
              { id: 'itinerary', label: t.nav.itinerary },
              { id: 'essentials', label: t.nav.essentials },
              { id: 'discovery', label: t.nav.discovery },
              { id: 'about', label: t.nav.about },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`hover:text-orange-500 transition-colors ${activePage === item.id ? 'text-orange-500 font-bold' : (scrolled ? 'text-stone-600' : 'text-white/90')}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => navigateTo('register')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
            >
              {t.nav.register}
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-teal-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-teal-900' : 'text-white'} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t text-stone-800">
             <div className="p-4 border-b flex justify-between items-center bg-stone-50">
               <span className="text-sm font-bold text-stone-500">{t.nav.toggle}</span>
               <button onClick={toggleLanguage} className="flex items-center gap-2 text-teal-700 font-bold">
                 <Globe className="w-5 h-5" /> {lang === 'he' ? 'English' : 'עברית'}
               </button>
             </div>
            <div className="flex flex-col p-4 gap-4">
               {[
              { id: 'home', label: t.nav.home },
              { id: 'itinerary', label: t.nav.itinerary },
              { id: 'essentials', label: t.nav.essentials },
              { id: 'discovery', label: t.nav.discovery },
              { id: 'about', label: t.nav.about },
              { id: 'register', label: t.nav.register },
            ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`text-${lang === 'he' ? 'right' : 'left'} font-medium py-2 border-b border-stone-100 last:border-0`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {activePage === 'home' && <HomePage navigateTo={navigateTo} t={t} />}
        {activePage === 'itinerary' && <ItineraryPage t={t} />}
        {activePage === 'essentials' && <EssentialsPage t={t} lang={lang} />}
        {activePage === 'discovery' && <DiscoveryPage t={t} />}
        {activePage === 'about' && <AboutPage t={t} />}
        {activePage === 'register' && <RegisterPage t={t} />}
      </main>

      <AIChatWidget lang={lang} />

      <footer className="bg-teal-900 text-teal-100 py-12 mt-12 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-start">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Savtot in Sri Lanka</h3>
            <p className="opacity-80 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">{lang === 'he' ? 'קישורים' : 'Links'}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('itinerary')} className="hover:text-orange-400">{t.nav.itinerary}</button></li>
              <li><button onClick={() => navigateTo('essentials')} className="hover:text-orange-400">{t.nav.essentials}</button></li>
              <li><button onClick={() => navigateTo('register')} className="hover:text-orange-400">{t.nav.register}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">{lang === 'he' ? 'צרו קשר' : 'Contact Us'}</h4>
            <p className="opacity-80">Eyal: 054-351-0664</p>
            <p className="opacity-80">Naomi: +972 54-663-9597</p>
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 cursor-pointer transition-colors">📷</div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 cursor-pointer transition-colors">📘</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-teal-800 text-sm opacity-60 flex flex-col items-center gap-2">
          <span>© 2026 Savtot in Sri Lanka. Planning & Love: Aliza, Eyal, Naomi.</span>
          
          {/* כפתור כניסה למנהל - מנעול קטן */}
          <button 
            onClick={() => {
              const isAdmin = localStorage.getItem('isAdmin') === 'true';
              if (isAdmin) {
                if (confirm('האם לצאת ממצב עריכה?')) {
                  localStorage.setItem('isAdmin', 'false');
                  window.location.reload();
                }
              } else {
                const pass = prompt('סיסמת מנהל:');
                if (pass === '1086E') { 
                  localStorage.setItem('isAdmin', 'true');
                  alert('מצב עריכה הופעל! כעת ניתן לשנות תמונות.');
                  window.location.reload();
                } else if (pass !== null) {
                  alert('סיסמה שגויה');
                }
              }
            }}
            className="opacity-30 hover:opacity-100 transition-opacity p-2"
            title="Admin Login"
          >
            🔒
          </button>
        </div>
      </footer>
    </div>
  );
};

const HomePage = ({ navigateTo, t }) => (
  <>
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <EditableImage 
          id="hero_bg" 
          src="/home1.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-transparent to-transparent pointer-events-none" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg leading-tight whitespace-pre-line">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 opacity-90 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
          <button onClick={() => navigateTo('itinerary')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30">
            {t.hero.cta_plan}
          </button>
          <button onClick={() => navigateTo('discovery')} className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
            {t.hero.cta_discover}
          </button>
        </div>
      </div>
    </div>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-teal-900 mb-4">{t.features.title}</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: <Users className="w-10 h-10 text-orange-500" />, title: t.features.f1_title, desc: t.features.f1_desc },
            { icon: <MapPin className="w-10 h-10 text-orange-500" />, title: t.features.f2_title, desc: t.features.f2_desc },
            { icon: <Utensils className="w-10 h-10 text-orange-500" />, title: t.features.f3_title, desc: t.features.f3_desc },
          ].map((feature, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-stone-100 group">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-teal-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-start">
          <h2 className="text-4xl font-serif font-bold mb-6">{t.gallery.title}</h2>
          <p className="text-teal-100 text-lg mb-8 leading-relaxed">
            {t.gallery.desc}
          </p>
          <button onClick={() => navigateTo('register')} className="flex items-center gap-2 text-orange-400 font-bold hover:gap-4 transition-all">
            {t.gallery.cta} <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
           <EditableImage id="gal_1" src="/home2.jpg" alt="Gallery 1" className="rounded-2xl shadow-lg transform translate-y-8 w-full h-auto" />
           <EditableImage id="gal_2" src="/home3.jpg" alt="Gallery 2" className="rounded-2xl shadow-lg w-full h-auto" />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
    </section>
  </>
);

const ItineraryPage = ({ t }) => {
  // מיפוי ידני של תמונות לפי אינדקס הימים
  const dayImages = [
    '/1.jpg',   // Day 1
    '/2.jpg',   // Day 2
    '/3.jpg',   // Day 3
    '/4.jpg',   // Day 4
    '/5.jpg',   // Day 5
    '/6.jpg',   // Day 6-7 (Combined in data, so we use 6.jpg)
    '/8.jpg',   // Day 8
    '/9.jpg',   // Day 9
    '/10.jpg'   // Day 10
  ];

  return (
    <div className="pt-32 pb-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-teal-900 mb-4">{t.itinerary.title}</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">{t.itinerary.subtitle}</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute start-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-100 rounded-full"></div>

          <div className="space-y-12">
            {t.itinerary.days.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white p-2 rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="h-64 bg-stone-200 rounded-xl overflow-hidden relative">
                       <EditableImage 
                        id={`itinerary_day_${index}`} 
                        src={dayImages[index]} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                       />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-start p-6 bg-white rounded-2xl shadow-md border-r-4 border-l-0 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-r-0 border-orange-400 relative">
                  <div className="absolute top-4 start-4 bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded-full text-sm">
                    Day {item.day}
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-3 pt-8">{item.title}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center gap-2 text-orange-600 font-medium justify-center md:justify-start">
                    <Sun className="w-5 h-5" />
                    <span>Highlight: {item.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SmartPackingList = ({ t, lang }) => {
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
    
    const result = await callGemini(userInput, systemPrompt);
    setGeneratedList(result);
    setIsLoading(false);
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
            <h4 className="font-bold text-lg text-teal-900 mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-teal-600" />
              Recommendation:
            </h4>
            <div className="prose prose-stone text-stone-700 whitespace-pre-line">
              {generatedList}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EssentialsPage = ({ t, lang }) => {
  const icons = {
    0: <BookOpen className="w-8 h-8" />,
    1: <CreditCard className="w-8 h-8" />,
    2: <Wifi className="w-8 h-8" />,
    3: <Camera className="w-8 h-8" />,
    4: <Utensils className="w-8 h-8" />
  };

  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-teal-900 mb-4">{t.essentials.title}</h1>
          <p className="text-lg text-stone-600">{t.essentials.subtitle}</p>
        </div>

        <SmartPackingList t={t} lang={lang} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.essentials.categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-orange-400">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-teal-50 p-3 rounded-full text-teal-700">
                    {icons[idx]}
                  </div>
                  <h3 className="text-xl font-bold text-teal-900">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-stone-600 text-sm leading-relaxed text-start">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DiscoveryPage = ({ t }) => {
  const images = [
    "/rock.jpg",
    "/tea.jpg",
    "/arugam.jpg"
  ];

  return (
    <div className="pt-32 pb-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-teal-900 mb-4">{t.discovery.title}</h1>
          <p className="text-lg text-stone-600">{t.discovery.subtitle}</p>
        </div>

        <div className="space-y-20">
          {t.discovery.articles.map((article, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <EditableImage 
                  id={`discovery_${idx}`} 
                  src={images[idx]} 
                  alt={article.title} 
                  className="rounded-2xl shadow-xl w-full h-80 object-cover hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              <div className="w-full md:w-1/2 text-start">
                <h2 className="text-3xl font-serif font-bold text-teal-800 mb-4">{article.title}</h2>
                <div className="w-20 h-1 bg-orange-400 mb-6"></div>
                <p className="text-stone-700 leading-loose text-lg">
                  {article.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = ({ t }) => (
  <div className="pt-32 pb-20 bg-stone-50">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h1 className="text-5xl font-serif font-bold text-teal-900 mb-8">{t.about.title}</h1>
      
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-12">
        <EditableImage 
          id="about_family" 
          src="/family.jpg" 
          alt="Family" 
          className="w-full md:w-2/3 h-80 object-cover rounded-2xl mx-auto mb-8 shadow-sm"
        />
        
        <div className="space-y-6 text-lg text-stone-700 leading-relaxed text-start md:text-center">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p className="font-bold text-teal-800">{t.about.p3}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4">
          <div className="text-4xl mb-2">🧘‍♀️</div>
          <h3 className="font-bold text-teal-900">{t.about.team.eyal}</h3>
        </div>
        <div className="p-4">
          <div className="text-4xl mb-2">🗺️</div>
          <h3 className="font-bold text-teal-900">{t.about.team.naomi}</h3>
        </div>
        <div className="p-4">
          <div className="text-4xl mb-2">🇱🇰</div>
          <h3 className="font-bold text-teal-900">{t.about.team.guide}</h3>
        </div>
      </div>
    </div>
  </div>
);

const RegisterPage = ({ t }) => {
  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/2 text-start">
            <h1 className="text-4xl font-serif font-bold text-teal-900 mb-6">{t.register.title}</h1>
            <p className="text-lg text-stone-600 mb-8">{t.register.subtitle}</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-teal-800 bg-white p-4 rounded-xl shadow-sm">
                <Phone className="w-6 h-6" />
                <div>
                  <p className="font-bold">{t.register.contact_wa}</p>
                  <p dir="ltr" className="text-lg">054-351-0664 (Eyal)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-teal-800 bg-white p-4 rounded-xl shadow-sm">
                <Mail className="w-6 h-6" />
                <div>
                  <p className="font-bold">{t.register.contact_email}</p>
                  <p dir="ltr" className="text-lg">eyalbgr@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-teal-800 bg-white p-4 rounded-xl shadow-sm">
                <Users className="w-6 h-6" />
                <div>
                  <p className="font-bold">Naomi</p>
                  <p dir="ltr" className="text-lg">+972 54-663-9597</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h4 className="font-bold text-orange-800 mb-3">פרטים נוספים</h4>
              <ul className="space-y-2 text-stone-700">
                {t.register.details.map((detail, idx) => (
                  <li key={idx}>✅ {detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:w-1/2">
            <form action="https://formspree.io/f/xreqgpza" method="POST" className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-teal-600">
              <div className="space-y-6 text-start">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">{t.register.form.name}</label>
                  <input type="text" name="name" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">{t.register.form.phone}</label>
                    <input type="tel" name="phone" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">{t.register.form.email}</label>
                    <input type="email" name="email" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">{t.register.form.guests}</label>
                  <select name="guests" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">{t.register.form.notes}</label>
                  <textarea name="message" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-32"></textarea>
                </div>
                
                <input type="text" name="_gotcha" style={{display: 'none'}} />

                <button type="submit" className="w-full bg-teal-900 text-white font-bold py-4 rounded-xl hover:bg-teal-800 transition-colors shadow-lg">
                  {t.register.form.submit}
                </button>
                <p className="text-center text-xs text-stone-400 mt-4">🔒 Your data is secure.</p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

const AIChatWidget = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: lang === 'he' ? 'היי! אני העוזר החכם של Savtot. איך אפשר לעזור?' : 'Hi! I am the Savtot AI Guide. How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
     setMessages([{ role: 'assistant', text: lang === 'he' ? 'היי! אני העוזר החכם של Savtot. איך אפשר לעזור?' : 'Hi! I am the Savtot AI Guide. How can I help?' }]);
  }, [lang]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const systemPrompt = `
      You are the virtual assistant for 'Savtot in Sri Lanka'. 
      Current user language: ${lang === 'he' ? 'Hebrew' : 'English'}.
      Trip details: 10 days, boutique, family-run by Eyal, Aliza, and Naomi. Kosher-style.
      Locations: Colombo, Pinnawala, Sigiriya, Kandy, Nuwara Eliya, Ella, Arugam Bay.
      Answer in the user's language briefly and politely.
    `;

    const reply = await callGemini(userMsg, systemPrompt);
    
    setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 z-50 flex flex-col items-end pointer-events-none ltr:right-6 rtl:left-6">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-stone-200 pointer-events-auto flex flex-col max-h-[500px] animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-teal-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <span className="font-bold">Savtot AI Guide</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-stone-50 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-3 flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-orange-100 text-stone-800 rounded-tr-none' 
                    : 'bg-white border border-stone-200 text-stone-700 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <button 
                onClick={handleSend}
                disabled={isLoading || !input}
                className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full transition disabled:opacity-50"
              >
                <Send className="w-4 h-4 rtl:rotate-180" />
              </button>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'he' ? "שאל אותי..." : "Ask me..."}
                className="flex-1 bg-stone-100 rounded-full px-4 py-2 text-sm text-start focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-orange-500/40 transition-all transform hover:scale-110 pointer-events-auto flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default App;