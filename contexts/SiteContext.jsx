'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

// Default content data (fallback)
export const defaultContentData = {
  he: {
    nav: {
      home: 'בית', itinerary: 'המסלול', essentials: 'מידע חשוב', discovery: 'מגלים עולם', about: 'הסיפור שלנו', register: 'הצטרפו למסע', toggle: 'Switch to English'
    },
    hero: {
      title: 'סבתות בסרי לנקה\nקיץ 2026', subtitle: 'חוויה ייחודית ובלתי נשכחת שעוצבה במיוחד עבור אימהות וסבתות. המסע יתאפיין בקצב נינוח, רגעים מרגשים וקסם מקומי עם דגש על טבע, הרפתקאות, חברות וחוף הים.\n\n10 ימים מדהימים | מחנה פוסט-ילדים/נכדים שלכן, טיול סוף-קיץ של פעם בחיים\n\nטיול של פעם בחיים', cta_plan: 'צפו בתוכנית', cta_discover: 'גלו עוד'
    },
    features: {
      title: 'יותר מסתם טיול', f1_title: 'וולנס ויוגה', f1_desc: 'תרגולי יוגה עדינים בזריחה או בשקיעה, לכל הרמות, למתיחה והרגעה של הגוף והנפש.', f2_title: 'תרבות אותנטית', f2_desc: 'מספארי ועד מטעי תה וטיולי זריחה, תקבלו את ההזדמנות לראות את סרי לנקה האמיתית.', f3_title: 'כשרות מלאה', f3_desc: 'מרכיבים מקומיים טריים המוכנים בסטנדרטים של כשרות. הזדמנות ייחודית לחוות את המטבח המקומי המדהים.'
    },
    gallery: {
      title: 'לחוות את הקסם', desc: 'ממפלים מלכותיים ועד מטעי תה מרהיבים והחופים המוזהבים של ארוגם ביי, תקבלו את ההזדמנות לראות את כל הפלאים של סרי לנקה.', cta: 'שריינו מקום בטיול'
    },
    itinerary: {
      title: 'פרטי המסע', subtitle: 'תוכנית מעודכנת ומפורטת',
      headers: { hour: 'שעה', place: 'מיקום', activity: 'פעילות' },
      days: [
        { day: "1", title: "מגיעים לסרי לנקה", desc: "נחיתה בקולומבו ונסיעה ישירות לאוויר הקריר והרענן של סיגירייה. התארגנות, ארוחת ערב ועיסוי מפנק.", highlight: "הגעה והתארגנות", 
          schedule: [
            { hour: "-", place: "ישראל", activity: "טיסה" },
            { hour: "-", place: "קולומבו", activity: "נסיעה באוטובוס לסיגירייה" },
            { hour: "-", place: "סיגירייה", activity: "קבלת חדרים והתארגנות" },
            { hour: "-", place: "סיגירייה", activity: "ארוחת ערב" },
            { hour: "-", place: "סיגירייה", activity: "עיסוי מפנק" }
          ]
        },
        { day: "2", title: "סלע האריה וספארי", desc: "טיפוס מוקדם על סלע האריה המפורסם, סיור אותנטי בכפר המקומי, ולאחר מנוחה נצא לספארי מרתק לראות פילים.", highlight: "סלע האריה וספארי פילים", 
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
        { day: "3", title: "אקסטרים ויערות גשם", desc: "מתחילים את הבוקר בזריחה ויוגה, ואז ממשיכים לקיטולגלה ליום של רפטינג, קניונינג והליכה ביער הגשם, לפני הנסיעה לנווארה אליה.", highlight: "רפטינג וקניונינג", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
            { hour: "09:30 - 13:30", place: "קיטולגלה (Kitulgala)", activity: "נסיעה" },
            { hour: "14:00 - 15:30", place: "קיטולגלה", activity: "רפטינג" },
            { hour: "15:30 - 17:00", place: "קיטולגלה", activity: "קניונינג" },
            { hour: "15:30 - 17:00", place: "קיטולגלה", activity: "הליכה ביער הגשם" },
            { hour: "17:30 - 19:30", place: "נווארה אליה", activity: "נסיעה" },
            { hour: "19:30 - 20:30", place: "מלון בנווארה אליה", activity: "ארוחת ערב" }
          ]
        },
        { day: "4", title: "תה ורכבות", desc: "סיור מרתק במטעי התה של ציילון, ואחריו נסיעת הרכבת המפורסמת בעולם אל העיירה הקסומה אלה.", highlight: "נסיעת הרכבת לאלה", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
            { hour: "09:30 - 14:30", place: "מטעי תה", activity: "סיור במטעי התה" },
            { hour: "15:00 - 17:30", place: "נווארה אליה", activity: "נסיעת רכבת לאלה" },
            { hour: "17:30 - 18:00", place: "אלה (Ella)", activity: "נסיעה למלון" },
            { hour: "19:30 - 20:30", place: "מלון באלה", activity: "ארוחת ערב" }
          ]
        },
        { day: "5", title: "מפלים ואדרנלין", desc: "נבקר במפלי דיאלומא המרשימים, נגלוש באומגה (Zipline) ונסתובב בחנויות באלה, ואז נרד לארוגם ביי.", highlight: "מפלי דיאלומא ואומגה", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון באלה", activity: "ארוחת בוקר" },
            { hour: "09:30 - 13:30", place: "אלה", activity: "מפלי דיאלומא" },
            { hour: "15:30 - 17:00", place: "אלה", activity: "גלישת אומגה (Zipline)" },
            { hour: "15:30 - 17:00", place: "אלה", activity: "הסתובבות וקניות" },
            { hour: "17:30 - 20:30", place: "ארוגם ביי", activity: "נסיעה לארוגם ביי" },
            { hour: "19:30 - 20:30", place: "מלון בארוגם ביי", activity: "ארוחת ערב" }
          ]
        },
        { day: "6", title: "החיים על החוף ושבת", desc: "סאפ בוקר בלגונה, שיעורי גלישה או סתם מנוחה על החוף, ואז נתכונן ונכניס את השבת ביחד.", highlight: "שבת בארוגם ביי", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בארוגם ביי", activity: "ארוחת בוקר" },
            { hour: "09:30 - 12:00", place: "פוטוביל (Pottuvil)", activity: "סאפ בוקר בלגונה" },
            { hour: "13:30 - 15:30", place: "ארוגם ביי", activity: "שיעור גלישה / זמן חוף" },
            { hour: "15:30 - 17:00", place: "מלון", activity: "התארגנות לשבת" },
            { hour: "17:15", place: "מלון", activity: "כניסת שבת" },
            { hour: "18:30 - 19:30", place: "מלון בארוגם ביי", activity: "ארוחת ערב שבת" }
          ]
        },
        { day: "7", title: "שבת מנוחה", desc: "יום מנוחה רגוע בארוגם ביי. זמן ליהנות מהאווירה, לאגור כוחות ופשוט להיות.", highlight: "מנוחה וחופש", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה (אופציונלי)" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בארוגם ביי", activity: "ארוחת בוקר" },
            { hour: "18:30", place: "ארוגם ביי", activity: "מוצאי שבת" },
            { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב" }
          ]
        },
        { day: "8", title: "גלישה וקניות", desc: "המשך ההרפתקה בארוגם ביי עם גלישה בחופים המפורסמים והסתובבות בעיירה.", highlight: "גלישה בארוגם ביי", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בארוגם ביי", activity: "ארוחת בוקר" },
            { hour: "09:30 - 12:30", place: "ארוגם ביי", activity: "גלישה / קניות" },
            { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב" }
          ]
        },
        { day: "9-10", title: "פרידה מהקסם", desc: "ימים אחרונים בארוגם ביי של ים, חופש, ואריזות לקראת החזרה הביתה.", highlight: "רגעים אחרונים", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בארוגם ביי", activity: "ארוחת בוקר" },
            { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב (ביום 9)" }
          ]
        }
      ]
    },
      days: [
        { day: "1", title: "מגיעים לסרי לנקה", desc: "נחיתה בקולומבו ונסיעה ישירות לאוויר הקריר והרענן של סיגירייה. התארגנות, ארוחת ערב ועיסוי מפנק.", highlight: "הגעה והתארגנות", 
          schedule: [
            { hour: "-", place: "ישראל", activity: "טיסה" },
            { hour: "-", place: "קולומבו", activity: "נסיעה באוטובוס לסיגירייה" },
            { hour: "-", place: "סיגירייה", activity: "קבלת חדרים והתארגנות" },
            { hour: "-", place: "סיגירייה", activity: "ארוחת ערב" },
            { hour: "-", place: "סיגירייה", activity: "עיסוי מפנק" }
          ]
        },
        { day: "2", title: "סלע האריה וספארי", desc: "טיפוס מוקדם על סלע האריה המפורסם, סיור אותנטי בכפר המקומי, ולאחר מנוחה נצא לספארי מרתק לראות פילים.", highlight: "סלע האריה וספארי פילים", 
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
        { day: "3", title: "אקסטרים ויערות גשם", desc: "מתחילים את הבוקר בזריחה ויוגה, ואז ממשיכים לקיטולגלה ליום של רפטינג, קניונינג והליכה ביער הגשם, לפני הנסיעה לנווארה אליה.", highlight: "רפטינג וקניונינג", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
            { hour: "09:30 - 13:30", place: "קיטולגלה (Kitulgala)", activity: "נסיעה" },
            { hour: "14:00 - 15:30", place: "קיטולגלה", activity: "רפטינג" },
            { hour: "15:30 - 17:00", place: "קיטולגלה", activity: "קניונינג" },
            { hour: "15:30 - 17:00", place: "קיטולגלה", activity: "הליכה ביער הגשם" },
            { hour: "17:30 - 19:30", place: "נווארה אליה", activity: "נסיעה" },
            { hour: "19:30 - 20:30", place: "מלון בנווארה אליה", activity: "ארוחת ערב" }
          ]
        },
        { day: "4", title: "תה ורכבות", desc: "סיור מרתק במטעי התה של ציילון, ואחריו נסיעת הרכבת המפורסמת בעולם אל העיירה הקסומה אלה.", highlight: "נסיעת הרכבת לאלה", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון", activity: "ארוחת בוקר" },
            { hour: "09:30 - 14:30", place: "מטעי תה", activity: "סיור במטעי התה" },
            { hour: "15:00 - 17:30", place: "נווארה אליה", activity: "נסיעת רכבת לאלה" },
            { hour: "17:30 - 18:00", place: "אלה (Ella)", activity: "נסיעה למלון" },
            { hour: "19:30 - 20:30", place: "מלון באלה", activity: "ארוחת ערב" }
          ]
        },
        { day: "5", title: "מפלים ואדרנלין", desc: "נבקר במפלי דיאלומא המרשימים, נגלוש באומגה (Zipline) ונסתובב בחנויות באלה, ואז נרד לארוגם ביי.", highlight: "מפלי דיאלומא ואומגה", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון באלה", activity: "ארוחת בוקר" },
            { hour: "09:30 - 13:30", place: "אלה", activity: "מפלי דיאלומא" },
            { hour: "15:30 - 17:00", place: "אלה", activity: "גלישת אומגה (Zipline)" },
            { hour: "15:30 - 17:00", place: "אלה", activity: "הסתובבות וקניות" },
            { hour: "17:30 - 20:30", place: "ארוגם ביי", activity: "נסיעה לארוגם ביי" },
            { hour: "19:30 - 20:30", place: "מלון בארוגם ביי", activity: "ארוחת ערב" }
          ]
        },
        { day: "6", title: "החיים על החוף ושבת", desc: "סאפ בוקר בלגונה, שיעורי גלישה או סתם מנוחה על החוף, ואז נתכונן ונכניס את השבת ביחד.", highlight: "שבת בארוגם ביי", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בארוגם ביי", activity: "ארוחת בוקר" },
            { hour: "09:30 - 12:00", place: "פוטוביל (Pottuvil)", activity: "סאפ בוקר בלגונה" },
            { hour: "13:30 - 15:30", place: "ארוגם ביי", activity: "שיעור גלישה / זמן חוף" },
            { hour: "15:30 - 17:00", place: "מלון", activity: "התארגנות לשבת" },
            { hour: "17:15", place: "מלון", activity: "כניסת שבת" },
            { hour: "18:30 - 19:30", place: "מלון בארוגם ביי", activity: "ארוחת ערב שבת" }
          ]
        },
        { day: "7", title: "שבת מנוחה", desc: "יום מנוחה רגוע בארוגם ביי. זמן ליהנות מהאווירה, לאגור כוחות ופשוט להיות.", highlight: "מנוחה וחופש", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה (אופציונלי)" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בארוגם ביי", activity: "ארוחת בוקר" },
            { hour: "18:30", place: "ארוגם ביי", activity: "מוצאי שבת" },
            { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב" }
          ]
        },
        { day: "8", title: "גלישה וקניות", desc: "המשך ההרפתקה בארוגם ביי עם גלישה בחופים המפורסמים והסתובבות בעיירה.", highlight: "גלישה בארוגם ביי", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בארוגם ביי", activity: "ארוחת בוקר" },
            { hour: "09:30 - 12:30", place: "ארוגם ביי", activity: "גלישה / קניות" },
            { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב" }
          ]
        },
        { day: "9-10", title: "פרידה מהקסם", desc: "ימים אחרונים בארוגם ביי של ים, חופש, ואריזות לקראת החזרה הביתה.", highlight: "רגעים אחרונים", 
          schedule: [
            { hour: "05:00", place: "-", activity: "טיול זריחה" },
            { hour: "06:30", place: "מלון", activity: "יוגה" },
            { hour: "08:00 - 09:00", place: "מלון בארוגם ביי", activity: "ארוחת בוקר" },
            { hour: "19:30 - 20:30", place: "מלון", activity: "ארוחת ערב (ביום 9)" }
          ]
        }
      ]
    },
        { day: "4-5", title: "מפלים ורכבות", desc: "טיפוס ל\"פסגת אדם הקטנה\" בזריחה, והכנה לנסיעת הרכבת המפורסמת. נחקור את גשר תשע הקשתות ונלגום תה ציילוני מפורסם במטעים הירוקים. נראה מפלים עוצרי נשימה ונופים עוצרי לב במהלך גלישת אומגה (Zipline).", highlight: "גשר תשע הקשתות ואומגה" },
        { day: "6-8", title: "החיים על החוף", desc: "נסיעה לארוגם ביי והתמקמות בדירת בוטיק על החוף. גלישה או שיעור גלישה, סיור בלגונות, טיפוס על \"סלע הפיל\" בזריחה, יציאה לספארי, ישיבה על החוף, בילוי בספא וקניות. נהנה מהקולינריה המקומית וחווית שבת על החוף.", highlight: "שבת בארוגם ביי" },
        { day: "9", title: "שנורקלים ומנוחה", desc: "שנורקלינג במים הצלולים וצפייה באלמוגים ובעלי החיים הימיים. נקבל עיסוי, נצא לקניות מזכרות ונבלה בעיירה המקומית.", highlight: "שנורקלינג וספא" },
        { day: "10", title: "פרידה מהקסם", desc: "טיול זריחה ב\"סלע הפיל\" המפורסם, אריזות ונסיעה לשדה התעופה. לראות שוב את המשפחה ולשתף אותם בחוויות משנות החיים שלכן.", highlight: "טיול זריחה אחרון" }
      ]
    },
    essentials: {
      title: 'מידע חשוב - טוב לדעת', subtitle: 'כל מה שצריך לדעת לפני שאורזים מזוודה.', ai_title: 'מה לארוז? שאל את המומחה', ai_desc: 'ספר לנו קצת על עצמך (למשל: "תמיד קר לי", "אני שומרת כשרות") וה-AI יכין לך רשימה.', ai_placeholder: 'דוגמה: אני רגיש ליתושים ואוהב נשנושים מהארץ...', ai_btn: 'צור רשימה אישית', categories: [
        { title: "ויזה (ETA)", items: ["ישראלים חייבים ויזה אלקטרונית (כ-50$ באתר eta.gov.lk)", "דרכון בתוקף ל-6 חודשים לפחות"] },
        { title: "כסף ומטבע", items: ["מטבע: רופי סרי-לנקי (LKR)", "להביא דולרים חדשים ונקיים להמרה", "אשראי עובד במלונות, מזומן לטוקטוקים"] },
        { title: "חשמל", items: ["מתח 230V, שקעים מסוג D (עגולים) או G (בריטי)", "מומלץ להביא מתאם אוניברסלי", "שיטת ה'עט' עובדת בזהירות"] },
        { title: "ביגוד", items: ["מכנסי טיולים רפויים, טייצים, חצאיות", "בגדי ים", "סנדלי הליכה"] },
        { title: "אוכל וכשרות", items: ["אנו מספקים ארוחות כשר-סטייל", "בתי חב\"ד: קולומבו, אלה, ארוגם ביי", "פירות טרופיים בשפע"] }
      ]
    },
    discovery: {
      title: 'מגלים את סרי לנקה', subtitle: 'קצת רקע והיסטוריה שיעשו לכם חשק לארוז.', articles: [
        { title: "אלה (Ella): בין ההרים", text: "עיירה הררית קסומה מוקפת מטעי תה, מפלים ונופים ירוקים אינסופיים." },
        { title: "תה ציילוני: הזהב הירוק", text: "סרי לנקה היא מעצמת תה עולמית. נלמד איך הקלימט הקריר מייצר את הטעם המושלם." },
        { title: "ארוגם ביי: גלישה ושלווה", text: "אחד מאתרי הגלישה הטובים בעולם עם אווירה צעירה, לגונות ופילים משוטטים." },
        { title: "ספארי וחיות בר", text: "פילים, תנינים, ציפורים נדירות ואפילו נמרים. סרי לנקה היא גן עדן לחובבי טבע." }
      ]
    },
    about: {
      title: 'הסיפור שלנו', p1: 'אז הנה אנחנו, אייל, עליזה ונעמי 🙂.\n\nבקיץ של 2025, שלושתנו נפגשנו בסרי לנקה אחרי שאייל ועליזה סיימו ירח דבש ארוך במזרח. אלו היו 10 ימים מופלאים של מפלים, גלישה, חופים, נופים ופשוט מלונות מצוינים (ואחד גרוע, רק כדי שיהיה לנו על מה להתלונן).', p2: 'חזרנו הביתה, ולנעמי היה רעיון. למה לא להנגיש את החוויה המדהימה והמשנה-חיים הזו של טיול למזרח גם לסבתות ואימהות? כל כך הרבה צעירים ישראלים מטיילים אחרי הצבא לחלק הזה של העולם ויש להם את הזמן של חייהם. הם חיים את התרבות, לוקחים על עצמם אתגרים שלעולם לא היו עושים בבית ורואים את החיים מנקודת מבט חדשה לגמרי. אנחנו מאמינים שלכולם מגיעה ההזדמנות לעשות את זה. (למעשה אנחנו מאמינים שכולם צריכים לעשות את זה אבל נדבר על זה כשניפגש :)\n\nהבנו שמי יותר טוב להדריך סבתות ואימהות במסע משנה החיים הזה מאשר אנחנו? אנחנו לא אנשי מכירות, אנחנו לא סוכנות נסיעות, ואנחנו לא עובדים עם שום חברה גדולה. אנחנו 3 אנשים שחולקים תשוקה לכל מה שיש לסרי לנקה להציע ואנחנו רוצים לתת לכם את ההזדמנות לחלוק את התשוקה הזו.', p3: 'כל אחד מאיתנו מביא משהו אחר להרפתקה הסרי-לנקית שלכן. אני, נעמי, אהיה איתכן בכל חוויה, אוודא שכולן נהנות מכל רגע ותמיד אהיה זמינה לענות על כל שאלה. אייל ועליזה הם מדריכי יוגה מוסמכים ושפים מדהימים והם יוודאו שכולן אוכלות היטב ומרגישות במיטבן. (הם גם מנגנים בגיטרה ויוקלילי בהתאמה, מה שיבוא לידי ביטוי בהופעות החוף הליליות שלנו). יהיה איתנו גם מדריך ונהג מקומי כדי להבטיח שנוכל להתנייד בקלות וכדי לתת לנו הבנה והערכה לתרבות המקומית.', team: { eyal: 'אייל & עליזה', naomi: 'נעמי', guide: 'מדריך מקומי' }
    },
    register: {
      title: 'שריינו את המקום שלכן', subtitle: 'מלאו פרטים ונחזור אליכם תוך 24 שעות.', contact_wa: 'שאלות? דברו עם אייל', contact_email: 'או שלחו מייל', details: ["מוגבל ל-15 משתתפות", "אין צורך בתשלום מיידי", "מדיניות ביטולים הוגנת"], form: { name: 'שם מלא', phone: 'טלפון', email: 'אימייל', guests: 'מספר משתתפים', notes: 'הערות', submit: 'שליחת בקשת הרשמה' }
    }
  },
  en: {
    nav: { home: 'Home', itinerary: 'Itinerary', essentials: 'Good to Know', discovery: 'Discovery', about: 'Our Story', register: 'Join Us', toggle: 'עבור לעברית' },
    hero: { title: 'Savtot in Sri Lanka\nSummer 2026', subtitle: 'A unique and unforgettable experience designed exclusively for mothers and grandmothers. The journey will feature an easy pace, exciting moments and local charm with a focus on nature, adventure, friendship and the beach.\n\n10 incredible days | Your post-kids/grandkids camp, end-of-summer once-in-a-lifetime trip\n\nThe trip of a lifetime', cta_plan: 'See the Plan', cta_discover: 'Explore' },
    features: { title: 'More Than Just a Trip', f1_title: 'Wellness & Yoga', f1_desc: 'Gentle yoga sessions at sunrise or sunset, for all levels to stretch and calm the body and mind', f2_title: 'Authentic culture', f2_desc: 'From safaris to tea plantations to sunrise hikes, you will get the chance to see the real Sri Lanka', f3_title: 'Fully kosher', f3_desc: 'Fresh local ingredients prepared to kosher standards. A unique opportunity to experience the incredible local cuisine' },
    gallery: { title: 'Experience the magic', desc: 'From majestic waterfalls to glorious tea plantations to the golden shores of Arugam Bay, you’ll get the chance to see all the wonders of Sri Lanka', cta: 'Secure Your Spot' },
    itinerary: {
      title: 'Your fully planned adventure', subtitle: 'A Perfectly Curated 10-Day Detailed Plan',
      headers: { hour: 'Time', place: 'Location', activity: 'Activity' },
      days: [
        { day: "1", title: "Arrival in Sri Lanka", desc: "Land in Colombo and head straight to the fresh, cool air of Sigiriya. Settle in, have dinner and a relaxing massage.", highlight: "Arrival & Settling in", 
          schedule: [
            { hour: "-", place: "Israel", activity: "Flight" },
            { hour: "-", place: "Colombo", activity: "Bus ride to Sigiriya" },
            { hour: "-", place: "Sigiriya", activity: "Get rooms & settle in" },
            { hour: "-", place: "Sigiriya", activity: "Dinner" },
            { hour: "-", place: "Sigiriya", activity: "Massage" }
          ]
        },
        { day: "2", title: "Lion's Rock & Safari", desc: "Climb the famous Lion’s Rock, experience an authentic local village tour, and go on a thrilling elephant safari.", highlight: "Lion's Rock & Elephant Safari", 
          schedule: [
            { hour: "05:00", place: "Sigiriya Rock", activity: "Sunrise Hike" },
            { hour: "08:00 - 09:00", place: "Hotel Sigiriya", activity: "Breakfast" },
            { hour: "10:00 - 15:00", place: "Village", activity: "Authentic Village Tour" },
            { hour: "15:00 - 16:00", place: "Hotel", activity: "Nap / Rest" },
            { hour: "16:00 - 18:00", place: "Safari", activity: "Elephant Safari" },
            { hour: "18:30 - 19:30", place: "Hotel Sigiriya", activity: "Dinner" },
            { hour: "20:30", place: "Hotel", activity: "Hang out" }
          ]
        },
        { day: "3", title: "Waterfalls & Adventure", desc: "Start the day with yoga, then head to Kitulgala for rafting, canyoning, and a rainforest walk before driving to Nuwara Eliya.", highlight: "Kitulgala Rafting", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
            { hour: "09:30 - 13:30", place: "Kitulgala", activity: "Driving to Kitulgala" },
            { hour: "14:00 - 15:30", place: "Kitulgala", activity: "Rafting" },
            { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Canyoning" },
            { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Rainforest walk" },
            { hour: "17:30 - 19:30", place: "Nuwara Eliya", activity: "Driving" },
            { hour: "19:30 - 20:30", place: "Hotel Nuwara Eliya", activity: "Dinner" }
          ]
        },
        { day: "4", title: "Tea Plantations & Trains", desc: "Tour the famous Ceylon tea plantations and take the iconic, breathtaking train ride to the beautiful town of Ella.", highlight: "Train to Ella", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
            { hour: "09:30 - 14:30", place: "Tea Plantation", activity: "Tea plantation tour" },
            { hour: "15:00 - 17:30", place: "Nuwara Eliya", activity: "Train to Ella" },
            { hour: "17:30 - 18:00", place: "Ella", activity: "Drive to hotel" },
            { hour: "19:30 - 20:30", place: "Hotel Ella", activity: "Dinner" }
          ]
        },
        { day: "5", title: "Adrenaline in Ella", desc: "Visit Diyaluma Falls, go ziplining, do some shopping in Ella, and then drive down to the sunny Arugam Bay.", highlight: "Diyaluma Falls & Zipline", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Ella", activity: "Breakfast" },
            { hour: "09:30 - 13:30", place: "Ella", activity: "Diyaluma Falls" },
            { hour: "15:30 - 17:00", place: "Ella", activity: "Omega Zipline" },
            { hour: "15:30 - 17:00", place: "Ella", activity: "Shopping" },
            { hour: "17:30 - 20:30", place: "Arugam Bay", activity: "Drive to Arugam Bay" },
            { hour: "19:30 - 20:30", place: "Hotel Arugam Bay", activity: "Dinner" }
          ]
        },
        { day: "6", title: "Beach Life & Shabbat", desc: "Enjoy a morning SUP session at the lagoon, surf lessons, and getting ready for a beautiful Shabbat by the beach.", highlight: "Shabbat on the Beach", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Arugam Bay", activity: "Breakfast" },
            { hour: "09:30 - 12:00", place: "Pottuvil", activity: "Morning SUP at Pottuvil Lagoon" },
            { hour: "13:30 - 15:30", place: "Arugam Bay", activity: "Surf lesson / hang out on beach" },
            { hour: "15:30 - 17:00", place: "Hotel", activity: "Get ready for Shabbat" },
            { hour: "17:15", place: "Hotel", activity: "Shabbat begins" },
            { hour: "18:30 - 19:30", place: "Hotel Arugam Bay", activity: "Shabbat Dinner" }
          ]
        },
        { day: "7", title: "Shabbat Rest", desc: "A relaxing day in Arugam Bay. Time to enjoy the vibe, rest, and just be.", highlight: "Rest and Relaxation", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike (optional)" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Arugam Bay", activity: "Breakfast" },
            { hour: "18:30", place: "Arugam Bay", activity: "Motzash (Shabbat ends)" },
            { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
          ]
        },
        { day: "8", title: "Surfing & Shopping", desc: "Continue the adventure in Arugam Bay with surfing at the famous beaches and exploring the town.", highlight: "Surfing in Arugam Bay", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Arugam Bay", activity: "Breakfast" },
            { hour: "09:30 - 12:30", place: "Arugam Bay", activity: "Surf / Shops" },
            { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
          ]
        },
        { day: "9-10", title: "Farewell to the Magic", desc: "Final days in Arugam Bay enjoying the ocean, freedom, and packing up before heading home.", highlight: "Last Memories", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Arugam Bay", activity: "Breakfast" },
            { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner (Day 9)" }
          ]
        }
      ]
    },
      days: [
        { day: "1", title: "Arrival in Sri Lanka", desc: "Land in Colombo and head straight to the fresh, cool air of Sigiriya. Settle in, have dinner and a relaxing massage.", highlight: "Arrival & Settling in", 
          schedule: [
            { hour: "-", place: "Israel", activity: "Flight" },
            { hour: "-", place: "Colombo", activity: "Bus ride to Sigiriya" },
            { hour: "-", place: "Sigiriya", activity: "Get rooms & settle in" },
            { hour: "-", place: "Sigiriya", activity: "Dinner" },
            { hour: "-", place: "Sigiriya", activity: "Massage" }
          ]
        },
        { day: "2", title: "Lion's Rock & Safari", desc: "Climb the famous Lion’s Rock, experience an authentic local village tour, and go on a thrilling elephant safari.", highlight: "Lion's Rock & Elephant Safari", 
          schedule: [
            { hour: "05:00", place: "Sigiriya Rock", activity: "Sunrise Hike" },
            { hour: "08:00 - 09:00", place: "Hotel Sigiriya", activity: "Breakfast" },
            { hour: "10:00 - 15:00", place: "Village", activity: "Authentic Village Tour" },
            { hour: "15:00 - 16:00", place: "Hotel", activity: "Nap / Rest" },
            { hour: "16:00 - 18:00", place: "Safari", activity: "Elephant Safari" },
            { hour: "18:30 - 19:30", place: "Hotel Sigiriya", activity: "Dinner" },
            { hour: "20:30", place: "Hotel", activity: "Hang out" }
          ]
        },
        { day: "3", title: "Waterfalls & Adventure", desc: "Start the day with yoga, then head to Kitulgala for rafting, canyoning, and a rainforest walk before driving to Nuwara Eliya.", highlight: "Kitulgala Rafting", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
            { hour: "09:30 - 13:30", place: "Kitulgala", activity: "Driving to Kitulgala" },
            { hour: "14:00 - 15:30", place: "Kitulgala", activity: "Rafting" },
            { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Canyoning" },
            { hour: "15:30 - 17:00", place: "Kitulgala", activity: "Rainforest walk" },
            { hour: "17:30 - 19:30", place: "Nuwara Eliya", activity: "Driving" },
            { hour: "19:30 - 20:30", place: "Hotel Nuwara Eliya", activity: "Dinner" }
          ]
        },
        { day: "4", title: "Tea Plantations & Trains", desc: "Tour the famous Ceylon tea plantations and take the iconic, breathtaking train ride to the beautiful town of Ella.", highlight: "Train to Ella", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel", activity: "Breakfast" },
            { hour: "09:30 - 14:30", place: "Tea Plantation", activity: "Tea plantation tour" },
            { hour: "15:00 - 17:30", place: "Nuwara Eliya", activity: "Train to Ella" },
            { hour: "17:30 - 18:00", place: "Ella", activity: "Drive to hotel" },
            { hour: "19:30 - 20:30", place: "Hotel Ella", activity: "Dinner" }
          ]
        },
        { day: "5", title: "Adrenaline in Ella", desc: "Visit Diyaluma Falls, go ziplining, do some shopping in Ella, and then drive down to the sunny Arugam Bay.", highlight: "Diyaluma Falls & Zipline", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Ella", activity: "Breakfast" },
            { hour: "09:30 - 13:30", place: "Ella", activity: "Diyaluma Falls" },
            { hour: "15:30 - 17:00", place: "Ella", activity: "Omega Zipline" },
            { hour: "15:30 - 17:00", place: "Ella", activity: "Shopping" },
            { hour: "17:30 - 20:30", place: "Arugam Bay", activity: "Drive to Arugam Bay" },
            { hour: "19:30 - 20:30", place: "Hotel Arugam Bay", activity: "Dinner" }
          ]
        },
        { day: "6", title: "Beach Life & Shabbat", desc: "Enjoy a morning SUP session at the lagoon, surf lessons, and getting ready for a beautiful Shabbat by the beach.", highlight: "Shabbat on the Beach", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Arugam Bay", activity: "Breakfast" },
            { hour: "09:30 - 12:00", place: "Pottuvil", activity: "Morning SUP at Pottuvil Lagoon" },
            { hour: "13:30 - 15:30", place: "Arugam Bay", activity: "Surf lesson / hang out on beach" },
            { hour: "15:30 - 17:00", place: "Hotel", activity: "Get ready for Shabbat" },
            { hour: "17:15", place: "Hotel", activity: "Shabbat begins" },
            { hour: "18:30 - 19:30", place: "Hotel Arugam Bay", activity: "Shabbat Dinner" }
          ]
        },
        { day: "7", title: "Shabbat Rest", desc: "A relaxing day in Arugam Bay. Time to enjoy the vibe, rest, and just be.", highlight: "Rest and Relaxation", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike (optional)" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Arugam Bay", activity: "Breakfast" },
            { hour: "18:30", place: "Arugam Bay", activity: "Motzash (Shabbat ends)" },
            { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
          ]
        },
        { day: "8", title: "Surfing & Shopping", desc: "Continue the adventure in Arugam Bay with surfing at the famous beaches and exploring the town.", highlight: "Surfing in Arugam Bay", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Arugam Bay", activity: "Breakfast" },
            { hour: "09:30 - 12:30", place: "Arugam Bay", activity: "Surf / Shops" },
            { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner" }
          ]
        },
        { day: "9-10", title: "Farewell to the Magic", desc: "Final days in Arugam Bay enjoying the ocean, freedom, and packing up before heading home.", highlight: "Last Memories", 
          schedule: [
            { hour: "05:00", place: "-", activity: "Sunrise hike" },
            { hour: "06:30", place: "Hotel", activity: "Yoga" },
            { hour: "08:00 - 09:00", place: "Hotel Arugam Bay", activity: "Breakfast" },
            { hour: "19:30 - 20:30", place: "Hotel", activity: "Dinner (Day 9)" }
          ]
        }
      ]
    },
        { day: "4-5", title: "Waterfalls & Trains", desc: "Hike Little Adam’s Peak at sunrise, and get ready for the famous train ride. Explore the Nine Arches Bridge and sip the world-famous Ceylon in the rolling green plantations. See breathtaking waterfalls and heartstopping views when you are ziplining.", highlight: "Nine Arches Bridge & Zipline" },
        { day: "6-8", title: "Beach Life & Safari", desc: "Travel to Arugam Bay and settle into your boutique, beachfront apartment. Surf or take a surf lesson, explore the lagoons, hike up Elephant Rock at sunrise, go on a safari, sit at the beach, enjoy the spas and do some shopping. Enjoy some authentic local cuisine. Experience shabbat on the beach.", highlight: "Shabbat on the beach" },
        { day: "9", title: "Snorkeling & Spas", desc: "Go snorkeling in the clear waters and see the corals and marine life. Get a massage, go souvenir shopping and spend time in the local town.", highlight: "Snorkeling & Massage" },
        { day: "10", title: "Sunrise & Farewell", desc: "Sunrise hike at the famous Elephant Rock and then pack up and drive to the airport. See your family and share your life-changing experiences with them.", highlight: "Elephant Rock Sunrise" },
      ]
    },
    essentials: { title: 'Good to know', subtitle: 'Everything you need to know before packing your bags.', ai_title: 'What to Pack? Ask AI', ai_desc: 'Tell us about yourself (e.g., "Always cold", "Love spicy food") and AI will generate a list.', ai_placeholder: 'Example: I am traveling with my grandmother...', ai_btn: 'Generate List', categories: [
        { title: "Visa (ETA)", items: ["Israelis need an ETA (~$50 USD)", "Apply at eta.gov.lk", "Passport valid for 6 months"] },
        { title: "Money & Currency", items: ["Currency: Sri Lankan Rupee (LKR)", "Bring clean USD notes", "Cash is needed for Tuk-Tuks"] },
        { title: "Electricity", items: ["Voltage: 230V, Type D or G plugs", "Bring a universal adapter", "Pen trick works for Type G"] },
        { title: "Clothing", items: ["Loose hiking pants, leggings, skirts", "Bathing suits", "Hiking sandals"] },
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
    about: { title: 'Our Story', p1: 'So here we are, Eyal, Aliza, and Naomi 🙂.\n\nIn the summer of 2025, the three of us met in Sri Lanka after Eyal and Aliza completed a long honeymoon in the East. It was 10 miraculous days of waterfalls, surfing, beaches, landscapes, and simply excellent hotels (and one bad one, just so we’d have something to complain about).', p2: 'We returned home, and Naomi had an idea. Why not make this incredible, life-changing experience of travelling to the East accessible to savtas and mothers? So many young Israelis travel after the army to this part of the world and they have the time of their lives. They live the culture, they take on challenges they never would at home and they see life from a completely new perspective. We believe everyone should get the chance to do this. (We actually believe everyone needs to do this but we’ll discuss that when we meet:)\n\nWe realized that who better to guide savtas and mothers on this life-changing journey than us? We are not salespeople, we are not a travel agency, we are not working with any big companies. We are 3 people who are passionate about all that Sri Lanka has to offer and we want to give you the opportunity to share that passion.', p3: 'We each bring something else to your Sri Lankan adventure. I, Naomi, will be with you through every experience, making sure everyone is thoroughly enjoying themselves and always available to answer any and all questions. Eyal and Aliza, are trained yoga instructors and incredible chefs and they will make sure everyone is well fed and feeling their best. (They also play guitar and ukulele, respectively, which will come in handy at our nighttime beach concerts.) We will also have a local guide and driver with us to make sure we can easily get around and to give us an understanding and appreciation for the local culture.', team: { eyal: 'Eyal & Aliza', naomi: 'Naomi', guide: 'Local Guide' }
    },
    register: { title: 'Secure Your Spot', subtitle: 'Fill out the details below, and we will contact you within 24 hours.', contact_wa: 'Contact Eyal', contact_email: 'Or Email Us', details: ["Limited to 15 participants", "No immediate payment", "Full refund policy"], form: { name: 'Full Name', phone: 'Phone', email: 'Email', guests: 'Number of Travelers', notes: 'Special Requests', submit: 'Send Request' }
    }
  }
};

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [lang, setLang] = useState('he');
  const [siteContent, setSiteContent] = useState(defaultContentData);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('/api/content')
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

  const t = useMemo(() => siteContent[lang] || defaultContentData[lang], [siteContent, lang]);

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
