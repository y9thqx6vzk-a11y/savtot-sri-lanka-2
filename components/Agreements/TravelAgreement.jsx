import React from 'react';
import { useSite } from '../../contexts/SiteContext';

export default function TravelAgreement() {
  const { lang } = useSite();
  const isHe = lang === 'he';

  if (isHe) {
    return (
      <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="rtl">
        <p className="font-bold text-base">הסכם נסיעה ותנאי הרשמה – מסע נשים לסרי לנקה (קיץ וחורף 2027)</p>
        <p>ברוכות הבאות למסע שלנו לסרי לנקה. מסמך זה נוסח בשקיפות מלאה כדי לשמש כמדריך ברור ומחייב המסדיר את מערכת היחסים, ההסכמות וההתחייבויות בינינו. אנא קראו אותו בעיון.</p>
        
        <div className="font-bold mt-4 mb-2 text-teal-800">1. זהות הצדדים ומהות ההתקשרות (מודל סוכנות ונאמנות)</div>
        <ul className="list-none space-y-2">
          <li>1.1. המשתתפת מצהירה כי ידוע לה שהמארגנים פועלים אך ורק כמתווכים וסוכנים בינה לבין ספקי התיירות, בתי המלון, חברות התחבורה וקבלני המשנה בסרי לנקה.</li>
          <li>1.2. המשתתפת אחראית בלעדית להגעה עצמאית לנקודת המפגש שנקבעה. הרשמה זו מכסה שירותי קרקע בלבד ואינה תלויה כלל בסידורי טיסות הבינלאומיות של המשתתפת.</li>
        </ul>

        <div className="font-bold mt-4 mb-2 text-teal-800">2. עלות הטיול, מבנה התמחור ושקיפות פיננסית</div>
        <p>בהתאם לחוק, לרבות תקנה 6 לתקנות מס ערך מוסף, תשל"ו-1976, התשלום עבור הטיול מפוצל לשני ערוצים נפרדים:</p>
        <ul className="list-none space-y-2">
          <li>2.1. <strong>מחיר בסיס:</strong> 8,050 ש"ח (מבוסס על 2,710 דולר ארה"ב). המחיר מבוסס על קבוצת מינימום של 10 משתתפות ותפוסה זוגית (שתי משתתפות בחדר).</li>
          <li>2.2. <strong>פיקדון ספקים לעומת עמלת ארגון:</strong> מתוך מחיר הבסיס, סך של כ-1,400 ש"ח מהווה את עמלת המארגנים עבור הכנה וארגון (בגינו תופק חשבונית מס/קבלה רגילה). היתרה, כ-6,650 ש"ח, מהווה כספי פיקדון ספקים המוחזקים בנאמנות אך ורק עבור הוצאות המשתתפת בסרי לנקה (בגינם תופק "קבלת פיקדון" נפרדת).</li>
          <li>2.3. <strong>רכיב פעילויות שטח להחזר:</strong> מתוך מחיר הבסיס, סך של 290 דולר ארה"ב מוגדר כ"רכיב פעילויות שטח". רכיב ספציפי זה יוחרג לטובת המשתתפת במנגנון ההחזרים במקרה של ביטול (כמפורט בסעיף 4).</li>
          <li>2.4. <strong>פריסת תשלומים ודמי הרשמה:</strong> התשלום עבור הטיול יבוצע בתשלומים הבאים (בדולרים או בשוויים בשקלים לפי שער העברות גבוה ביום התשלום):
            <ul className="list-disc mr-6 mt-1 space-y-1">
              <li>מקדמה: 1,000 ש"ח בעת ההרשמה. מתוך סכום זה, 300 ש"ח מוגדרים כדמי הרשמה והכנה שאינם ניתנים להחזר (למעט במקרה של ביטול כדין בתוך 14 הימים הראשונים, כקבוע בחוק).</li>
              <li>תשלום שני: 40% מהיתרה לתשלום בהמשך.</li>
              <li>תשלום סופי: היתרה לתשלום עד חודש לפני מועד היציאה.</li>
            </ul>
          </li>
        </ul>

        <div className="font-bold mt-4 mb-2 text-teal-800">3. תוספת יחיד ומנגנון שיבוץ חדרים</div>
        <p>כדי למנוע גירעון בתקציב הטיול עקב מספר אי זוגי של משתתפות, שדרוג או אילוץ לחדר יחיד יתומחר בשני מסלולים:</p>
        <ul className="list-disc mr-6 space-y-2">
          <li><strong>מסלול א' (מספר זוגי של בקשות לחדר יחיד):</strong> אם לפחות 2 משתתפות בקבוצה יבקשו חדר יחיד, התוספת תהיה 450 דולר למשתתפת (מחיר טיול כולל: 3,160 דולר).</li>
          <li><strong>מסלול ב' (חדר יחיד מאולץ / בלעדי):</strong> אם רק משתתפת אחת (1) בקבוצה כולה תבקש חדר יחיד, או במקרה של "חדר יחיד מאולץ" עקב מספר אי זוגי של משתתפות או ביטול של שותפה לחדר, התוספת תהיה 900 דולר (מחיר טיול כולל: 3,610 דולר).</li>
        </ul>

        <div className="font-bold mt-4 mb-2 text-teal-800">4. "התאריך הקובע" ומדיניות ביטולים</div>
        <p>מסע זה כולל שירותי תיירות הניתנים במלואם מחוץ לישראל. בהתאם לסעיף 14ג2 לחוק הגנת הצרכן, מוצעת בחירה בין מסלולי הביטול הבאים:</p>
        <ul className="list-disc mr-6 space-y-2">
          <li><strong>מסלול א' – חוק הגנת הצרכן הישראלי:</strong> הזכות לבטל בתוך 14 ימים מיום ביצוע העסקה, ובלבד שהביטול נעשה לפחות 7 ימים שאינם ימי מנוחה לפני מועד היציאה. דמי הביטול במסלול זה יהיו 5% מערך העסקה או 100 ש"ח (הנמוך מביניהם). ביטול לאחר מסגרת זמן זו יפעיל את מסלול ב'.</li>
          <li><strong>מסלול ב' – ספקים זרים:</strong> תחול מדיניות הביטולים של הספקים הזרים. "התאריך הקובע" להזמנות סופיות הוא ה-30 ביוני 2026 לטיול קיץ, וה-30 בנובמבר 2026 לטיול חורף.
            <ul className="list-circle mr-6 mt-1 space-y-1 text-xs">
              <li>ביטול לפני התאריך הקובע: החזר מלא (למעט 300 ש"ח דמי הרשמה).</li>
              <li>ביטול לאחר התאריך הקובע: משתתפת בחדר זוגי תקבל החזר של 550 דולר. משתתפת בחדר יחיד מאולץ/מרצון תקבל החזר של 1,990 דולר.</li>
            </ul>
          </li>
        </ul>
        <p className="text-xs">4.1. הודעת ביטול חייבת להימסר בכתב לוואטסאפ של ההפקה ולדוא"ל, ותיכנס לתוקף רק עם אישור קבלה בימי עבודה.</p>

        <div className="font-bold mt-4 mb-2 text-teal-800">5. מנגנון משתתפת חלופית (החזר מלא)</div>
        <p>5.1. משתתפת שתבטל לאחר התאריך הקובע אך תציג באופן עצמאי משתתפת חלופית, תהיה זכאית להחזר מלא של 100% (בניכוי דמי שינוי שם ישירים שיידרשו על ידי ספקים/חברות תעופה).</p>

        <div className="font-bold mt-4 mb-2 text-teal-800">6. זכות המארגנים לדחות או לבטל</div>
        <ul className="list-none space-y-2 text-xs">
          <li>6.1. <strong>מינימום משתתפות:</strong> קיום הטיול מותנה ב-10 משתתפות לפחות.</li>
          <li>6.2. <strong>כוח עליון:</strong> במקרה של ביטול עקב כוח עליון, המארגנים יפעלו להחזר מקסימלי מספקי הקרקע בניכוי 800 ש"ח בגין הוצאות.</li>
          <li>6.3. <strong>חוסר כדאיות כלכלית:</strong> המארגנים שומרים לעצמם את הזכות לבטל את הטיול במידה וביטולים של משתתפות יגרמו לגירעון חמור בפרויקט, במקרה כזה שאר המשתתפות יקבלו החזר מלא.</li>
        </ul>

        <div className="font-bold mt-4 mb-2 text-teal-800">7. הצהרת בריאות וביטוח חובה</div>
        <p>אופי הטיול כולל פעילויות שטח. המשתתפת מצהירה כי מצב בריאותה תקין, והיא מחוייבת לרכוש ביטוח נסיעות מקיף (מומלץ כולל הרחבת "ביטול מכל סיבה").</p>

        <div className="font-bold mt-4 mb-2 text-teal-800">8. גילוי נאות והחרגות</div>
        <p>מחיר הטיול אינו כולל טיסות בינלאומיות, ויזת כניסה (ETA), ביטוח נסיעות אישי, והוצאות אישיות.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="ltr">
      <p className="font-bold text-base">Travel Agreement and Registration Terms – Women's Journey to Sri Lanka (Summer & Winter 2027)</p>
      <p>Welcome to our journey to Sri Lanka. This document is formulated with full transparency to serve as a clear, binding guide regulating the relationship, agreements, and obligations between us. Please read it carefully.</p>
      
      <div className="font-bold mt-4 mb-2 text-teal-800">1. Identity of the Parties and Nature of the Engagement</div>
      <ul className="list-none space-y-2">
        <li>1.1. The Participant declares she is aware that the Organizers act solely as intermediaries between her and the tourism suppliers in Sri Lanka.</li>
        <li>1.2. The Participant is solely responsible for her independent arrival. This registration covers ground services only.</li>
      </ul>

      <div className="font-bold mt-4 mb-2 text-teal-800">2. Trip Cost, Pricing Structure, and Financial Transparency</div>
      <p>The payment for the trip is split into two separate channels:</p>
      <ul className="list-none space-y-2">
        <li>2.1. <strong>Base Price:</strong> 8,050 ILS (Based on $2,710 USD). Based on a minimum group of 10 participants and double occupancy.</li>
        <li>2.2. <strong>Supplier Deposit vs. Organizing Fee:</strong> 1,400 ILS constitutes the Organizers' fee. The balance (approx. 6,650 ILS) constitutes Supplier Deposit Funds held in trust.</li>
        <li>2.3. <strong>Refundable Field Activities Component:</strong> $290 USD is defined as the field activities component.</li>
        <li>2.4. <strong>Advance Payment:</strong> 1,000 ILS upon registration (300 ILS non-refundable registration fee).</li>
      </ul>

      <div className="font-bold mt-4 mb-2 text-teal-800">3. Single Supplement and Rooming Mechanics</div>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Track A:</strong> If at least 2 participants request a single room, supplement is $450 USD.</li>
        <li><strong>Track B:</strong> Forced / Sole single room supplement is $900 USD.</li>
      </ul>

      <div className="font-bold mt-4 mb-2 text-teal-800">4. The "Determining Date" and Cancellation Policy</div>
      <p>Determining Date: June 30, 2026 for Summer Tour, and November 30, 2026 for Winter Tour.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Cancellation before Determining Date: Full refund (excluding 300 ILS registration fee).</li>
        <li>Cancellation after Determining Date: Participant in double room: Refund of $550 USD only. Single room: Refund of $1,990 USD only.</li>
      </ul>

      <div className="font-bold mt-4 mb-2 text-teal-800">5. Replacement Participant Mechanism</div>
      <p>5.1. A Participant who cancels after the Determining Date but independently presents a Replacement Participant will be entitled to a 100% full refund (minus name change fees).</p>

      <div className="font-bold mt-4 mb-2 text-teal-800">6. Organizers' Right to Postpone or Cancel</div>
      <p className="text-xs">The execution of the trip is conditional upon the registration of at least 10 participants. Organizers reserve the right to cancel due to force majeure or economic unviability.</p>

      <div className="font-bold mt-4 mb-2 text-teal-800">7. Health Declaration & Mandatory Insurance</div>
      <p>The Participant declares her health condition is fit. It is an absolute obligation to purchase comprehensive travel insurance.</p>
    </div>
  );
}
