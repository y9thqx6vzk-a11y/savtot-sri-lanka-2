import React from 'react';
import { useSite } from '../../contexts/SiteContext';

export default function TravelAgreement() {
  const { lang } = useSite();
  const isHe = lang === 'he';

  if (isHe) {
    return (
      <div className="space-y-5 text-sm text-stone-700 leading-relaxed" dir="rtl">
        <div>
          <h3 className="font-bold text-lg text-teal-900 mb-1">הסכם התקשרות ותנאי רישום – מסע נשים לסרי לנקה (קיץ 2026)</h3>
          <div className="p-3 bg-stone-100/80 rounded-lg text-xs space-y-1 text-stone-600 border border-stone-200">
            <p><strong>בין:</strong> צוות ההפקה, הכולל את נעמי, עליזה ואיל (להלן: "המארגנים")</p>
            <p><strong>לבין:</strong> המשתתפת (להלן: "המשתתפת")</p>
          </div>
        </div>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">1. מהות ההתקשרות (מודל סוכנות ונאמנות)</h4>
          <div className="space-y-2">
            <p><strong>1.1.</strong> המשתתפת מצהירה כי ידוע לה שהמארגנים פועלים כמתווכים וסוכנים בלבד בינה לבין ספקי התיירות, בתי המלון, חברות ההסעה וקבלני המשנה בסרי לנקה, וכי כל הכספים המיועדים לספקים מוחזקים בנאמנות ומועברים ישירות לספקי צד ג' אלו.</p>
            <p><strong>1.2.</strong> באחריות המשתתפת להסדיר את הגעתה העצמאית לנקודת המפגש שתיקבע. עסקת הרישום חלה על שירותי הקרקע בלבד ואינה תלויה בהסדרי התעופה הבינלאומיים האישיים של המשתתפת.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">2. עלות המסע, מבנה התמחור ותנאי החדרים</h4>
          <p className="mb-2">בהתאם להוראות הדין, לרבות תקנה 6 לתקנות מס ערך מוסף, תשל"ו-1976 (הוצאות לטובת צד שלישי), התשלום בגין המסע מורכב משני ערוצים נפרדים, ובגינם יופקו קבלות נפרדות:</p>
          <ul className="list-disc mr-5 space-y-2">
            <li><strong>2.1. מחיר הבסיס למשתתפת:</strong> 8,050 ש"ח (המבוסס על עלות של $2,710 דולר ארה"ב). המחיר מבוסס על קבוצה של 10 משתתפות לפחות ועל לינה בחדר זוגי.</li>
            <li><strong>2.2. דמי ארגון ופיקדון ספקים:</strong> מתוך מחיר הבסיס, סך של כ-1,400 ש"ח מהווה את דמי הארגון והיערכות המארגנים (בגינם תופק חשבונית מס/קבלה כחוק). היתרה, בסך של כ-6,650 ש"ח, מהווה כספי פיקדון לספקים המוחזקים בנאמנות לטובת הוצאות הלקוחה בסרי לנקה (בגינם תופק "קבלת פיקדון" נפרדת המציינת במפורש כי הסכום נתקבל לתשלום הוצאות בשביל הלקוחה).</li>
            <li><strong>2.3. רכיב פעילויות שטח להחזר:</strong> מתוך מחיר הבסיס, סך של $290 דולר ארה"ב מוגדר כ"רכיב פעילויות שטח". רכיב ספציפי זה יוחרג לטובת המשתתפת במסגרת מנגנון ההחזרים במקרה של ביטול (כמפורט בסעיף 4).</li>
            <li><strong>2.4. לוח תשלומים ודמי רישום:</strong> התשלום עבור הטיול יבוצע בשיעורים הבאים (בדולר ארה"ב או בשווה ערך בשקלים לפי שער העברות והמחאות גבוה ביום התשלום):
              <ul className="list-circle mr-5 mt-1 space-y-1 text-xs">
                <li><strong>תשלום מקדמה:</strong> 1,000 ש"ח עם ההרשמה. מתוך סכום זה, סך של 300 ש"ח מוגדר כדמי רישום והיערכות שאינם ניתנים להחזר (למעט ביטול כדין בתוך 14 הימים הראשונים כקבוע בחוק).</li>
                <li><strong>תשלום שני ושלישי:</strong> בהתאם ללוח הזמנים ועד למועד סגירת ההרשמה לפני היציאה.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">3. תוספת חדר יחיד ומכניקת החדרים</h4>
          <p className="mb-2"><strong>3.1.</strong> על מנת למנוע גירעון בקופת המסע עקב מספר משתתפות אי-זוגי, שדרוג לחדר יחיד או העברה מאולצת לחדר יחיד יתומחרו בשני מסלולים:</p>
          <ul className="list-disc mr-5 space-y-2">
            <li><strong>מסלול א' (מספר זוגי של דורשות חדר יחיד):</strong> אם לפחות 2 משתתפות בקבוצה מבקשות חדר יחיד, התוספת תעמוד על $450 דולר ארה"ב למשתתפת (מחיר מסע כולל: $3,160 דולר).</li>
            <li><strong>מסלול ב' (חדר יחיד בלעדי או מאולץ):</strong> אם רק משתתפת אחת בכל הקבוצה תשהה בחדר יחיד, או במקרה של חדר יחיד מאולץ עקב מספר משתתפות אי-זוגי או ביטול של שותפה לחדר, התוספת תעמוד על $900 דולר ארה"ב (מחיר מסע כולל: $3,610 דולר), לשם כיסוי העלות הקבועה של החדר הנוסף שנכפה על המערך הלוגיסטי.</li>
          </ul>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">4. "המועד הקובע" ומדיניות הביטולים</h4>
          <p className="mb-2">המסע כולל שירותי תיירות הניתנים במלואם מחוץ לישראל. בהתאם לסעיף 14ג2 לחוק הגנת הצרכן, התשמ"א-1981, מוצעת למשתתפת זכות הבחירה בין חלופות הביטול הבאות:</p>
          
          <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80 mb-3 space-y-2">
            <p><strong>חלופה א' – חוק הגנת הצרכן הישראלי (ברירת מחדל):</strong> זכות ביטול בתוך 14 ימים מיום ביצוע העסקה או קבלת מסמך זה, ובלבד שנותרו 7 ימי עבודה לפחות לפני מועד הטיול. משתתפת שהיא אדם עם מוגבלות, אזרחית ותיקה (מעל גיל 65) או עולה חדשה, רשאית לבטל בתוך 4 חודשים מיום ההרשמה (בכפוף להצגת תעודה מתאימה ובמידה וההתקשרות כללה שיחה ישירה). דמי הביטול בחלופה זו יעמדו על 5% או 100 ש"ח (הנמוך מביניהם). <em>(הערה משפטית: ביטול לאחר חלון הזמן הסטטוטורי יוביל להחלת דמי הביטול המלאים של הספקים בחו"ל, כמפורט בחלופה ב').</em></p>
            <p><strong>חלופה ב' – מדיניות ספקי הקרקע מחוץ לישראל (החל מ"המועד הקובע" - 30.6.2026):</strong> במסלול זה תחול מדיניות הביטול של הספקים הזרים בחו"ל וההתחייבויות הקבוצתיות. מוסכם כי "המועד הקובע" שבו ההזמנות מול ספקי השטח הופכות לסופיות ומחייבות הוא ה-30 ביוני 2026 (במידה והמארגנים יבצעו תשלומים בפועל שאינם ניתנים להחזר לספקים לפני תאריך זה, המועד הקובע ישתנה למועד התשלום בפועל, ותימסר על כך הודעה).</p>
          </div>

          <div className="space-y-2">
            <p><strong>4.1. ביטול לאחר המועד הקובע:</strong> משתתפת שתבטל את השתתפותה לאחר המועד הקובע ללא הצגת משתתפת חלופית, לא תהיה זכאית לקבל החזר כספי מלא. נוסחת ההחזר מבוססת על השבת רכיב הפעילויות בשטח ($290) והחיסכון הריאלי מבתי המלון, בקיזוז חלקה בהוצאות הקבועות ובעלויות שנכפו על שותפתה לחדר.</p>
            <p><strong>4.2. סכומי ההחזר ודמי הביטול המוחלטים:</strong></p>
            <ul className="list-disc mr-5 space-y-1 text-xs">
              <li><strong>משתתפת בחדר זוגי שביטלה:</strong> תקבל החזר של $550 דולר בלבד (הפסד/דמי ביטול לספקים: $2,160 דולר).</li>
              <li><strong>משתתפת בחדר יחיד (מבחירה או מאילוץ) שביטלה:</strong> תקבל החזר של $1,640 דולר בלבד (דמי ביטול לספקים: $1,520 במקרה של חדר יחיד מאילוץ מתוך מחיר כולל של $3,160; או $1,970 במקרה של חדר יחיד מבחירה מתוך מחיר כולל של $3,610).</li>
            </ul>
            <p><strong>4.3. התניית החזר בביטול מלונות בפועל (מנגנון קיזוז):</strong> זכאותה של המבטלת בחדר יחיד להחזר ($1,640) מותנית באופן מוחלט בכך שהמלונות וספקי הקרקע בחו"ל יאשרו ביטול של 100% על החדר ללא חיוב או קנס. במידה והמלונות/ספקים יגבו דמי ביטול או קנסות בפועל על החדר הספציפי שבוטל, סכום החיוב יקוזז ישירות, דולר-מול-דולר, מכספי ההחזר של המשתתפת המבטלת (והיא תקבל את היתרה בלבד).</p>
            <p><strong>4.4. נוהל הודעת ביטול:</strong> הודעת ביטול תימסר בכתב (הודעת וואטסאפ למארגנים ובדוא"ל) ותיכנס לתוקף במועד מסירתה בימי עבודה בלבד (לא כולל שישי, שבת וערבי חג בישראל או בסרי לנקה).</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">5. מנגנון משתתפת חלופית (החזר מלא)</h4>
          <div className="space-y-2">
            <p><strong>5.1.</strong> על אף האמור בסעיף 4, משתתפת שתבטל את השתתפותה לאחר המועד הקובע אך תציג מיוזמה ובאופן עצמאי משתתפת חלופית שתיכנס בנעליה, תהיה זכאית להחזר מלא של 100%.</p>
            <p><strong>5.2.</strong> זכאות זו מותנית באופן מוחלט בכך שהמשתתפת החדשה תשלם את מלוא עלות הטיול ותשמור על הסדר החדרים הקיים במדויק. רק עלויות ישירות שיידרשו על ידי חברות התעופה או ספקי הקרקע בגין שינוי השם (קנס שינוי שם) יקוזזו מסכום ההחזר.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">6. זכות המארגנים לביטול או דחיית המסע</h4>
          <div className="space-y-2">
            <p><strong>6.1. אי-הגעה למינימום משתתפות:</strong> יציאת המסע מותנית ברישום של לפחות 10 משתתפות עד ליום 30 ביוני 2026. אם לא יושג יעד זה, המסע יבוטל או יידחה, והמשתתפות יהיו זכאיות להחזר כספי מלא של כל הסכומים ששילמו.</p>
            <p><strong>6.2. ביטול עקב כוח עליון:</strong> במקרה של ביטול המסע כולו עקב נסיבות קטסטרופליות או כוח עליון שאינן בשליטת הצדדים, יפעלו המארגנים להשבת מקסימום הכספים מספקי השטח בחו"ל. מתוך דמי הארגון (הוצאות קבועות בישראל), יקוזז סך של 800 ש"ח בגין שעות היערכות ועבודה שכבר בוצעו, והיתרה תוחזר למשתתפת.</p>
            <p><strong>6.3. ביטול עקב חוסר כדאיות כלכלית:</strong> מאחר ומסע זה מתוכנן ומתומחר עבור קבוצה קטנה ואורגנית, ביטול כדין של משתתפת אחת או יותר עלול לפגוע קשות בהיתכנות הכלכלית או הלוגיסטית של הפרויקט כולו. במידה ומשתתפת מבטלת כדין, והמארגנים מגיעים למסקנה כי ביטול זה מייצר גירעון חמור שאינו מאפשר את כיסוי ההוצאות הקבועות של הטיול, המארגנים שומרים לעצמם את הזכות לדחות או לבטל את הטיול כולו. במקרה כזה, שאר המשתתפות בקבוצה יעודכנו מיידית ויקבלו החזר כספי מלא של 100% מהכספים ששולמו על ידן למארגנים.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">7. הצהרת בריאות, נטילת סיכון וביטוח חובה</h4>
          <div className="space-y-2">
            <p><strong>7.1. כשירות וכושר גופני:</strong> אופי המסע כולל פעילויות שטח, סיורים רגליים ומאמץ פיזי מתון. בחתימתה על הסכם זה, המשתתפת מצהירה כי מצב בריאותה תקין והיא כשירה פיזית ונפשית למסע מעין זה. המשתתפת מחויבת לחתום ולהשיב את טופס הצהרת הבריאות והוויתור המצורף כנספח א'.</p>
            <p><strong>7.2. ביטוח חובה:</strong> חלה חובה מוחלטת ובלעדית על המשתתפת לרכוש פוליסת ביטוח נסיעות מקיפה לחו"ל הכוללת כיסוי רפואי מורחב, חילוץ והצלה, וכיסוי לפעילויות שטח. מומלץ בחום לרכוש פוליסת "ביטול מכל סיבה" (כגון טריפ גראנטי) בסמוך למועד הרישום על מנת להבטיח הגנה מקסימלית על כספי המשתתפת.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">8. גילוי נאות, החרגות והגנת הפרטיות</h4>
          <div className="space-y-2">
            <p><strong>8.1. גילוי נאות:</strong> בהתאם לחוק שירותי תיירות והתקנות מכוחו (גילוי נאות), תוכנית המסע המפורטת, הכוללת את שמות המלונות המתוכננים, דירוגם, כתובותיהם, מספרי הטלפון שלהם, אמצעי התחבורה והארוחות מצורפת להסכם זה כנספח ב'. המארגנים שומרים לעצמם את הזכות להחליף ספקים או מלונות במלונות ברמה זהה עקב אילוצי שטח.</p>
            <p><strong>8.2. החרגות:</strong> מחיר המסע אינו כולל טיסות בינלאומיות, אשרת כניסה לסרי לנקה (ETA), ביטוח נסיעות אישי, וכל הוצאה אישית שאינה מפורטת מפורשות בתוכנית המסע.</p>
            <p><strong>8.3. הגנת הפרטיות:</strong> בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, מידע אישי שיימסר על ידי המשתתפת, לרבות מידע רפואי (המוגדר בחוק כ"מידע בעל רגישות מיוחדת"), יישמר באופן מאובטח. מידע זה ישמש אך ורק לצורך הפקת המסע, תפעולו, ושמירה על שלום המשתתפות ובריאותן, ולא יועבר לשום צד שלישי שאינו רלוונטי להפקת המסע ללא הסכמה מפורשת.</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold text-teal-800 text-base mb-1.5">9. הדין החל וסמכות שיפוט</h4>
          <p>הסכם זה יהיה כפוף לחוקי מדינת ישראל ויפורש לפיהם. לבתי המשפט המוסמכים בעיר באר שבע ובמחוז הדרום תהיה סמכות שיפוט ייחודית ובלעדית לדון בכל סכסוך או מחלוקת הנובעים מהסכם זה או הקשורים אליו.</p>
          <p className="mt-2 text-xs font-semibold text-stone-600">חתימה דיגיטלית או אישור בכתב בעת העברת דמי המקדמה, מהווים הסכמה מלאה, בלתי מסויגת וסופית לכל התנאים המפורטים בהסכם זה ובנספחיו.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-5 text-sm text-stone-700 leading-relaxed" dir="ltr">
      <div>
        <h3 className="font-bold text-lg text-teal-900 mb-1">Travel Agreement and Registration Terms – Women's Journey to Sri Lanka (Summer 2026)</h3>
        <div className="p-3 bg-stone-100/80 rounded-lg text-xs space-y-1 text-stone-600 border border-stone-200">
          <p><strong>Between:</strong> The Production Team: Naomi, Aliza, and Eyal (hereinafter: the "Organizers")</p>
          <p><strong>And:</strong> The Participant (hereinafter: the "Participant")</p>
        </div>
      </div>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">1. Nature of the Engagement (Agency & Trust Model)</h4>
        <div className="space-y-2">
          <p><strong>1.1.</strong> The Participant declares she is aware that the Organizers act solely as intermediaries and agents between her and the tourism suppliers, hotels, transportation companies, and subcontractors in Sri Lanka, and that all supplier-related funds are held in trust and transferred directly to these third-party providers.</p>
          <p><strong>1.2.</strong> The Participant is solely responsible for her independent arrival at the designated meeting point. This registration covers ground services only and is strictly independent of the Participant's personal international flight arrangements.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">2. Trip Cost, Pricing, and Financial Transparency</h4>
        <p className="mb-2">In strict accordance with Israeli tax law, including Regulation 6 of the Value Added Tax Regulations, 1976 (Expenses in favor of a third party), the payment for the trip is split into two separate channels, and separate receipts will be issued:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>2.1. Base Price:</strong> 8,050 ILS (Based on $2,710 USD). The price is based on a minimum group of 10 participants and double occupancy (two participants per room).</li>
          <li><strong>2.2. Supplier Deposit vs. Organizing Fee:</strong> Out of the base price, approximately 1,400 ILS constitutes the Organizers' fee for preparation and organization (for which a standard Tax Invoice/Receipt will be issued). The balance, approximately 6,650 ILS, constitutes Supplier Deposit Funds held in trust/escrow exclusively for the Participant's expenses in Sri Lanka (for which a specific "Deposit Receipt" will be issued to the Participant, stating that the funds are received for paying expenses on behalf of the client).</li>
          <li><strong>2.3. Refundable Field Activities Component:</strong> Out of the base price, a sum of $290 USD is defined as the "field activities component." This specific component will be excluded in favor of the Participant in the refund mechanism in case of cancellation (as detailed in Section 4).</li>
          <li><strong>2.4. Payment Schedule & Registration Fee:</strong> The payment for the trip shall be made in the following installments (in USD or its ILS equivalent according to the high transfer exchange rate on the day of payment):
            <ul className="list-circle ml-5 mt-1 space-y-1 text-xs">
              <li><strong>Advance Payment:</strong> 1,000 ILS upon registration. Out of this sum, 300 ILS is defined as a non-refundable registration and preparation fee (except in the event of a lawful cancellation within the first 14 days, as defined by law).</li>
              <li><strong>Second & Final Installments:</strong> To be paid according to the provided project timeline prior to departure.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">3. Single Supplement and Rooming Mechanics</h4>
        <p className="mb-2"><strong>3.1.</strong> To prevent a deficit in the trip's budget due to an odd number of participants, upgrading or being forced into a single room will be priced in two tracks:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>Track A (Even number of single room requests):</strong> If at least 2 participants in the group request a single room, the supplement will be $450 USD per participant (Total trip price: $3,160 USD).</li>
          <li><strong>Track B (Forced / Sole single room):</strong> If only one (1) participant in the entire group requests a single room, OR in the event of a "forced single room" due to an odd number of participants or the cancellation of a roommate, the supplement will be $900 USD (Total trip price: $3,610 USD), in order to cover the fixed cost of the additional room forced upon the logistical layout.</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">4. The "Determining Date" and Cancellation Policy</h4>
        <p className="mb-2">This journey includes tourism services provided entirely outside of Israel. In accordance with Section 14C2 of the Israeli Consumer Protection Law, 1981, the Participant is offered the choice between the following cancellation tracks:</p>
        
        <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80 mb-3 space-y-2">
          <p><strong>Track A – Israeli Consumer Protection Law (Default):</strong> The right to cancel within 14 days from the date of the transaction or receipt of this document, provided the cancellation is made at least 7 non-rest days before the departure date. For a senior citizen (over 65), a new immigrant, or a person with a disability, the cancellation period is 4 months from the transaction date (subject to presenting an appropriate certificate and provided the engagement included a direct conversation). The cancellation fee in this track will be 5% of the transaction value or 100 ILS, whichever is lower. <em>(Legal Notice: Cancellation after this statutory timeframe will automatically trigger the strict cancellation fees of the foreign suppliers, as detailed in Track B).</em></p>
          <p><strong>Track B – Foreign Suppliers & Group Commitments Policy (Applicable starting the "Determining Date" - June 30, 2026):</strong> Under this track, the cancellation policy of the foreign suppliers applies. The parties agree that the "Determining Date" upon which reservations with ground suppliers become final and binding is June 30, 2026 (If the Organizers make actual non-refundable payments to suppliers prior to this date, the Determining Date will shift to the actual date of payment, and notice will be given).</p>
        </div>

        <div className="space-y-2">
          <p><strong>4.1. Cancellation after the Determining Date:</strong> A Participant who cancels after the Determining Date without providing a replacement participant will NOT be entitled to a full refund. The refund formula is based on returning the field activities component ($290 USD) plus net actual savings, minus fixed, uncancelable costs and costs forced upon her roommate.</p>
          <p><strong>4.2. Exact Refund and Retention Fees:</strong></p>
          <ul className="list-disc ml-5 space-y-1 text-xs">
            <li><strong>Participant in a Double Room:</strong> Refund of $550 USD only (Organizers/Suppliers retain $2,160 USD).</li>
            <li><strong>Participant in a Single Room (Forced or Voluntary):</strong> Refund of $1,640 USD only (Organizers/Suppliers retain $1,520 USD for forced single from $3,160 total price; or retain $1,970 USD for voluntary single from $3,610 total price).</li>
          </ul>
          <p><strong>4.3. Hotel Cancellation Contingency (Offset Mechanism):</strong> The Participant's eligibility for the single-room refund ($1,640 USD) is strictly conditional upon the hotels and ground suppliers in Sri Lanka confirming a 100% cancellation of the specific single room without penalty. Any cancellation fees or penalties charged by the hotels/suppliers for the cancelled room shall be deducted, dollar-for-dollar, from the Participant's refund.</p>
          <p><strong>4.4. Cancellation Notice Procedure:</strong> A cancellation notice must be delivered in writing (WhatsApp message to Naomi/Eyal PLUS an email) and takes effect only upon confirmation of receipt on working days (excluding Fridays, Saturdays, and Israeli/local holidays).</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">5. Replacement Participant (Full Refund Mechanism)</h4>
        <div className="space-y-2">
          <p><strong>5.1.</strong> Notwithstanding Section 4, a Participant who cancels after the Determining Date but independently presents a Replacement Participant to take her place, will be entitled to a 100% full refund.</p>
          <p><strong>5.2.</strong> This is strictly conditional upon the new participant paying the full trip cost and maintaining the exact existing room arrangement. Only direct costs required by airlines or ground suppliers for official name changes (Name Change Fee) will be deducted from this refund.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">6. Organizers' Right to Postpone or Cancel</h4>
        <div className="space-y-2">
          <p><strong>6.1. Minimum Participants:</strong> The execution of the trip is conditional upon the registration of at least 10 participants by June 30, 2026. If this target is not met, the trip will be postponed or canceled, and participants will be entitled to a full refund of all funds paid.</p>
          <p><strong>6.2. Force Majeure:</strong> In the event of a cancellation of the entire trip due to catastrophic circumstances or force majeure beyond the control of the parties, the Organizers will act to recover maximum funds from the ground suppliers. From the organizing fee (fixed expenses in Israel), a sum of 800 ILS will be deducted for work and preparation already performed, and the balance will be refunded.</p>
          <p><strong>6.3. Cancellation Due to Economic Unviability:</strong> Because this journey is priced and planned for a small, organic group, a lawful cancellation by one or more participants may severely harm the economic or logistical viability of the entire project. If a participant cancels lawfully, and the Organizers conclude that this cancellation causes a severe deficit in meeting the trip's fixed expenses rendering the trip unviable, the Organizers reserve the right to cancel or postpone the trip. In such a scenario, all remaining participants will be notified immediately and will receive a 100% full refund of all funds paid to the Organizers.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">7. Health Declaration and Mandatory Insurance</h4>
        <div className="space-y-2">
          <p><strong>7.1. Health & Fitness:</strong> The nature of the trip includes field activities, walking tours, and moderate physical effort. By signing this contract, the Participant declares that her health condition is sound and fit for such a journey. The Participant is strictly required to sign and return the attached Medical Waiver of Claims (Appendix A).</p>
          <p><strong>7.2. Mandatory Insurance:</strong> It is an absolute and exclusive obligation of the Participant to purchase comprehensive travel insurance abroad, including extended medical coverage, search and rescue, and coverage for extreme/field activities. It is highly recommended to purchase a "Cancel for Any Reason" policy (such as Trip Guaranty) as close as possible to the registration date to ensure maximum protection of the Participant's funds.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">8. Disclosure, Exclusions, and Privacy</h4>
        <div className="space-y-2">
          <p><strong>8.1. Full Disclosure:</strong> In accordance with the Tourism Services Regulations (Information Disclosure), 2003, the detailed Itinerary, including planned hotels, ratings, addresses, phone numbers, transportation, and meals is attached to this agreement as Appendix B. The Organizers reserve the right to replace suppliers or hotels with accommodations of an identical standard due to field constraints.</p>
          <p><strong>8.2. Exclusions:</strong> The trip price does NOT include international flights, Sri Lanka entry visa (ETA), personal travel insurance, and any personal expenses not explicitly listed in the itinerary.</p>
          <p><strong>8.3. Privacy Protection:</strong> In accordance with the Privacy Protection Law, 1981, personal information provided by the Participant, including medical data (defined as "information with special sensitivity"), will be stored securely. It will be used solely for the purpose of producing the journey, its operation, and maintaining the safety of the participants, and will not be transferred to any third party not relevant to the production of the trip without explicit consent.</p>
        </div>
      </section>

      <section>
        <h4 className="font-bold text-teal-800 text-base mb-1.5">9. Governing Law and Jurisdiction</h4>
        <p>This Agreement shall be governed by and construed in accordance with the laws of the State of Israel. The competent courts in Be'er Sheva and the Southern District shall have exclusive jurisdiction to hear and determine any dispute arising from or related to this Agreement.</p>
        <p className="mt-2 text-xs font-semibold text-stone-600">Digital signature or written confirmation upon transferring the advance payment constitutes full, unqualified, and final agreement to all the terms detailed in this agreement and its appendices.</p>
      </section>
    </div>
  );
}

