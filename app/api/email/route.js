import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const { email, name, phone, guests, notes, file, lang, season, digitalSignature, healthQ } = body;

  if (!email || !name) {
    return NextResponse.json({ error: 'Email and Name are required' }, { status: 400 });
  }

  const hasFullForm = !!digitalSignature?.fullName;
  const hasFile = !!file;
  const registrationStatus = hasFile 
    ? 'Complete' 
    : (hasFullForm ? 'Full Form (Pending Payment)' : 'Partial (Step 1)');

  // --- 1. GOOGLE SHEETS INTEGRATION ---
  let sheetsStatus = "not_attempted";
  try {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID || '11FXY_H8q9ihvcIkn92Ghyl-vIBPGrcYL41HuGZd_2oA';

    if (clientEmail && privateKey) {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey.replace(/\\n/g, '\n')
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const rowData = [
        new Date().toISOString(), // Timestamp
        registrationStatus, // Status
        name || '',
        email || '',
        phone || '',
        season === 'winter' ? 'Winter 2027' : 'Summer 2027',
        guests || 1,
        notes || '',
        lang || 'he',
        digitalSignature?.fullName || '',
        digitalSignature?.idNumber || '',
        digitalSignature?.birthDate || '',
        digitalSignature?.date || '',
        digitalSignature?.emergencyName || '',
        digitalSignature?.emergencyRelation || '',
        digitalSignature?.emergencyPhone || '',
        healthQ?.q1?.answer === 'yes' ? `Yes - ${healthQ.q1.details}` : (healthQ?.q1?.answer || ''),
        healthQ?.q2?.answer === 'yes' ? `Yes - ${healthQ.q2.details}` : (healthQ?.q2?.answer || ''),
        healthQ?.q3?.answer === 'yes' ? `Yes - ${healthQ.q3.details}` : (healthQ?.q3?.answer || ''),
        healthQ?.q4?.answer === 'yes' ? `Yes - ${healthQ.q4.details}` : (healthQ?.q4?.answer || ''),
        healthQ?.q5?.answer === 'yes' ? `Yes - ${healthQ.q5.details}` : (healthQ?.q5?.answer || ''),
        file?.name || 'No file attached'
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'A1', // Appends to the first available empty row
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowData]
        }
      });
      sheetsStatus = "success";
    } else {
      console.warn("Google Sheets credentials are not configured. Skipping sheets upload.");
      sheetsStatus = "missing_credentials";
    }
  } catch (sheetError) {
    console.error('Google Sheets API Error:', sheetError);
    sheetsStatus = "error";
  }

  // --- 2. SUPABASE (SQL DATABASE) INTEGRATION ---
  let supabaseStatus = "not_attempted";
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const { createClient: createSupabaseClient } = await import('@supabase/supabase-js');
      const supabase = createSupabaseClient(supabaseUrl, supabaseKey);

      const { error: sbError } = await supabase.from('registrations').insert([
        {
          status: registrationStatus,
          name: name || '',
          email: email || '',
          phone: phone || '',
          season: season || 'summer',
          guests: parseInt(guests) || 1,
          notes: notes || '',
          lang: lang || 'he',
          full_name_passport: digitalSignature?.fullName || null,
          id_number: digitalSignature?.idNumber || null,
          birth_date: digitalSignature?.birthDate || null,
          signature_date: digitalSignature?.date || null,
          emergency_name: digitalSignature?.emergencyName || null,
          emergency_relation: digitalSignature?.emergencyRelation || null,
          emergency_phone: digitalSignature?.emergencyPhone || null,
          health_chronic: healthQ?.q1?.answer === 'yes' ? `Yes - ${healthQ.q1.details}` : (healthQ?.q1?.answer || null),
          health_medications: healthQ?.q2?.answer === 'yes' ? `Yes - ${healthQ.q2.details}` : (healthQ?.q2?.answer || null),
          health_allergies: healthQ?.q3?.answer === 'yes' ? `Yes - ${healthQ.q3.details}` : (healthQ?.q3?.answer || null),
          health_limitations: healthQ?.q4?.answer === 'yes' ? `Yes - ${healthQ.q4.details}` : (healthQ?.q4?.answer || null),
          health_notes: healthQ?.q5?.answer === 'yes' ? `Yes - ${healthQ.q5.details}` : (healthQ?.q5?.answer || null),
          payment_file_name: file?.name || null
        }
      ]);

      if (sbError) {
        console.warn('Supabase Insert Note:', sbError.message);
        supabaseStatus = "error: " + sbError.message;
      } else {
        supabaseStatus = "success";
      }
    }
  } catch (sbErr) {
    console.warn('Supabase Error:', sbErr);
    supabaseStatus = "error";
  }

  // --- 3. EMAIL INTEGRATION ---
  try {
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error("Missing Gmail credentials in environment variables.");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const isHebrew = lang !== 'en';
    const seasonTextHe = season === 'winter' ? 'חורף (פברואר) 2027' : 'קיץ 2027';
    const seasonTextEn = season === 'winter' ? 'Winter (February) 2027' : 'Summer 2027';

    // Registrant Email
    const registrantSubject = isHebrew 
      ? (hasFile 
          ? `אישור הרשמה וקבלת אסמכתא - סבתות בסרי לנקה (${seasonTextHe})` 
          : (hasFullForm 
              ? `קבלת פרטי הרשמה (טרם הוסדר תשלום) - סבתות בסרי לנקה (${seasonTextHe})`
              : `אישור קבלת פנייה - סבתות בסרי לנקה (${seasonTextHe})`))
      : (hasFile
          ? `Registration & Payment Confirmation - Savtot in Sri Lanka (${seasonTextEn})`
          : (hasFullForm
              ? `Registration Received (Payment Pending) - Savtot in Sri Lanka (${seasonTextEn})`
              : `Registration Inquiry Received - Savtot in Sri Lanka (${seasonTextEn})`));

    const greeting = name ? (isHebrew ? `היי ${name},` : `Hi ${name},`) : (isHebrew ? 'שלום,' : 'Hello,');

    const registrantHtml = isHebrew ? `
      <div dir="rtl" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #0f766e; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">תודה שנרשמתם! 🎉</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px;">${greeting}</p>
          ${hasFile ? `
            <p style="font-size: 16px;">אנו שמחים לאשר שקיבלנו את פרטי ההרשמה שלך לטיול סבתות בסרי לנקה - <strong>מחזור ${seasonTextHe}</strong>, כולל אסמכתת התשלום (<strong>${file.name}</strong>).</p>
            <p style="font-size: 16px;">אנו נבדוק את האסמכתא ונאשר את הרישום הסופי שלך בהקדם האפשרי. עותק של האסמכתא ששלחת מצורף למייל זה.</p>
          ` : (hasFullForm ? `
            <p style="font-size: 16px;">אנו שמחים לאשר שקיבלנו את טופס ההרשמה המלא שלך לטיול סבתות בסרי לנקה - <strong>מחזור ${seasonTextHe}</strong>.</p>
            <div style="background-color: #fff7ed; border: 1px solid #f97316; border-radius: 8px; padding: 14px; margin: 18px 0; color: #9a3412;">
              <strong style="font-size: 16px;">⚠️ לתשומת לבך:</strong><br>
              המקום במסע אינו משוריין עד שלא מתבצע תשלום בפועל וקבלת אסמכתא.
            </div>
            <p style="font-size: 15px;">כל פרטי הטופס, החתימה והשאלון נקלטו בהצלחה. כדי לשריין את מקומך במסע, אנא השלימי את ביצוע ההעברה הבנקאית בהקדם לפי פרטי החשבון המופיעים באתר.</p>
          ` : `
            <p style="font-size: 16px;">תודה שהתחלת את תהליך ההרשמה למסע סבתות בסרי לנקה - <strong>מחזור ${seasonTextHe}</strong>.</p>
            <p style="font-size: 15px;">נשמח לעמוד לרשותך בכל שאלה כדי לסייע בהשלמת ההרשמה.</p>
          `)}
          <p style="font-size: 16px;">אנו נשלח פרטים ועדכונים נוספים במייל, וכמובן גם בקבוצת הוואצאפ בה אנחנו מעדכנים על הכל בזמן אמת.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://chat.whatsapp.com/EfBba4Pilux40nrtu2vyjK?mode=gi_t" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">הצטרפו לקבוצת הוואצאפ לעדכונים</a>
          </div>
          <p style="font-size: 16px;">נתראה בקרוב,<br>צוות סבתות בסרי לנקה</p>
        </div>
      </div>
    ` : `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #0f766e; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Thank you for registering! 🎉</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px;">${greeting}</p>
          ${hasFile ? `
            <p style="font-size: 16px;">We are excited to confirm we have received your registration details for the Savtot in Sri Lanka - <strong>${seasonTextEn}</strong> trip, along with your payment reference (<strong>${file.name}</strong>).</p>
            <p style="font-size: 16px;">We will verify it and confirm your final registration as soon as possible. A copy of the reference you sent is attached to this email.</p>
          ` : (hasFullForm ? `
            <p style="font-size: 16px;">We are pleased to confirm receipt of your full registration form for the Savtot in Sri Lanka trip - <strong>${seasonTextEn}</strong>.</p>
            <div style="background-color: #fff7ed; border: 1px solid #f97316; border-radius: 8px; padding: 14px; margin: 18px 0; color: #9a3412;">
              <strong style="font-size: 16px;">⚠️ Please Note:</strong><br>
              Your spot on the journey is not reserved until actual payment is completed and confirmed.
            </div>
            <p style="font-size: 15px;">All details, signatures, and questionnaire answers were successfully received. To secure your spot on the trip, please complete the bank transfer as specified on the website.</p>
          ` : `
            <p style="font-size: 16px;">Thank you for starting your registration for Savtot in Sri Lanka - <strong>${seasonTextEn}</strong>.</p>
            <p style="font-size: 15px;">We are available for any questions you may have to help you complete the registration.</p>
          `)}
          <p style="font-size: 16px;">We will send all the details and updates via email, and of course in our WhatsApp group where we post real-time updates.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://chat.whatsapp.com/EfBba4Pilux40nrtu2vyjK?mode=gi_t" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">Join WhatsApp Group</a>
          </div>
          <p style="font-size: 16px;">See you soon,<br>Savtot in Sri Lanka Team</p>
        </div>
      </div>
    `;

    // Format Health Q answers
    let healthHtml = '';
    if (healthQ) {
      const qText = {
        q1: 'מחלות כרוניות?',
        q2: 'תרופות מרשם?',
        q3: 'אלרגיות?',
        q4: 'מגבלות פיזיות?',
        q5: 'מידע נוסף?'
      };
      healthHtml = Object.keys(healthQ).map(key => {
        const val = healthQ[key];
        return `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 40%;">${qText[key]}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${val.answer === 'yes' ? 'כן' : 'לא'} ${val.details ? '- ' + val.details : ''}</td>
          </tr>
        `;
      }).join('');
    }

    // Admin Email
    const adminSubject = hasFile
      ? `הרשמה חדשה מלאה (שולמה אסמכתא) (${seasonTextHe}): ${name}`
      : (hasFullForm
          ? `הרשמה חדשה - טופס מלא (טרם הוסדר תשלום) (${seasonTextHe}): ${name}`
          : `ליד חדש / התחלת הרשמה שלב 1 (${seasonTextHe}): ${name}`);

    const adminHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #0f766e;">קיבלתם הרשמה חדשה מהאתר! 🎉</h2>
        <p>להלן פרטי הנרשמת וטופס ההרשמה${hasFullForm ? ' (כולל הצהרת בריאות ופרטי חירום)' : ''}:</p>

        ${hasFullForm && !hasFile ? `
        <div style="margin-bottom: 20px; padding: 14px 18px; background-color: #fff7ed; border: 2px solid #f97316; border-radius: 8px; color: #9a3412;">
          <strong style="font-size: 16px;">⚠️ שימו לב: נשלח טופס הרשמה מלא, אך טרם הועברה אסמכתת תשלום!</strong>
          <p style="margin: 6px 0 0 0; font-size: 14px;">המשתתפת מילאה את כל שלב 2 (חתימה, חירום, שאלון רפואי). המקום אינו משוריין עד להסדרת התשלום בפועל.</p>
        </div>
        ` : ''}
        
        <div style="margin-bottom: 12px; padding: 10px; background-color: ${supabaseStatus === 'success' ? '#e8f5e9' : '#fff3e0'}; border: 1px solid ${supabaseStatus === 'success' ? '#4caf50' : '#ff9800'}; border-radius: 5px;">
          <strong>סטטוס מסד נתונים SQL (Supabase):</strong> ${supabaseStatus === 'success' ? '✅ נשמר בהצלחה בטבלה' : '⚠️ ' + supabaseStatus}
        </div>

        <div style="margin-bottom: 20px; padding: 10px; background-color: ${sheetsStatus === 'success' ? '#e8f5e9' : '#ffebee'}; border: 1px solid ${sheetsStatus === 'success' ? '#4caf50' : '#f44336'}; border-radius: 5px;">
          <strong>סטטוס גוגל שיטס:</strong> ${sheetsStatus === 'success' ? '✅ נשמר בהצלחה במסד הנתונים' : '❌ שגיאה בשמירה למסד הנתונים / חסרות הרשאות'} (${registrationStatus})
        </div>

        <h3 style="color: #0f766e; margin-top: 20px;">פרטים כלליים</h3>
        <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 30%;">שם מלא (טופס כללי):</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">עונה / מחזור:</td>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #c4704f;">${seasonTextHe}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">טלפון:</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone || '-'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">אימייל:</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">מספר משתתפים:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${guests || '1'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">הערות:</td>
            <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${notes || 'אין הערות'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">שם קובץ אסמכתא:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${file ? file.name : 'לא צורף קובץ!'}</td>
          </tr>
        </table>

        ${digitalSignature ? `
        <h3 style="color: #0f766e; margin-top: 30px;">פרטי חתימה, זיהוי וחירום</h3>
        <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 30%;">שם כפי שמופיע בדרכון:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.fullName}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">תעודת זהות / דרכון:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.idNumber}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">תאריך לידה:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.birthDate}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">תאריך חתימה:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.date}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #fff3e0; font-weight: bold; color: #d84315;" colspan="2">איש קשר בחירום</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">שם איש הקשר:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.emergencyName}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">קרבה:</td><td style="padding: 10px; border: 1px solid #ddd;">${digitalSignature.emergencyRelation}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">טלפון לחירום:</td><td style="padding: 10px; border: 1px solid #ddd;" dir="ltr">${digitalSignature.emergencyPhone}</td></tr>
        </table>
        ` : ''}

        ${healthHtml ? `
        <h3 style="color: #0f766e; margin-top: 30px;">שאלון רפואי (סודי)</h3>
        <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
          ${healthHtml}
        </table>
        ` : ''}

        <p style="margin-top: 20px;">* המשתתפת אישרה את תקנון הביטולים, כתב הויתור והצהרת הבריאות במלואם.</p>
        <p style="margin-top: 20px;">קובץ האסמכתא מצורף להודעה זו (אם צורף).</p>
        <p style="margin-top: 20px; font-size: 12px; color: #888;">הודעה זו נשלחה אוטומטית ממערכת ההרשמה באתר Savtot in Sri Lanka.</p>
      </div>
    `;

    const attachments = file ? [
      {
        filename: file.name,
        content: file.base64,
        encoding: 'base64',
        contentType: file.type
      }
    ] : [];

    // Send to registrant
    await transporter.sendMail({
      from: '"Savtot in Sri Lanka" <' + gmailUser + '>',
      to: email,
      subject: registrantSubject,
      html: registrantHtml,
      attachments
    });

    // Send to admin
    await transporter.sendMail({
      from: '"Savtot in Sri Lanka (System)" <' + gmailUser + '>',
      to: gmailUser,
      subject: adminSubject,
      html: adminHtml,
      replyTo: email,
      attachments
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Emails sent successfully',
      sheetsStatus
    });
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
  }
}
