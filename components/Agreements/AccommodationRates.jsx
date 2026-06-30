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

        <div className="font-bold mt-4 mb-2 text-teal-800">2. עלויות לינה ופערי תעריפים</div>
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
          <p className="mb-2">עלות הלינה הכוללת במסע היא באזור ה-$1,400.</p>
          <p className="mb-2">שימו לב כי העלויות משתנות וקיים פער בין לינה בחדר יחיד ללינה בחדר זוגי.</p>
          <p>ניתן לפנות אלינו בפרטי על מנת לקבל את הפירוט המלא של התעריפים הליליים עבור כל מלון בנפרד.</p>
        </div>
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

      <div className="font-bold mt-4 mb-2 text-teal-800">2. Accommodation Costs & Rate Differences</div>
      <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
        <p className="mb-2">The total accommodation cost for the trip is approximately $1,400.</p>
        <p className="mb-2">Please note that costs vary and there is a difference between staying in a single room versus a double room.</p>
        <p>You can contact us privately to receive the full breakdown of nightly rates for each individual hotel.</p>
      </div>
    </div>
  );
}
