import React from 'react';
import { useSite } from '../../contexts/SiteContext';

export default function ItineraryAppendix({ season }) {
  const { lang } = useSite();
  const isHe = lang === 'he';
  const isWinter = season === 'winter';

  if (isWinter) {
    if (isHe) {
      return (
        <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="rtl">
          <p className="font-bold text-base">נספח מסלול – מסע נשים לסרי לנקה (חורף 2027)</p>
          
          <div className="space-y-3">
            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">יום 1: הגעה ונסיעה לנגומבו/קולומבו</p>
              <p><strong>הערב:</strong> נחיתה בשדה התעופה של קולומבו (CMB), סידורי הגעה והעברה למלון.</p>
              <p><strong>פינוק:</strong> קבלת חדרים, מסאז' מפנק במלון להתחלת המסע באווירה רגועה וארוחת ערב חגיגית.</p>
              <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: ערב | לינה: מלון בקולומבו/נגומבו (או דומה).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">יום 2: אקסטרים בקיטולגלה ונסיעה לנווארה אליה</p>
              <p><strong>בוקר:</strong> טיול זריחה מוקדם, יוגה וארוחת בוקר במלון.</p>
              <p><strong>אמצע היום:</strong> נסיעה לקיטולגלה לרפטינג מרגש במים לבנים והליכת קניונינג ביער הגשם.</p>
              <p><strong>ערב:</strong> נסיעה לנווארה אליה, צ'ק-אין וארוחת ערב במלון.</p>
              <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: מלון בנווארה אליה (או דומה).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">יום 3: מטעי תה והרכבת הציורית לאלה</p>
              <p><strong>בוקר:</strong> טיול זריחה, יוגה וארוחת בוקר.</p>
              <p><strong>אמצע היום:</strong> סיור מודרך במטעי התה של נווארה אליה ובמפלים.</p>
              <p><strong>אחר הצהריים:</strong> נסיעה ברכבת הציורית המפורסמת מנווארה אליה לאלה.</p>
              <p><strong>ערב:</strong> הגעה לאלה, צ'ק-אין וארוחת ערב במלון או בבית חב"ד.</p>
              <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: מלון באלה (או דומה).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">יום 4: מפלים ואדרנלין באלה</p>
              <p><strong>בוקר:</strong> טיול זריחה, יוגה וארוחת בוקר.</p>
              <p><strong>אמצע היום:</strong> טיול שטח אל מפלי דיאלומא המרהיבים, גלישת אומגה (Flying Ravana) וזמן קניות בעיירה אלה.</p>
              <p><strong>ערב:</strong> נסיעה למלון וארוחת ערב קבוצתית.</p>
              <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: מלון באלה (או דומה).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">יום 5: ספארי פילים וסאפ שקיעה בדרום</p>
              <p><strong>בוקר:</strong> ארוחת בוקר ונסיעה דרומה.</p>
              <p><strong>צהריים:</strong> ספארי פילים מרתק בשמורת אודוואלאווה בטבע הפראי.</p>
              <p><strong>אחר הצהריים:</strong> הגעה לחוף הדרומי, סאפ שקיעה רגוע בים ועיסוי מפנק במלון.</p>
              <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: מלון בחוף הדרומי (או דומה).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">יום 6: שנורקלינג והתארגנות לשבת</p>
              <p><strong>בוקר:</strong> ארוחת בוקר במלון.</p>
              <p><strong>אמצע היום:</strong> שנורקלינג מדהים עם צבי ים בחוף, זמן חוף חופשי וקניות מקומיות.</p>
              <p><strong>אחר הצהריים:</strong> התארגנות לקראת כניסת שבת.</p>
              <p><strong>ערב:</strong> קבלת שבת וסעודת שבת חגיגית.</p>
              <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: מלון בחוף הדרומי (או דומה).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">יום 7: שבת מנוחה ויוגה</p>
              <p><strong>בוקר:</strong> טיול זריחה, סשן יוגה, קפה ועוגה ולאחריו ארוחת בוקר/בראנץ' מאוחרת.</p>
              <p><strong>אמצע היום:</strong> זמן חופשי למנוחה, קריאה ואווירת שבת שקטה על החוף.</p>
              <p><strong>ערב:</strong> מוצאי שבת, הבדלה וארוחת ערב במלון.</p>
              <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, צהריים, ערב | לינה: מלון בחוף הדרומי (או דומה).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">יום 8: צפייה בלווייתנים וגלישה</p>
              <p><strong>בוקר מוקדם:</strong> שייט מיוחד לצפייה בלווייתנים ודולפינים באוקיינוס.</p>
              <p><strong>בוקר:</strong> יוגה וארוחת בוקר במלון.</p>
              <p><strong>אמצע היום:</strong> שיעור גלישה חווייתי וזמן קניות.</p>
              <p><strong>אחר הצהריים:</strong> נסיעה והתארגנות ללינה בטלפה.</p>
              <p><strong>ערב:</strong> ארוחת ערב חמה במלון.</p>
              <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: מלון בטלפה (או דומה).</p>
            </div>

            <div className="border-r-4 border-teal-500 pr-3">
              <p className="font-bold text-teal-800">יום 9: יום אחרון וטיסה</p>
              <p><strong>בוקר:</strong> טיול זריחה, יוגה וארוחת בוקר במלון.</p>
              <p><strong>אמצע היום:</strong> זמן חופשי למנוחה, סידורים אחרונים וקניות.</p>
              <p><strong>אחר הצהריים:</strong> נסיעה לשדה התעופה בקולומבו (CMB) לקראת הטיסה חזרה לישראל.</p>
              <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב (במלון/בית חב"ד/שדה התעופה).</p>
            </div>
          </div>

          <p className="text-xs mt-4"><strong>הבהרה משפטית:</strong> המסלול המוצג לעיל מפרט את הלו"ז המתוכנן והפעילויות הכלולות. המארגנים שומרים לעצמם את הזכות המלאה לבצע התאמות הכרחיות במסלול, בסדר הימים, או להחליף את המלונות המפורטים במקומות לינה ברמה זהה, עקב אילוצי שטח, החלטות ספקים מקומיים, תנאי מזג אוויר או כוח עליון.</p>
          <p className="text-xs mt-2"><strong>פירוט רכיב פעילויות ($290 USD):</strong> הרכיב מכסה במלואו את כל דמי הכניסה הקבוצתיים, הדרכה מקומית, ולוגיסטיקה עבור הפעילויות הכלולות. פעילויות אופציונליות או טיפולי ספא ישולמו בנפרד על ידי המשתתפת.</p>
        </div>
      );
    } else {
      return (
        <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="ltr">
          <p className="font-bold text-base">Itinerary Appendix – Women\'s Journey to Sri Lanka (Winter 2027)</p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 1: Arrival & Transit to Negombo/Colombo</p>
              <p><strong>Evening:</strong> Landing at Colombo Airport (CMB), immigration procedures, and transfer to hotel.</p>
              <p><strong>Wellness:</strong> Hotel check-in, pampering massage to kick off the trip, and a welcome dinner.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: Dinner | Accommodation: Hotel in Colombo/Negombo (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 2: Extreme in Kithulgala & Drive to Nuwara Eliya</p>
              <p><strong>Morning:</strong> Early sunrise hike, yoga, and breakfast at the hotel.</p>
              <p><strong>Mid-Day:</strong> Drive to Kithulgala for whitewater rafting and rainforest canyoning.</p>
              <p><strong>Evening:</strong> Transit to Nuwara Eliya, check-in, and dinner at the hotel.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel in Nuwara Eliya (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 3: Tea Gardens & Scenic Train to Ella</p>
              <p><strong>Morning:</strong> Sunrise hike, yoga, and breakfast.</p>
              <p><strong>Mid-Day:</strong> Guided tour of tea plantations and Nuwara Eliya waterfalls.</p>
              <p><strong>Afternoon:</strong> The iconic scenic train ride from Nuwara Eliya to Ella.</p>
              <p><strong>Evening:</strong> Arrival in Ella, check-in, and dinner (at hotel or local Chabad House).</p>
              <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel in Ella (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 4: Waterfalls & Adrenaline in Ella</p>
              <p><strong>Morning:</strong> Sunrise hike, yoga, and breakfast.</p>
              <p><strong>Mid-Day:</strong> Excursion to the majestic Diyaluma Falls, Flying Ravana Zipline, and local shopping in Ella.</p>
              <p><strong>Evening:</strong> Group dinner and rest.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel in Ella (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 5: Elephant Safari & Sunset SUP on South Coast</p>
              <p><strong>Morning:</strong> Breakfast and drive south.</p>
              <p><strong>Mid-Day:</strong> Elephant safari in Udawalawe National Park.</p>
              <p><strong>Afternoon:</strong> Arrival at the South Coast, sunset stand-up paddleboarding (SUP), and a relaxing massage.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel on the South Coast (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 6: Turtles Snorkeling & Shabbat Preparation</p>
              <p><strong>Morning:</strong> Breakfast at the hotel.</p>
              <p><strong>Mid-Day:</strong> Snorkeling with wild sea turtles, free beach time, and local shopping.</p>
              <p><strong>Afternoon:</strong> Shabbat preparations.</p>
              <p><strong>Evening:</strong> Welcoming Shabbat; festive dinner.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel on the South Coast (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 7: A Restful Shabbat & Yoga</p>
              <p><strong>Morning:</strong> Sunrise hike, yoga session, morning coffee, followed by a late breakfast/brunch.</p>
              <p><strong>Mid-Day:</strong> Free time for reading, relaxing, and quiet beach walks.</p>
              <p><strong>Evening:</strong> Havdalah and group dinner.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Lunch, Dinner | Accommodation: Hotel on the South Coast (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 8: Whale Watching & Surf Lesson</p>
              <p><strong>Early Morning:</strong> Ocean cruise search for whales and dolphins.</p>
              <p><strong>Morning:</strong> Yoga and breakfast.</p>
              <p><strong>Mid-Day:</strong> Surf lesson and shopping.</p>
              <p><strong>Afternoon:</strong> Transit and check-in at Talpe.</p>
              <p><strong>Evening:</strong> Dinner at the hotel.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel in Talpe (or similar).</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-bold text-teal-800">Day 9: Final Day & Departure</p>
              <p><strong>Morning:</strong> Sunrise hike, yoga, and breakfast.</p>
              <p><strong>Mid-Day:</strong> Relaxation and final souvenir shopping.</p>
              <p><strong>Afternoon:</strong> Drive to Colombo Airport (CMB) for the flight back.</p>
              <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner (at hotel, Chabad House, or airport).</p>
            </div>
          </div>

          <p className="text-xs mt-4"><strong>Legal Disclaimer:</strong> The itinerary presented above outlines the planned schedule and included activities. The Organizers reserve the full right to make necessary adjustments to the itinerary, the order of days, or substitute the specified hotels with accommodations of an identical standard, due to field constraints, local supplier decisions, weather conditions, or force majeure.</p>
          <p className="text-xs mt-2"><strong>Activity Component Breakdown ($290 USD):</strong> Included Activities (Covered under the $290 USD Component) fully covers all group entry fees, local guiding services, and logistics for the included excursions. Excluded / Optional Activities (Paid Separately on Site) such as Ayurvedic spa treatments or marine wildlife excursions must be paid for independently.</p>
        </div>
      );
    }
  }

  // Summer Trip (default)
  if (isHe) {
    return (
      <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="rtl">
        <p className="font-bold text-base">נספח מסלול – מסע נשים לסרי לנקה (קיץ 2027)</p>
        
        <div className="space-y-3">
          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">יום 1: הגעה ונסיעה לסיגירייה</p>
            <p><strong>אחר הצהריים:</strong> נחיתה בשדה התעופה של קולומבו (CMB) וסידורי הגעה.</p>
            <p><strong>ערב:</strong> נסיעה קבוצתית לסיגירייה (כ-4 שעות).</p>
            <p><strong>לילה:</strong> צ'ק-אין במלון, חלוקת חדרים וארוחת ערב מאוחרת וקבלת פנים.</p>
            <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: ערב | לינה: Hotel Sigiriya (או דומה).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">יום 2: פלאי סיגירייה</p>
            <p><strong>בוקר מוקדם:</strong> טיפוס זריחה מודרך על צוק סיגירייה המפורסם.</p>
            <p><strong>בוקר:</strong> ארוחת בוקר במלון.</p>
            <p><strong>אמצע היום:</strong> סיור בכפר אותנטי וספארי פילים בטבע.</p>
            <p><strong>ערב:</strong> ארוחת ערב ולאחריה זמן מנוחה (אופציונלי: ספא/עיסוי איורוודי).</p>
            <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: Hotel Sigiriya (או דומה).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">יום 3: יער הגשם קיטולגאלה ונווארה אליה</p>
            <p><strong>בוקר מוקדם:</strong> טיול זריחה וסשן יוגה בוקר.</p>
            <p><strong>בוקר:</strong> ארוחת בוקר ונסיעה לקיטולגאלה.</p>
            <p><strong>אחר הצהריים:</strong> רפטינג במים לבנים והליכת קניונינג ביער הגשם.</p>
            <p><strong>ערב:</strong> נסיעה לנווארה אליה וארוחת ערב במלון.</p>
            <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: מלון בנווארה אליה.</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">יום 4: מטעי תה והרכבת הציורית לאלה</p>
            <p><strong>בוקר:</strong> סשן יוגה וארוחת בוקר.</p>
            <p><strong>אמצע היום:</strong> סיור מודרך במטעי התה של נווארה אליה ובמפלים.</p>
            <p><strong>אחר הצהריים:</strong> נסיעה ברכבת הציורית המפורסמת מנווארה אליה לאלה.</p>
            <p><strong>ערב:</strong> הגעה לאלה, צ'ק-אין במלון וארוחת ערב בבית חב"ד המקומי.</p>
            <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: מלון באלה.</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">יום 5: פסגות אלה</p>
            <p><strong>בוקר מוקדם:</strong> טיול זריחה וסשן יוגה.</p>
            <p><strong>בוקר:</strong> ארוחת בוקר במלון.</p>
            <p><strong>אמצע היום:</strong> יציאה לטבע אל מפלי דיאלומבה המרהיבים.</p>
            <p><strong>אחר הצהריים:</strong> חווית אומגה (Zipline) וזמן התארגנות במלון.</p>
            <p><strong>ערב:</strong> סיור בעיירה, קניות, וארוחת ערב בבית חב"ד.</p>
            <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: מלון באלה.</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">יום 6: מסע לחוף המזרחי – פסיקודה</p>
            <p><strong>בוקר:</strong> סשן יוגה, ארוחת בוקר, ונסיעה לפסיקודה.</p>
            <p><strong>אמצע היום:</strong> סאפ בוקר (SUP) ומנוחה בחוף במפרץ פסיקודה.</p>
            <p><strong>אחר הצהריים מאוחרים:</strong> הכנות לשבת.</p>
            <p><strong>ערב:</strong> כניסת שבת; סעודת שבת חגיגית.</p>
            <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: Pasikudah Bay Hotel (או דומה).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">יום 7: שבת מנוחה בפסיקודה</p>
            <p><strong>בוקר:</strong> קפה/עוגה בבוקר, ולאחריו ארוחת בוקר/בראנץ' מאוחרת.</p>
            <p><strong>אחר הצהריים:</strong> ארוחת צהריים וזמן חוף רגוע.</p>
            <p><strong>ערב:</strong> מוצאי שבת וארוחת ערב במלון.</p>
            <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, צהריים, ערב | לינה: Pasikudah Bay Hotel (או דומה).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">יום 8: הרפתקאות ים בטרינקומלי</p>
            <p><strong>בוקר:</strong> סשן יוגה וארוחת בוקר.</p>
            <p><strong>אמצע היום:</strong> יציאה לטרינקומלי לשנורקלינג, קניות מקומיות, ואפשרות לצפייה בחיות ים (אופציונלי).</p>
            <p><strong>ערב:</strong> ארוחת ערב ואפשרות לטיפולי ספא איורוודי.</p>
            <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב | לינה: Pasikudah Bay Hotel (או דומה).</p>
          </div>

          <div className="border-r-4 border-teal-500 pr-3">
            <p className="font-bold text-teal-800">יום 9: פרידה ועזיבה</p>
            <p><strong>בוקר:</strong> טיול זריחה אחרון, סשן יוגה וארוחת בוקר.</p>
            <p><strong>אחר הצהריים:</strong> נסיעה לשדה התעופה קולומבו (כ-5.5 שעות).</p>
            <p><strong>ערב:</strong> ארוחת ערב אחרונה לפני הטיסה (במלון/בית חב"ד).</p>
            <p className="text-xs text-stone-500 mt-1">ארוחות כלולות: בוקר, ערב</p>
          </div>
        </div>

        <p className="text-xs mt-4"><strong>הבהרה משפטית:</strong> המסלול המוצג לעיל מפרט את הלו"ז המתוכנן והפעילויות הכלולות. המארגנים שומרים לעצמם את הזכות המלאה לבצע התאמות הכרחיות במסלול, בסדר הימים, או להחליף את המלונות המפורטים במקומות לינה ברמה זהה, עקב אילוצי שטח, החלטות ספקים מקומיים, תנאי מזג אוויר או כוח עליון.</p>
        <p className="text-xs mt-2"><strong>פירוט רכיב פעילויות ($290 USD):</strong> הרכיב מכסה במלואו את כל דמי הכניסה הקבוצתיים, הדרכה מקומית, ולוגיסטיקה עבור הפעילויות הכלולות. פעילויות אופציונליות או טיפולי ספא ישולמו בנפרד על ידי המשתתפת.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="ltr">
      <p className="font-bold text-base">Itinerary Appendix – Women\'s Journey to Sri Lanka (Summer 2027)</p>
      
      <div className="space-y-3">
        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 1: Arrival & Journey to Sigiriya</p>
          <p><strong>Afternoon:</strong> Landing at Colombo Airport (CMB) and formal airport procedures.</p>
          <p><strong>Evening:</strong> Scenic group drive to Sigiriya (approx. 4 hours).</p>
          <p><strong>Night:</strong> Hotel check-in, room assignments, and a late welcome dinner.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Dinner | Accommodation: Hotel Sigiriya (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 2: The Wonders of Sigiriya</p>
          <p><strong>Early Morning:</strong> Guided sunrise hike at the iconic Sigiriya Rock.</p>
          <p><strong>Morning:</strong> Breakfast at the hotel.</p>
          <p><strong>Mid-Day:</strong> Authentic Village Tour and a Wildlife Elephant Safari.</p>
          <p><strong>Evening:</strong> Dinner, followed by relaxation time (Optional: Ayurvedic spa/massage).</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel Sigiriya (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 3: Kithulgala Rainforest & Nuwara Eliya</p>
          <p><strong>Early Morning:</strong> Sunrise hike and morning Yoga session.</p>
          <p><strong>Morning:</strong> Breakfast at the hotel and drive to Kithulgala.</p>
          <p><strong>Afternoon:</strong> Whitewater rafting and a rainforest canyoning walk.</p>
          <p><strong>Evening:</strong> Drive to Nuwara Eliya and dinner at the hotel.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel in Nuwara Eliya.</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 4: Tea Plantations & The Scenic Train to Ella</p>
          <p><strong>Morning:</strong> Yoga session and breakfast.</p>
          <p><strong>Mid-Day:</strong> Guided tour of the Nuwara Eliya Tea Plantations and waterfalls.</p>
          <p><strong>Afternoon:</strong> The famous scenic train ride from Nuwara Eliya to Ella.</p>
          <p><strong>Evening:</strong> Arrival in Ella, hotel check-in, and dinner at the local Chabad House.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel in Ella.</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 5: The Heights of Ella</p>
          <p><strong>Early Morning:</strong> Sunrise hike and Yoga session.</p>
          <p><strong>Morning:</strong> Breakfast at the hotel.</p>
          <p><strong>Mid-Day:</strong> Nature excursion to the spectacular Diyaluma Falls.</p>
          <p><strong>Afternoon:</strong> Omega Zipline experience and time to freshen up at the hotel.</p>
          <p><strong>Evening:</strong> Town exploration, shopping, and dinner at the Chabad House.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Hotel in Ella.</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 6: Journey to the East Coast – Pasikudah</p>
          <p><strong>Morning:</strong> Yoga session, breakfast, and transit to Pasikudah.</p>
          <p><strong>Mid-Day:</strong> Morning SUP (Stand Up Paddleboarding) and beach relaxation at Pasikudah Bay.</p>
          <p><strong>Late Afternoon:</strong> Preparations for Shabbat.</p>
          <p><strong>Evening:</strong> Shabbat begins; festive dinner.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Pasikudah Bay Hotel (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 7: A Restful Shabbat in Pasikudah</p>
          <p><strong>Morning:</strong> Morning coffee/cake, followed by a late breakfast/brunch.</p>
          <p><strong>Afternoon:</strong> Lunch and leisurely beach time.</p>
          <p><strong>Evening:</strong> Motzash (Shabbat ends) and dinner at the hotel.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Lunch, Dinner | Accommodation: Pasikudah Bay Hotel (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 8: Ocean Adventures in Trincomalee</p>
          <p><strong>Morning:</strong> Yoga session and breakfast.</p>
          <p><strong>Mid-Day:</strong> Excursion to Trincomalee for snorkeling, local shopping, and optional marine wildlife watching.</p>
          <p><strong>Evening:</strong> Dinner and optional Ayurvedic spa treatments.</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner | Accommodation: Pasikudah Bay Hotel (or similar).</p>
        </div>

        <div className="border-l-4 border-teal-500 pl-3">
          <p className="font-bold text-teal-800">Day 9: Farewell & Departure</p>
          <p><strong>Morning:</strong> Final sunrise hike, Yoga session, and breakfast.</p>
          <p><strong>Afternoon:</strong> Departure drive to Colombo Airport (approx. 5.5 hours).</p>
          <p><strong>Evening:</strong> Final dinner before the flight (Hotel/Chabad House).</p>
          <p className="text-xs text-stone-500 mt-1">Meals: Breakfast, Dinner</p>
        </div>
      </div>

      <p className="text-xs mt-4"><strong>Legal Disclaimer:</strong> The itinerary presented above outlines the planned schedule and included activities. The Organizers reserve the full right to make necessary adjustments to the itinerary, the order of days, or substitute the specified hotels with accommodations of an identical standard, due to field constraints, local supplier decisions, weather conditions, or force majeure.</p>
      <p className="text-xs mt-2"><strong>Activity Component Breakdown ($290 USD):</strong> Included Activities (Covered under the $290 USD Component) fully covers all group entry fees, local guiding services, and logistics for the included excursions. Excluded / Optional Activities (Paid Separately on Site) such as Ayurvedic spa treatments or marine wildlife excursions must be paid for independently.</p>
    </div>
  );
}
