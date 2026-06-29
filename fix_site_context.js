const fs = require('fs');

const fileContent = fs.readFileSync('contexts/SiteContext.jsx', 'utf8');

const newContext = `use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

export const defaultContentData = {
  he: {
    nav: {
      home: 'בית', itinerary: 'המסלול', essentials: 'מידע חשוב', discovery: 'גלריה', about: 'הסיפור שלנו', register: 'הצטרפו למסע', toggle: 'Switch to English'
    },
    hero: {
      title: 'סבתות בסרי לנקה\\nקיץ 2027',
      subtitle: 'ממפלים מרהיבים ומטעי תה ירוקים, ל״בריכות אינפיניטי" טבעיות והחופים היפים ביותר שיש.\\nחוויה מיוחדת ובלתי נשכחת שארגנו במיוחד בשבילך, אישה שמחפשת לחוות קצת ״טיול אחרי צבא״\\nאבל בקצב רגוע ועם כל הפינוקים של טיול מאורגן.',
      tagline: 'טיול של פעם בחיים',
      cta_plan: 'צפו בתוכנית',
      cta_discover: 'גלו עוד',
      kosher: 'הטיול עם כשרות מלאה.',
      yoga: 'כולל תרגולי יוגה יומיים.',
      dates_disclaimer: '* תאריכים מדויקים יפורסמו בהמשך.'
    },
    features: {
      title: 'יותר מסתם טיול', f1_title: 'וולנס ויוגה', f1_desc: 'תרגולי יוגה עדינים בזריחה או בשקיעה, לכל הרמות, למתיחה והרגעה של הגוף והנפש.', f2_title: 'תרבות אותנטית', f2_desc: 'מספארי ועד מטעי תה וטיולי זריחה, תקבלו את ההזדמנות לראות את סרי לנקה האמיתית.', f3_title: 'כשרות מלאה', f3_desc: 'אנחנו מקפידים על חומרי גלם מקומיים וטריים. צוות טבחים מקומי יבשל עבורנו, כשאחד מאיתנו (מהצוות הישראלי) נמצא שם צמוד כדי לפקח על הכל ולהבטיח שהכל עומד בהכשר.'
    },
    gallery: {
      title: 'לחוות את הקסם', desc: 'ממפלים משגעים ומטעי תה ירוקים, דרך בריכות אינפיניטי טבעיות ועד לחופים הכי יפים שיש - זו ההזדמנות שלנו לחוות את סרי לנקה האמיתית והאותנטית.', cta: 'שריינו מקום בטיול'
    },
    itinerary: {
      title: 'פרטי המסע', subtitle: 'תוכנית יומית מפורטת',
      headers: { hour: 'שעה', place: 'מיקום', activity: 'פעילות' },
      summer: {
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
          { day: "7", title: "שבת מנוחה", desc: "יום מנוחה רגוע בפסיקודה, סשן יוגה שבת לייט, זמן ליהנות מהאווירה ולאגור כוחות.", highlight: "מנוחה וחופש", 
            schedule: [
              { hour: "08:00 - 09:00", place: "מלון בפסיקודה", activity: "ארוחת בוקר" },
              { hour: "09:30", place: "מלון", activity: "יוגה שבת לייט" },
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
          }
        ]
      },
      winter: {
        days: [
          { day: "1", title: "מגיעים לסרי לנקה", desc: "ההיילייט של היום - מסאז' מפנק במיוחד במלון בקולומבו/נגומבו להתחלת המסע באווירה רגועה.", highlight: "מסאז' מפנק במלון",
            schedule: [
              { hour: "-", place: "ישראל", activity: "טיסה" },
              { hour: "-", place: "קולומבו", activity: "נסיעה באוטובוס לקולומבו/נגומבו" },
              { hour: "-", place: "מלון", activity: "קבלת חדרים והתארגנות" },
              { hour: "-", place: "מלון", activity: "ארוחת ערב" },
              { hour: "-", place: "מלון", activity: "מסאז' מפנק" }
            ]
          },
          { day: "2", title: "אקסטרים בקיטולגלה", desc: "השכמה מוקדמת לטיול זריחה, יוגה במלון ונסיעה לקיטולגלה לרפטינג וקניונינג מרגשים ביער הגשם, לפני שממשיכים לנווארה אליה.", highlight: "רפטינג וקניונינג ביער הגשם",
            schedule: [
              { hour: "05:00", place: "מלון", activity: "טיול זריחה" },
              { hour: "06:30", place: "מלון", activity: "יוגה במלון" },
              { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
              { hour: "09:30 - 13:30", place: "קיטולגלה", activity: "נסיעה לקיטולגלה" },
              { hour: "14:00 - 15:30", place: "קיטולגלה", activity: "רפטינג" },
              { hour: "15:30 - 17:00", place: "קיטולגלה", activity: "קניונינג והליכה ביער הגשם" },
              { hour: "17:30 - 19:30", place: "נווארה אליה", activity: "נסיעה לנווארה אליה" },
              { hour: "19:30 - 20:30", place: "מלון בנווארה אליה", activity: "ארוחת ערב במלון" }
            ]
          },
          { day: "3", title: "תה, רכבות ואלה", desc: "טיול זריחה ותרגול יוגה בבוקר, סיור מרתק במטעי תה ועלייה על הרכבת הנופית היפה בעולם בדרך אל העיירה אלה.", highlight: "הרכבת הנופית לאלה ומטעי התה",
            schedule: [
              { hour: "05:00", place: "מלון", activity: "טיול זריחה" },
              { hour: "06:30", place: "מלון", activity: "יוגה" },
              { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
              { hour: "09:30 - 14:30", place: "מטעי תה", activity: "סיור במטעי תה" },
              { hour: "15:00 - 17:30", place: "נווארה אליה", activity: "נסיעת רכבת לאלה" },
              { hour: "17:30 - 18:00", place: "אלה", activity: "נסיעה למלון" },
              { hour: "19:30 - 20:30", place: "מלון באלה", activity: "ארוחת ערב" }
            ]
          },
          { day: "4", title: "מפלים ואדרנלין באלה", desc: "טיול זריחה ויוגה, ביקור במפלי דיאלומא המרשימים, גלישת אומגה (Flying Ravana) וקניות באלה, ולאחר מכן נסיעה וארוחת ערב.", highlight: "מפלי דיאלומא ואומגה באלה",
            schedule: [
              { hour: "05:00", place: "מלון", activity: "טיול זריחה" },
              { hour: "06:30", place: "מלון", activity: "יוגה" },
              { hour: "08:00 - 09:00", place: "מלון באלה", activity: "ארוחת בוקר" },
              { hour: "09:30 - 13:30", place: "אלה", activity: "מפלי דיאלומא" },
              { hour: "14:00 - 17:00", place: "אלה", activity: "אומגה וקניות" },
              { hour: "17:30 - 20:30", place: "מלון", activity: "נסיעה" },
              { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב" }
            ]
          },
          { day: "5", title: "ספארי פילים וסאפ שקיעה", desc: "ארוחת בוקר, נסיעה דרומה לספארי פילים בשמורת אודוואלאווה, וסאפ שקיעה רגוע בים לקינוח היום עם עיסוי מפנק.", highlight: "ספארי פילים באודוואלאווה וסאפ שקיעה",
            schedule: [
              { hour: "07:15 - 08:00", place: "מלון", activity: "ארוחת בוקר" },
              { hour: "08:30 - 11:00", place: "דרום", activity: "נסיעה דרומה" },
              { hour: "11:30 - 14:30", place: "אודוואלאווה", activity: "ספארי פילים באודוואלאווה" },
              { hour: "18:30 - 19:30", place: "חוף", activity: "סאפ שקיעה" },
              { hour: "20:30", place: "מלון", activity: "עיסוי מפנק (מסאז')" }
            ]
          },
          { day: "6", title: "שנורקלינג והתארגנות לשבת", desc: "ארוחת בוקר, שנורקלינג מדהים עם צבי ים, זמן חוף וקניות, ולאחר מכן התארגנות לקראת כניסת שבת.", highlight: "שנורקלינג עם צבי ים וזמן חוף",
            schedule: [
              { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
              { hour: "10:30 - 12:00", place: "חוף", activity: "שנורקלינג עם צבי ים" },
              { hour: "13:30 - 15:30", place: "חוף", activity: "זמן חוף וקניות" },
              { hour: "17:15", place: "מלון", activity: "התארגנות לשבת" }
            ]
          },
          { day: "7", title: "שבת מנוחה", desc: "סשן יוגה שבת לייט, ארוחת בוקר וזמן מנוחה רגוע בשבת. בערב - הבדלה במוצאי שבת וארוחת ערב.", highlight: "שבת מנוחה ויוגה לייט",
            schedule: [
              { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
              { hour: "09:30", place: "מלון", activity: "יוגה שבת לייט" },
              { hour: "18:30", place: "מלון", activity: "מוצאי שבת (הבדלה)" },
              { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב" }
            ]
          },
          { day: "8", title: "צפייה בלווייתנים וחוף דרומי", desc: "שייט בבוקר לצפייה בלווייתנים, תרגול יוגה וארוחת בוקר. בהמשך היום שיעור גלישה וקניות, ולאחר מכן נסיעה לטלפה ללינה וארוחת ערב.", highlight: "צפייה בלווייתנים ושיעור גלישה",
            schedule: [
              { hour: "05:00", place: "אוקיינוס", activity: "צפייה בלווייתנים" },
              { hour: "06:30", place: "מלון", activity: "יוגה" },
              { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
              { hour: "09:30 - 12:30", place: "חוף", activity: "שיעור גלישה וקניות" },
              { hour: "17:30 - 18:30", place: "טלפה", activity: "נסיעה והתארגנות ללינה בטלפה" },
              { hour: "19:00 - 20:00", place: "מלון בטלפה", activity: "ארוחת ערב" }
            ]
          },
          { day: "9", title: "יום אחרון וטיסה", desc: "טיול זריחה, יוגה וארוחת בוקר במלון. בהמשך היום מנוחה וקניות אחרונות, ולאחר מכן נסיעה לשדה התעופה לקראת הטיסה חזרה הביתה.", highlight: "טיול זריחה, יוגה ונסיעה לשדה התעופה",
            schedule: [
              { hour: "05:00", place: "-", activity: "טיול זריחה (Sunrise hike)" },
              { hour: "06:30", place: "מלון", activity: "יוגה" },
              { hour: "08:00 - 09:00", place: "-", activity: "ארוחת בוקר" },
              { hour: "09:30 - 13:30", place: "-", activity: "-" },
              { hour: "13:30 - 16:30", place: "-", activity: "מנוחה וקניות (Relax, shopping)" },
              { hour: "16:30", place: "-", activity: "נסיעה לשדה התעופה (Drive to airport)" }
            ]
          }
        ]
      }
    },
    essentials: {
      title: 'מידע חשוב - טוב לדעת', subtitle: 'כל מה שצריך לדעת לפני שאורזים מזוודה.', categories: [
        { title: "ויזה (ETA)", items: ["ישראלים חייבים ויזה אלקטרונית (ניתן להנפיק בחינם דרך האתר הרשמי eta.gov.lk, או בתשלום דרך סוכנים להנפקה נוחה יותר)", "דרכון בתוקף ל-6 חודשים לפחות"] },
        { title: "כסף ומטבע", items: ["מטבע: רופי סרי-לנקי (LKR)", "להביא דולרים לחירום, הרבה פעמים זה נוח.", "מומלץ להצטייד במזומן מכיוון שלא כל מקום מקבל אשראי. ניתן להוציא כסף בקלות בכספומטים מקומיים."] },
        { title: "חשמל", items: ["מתח 230V. ברוב המקומות שקעים ישראלים (2 פינים) עובדים ללא בעיה.", "עבור תקעים אמריקאים נדרש מתאם."] },
        { title: "ביגוד", items: ["בגדים נוחים לטיולים", "בגדים נוחים להליכה בעיר", "בגדי ים", "סנדלים ונעלי הליכה לטיולים"] },
        { title: "אוכל וכשרות", items: ["האירוח שלנו הוא על בסיס חצי פנסיון - אנחנו מספקים ארוחות כשרות לאורך כל הטיול.", "בתי חב\\\"ד: קולומבו, אלה"] }
      ]
    },
    discovery: {
      title: 'מגלים את סרי לנקה', subtitle: 'קצת רקע והיסטוריה שיעשו לכם חשק לארוז.', articles: [
        { title: "אלה (Ella): בין ההרים", text: "עיירה הררית קסומה מוקפת מטעי תה, מפלים ונופים ירוקים אינסופיים." },
        { title: "תה ציילוני: הזהב הירוק", text: "סרי לנקה היא מעצמת תה עולמית. נלמד איך הקלימט הקריר מייצר את הטעם הכל כך מיוחד." },
        { title: "פסיקודה: שמש ושלווה", text: "אחד מהחופים היפים בעולם עם אווירה רגועה, לגונות ונופים מרהיבים." },
        { title: "ספארי וחיות בר", text: "פילים, תנינים, ציפורים נדירות ואפילו נמרים. סרי לנקה היא גן עדן לחובבי טבע." }
      ]
    },
    about: { 
      title: 'הסיפור שלנו', 
      p1: 'אז נעים להכיר! אנחנו איל, עליזה ונעמי :) בקיץ 2025, נפגשנו בסרי לנקה לקראת סוף ירח הדבש הארוך של איל ועליזה במזרח. אלה היו 10 ימים קסומים של טבע, גלישה, חופים, נופים ומלונות פשוט מצוינים (חוץ מאחד, אבל היינו צריכים משהו לקטר עליו קצת).', 
      p2: 'כשחזרנו הביתה, עלה לי (לנעמי) רעיון. למה לא להביא את החוויה המטורפת הזו של "טיול למזרח", שלגמרי משנה חיים, גם לאאימהות וסבתות? הרי כל כך הרבה צעירים ישראלים נוסעים לחלק הזה של העולם אחרי הצבא, נושמים את התרבות, עושים דברים שבחיים לא היו עושים בבית וחוזרים עם פרספקטיבה חדשה לגמרי. אנחנו באמת מאמינים שלכל אחת מגיעה ההזדמנות הזו. (בעצם, אנחנו חושבים שכולם צריכים את זה, אבל נדבר על זה כבר כשניפגש...)\\n\\nאנחנו לא אנשי מכירות, אנחנו לא סוכנות נסיעות ואנחנו לא עובדים עם שום חברה ענקית. אנחנו פשוט שלושה אנשים שהתאהבו בכל מה שיש לסרי לנקה להציע, ורוצים לתת לכן את ההזדמנות לחוות את זה יחד איתנו.', 
      p3: 'כל אחד מאיתנו מביא משהו קצת אחר להרפתקה שלנו. אני, נעמי, אהיה איתכן לכל אורך הדרך, אדאג שכולנו נהנות מכל רגע ואהיה זמינה לכל שאלה. איל ועליזה, שהם גם מדריכי יוגה מוסמכים וגם בשלנים נהדרים, ישגיחו על המטבח יחד עם הצוות המקומי כדי לוודא שיש לנו כשרות מלאה. הם ידאגו שכולנו אוכלות טוב ומרגישות במיטבנו. חוץ מזה, ילווה אותנו מדריך ונהג מקומי, גם כדי שנתנייד בנוחות וגם כדי שנכיר קצת יותר מקרוב את התרבות המקומית המרתקת.', 
      team: { eyal: 'עליזה ואיל', naomi: 'נעמי', guide: 'מדריך מקומי' },
      contact: 'צרו קשר:\\nאיל: 054-...\\nנעמי: 054-...'
    },
    register: { 
      title: 'שריינו את המקום שלכן', subtitle: 'מלאו פרטים ונחזור אליכם.', contact_wa: 'שאלות? דברו עם איל', contact_email: 'או שלחו מייל', details: ["מוגבל ל-16 משתתפות", "מקדמה של 1,000 ש״ח להבטחת מקום", "מדיניות ביטולים הוגנת"], 
      form: { name: 'שם מלא', phone: 'טלפון', email: 'אימייל', guests: 'מספר משתתפים', notes: 'הערות', submit: 'שליחת בקשת הרשמה', success_title: 'איזה כיף, נרשמתן בהצלחה! 🎉💃', success_desc: 'אנחנו סופר מתרגשים לקראת המסע המשותף שלנו! ניצור קשר בהקדם להשלמת הפרטים.', success_btn: 'שלח בקשה נוספת', error: 'אירעה שגיאה בשליחת הטופס. אנא נסה שוב או צור קשר בוואטסאפ.', submitting: 'שולח...' }
    }
  },
  en: {
    nav: { home: 'Home', itinerary: 'Itinerary', essentials: 'Good to Know', discovery: 'Gallery', about: 'Our Story', register: 'Join Us', toggle: 'עבור לעברית' },
    hero: { 
      title: 'Savtot in Sri Lanka\\nSummer 2027', 
      subtitle: 'From stunning waterfalls and green tea plantations, to natural infinity pools and the most beautiful beaches.\\nA special and unforgettable experience we organized especially for you, a woman looking to experience a bit of a "post-army trip", but at a relaxed pace and with all the indulgences of an organized tour.',
      tagline: 'THE TRIP OF A LIFETIME',
      cta_plan: 'See the Plan',
      cta_discover: 'Experience the magic',
      kosher: 'The trip is fully Kosher.',
      yoga: 'Includes daily Yoga sessions.',
      dates_disclaimer: '* Exact dates will be published later.'
    },
    features: { 
      title: 'More than just a trip', 
      f3_title: 'Fully kosher', 
      f3_desc: 'We insist on fresh, local ingredients. A local team of chefs will cook for us, with one of us (from the Israeli team) closely supervising to ensure everything is strictly kosher.',
      f2_title: 'Authentic culture', 
      f2_desc: 'From safaris to tea plantations to sunrise hikes, you will get the chance to see the real Sri Lanka',
      f1_title: 'Wellness & Yoga', 
      f1_desc: 'Gentle yoga sessions at sunrise or sunset, for all levels to stretch and calm the body and mind'
    },
    gallery: {
      title: 'Experience the magic',
      desc: 'From stunning waterfalls and green tea plantations, to natural infinity pools and the most beautiful beaches there are - this is our opportunity to experience the real, authentic Sri Lanka.',
      cta: 'More info / Save your spot'
    },
    itinerary: {
      title: 'Your fully planned adventure', subtitle: 'A journey of discovery and relaxation',
      headers: { hour: 'Time', place: 'Location', activity: 'Activity' },
      summer: {
        days: [
          { day: "1", title: "Arriving in Sri Lanka", desc: "The highlight of the day - an especially pampering massage in Sigiriya, to get into the vibe.", highlight: "Pampering Massage in Sigiriya", 
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
              { hour: "17:30 - 20:30", place: "Passikudah", activity: "Drive to Passikudah" },
              { hour: "19:30 - 20:30", place: "Hotel in Passikudah", activity: "Dinner" }
            ]
          },
          { day: "6", title: "Beach Life", desc: "Arriving at the stunning Passikudah and settling in.", highlight: "Shabbat in Passikudah", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30 - 12:00", place: "Pottuvil", activity: "Morning Lagoon SUP" },
              { hour: "13:30 - 15:30", place: "Passikudah", activity: "Surf Lesson / Beach Time" },
              { hour: "15:30 - 17:00", place: "Hotel", activity: "Shabbat Preparations" },
              { hour: "17:15", place: "Hotel", activity: "Shabbat Begins" },
              { hour: "18:30 - 19:30", place: "Hotel in Passikudah", activity: "Shabbat Dinner" }
            ]
          },
          { day: "7", title: "Shabbat Rest", desc: "A calm day of rest in Passikudah, Shabbat lite yoga session, time to enjoy the atmosphere and recharge your batteries.", highlight: "Rest & Freedom", 
            schedule: [
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30", place: "Hotel", activity: "Shabbat Lite Yoga" },
              { hour: "18:30", place: "Passikudah", activity: "End of Shabbat" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "8", title: "Trincomalee", desc: "Our main experience today will be sailing in search of whales and dolphins, followed by fun snorkeling together.", highlight: "Whale Watching & Snorkeling", 
            schedule: [
              { hour: "05:00", place: "-", activity: "Sunrise Hike" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30 - 12:30", place: "Trincomalee", activity: "Sailing & Snorkeling / Shopping" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "9", title: "Final Beach Time", desc: "Take advantage of every moment of sun, waves, and sand on the beach before parting.", highlight: "Sea & Sun", 
            schedule: [
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel in Passikudah", activity: "Breakfast" },
              { hour: "09:30 - 17:00", place: "Passikudah", activity: "Free Beach Time / Final Shopping" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          }
        ]
      },
      winter: {
        days: [
          { day: "1", title: "Arriving in Sri Lanka", desc: "Highlight of the day - an especially pampering massage at the hotel in Colombo/Negombo to start our journey in a relaxed atmosphere.", highlight: "Pampering massage at the hotel",
            schedule: [
              { hour: "-", place: "Israel", activity: "Flight" },
              { hour: "-", place: "Colombo", activity: "Bus to Colombo/Negombo" },
              { hour: "-", place: "Hotel", activity: "Check-in to rooms" },
              { hour: "-", place: "Hotel", activity: "Dinner" },
              { hour: "-", place: "Hotel", activity: "Pampering massage" }
            ]
          },
          { day: "2", title: "Kitulgala Extreme", desc: "Early wake-up for a sunrise hike, yoga at the hotel, and driving to Kitulgala for exciting rafting and canyoning in the rainforest, before moving to Nuwara Eliya.", highlight: "Rafting and canyoning in the rainforest",
            schedule: [
              { hour: "05:00", place: "Hotel", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Hotel yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Kitulgala", activity: "Drive to Kitulgala" },
              { hour: "14:00 - 15:30", place: "Kitulgala", activity: "Rafting" },
              { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Canyoning and Rain forest walk" },
              { hour: "17:30 - 19:30", place: "Nuwara Eliya", activity: "Drive to Nuwara Eliya" },
              { hour: "19:30 - 20:30", place: "Hotel in Nuwara Eliya", activity: "Dinner at hotel" }
            ]
          },
          { day: "3", title: "Tea, Trains & Ella", desc: "Sunrise hike and morning yoga, an interesting tour of Ceylon tea plantations, and boarding the most scenic train in the world to Ella.", highlight: "Scenic train to Ella and tea plantation",
            schedule: [
              { hour: "05:00", place: "Hotel", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 14:30", place: "Tea Plantations", activity: "Tea plantation tour" },
              { hour: "15:00 - 17:30", place: "Nuwara Eliya", activity: "Train to Ella" },
              { hour: "17:30 - 18:00", place: "Ella", activity: "Drive to hotel" },
              { hour: "19:30 - 20:30", place: "Hotel in Ella", activity: "Dinner" }
            ]
          },
          { day: "4", title: "Waterfalls & Ziplining", desc: "Sunrise hike and yoga, visiting the spectacular Diyaluma Falls, flying over the trees on the Flying Ravana zipline, shopping in Ella, followed by a drive and dinner.", highlight: "Diyaluma Falls & Flying Ravana zipline",
            schedule: [
              { hour: "05:00", place: "Hotel", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "Ella", activity: "Diyaluma Falls" },
              { hour: "14:00 - 17:00", place: "Ella", activity: "Omega zipline and Shops" },
              { hour: "17:30 - 20:30", place: "Hotel", activity: "Drive" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "5", title: "Elephant Safari & Sunset SUP", desc: "Breakfast, driving south for an incredible elephant safari in Udawalawe, and enjoying a relaxing stand-up paddleboarding (SUP) session at sunset, finished with a massage.", highlight: "Udawalawe Elephant Safari and sunset SUP",
            schedule: [
              { hour: "07:15 - 08:00", place: "Hotel", activity: "Breakfast" },
              { hour: "08:30 - 11:00", place: "South", activity: "Drive south" },
              { hour: "11:30 - 14:30", place: "Udawalawe", activity: "Udawalawe Elephant safari" },
              { hour: "18:30 - 19:30", place: "Beach", activity: "Sunset SUP" },
              { hour: "20:30", place: "Hotel", activity: "Massage" }
            ]
          },
          { day: "6", title: "Beach & Shabbat Preparations", desc: "Breakfast, incredible snorkeling with sea turtles, relaxing beach and shopping time, and getting ready for Shabbat.", highlight: "Snorkeling with sea turtles and beach time",
            schedule: [
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "10:30 - 12:00", place: "Beach", activity: "Snorkeling with turtles" },
              { hour: "13:30 - 15:30", place: "Beach", activity: "Beach & shopping time" },
              { hour: "17:15", place: "Hotel", activity: "Shabbat preparations" }
            ]
          },
          { day: "7", title: "Shabbat Rest", desc: "Shabbat lite yoga session, breakfast, and a peaceful Shabbat rest. In the evening, Havdalah (Motzash) and dinner.", highlight: "Peaceful Shabbat and lite yoga",
            schedule: [
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30", place: "Hotel", activity: "Shabbat Lite Yoga" },
              { hour: "18:30", place: "Hotel", activity: "Motzash (Havdalah)" },
              { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
            ]
          },
          { day: "8", title: "Whale Watching & South Coast", desc: "Early whale watching, morning yoga, and breakfast. Enjoy a surf session and shopping, followed by a transfer to Talpe for dinner and overnight.", highlight: "Whale watching and surfing",
            schedule: [
              { hour: "05:00", place: "Ocean", activity: "Whale watching" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
              { hour: "09:30 - 12:30", place: "Beach", activity: "Surf and shops" },
              { hour: "17:30 - 18:30", place: "Talpe", activity: "Transfer & overnight in Talpe" },
              { hour: "19:00 - 20:00", place: "Hotel in Talpe", activity: "Dinner" }
            ]
          },
          { day: "9", title: "Final Day & Flight", desc: "Sunrise hike, morning yoga, and breakfast, followed by free time for relaxing or shopping, and then the drive to the airport for the flight back.", highlight: "Sunrise hike, yoga and flight home",
            schedule: [
              { hour: "05:00", place: "-", activity: "Sunrise hike" },
              { hour: "06:30", place: "Hotel", activity: "Yoga" },
              { hour: "08:00 - 09:00", place: "-", activity: "Breakfast" },
              { hour: "09:30 - 13:30", place: "-", activity: "-" },
              { hour: "13:30 - 16:30", place: "-", activity: "Relax, shopping" },
              { hour: "16:30", place: "-", activity: "Drive to airport" }
            ]
          }
        ]
      }
    },
    essentials: { 
      title: 'Good to know', subtitle: 'Everything you need to know before packing your bags.', 
      categories: [
        { title: "Clothing", items: ["Comfortable clothes for hiking", "Comfortable clothes for city walking", "Bathing suits", "Sandals and hiking shoes"] },
        { title: "Visa (ETA)", items: ["Israelis need an electronic visa/ETA (can be issued for free on the official site eta.gov.lk, or for a fee through agents for easier handling)", "Passport valid for 6 months"] },
        { title: "Money & Currency", items: ["Currency: Sri Lankan Rupee (LKR)", "Bring USD for emergencies, often it is very convenient.", "It is recommended to have cash as not all places accept credit cards. Cash can be easily withdrawn from local ATMs."] },
        { title: "Electricity", items: ["Voltage: 230V. Israeli plugs (2 pins) work in most places without an issue.", "American plugs require an adapter."] },
        { title: "Kosher Food", items: ["Our hosting is on a half-board basis - we provide kosher meals throughout the trip.", "Chabad Houses: Colombo, Ella"] }
      ]
    },
    discovery: { title: 'Discovery', subtitle: 'Get excited about the destination.', articles: [
        { title: "Ella: Mountain Bliss", text: "A magical mountain town surrounded by tea plantations, waterfalls, and endless green views." },
        { title: "Ceylon Tea", text: "Sri Lanka is a world tea power. We'll learn how the cool climate creates the perfect flavor." },
        { title: "Passikudah", text: "One of the most beautiful beaches in the world with a relaxed atmosphere, lagoons and spectacular views." },
        { title: "Safari & Wildlife", text: "Elephants, crocodiles, rare birds and even leopards. Sri Lanka is a paradise for nature lovers." }
      ]
    },
    about: { 
      title: 'Our Story', 
      p1: 'So nice to meet you! We are Eyal, Aliza and Naomi :) In the summer of 2025, we met in Sri Lanka towards the end of Eyal and Aliza\'s long honeymoon in the East. Those were 10 magical days of nature, surfing, beaches, landscapes and simply excellent hotels (except for one, but we needed something to complain about a little).', 
      p2: 'When we returned home, I (Naomi) had an idea. Why not bring this crazy, life-changing experience of a "trip to the East" to mothers and grandmothers as well? After all, so many young Israelis travel to this part of the world after the army, breathe the culture, do things they would never do at home and return with a completely new perspective. We truly believe that everyone deserves this opportunity. (Actually, we think everyone needs this, but we\'ll talk about that when we meet...).\\n\\nWe are not salespeople, we are not a travel agency and we don\'t work with any huge company. We are simply three people who fell in love with everything Sri Lanka has to offer, and want to give you the opportunity to experience it together with us.', 
      p3: 'Each of us brings something a little different to our adventure. I, Naomi, will be with you the whole way, making sure we all enjoy every moment and available for any question. Eyal and Aliza, who are both certified yoga instructors and great cooks, will oversee the kitchen along with the local staff to make sure we have full kashrut. They will ensure we all eat well and feel our best. Besides that, a local guide and driver will accompany us, both so we can get around comfortably and so we can get to know the fascinating local culture a little closer.', 
      team: { eyal: 'Aliza & Eyal', naomi: 'Naomi', guide: 'Local Guide' },
      contact: 'Contact us:\\nEyal: +972 ...\\nNaomi: +972 ...'
    },
    register: { 
      title: 'Secure Your Spot', subtitle: 'Fill out the details below, and we will contact you.', contact_wa: 'Contact Eyal', contact_email: 'Or Email Us', details: ["Limited to 16 participants", "1,000 ILS deposit to secure spot", "Fair refund policy"], 
      form: { name: 'Full Name', phone: 'Phone', email: 'Email', guests: 'Number of Travelers', notes: 'Special Requests', submit: 'Send Request', success_title: 'Yay, you are successfully registered! 🎉💃', success_desc: 'We are super excited for our journey together! We will get in touch shortly to finalize the details.', success_btn: 'Send another request', error: 'Error sending form. Please try again or contact us via WhatsApp.', submitting: 'Sending...' }
    }
  }
};

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [lang, setLang] = useState('he');
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
    const base = defaultContentData[lang] || defaultContentData.he;
    const live = siteContent?.[lang];
    
    if (!live) return base;
    
    return {
      ...base,
      ...live,
      nav: { ...base.nav, ...live.nav },
      hero: { ...base.hero, ...live.hero },
      features: { ...base.features, ...live.features },
      gallery: { ...base.gallery, ...live.gallery },
      itinerary: { 
        ...base.itinerary, 
        ...live.itinerary,
        summer: { ...base.itinerary.summer, ...live.itinerary?.summer },
        winter: { ...base.itinerary.winter, ...live.itinerary?.winter }
      },
      essentials: { ...base.essentials, ...live.essentials },
      discovery: { ...base.discovery, ...live.discovery },
      about: { ...base.about, ...live.about },
      register: { ...base.register, ...live.register }
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
`;

fs.writeFileSync('contexts/SiteContext.jsx', newContext);
console.log('SiteContext.jsx fixed and updated successfully.');
