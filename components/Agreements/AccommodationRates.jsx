import React from 'react';
import { useSite } from '../../contexts/SiteContext';

export default function AccommodationRates() {
  const { lang } = useSite();
  const isHe = lang === 'he';

  if (isHe) {
    return (
      <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="rtl">
        <p className="font-bold text-base">נספח א' – תעריפי לינה ומלונות</p>
        <p>נספח זה ("לוח תעריפי לינה") מהווה חלק בלתי נפרד מהסכם הרישום לטיול. כל התעריפים והסכומים המפורטים כאן נקובים בדולר ארה"ב (USD) ומייצגים את תעריפי הלינה נטו עליהם סוכם מול ספקי הלינה עבור טיול קיץ 2026.</p>

        <div className="font-bold mt-4 mb-2 text-teal-800">1. הגדרות ופרשנות</div>
        <ul className="list-disc mr-6 space-y-1">
          <li><strong>תעריף זוגי (DBL Rate):</strong> תעריף לילי לחדר סטנדרטי בתפוסה זוגית, כולל מסים מקומיים רלוונטיים ודמי שירות, המשותף לשתי (2) משתתפות.</li>
          <li><strong>תעריף יחיד (SGL Rate):</strong> תעריף לילי לחדר בתפוסה של יחיד, כולל מסים מקומיים רלוונטיים ודמי שירות, מאוכלס על ידי משתתפת אחת (1).</li>
          <li><strong>הקצאה בסיסית למשתתפת:</strong> מייצגת חמישים אחוז (50%) מהתעריף הזוגי (DBL Rate), שמחושב מראש ומוטמע בתוך מחיר הטיול הבסיסי ($2,710).</li>
        </ul>

        <div className="font-bold mt-4 mb-2 text-teal-800">2. טבלת פירוט תעריפים ליליים</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border-collapse border border-stone-300">
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-300 p-2 text-right">תאריך ויום</th>
                <th className="border border-stone-300 p-2 text-right">ספק / שם מלון</th>
                <th className="border border-stone-300 p-2 text-right">מיקום / עיר</th>
                <th className="border border-stone-300 p-2 text-right">תעריף זוגי (DBL)</th>
                <th className="border border-stone-300 p-2 text-right">תעריף יחיד (SGL)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-stone-300 p-2">30 אוגוסט 2026 (ראשון)</td><td className="border border-stone-300 p-2">Liyya Water Villas</td><td className="border border-stone-300 p-2">סיגירייה</td><td className="border border-stone-300 p-2">$110.00</td><td className="border border-stone-300 p-2">$100.00</td></tr>
              <tr><td className="border border-stone-300 p-2">31 אוגוסט 2026 (שני)</td><td className="border border-stone-300 p-2">Liyya Water Villas</td><td className="border border-stone-300 p-2">סיגירייה</td><td className="border border-stone-300 p-2">$110.00</td><td className="border border-stone-300 p-2">$100.00</td></tr>
              <tr><td className="border border-stone-300 p-2">1 ספטמבר 2026 (שלישי)</td><td className="border border-stone-300 p-2">לינת פרימיום ייעודית</td><td className="border border-stone-300 p-2">נווארה אליה</td><td className="border border-stone-300 p-2">$330.00</td><td className="border border-stone-300 p-2">$280.00</td></tr>
              <tr><td className="border border-stone-300 p-2">2 ספטמבר 2026 (רביעי)</td><td className="border border-stone-300 p-2">98 Acres Resort & Spa</td><td className="border border-stone-300 p-2">אלה</td><td className="border border-stone-300 p-2">$330.00</td><td className="border border-stone-300 p-2">$280.00</td></tr>
              <tr><td className="border border-stone-300 p-2">3 ספטמבר 2026 (חמישי)</td><td className="border border-stone-300 p-2">98 Acres Resort & Spa</td><td className="border border-stone-300 p-2">אלה</td><td className="border border-stone-300 p-2">$330.00</td><td className="border border-stone-300 p-2">$280.00</td></tr>
              <tr><td className="border border-stone-300 p-2">4 ספטמבר 2026 (שישי)</td><td className="border border-stone-300 p-2">Sun Siyam Pasikudah</td><td className="border border-stone-300 p-2">פסיקודה</td><td className="border border-stone-300 p-2">$250.00</td><td className="border border-stone-300 p-2">$220.00</td></tr>
              <tr><td className="border border-stone-300 p-2">5 ספטמבר 2026 (שבת)</td><td className="border border-stone-300 p-2">Sun Siyam Pasikudah</td><td className="border border-stone-300 p-2">פסיקודה</td><td className="border border-stone-300 p-2">$250.00</td><td className="border border-stone-300 p-2">$220.00</td></tr>
              <tr><td className="border border-stone-300 p-2">6 ספטמבר 2026 (ראשון)</td><td className="border border-stone-300 p-2">Sun Siyam Pasikudah</td><td className="border border-stone-300 p-2">פסיקודה</td><td className="border border-stone-300 p-2">$250.00</td><td className="border border-stone-300 p-2">$220.00</td></tr>
              <tr className="font-bold bg-stone-50"><td className="border border-stone-300 p-2" colSpan={3}>סה"כ מצטבר</td><td className="border border-stone-300 p-2">$1,960.00</td><td className="border border-stone-300 p-2">$1,700.00</td></tr>
            </tbody>
          </table>
        </div>

        <div className="font-bold mt-4 mb-2 text-teal-800">3. אמנות משפטיות ופיננסיות</div>
        <p className="text-xs">
          3.1 <strong>אופי מחייב של תעריפים:</strong> התעריפים המפורטים בסעיף 2 נעולים וסופיים כפי שהוסכם עם המפעילים בסרי לנקה. לא יורשו שינויים בנתוני בסיס אלו על ידי המשתתפות.<br/>
          3.2 <strong>בסיס לחישובי תוספת יחיד:</strong> כל תוספת יחיד המוזכרת בהסכם נגזרת מבחינה משפטית מהפער המתמטי בפועל בין התעריף המצטבר לחדר יחיד ($1,700.00) לבין ההקצאה הבסיסית למשתתפת ($980.00), ומותאמת דינמית למניעת כל גירעון פיננסי לקבוצה או למארגנים.<br/>
          3.3 <strong>חיסכון ממומש במקרה של ביטולים:</strong> במקרה של ביטול בכפוף לתנאים שלאחר המועד האחרון, כל חיסכון נטו או החזר שיתקבל מבתי המלון יחושב אך ורק בהתאם לתעריפים הליליים המפורטים, בניכוי כל שדרוג חובה לתפוסת יחיד שייכפה על השותפה הנותרת.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="ltr">
      <p className="font-bold text-base">APPENDIX A – SCHEDULE OF ACCOMMODATION RATES</p>
      <p>This Appendix A (the "Accommodation Schedule") forms an integral and inseparable part of the Tour Registration Agreement. All rates and figures listed herein are denominated in United States Dollars (USD) and represent the net contracted nightly rates with the respective accommodation providers for the Summer 2026 Tour.</p>

      <div className="font-bold mt-4 mb-2 text-teal-800">1. Definitions and Interpretation</div>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>DBL Rate:</strong> shall mean the nightly room rate for a standard double-occupancy room, inclusive of applicable local taxes and service charges, shared by two (2) participants.</li>
        <li><strong>SGL Rate:</strong> shall mean the nightly room rate for a single-occupancy room, inclusive of applicable local taxes and service charges, occupied by one (1) participant or staff member.</li>
        <li><strong>Per Participant Base Allocation:</strong> shall represent fifty percent (50%) of the DBL Rate, which is pre-calculated and embedded within the core Tour Price ($2,710).</li>
      </ul>

      <div className="font-bold mt-4 mb-2 text-teal-800">2. Nightly Rate Specification Table</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs border-collapse border border-stone-300">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 p-2 text-left">Date & Day</th>
              <th className="border border-stone-300 p-2 text-left">Accommodation Provider</th>
              <th className="border border-stone-300 p-2 text-left">Location / City</th>
              <th className="border border-stone-300 p-2 text-left">DBL Rate</th>
              <th className="border border-stone-300 p-2 text-left">SGL Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-300 p-2">Aug 30, 2026 (Sun)</td><td className="border border-stone-300 p-2">Liyya Water Villas</td><td className="border border-stone-300 p-2">Sigiriya</td><td className="border border-stone-300 p-2">$110.00</td><td className="border border-stone-300 p-2">$100.00</td></tr>
            <tr><td className="border border-stone-300 p-2">Aug 31, 2026 (Mon)</td><td className="border border-stone-300 p-2">Liyya Water Villas</td><td className="border border-stone-300 p-2">Sigiriya</td><td className="border border-stone-300 p-2">$110.00</td><td className="border border-stone-300 p-2">$100.00</td></tr>
            <tr><td className="border border-stone-300 p-2">Sep 1, 2026 (Tue)</td><td className="border border-stone-300 p-2">Premium Accommodation</td><td className="border border-stone-300 p-2">Nuwara Eliya</td><td className="border border-stone-300 p-2">$330.00</td><td className="border border-stone-300 p-2">$280.00</td></tr>
            <tr><td className="border border-stone-300 p-2">Sep 2, 2026 (Wed)</td><td className="border border-stone-300 p-2">98 Acres Resort & Spa</td><td className="border border-stone-300 p-2">Ella</td><td className="border border-stone-300 p-2">$330.00</td><td className="border border-stone-300 p-2">$280.00</td></tr>
            <tr><td className="border border-stone-300 p-2">Sep 3, 2026 (Thu)</td><td className="border border-stone-300 p-2">98 Acres Resort & Spa</td><td className="border border-stone-300 p-2">Ella</td><td className="border border-stone-300 p-2">$330.00</td><td className="border border-stone-300 p-2">$280.00</td></tr>
            <tr><td className="border border-stone-300 p-2">Sep 4, 2026 (Fri)</td><td className="border border-stone-300 p-2">Sun Siyam Pasikudah</td><td className="border border-stone-300 p-2">Pasikudah</td><td className="border border-stone-300 p-2">$250.00</td><td className="border border-stone-300 p-2">$220.00</td></tr>
            <tr><td className="border border-stone-300 p-2">Sep 5, 2026 (Sat)</td><td className="border border-stone-300 p-2">Sun Siyam Pasikudah</td><td className="border border-stone-300 p-2">Pasikudah</td><td className="border border-stone-300 p-2">$250.00</td><td className="border border-stone-300 p-2">$220.00</td></tr>
            <tr><td className="border border-stone-300 p-2">Sep 6, 2026 (Sun)</td><td className="border border-stone-300 p-2">Sun Siyam Pasikudah</td><td className="border border-stone-300 p-2">Pasikudah</td><td className="border border-stone-300 p-2">$250.00</td><td className="border border-stone-300 p-2">$220.00</td></tr>
            <tr className="font-bold bg-stone-50"><td className="border border-stone-300 p-2" colSpan={3}>CUMULATIVE TOTALS</td><td className="border border-stone-300 p-2">$1,960.00</td><td className="border border-stone-300 p-2">$1,700.00</td></tr>
          </tbody>
        </table>
      </div>

      <div className="font-bold mt-4 mb-2 text-teal-800">3. Legal and Financial Covenants</div>
      <p className="text-xs">
        3.1 <strong>Rate Binding Nature:</strong> The rates stipulated in Section 2 are locked and final as contracted with the ground operators in Sri Lanka. No modifications to these baseline figures shall be permitted by the participants.<br/>
        3.2 <strong>Basis of Single Supplement Calculations:</strong> Any and all Single Supplement charges referenced in Section 1 of the main Agreement are legally derived from the actual mathematical variance between the Cumulative Total SGL Rate ($1,700.00) and the Per Participant Base Allocation ($980.00), adjusted dynamically to prevent any financial deficit to the group collective or the Organizers.<br/>
        3.3 <strong>Realized Savings for Cancellations:</strong> In the event of a cancellation subject to post-deadline conditions, any real-time savings or refunds provided by the hotels listed above shall be calculated strictly in accordance with the individual nightly rates specified in Section 2, minus any mandatory single occupancy forced-upgrades incurred by the remaining roommate.
      </p>
    </div>
  );
}
