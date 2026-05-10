'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

export const defaultContentData = {
  he: {
    nav: {
      home: 'בית', itinerary: 'המסלול', essentials: 'מידע חשוב', discovery: 'גלריה', about: 'הסיפור שלנו', register: 'הצטרפו למסע', toggle: 'Switch to English'
    },
    hero: {
      title: 'סבתות בסרי לנקה\nקיץ 2026', subtitle: 'חוויה מיוחדת ובלתי נשכחת שתפרנו במיוחד בשבילנו - נשים שמחפשות לחוות קצת "טיול אחרי צבא", אבל בקצב רגוע ועם כל הפינוקים של טיול מאורגן. עשרה ימים של קסם בסוף הקיץ.', tagline: 'טיול של פעם בחיים', cta_plan: 'צפו בתוכנית', cta_discover: 'גלו עוד'
    },
    features: {
      title: 'יותר מסתם טיול', f1_title: 'וולנס ויוגה', f1_desc: 'תרגולי יוגה עדינים בזריחה או בשקיעה, לכל הרמות, למתיחה והרגעה של הגוף והנפש.', f2_title: 'תרבות אותנטית', f2_desc: 'מספארי ועד מטעי תה וטיולי זריחה, תקבלו את ההזדמנות לראות את סרי לנקה האמיתית.', f3_title: 'כשרות מלאה', f3_desc: 'אנחנו מקפידים על חומרי גלם מקומיים וטריים. צוות טבחים מקומי יבשל עבורנו, כשאחד מאיתנו (מהצוות הישראלי) נמצא שם צמוד כדי לפקח על הכל ולהבטיח שהכל עומד בהכשר.'
    },
    gallery: {
      title: 'לחוות את הקסם', desc: 'ממפלים משגעים ומטעי תה ירוקים, דרך בריכות אינפיניטי טבעיות ועד לחופים הכי יפים שיש - זו ההזדמנות שלנו לחוות את סרי לנקה האמיתית והאותנטית.', cta: 'שריינו מקום בטיול'
    },
    itinerary: {
      title: 'פרטי המסע', subtitle: 'תוכנית יומית מפורטת ל-10 ימים',
      headers: { hour: 'שעה', place: 'מיקום', activity: 'פעילות' },
      days: [
        { day: "1", title: "מגיעים לסרי לנקה", desc: "ההיילייט של היום - מסאז' מפנק במיוחד בסיגיריה, כדי להיכנס לאווירה.", highlight: "מסאז' מפנק בסיגיריה", 
          schedule: [
            { hour: "-", place: "ישראל", activity: "טיסה" },
            { hour: "-", place: "קולומבו", activity: "נסיעה באוטובוס לסיגירייה" },
            { hour: "-", place: "סיגירייה", activity: "קבלת חדרים והתארגנות" },
            { hour: "-", place: "סיגירייה", activity: "ארוחת ערב" },
            { hour: "-", place: "סיגירייה", activity: "עיסוי מפנק" }
          ]
        },
        { day: "2", title: "סלע האריה וספארי", desc: "השכמה מוקדמת לטיפוס מרגש, סיור בכפר האותנטי וספארי אחר הצהריים.", highlight: "סלע האריה וספארי פילים", 
          schedule: [
            { hour: "05:00", place: "סלע האריה (Sigiriya Rock)", activity: "טיפוס וזריחה" },
            { hour: "08:00 - 09:00", place: "מלון בסיגירייה", activity: "ארוחת בוקר" },
            { hour: "10:00 - 15:00", place: "כפר מקומי", activity: "סיור כפר אותנטי" },
            { hour: "15:00 - 16:00", place: "מלון", activity: "מנוחה" },
            { hour: "16:00 - 18:00", place: "ספארי", activity: "טיול ספארי" },
            { hour: "18:30 - 19:30", place: "מלון בסיגירייה", activity: "ארוחת ערב" },
            { hour: "20:30", place: "מלון", activity: "זמן חופשי / התאוששות" }
          ]
        },
        { day: "3", title: "אקסטרים בקיטולגלה", desc: "יום מלא אדרנלין עם רפטינג וקניונינג, ומעבר לנווארה אליה הקרירה.", highlight: "רפטינג וקניונינג", 
          schedule: [
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
            { hour: "09:30 - 13:30", place: "קיטולגלה", activity: "נסיעה" },
            { hour: "14:00 - 15:30", place: "קיטולגלה", activity: "רפטינג" },
            { hour: "15:30 - 17:00", place: "קיטולגלה", activity: "קניונינג" },
            { hour: "15:30 - 17:00", place: "קיטולגלה", activity: "הליכה ביער הגשם" },
            { hour: "17:30 - 19:30", place: "נווארה אליה", activity: "נסיעה" },
            { hour: "19:30 - 20:30", place: "מלון בנווארה אליה", activity: "ארוחת ערב" }
          ]
        },
        { day: "4", title: "תה, רכבות ואלה", desc: "הזהב הירוק של סרי לנקה ונסיעת הרכבת היפה בעולם בדרך אל העיירה אלה.", highlight: "נסיעת הרכבת לאלה", 
          schedule: [
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
            { hour: "09:30 - 14:30", place: "מטעי תה", activity: "סיור במטעי התה" },
            { hour: "15:00 - 17:30", place: "נווארה אליה", activity: "נסיעת רכבת לאלה" },
            { hour: "17:30 - 18:00", place: "אלה", activity: "נסיעה למלון" },
            { hour: "19:30 - 20:30", place: "מלון באלה", activity: "ארוחת ערב" }
          ]
        },
        { day: "5", title: "מפלים ואדרנלין", desc: "נופים עוצרי נשימה במפלי דיאלומא וגלישת אומגה מעל הצמרות.", highlight: "מפלי דיאלומא ואומגה", 
          schedule: [
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון באלה", activity: "ארוחת בוקר" },
            { hour: "09:30 - 13:30", place: "אלה", activity: "מפלי דיאלומא" },
            { hour: "15:30 - 17:00", place: "אלה", activity: "גלישת אומגה (Zipline)" },
            { hour: "15:30 - 17:00", place: "אלה", activity: "הסתובבות וקניות" },
            { hour: "17:30 - 20:30", place: "פסיקודה", activity: "נסיעה לפסיקודה" },
            { hour: "19:30 - 20:30", place: "מלון בפסיקודה", activity: "ארוחת ערב" }
          ]
        },
        { day: "6", title: "החיים על החוף", desc: "מגיעות לפסיקודה המהממת ומתמקמות.", highlight: "שבת בפסיקודה", 
          schedule: [
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בפסיקודה", activity: "ארוחת בוקר" },
            { hour: "09:30 - 12:00", place: "פוטוביל", activity: "סאפ בוקר בלגונה" },
            { hour: "13:30 - 15:30", place: "פסיקודה", activity: "שיעור גלישה / זמן חוף" },
            { hour: "15:30 - 17:00", place: "מלון", activity: "התארגנות לשבת" },
            { hour: "17:15", place: "מלון", activity: "כניסת שבת" },
            { hour: "18:30 - 19:30", place: "מלון בפסיקודה", activity: "ארוחת ערב שבת" }
          ]
        },
        { day: "7", title: "שבת מנוחה", desc: "יום מנוחה רגוע בפסיקודה. זמן ליהנות מהאווירה ולאגור כוחות.", highlight: "מנוחה וחופש", 
          schedule: [
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בפסיקודה", activity: "ארוחת בוקר" },
            { hour: "18:30", place: "פסיקודה", activity: "מוצאי שבת" },
            { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב" }
          ]
        },
        { day: "8", title: "טרינקומלי", desc: "החוויה המרכזית שלנו היום תהיה שייט בעקבות לווייתנים ודולפינים, וצלילת שנורקלים כיפית ביחד.", highlight: "שייט לווייתנים ושנורקלים", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בפסיקודה", activity: "ארוחת בוקר" },
            { hour: "09:30 - 12:30", place: "טרינקומלי", activity: "שייט וצלילה / קניות" },
            { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב" }
          ]
        },
        { day: "9", title: "זמן ים אחרון", desc: "נצלו כל רגע של שמש, גלים וחול על החוף לפני הפרידה.", highlight: "ים ושמש", 
          schedule: [
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בפסיקודה", activity: "ארוחת בוקר" },
            { hour: "09:30 - 17:00", place: "פסיקודה", activity: "זמן חוף חופשי / קניות אחרונות" },
            { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב" }
          ]
        },
        { day: "10", title: "פרידה מהקסם", desc: "אריזות אחרונות, ארוחת בוקר ונסיעה חזרה עם זיכרונות לכל החיים.", highlight: "חזרה הביתה", 
          schedule: [
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בפסיקודה", activity: "ארוחת בוקר" },
            { hour: "10:00", place: "סרי לנקה", activity: "נסיעה חזרה ותחילת מסע הביתה" }
          ]
        }
      ]
    },
    essentials: {
      title: 'מידע חשוב - טוב לדעת', subtitle: 'כל מה שצריך לדעת לפני שאורזים מזוודה.', categories: [
        { title: "ויזה (ETA)", items: ["ישראלים חייבים ויזה אלקטרונית (כ-50$ באתר eta.gov.lk)", "דרכון בתוקף ל-6 חודשים לפחות"] },
        { title: "כסף ומטבע", items: ["מטבע: רופי סרי-לנקי (LKR)", "להביא דולרים חדשים ונקיים להמרה", "מומלץ להצטייד במזומן מכיוון שלא כל מקום מקבל אשראי. ניתן להוציא כסף בקלות בכספומטים מקומיים."] },
        { title: "חשמל", items: ["מתח 230V. ברוב המקומות שקעים ישראלים (2 פינים) עובדים ללא בעיה.", "עבור תקעים אמריקאים נדרש מתאם."] },
        { title: "ביגוד", items: ["בגדים נוחים לטיולים", "בגדים נוחים להליכה בעיר", "בגדי ים", "סנדלים ונעלי הליכה לטיולים"] },
        { title: "אוכל וכשרות", items: ["האירוח שלנו הוא על בסיס חצי פנסיון - אנחנו מספקים ארוחות כשרות לאורך כל הטיול.", "בתי חב\"ד: קולומבו, אלה, פסיקודה", "פירות טרופיים בשפע"] }
      ]
    },
    discovery: {
      title: 'מגלים את סרי לנקה', subtitle: 'קצת רקע והיסטוריה שיעשו לכם חשק לארוז.', articles: [
        { title: "אלה (Ella): בין ההרים", text: "עיירה הררית קסומה מוקפת מטעי תה, מפלים ונופים ירוקים אינסופיים." },
        { title: "תה ציילוני: הזהב הירוק", text: "סרי לנקה היא מעצמת תה עולמית. נלמד איך הקלימט הקריר מייצר את הטעם המושלם." },
        { title: "פסיקודה: שמש ושלווה", text: "אחד מהחופים היפים בעולם עם אווירה רגועה, לגונות ונופים מרהיבים." },
        { title: "ספארי וחיות בר", text: "פילים, תנינים, ציפורים נדירות ואפילו נמרים. סרי לנקה היא גן עדן לחובבי טבע." }
      ]
    },
    about: { 
      title: 'הסיפור שלנו', 
      p1: 'אז נעים להכיר! אנחנו איל, עליזה ונעמי :) בקיץ 2025, נפגשנו בסרי לנקה לקראת סוף ירח הדבש הארוך של איל ועליזה במזרח. אלה היו 10 ימים קסומים של טבע, גלישה, חופים, נופים ומלונות פשוט מצוינים (חוץ מאחד, אבל היינו צריכים משהו לקטר עליו קצת).', 
      p2: 'כשחזרנו הביתה, עלה לי (לנעמי) רעיון. למה לא להביא את החוויה המטורפת הזו של "טיול למזרח", שלגמרי משנה חיים, גם לאימהות וסבתות? הרי כל כך הרבה צעירים ישראלים נוסעים לחלק הזה של העולם אחרי הצבא, נושמים את התרבות, עושים דברים שבחיים לא היו עושים בבית וחוזרים עם פרספקטיבה חדשה לגמרי. אנחנו באמת מאמינים שלכל אחת מגיעה ההזדמנות הזו. (בעצם, אנחנו חושבים שכולם צריכים את זה, אבל נדבר על זה כבר כשניפגש...).\n\nאנחנו לא אנשי מכירות, אנחנו לא סוכנות נסיעות ואנחנו לא עובדים עם שום חברה ענקית. אנחנו פשוט שלושה אנשים שהתאהבו בכל מה שיש לסרי לנקה להציע, ורוצים לתת לכן את ההזדמנות לחוות את זה יחד איתנו.', 
      p3: 'כל אחד מאיתנו מביא משהו קצת אחר להרפתקה שלנו. אני, נעמי, אהיה איתכן לכל אורך הדרך, אדאג שכולנו נהנות מכל רגע ואהיה זמינה לכל שאלה. איל ועליזה, שהם גם מדריכי יוגה מוסמכים וגם בשלנים נהדרים, ישגיחו על המטבח יחד עם הצוות המקומי כדי לוודא שיש לנו כשרות מלאה. הם ידאגו שכולנו אוכלות טוב ומרגישות במיטבנו. חוץ מזה, ילווה אותנו מדריך ונהג מקומי, גם כדי שנתנייד בנוחות וגם כדי שנכיר קצת יותר מקרוב את התרבות המקומית המרתקת.', 
      team: { eyal: 'עליזה ואיל', naomi: 'נעמי', guide: 'מדריך מקומי' },
      contact: 'צרו קשר:\nאיל: 054-...\nנעמי: 054-...'
    },
    register: { 
      title: 'שריינו את המקום שלכן', subtitle: 'מלאו פרטים ונחזור אליכם תוך 24 שעות.', contact_wa: 'שאלות? דברו עם איל', contact_email: 'או שלחו מייל', details: ["מוגבל ל-15 משתתפות", "אין צורך בתשלום מיידי", "מדיניות ביטולים הוגנת"], 
      form: { name: 'שם מלא', phone: 'טלפון', email: 'אימייל', guests: 'מספר משתתפים', notes: 'הערות', submit: 'שליחת בקשת הרשמה', success_title: 'תודה רבה! הבקשה התקבלה.', success_desc: 'ניצור קשר בהקדם להשלמת ההרשמה ולמתן פרטים נוספים.', success_btn: 'שלח בקשה נוספת', error: 'אירעה שגיאה בשליחת הטופס. אנא נסה שוב או צור קשר בוואטסאפ.', submitting: 'שולח...' }
    }
  },
  en: {
    nav: { home: 'Home', itinerary: 'Itinerary', essentials: 'Good to Know', discovery: 'Gallery', about: 'Our Story', register: 'Join Us', toggle: 'עבור לעברית' },
    hero: { 
      title: 'Savtot in Sri Lanka\nSummer 2026', 
      subtitle: 'A unique and unforgettable experience designed exclusively for mothers and grandmothers. The journey will feature an easy pace, exciting moments and local charm with a focus on nature, adventure, friendship and the beach.\n\n10 incredible days | Post-kids/grandkids camp | End-of-summer', 
      tagline: 'The trip of a lifetime', 
      cta_plan: 'See the Plan', 
      cta_discover: 'Experience the magic' 
    },
    features: { 
      title: 'More than just a trip', 
      f3_title: 'Fully kosher', 
      f3_desc: 'Fresh local ingredients prepared to kosher standards. A unique opportunity to experience the incredible local cuisine',
      f2_title: 'Authentic culture', 
      f2_desc: 'From safaris to tea plantations to sunrise hikes, you will get the chance to see the real Sri Lanka',
      f1_title: 'Wellness & Yoga', 
      f1_desc: 'Gentle yoga sessions at sunrise or sunset, for all levels to stretch and calm the body and mind'
    },
    gallery: {
      title: 'Experience the magic',
      desc: 'From majestic waterfalls to glorious tea plantations to the golden shores of Arugam Bay, you’ll get the chance to see all the wonders of Sri Lanka',
      cta: 'More info / Save your spot'
    },
    itinerary: {
      title: 'Your fully planned adventure', subtitle: 'A 10-day journey of discovery and relaxation',
      headers: { hour: 'Time', place: 'Location', activity: 'Activity' },
      days: [
        { day: "1", title: "Arriving in Sri Lanka", desc: "Landing in Colombo and driving to Sigiriya. Time to settle in, meet everyone, and have dinner.", highlight: "Arrival & Settling In", 
          schedule: [
            { hour: "-", place: "Israel", activity: "Flight" },
            { hour: "-", place: "Colombo", activity: "Bus ride to Sigiriya" },
            { hour: "-", place: "Sigiriya", activity: "Room assignment & Settling in" },
            { hour: "-", place: "Sigiriya", activity: "Dinner" },
            { hour: "-", place: "Sigiriya", activity: "Pampering massage" }
          ]
        },
        { day: "2", title: "Lion Rock & Safari", desc: "Early wake-up for an exciting climb, an authentic village tour, and an afternoon safari.", highlight: "Lion's Rock & Elephant Safari", 
          schedule: [
            { hour: "05:00", place: "Sigiriya Rock", activity: "Climb & Sunrise" },
            { hour: "08:00 - 09:00", place: "Hotel in Sigiriya", activity: "Breakfast" },
            { hour: "10:00 - 15:00", place: "Local Village", activity: "Authentic Village Tour" },
            { hour: "15:00 - 16:00", place: "Hotel", activity: "Rest" },
            { hour: "16:00 - 18:00", place: "Safari", activity: "Safari Tour" },
            { hour: "18:30 - 19:30", place: "Hotel in Sigiriya", activity: "Dinner" },
            { hour: "20:30", place: "Hotel", activity: "Free Time / Recovery" }
          ]
        },
        { day: "3", title: "Kitulgala Extreme", desc: "An adrenaline-filled day with rafting and canyoning, moving on to the cool Nuwara Eliya.", highlight: "Rafting & Canyoning", 
          schedule: [
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
            { hour: "09:30 - 13:30", place: "Kitulgala", activity: "Drive" },
            { hour: "14:00 - 15:30", place: "Kitulgala", activity: "Rafting" },
            { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Canyoning" },
            { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Rainforest Walk" },
            { hour: "17:30 - 19:30", place: "Nuwara Eliya", activity: "Drive" },
            { hour: "19:30 - 20:30", place: "Hotel in Nuwara Eliya", activity: "Dinner" }
          ]
        },
        { day: "4", title: "Tea, Trains & Ella", desc: "Sri Lanka's green gold and the most beautiful train ride in the world on the way to the town of Ella.", highlight: "Train Ride to Ella", 
          schedule: [
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
            { hour: "09:30 - 14:30", place: "Tea Plantations", activity: "Tea Plantations Tour" },
            { hour: "15:00 - 17:30", place: "Nuwara Eliya", activity: "Train ride to Ella" },
            { hour: "17:30 - 18:00", place: "Ella", activity: "Drive to Hotel" },
            { hour: "19:30 - 20:30", place: "Hotel in Ella", activity: "Dinner" }
          ]
        },
        { day: "5", title: "Waterfalls & Adrenaline", desc: "Breathtaking views at Diyaluma Falls and ziplining over the treetops.", highlight: "Diyaluma Falls & Zipline", 
          schedule: [
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel in Ella", activity: "Breakfast" },
            { hour: "09:30 - 13:30", place: "Ella", activity: "Diyaluma Falls" },
            { hour: "15:30 - 17:00", place: "Ella", activity: "Ziplining" },
            { hour: "15:30 - 17:00", place: "Ella", activity: "Walking around & Shopping" },
            { hour: "17:30 - 20:30", place: "Arugam Bay", activity: "Drive to Arugam Bay" },
            { hour: "19:30 - 20:30", place: "Hotel in Arugam Bay", activity: "Dinner" }
          ]
        },
        { day: "6", title: "Beach Life", desc: "Morning SUP, a surf lesson, and welcoming Shabbat facing the sea of Arugam Bay.", highlight: "Shabbat in Arugam Bay", 
          schedule: [
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel in Arugam Bay", activity: "Breakfast" },
            { hour: "09:30 - 12:00", place: "Pottuvil", activity: "Morning Lagoon SUP" },
            { hour: "13:30 - 15:30", place: "Arugam Bay", activity: "Surf Lesson / Beach Time" },
            { hour: "15:30 - 17:00", place: "Hotel", activity: "Shabbat Preparations" },
            { hour: "17:15", place: "Hotel", activity: "Shabbat Begins" },
            { hour: "18:30 - 19:30", place: "Hotel in Arugam Bay", activity: "Shabbat Dinner" }
          ]
        },
        { day: "7", title: "Shabbat Rest", desc: "A calm day of rest in Arugam Bay. Time to enjoy the atmosphere and recharge your batteries.", highlight: "Rest & Freedom", 
          schedule: [
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel in Arugam Bay", activity: "Breakfast" },
            { hour: "18:30", place: "Arugam Bay", activity: "End of Shabbat" },
            { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
          ]
        },
        { day: "8", title: "Surfing & Shopping", desc: "Continuing the adventure with surfing at famous beaches and wandering around the town.", highlight: "Surfing in Arugam Bay", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise Hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel in Arugam Bay", activity: "Breakfast" },
            { hour: "09:30 - 12:30", place: "Arugam Bay", activity: "Surfing / Shopping" },
            { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
          ]
        },
        { day: "9", title: "Final Beach Time", desc: "Take advantage of every moment of sun, waves, and sand on the beach before parting.", highlight: "Sea & Sun", 
          schedule: [
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel in Arugam Bay", activity: "Breakfast" },
            { hour: "09:30 - 17:00", place: "Arugam Bay", activity: "Free Beach Time / Final Shopping" },
            { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
          ]
        },
        { day: "10", title: "Farewell to the Magic", desc: "Final packing, breakfast, and the drive back with memories for a lifetime.", highlight: "Heading Home", 
          schedule: [
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel in Arugam Bay", activity: "Breakfast" },
            { hour: "10:00", place: "Sri Lanka", activity: "Drive back and begin the journey home" }
          ]
        }
      ]
    },
    essentials: { 
      title: 'Good to know', subtitle: 'Everything you need to know before packing your bags.', 
      categories: [
        { title: "Clothing", items: ["Comfortable clothes for hiking", "Comfortable clothes for city walking", "Bathing suits", "Sandals and hiking shoes"] },
        { title: "Visa (ETA)", items: ["Israelis need an ETA (~$50 USD)", "Apply at eta.gov.lk", "Passport valid for 6 months"] },
        { title: "Money & Currency", items: ["Currency: Sri Lankan Rupee (LKR)", "Bring clean USD notes", "It is recommended to have cash as not all places accept credit cards. Cash can be easily withdrawn from local ATMs."] },
        { title: "Electricity", items: ["Voltage: 230V. Israeli plugs (2 pins) work in most places without an issue.", "American plugs require an adapter."] },
        { title: "Kosher Food", items: ["We provide kosher-style meals", "Chabad Houses: Colombo, Ella, Arugam Bay", "Fresh tropical fruit"] }
      ]
    },
    discovery: { title: 'Discovery', subtitle: 'Get excited about the destination.', articles: [
        { title: "Ella: Mountain Bliss", text: "A magical mountain town surrounded by tea plantations, waterfalls, and endless green views." },
        { title: "Ceylon Tea", text: "Sri Lanka is a world tea power. We'll learn how the cool climate creates the perfect flavor." },
        { title: "Arugam Bay", text: "One of the world's best surf spots with a young vibe, lagoons, and roaming elephants." },
        { title: "Safari & Wildlife", text: "Elephants, crocodiles, rare birds and even leopards. Sri Lanka is a paradise for nature lovers." }
      ]
    },
    about: { 
      title: 'Our Story', 
      p1: 'So here we are, Eyal, Aliza, and Naomi 🙂.\n\nIn the summer of 2025, the three of us met in Sri Lanka after Eyal and Aliza completed a long honeymoon in the East. It was 10 miraculous days of waterfalls, surfing, beaches, landscapes, and simply excellent hotels (and one bad one, just so we’d have something to complain about).', 
      p2: 'We returned home, and Naomi had an idea. Why not make this incredible, life-changing experience of travelling to the East accessible to savtas and mothers? So many young Israelis travel after the army to this part of the world and they have the time of their lives. They live the culture, they take on challenges they never would at home and they see life from a completely new perspective. We believe everyone should get the chance to do this. (We actually believe everyone needs to do this but we’ll discuss that when we meet:)\n\nWe realized that who better to guide savtas and mothers on this life-changing journey than us? We are not salespeople, we are not a travel agency, we are not working with any big companies. We are 3 people who are passionate about all that Sri Lanka has to offer and we want to give you the opportunity to share that passion.', 
      p3: 'We each bring something else to your Sri Lankan adventure. I, Naomi, will be with you through every experience, making sure everyone is thoroughly enjoying themselves and always available to answer any and all questions. Eyal and Aliza, are trained yoga instructors and incredible chefs and they will make sure everyone is well fed and feeling their best. (They also play guitar and ukulele, respectively, which will come in handy at our nighttime beach concerts.) We will also have a local guide and driver with us to make sure we can easily get around and to give us an understanding and appreciation for the local culture.', 
      team: { eyal: 'Aliza & Eyal', naomi: 'Naomi', guide: 'Local Guide' },
      contact: 'Contact us:\nEyal: +972 ...\nNaomi: +972 ...'
    },
    register: { 
      title: 'Secure Your Spot', subtitle: 'Fill out the details below, and we will contact you within 24 hours.', contact_wa: 'Contact Eyal', contact_email: 'Or Email Us', details: ["Limited to 15 participants", "No immediate payment", "Full refund policy"], 
      form: { name: 'Full Name', phone: 'Phone', email: 'Email', guests: 'Number of Travelers', notes: 'Special Requests', submit: 'Send Request', success_title: 'Thank you! Request received.', success_desc: 'We will contact you soon to complete your registration.', success_btn: 'Send another request', error: 'Error sending form. Please try again or contact us via WhatsApp.', submitting: 'Sending...' }
    }
  }
};

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [siteContent, setSiteContent] = useState(defaultContentData);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('/api/content', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => setSiteContent(data))
      .catch(e => console.error('Failed to load content:', e));
      
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  const handleUpdateContent = useCallback((path, newValue) => {
    setSiteContent(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = newValue;
      return newData;
    });
  }, []);

  const t = useMemo(() => {
    const base = defaultContentData[lang] || defaultContentData.en;
    const live = siteContent?.[lang];
    
    if (!live) return base;
    
    // Simple shallow merge for top-level sections (hero, features, etc.)
    // In a real app, you might want a recursive deep merge.
    return {
      ...base,
      ...live,
      nav: { ...base.nav, ...live.nav },
      hero: { ...base.hero, ...live.hero },
      features: { ...base.features, ...live.features },
      gallery: { ...base.gallery, ...live.gallery },
      itinerary: { ...base.itinerary, ...live.itinerary },
      essentials: { ...base.essentials, ...live.essentials },
      discovery: { ...base.discovery, ...live.discovery },
      about: { ...base.about, ...live.about },
      register: { ...base.register, ...live.register },
    };
  }, [siteContent, lang]);

  const toggleLanguage = useCallback(() => {
    setLang(prev => prev === 'he' ? 'en' : 'he');
  }, []);

  useEffect(() => {
    document.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <SiteContext.Provider value={{ lang, t, toggleLanguage, handleUpdateContent, isAdmin, setIsAdmin }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
