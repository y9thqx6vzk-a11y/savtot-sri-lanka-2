import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, email, name, phone, guests, notes, file, lang, season } = body;

    if (!email || !name) {
      return NextResponse.json({ error: 'Email and Name are required' }, { status: 400 });
    }

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

    if (type === 'payment') {
      const registrantSubject = isHebrew 
        ? `אישור קבלת אסמכתת תשלום - סבתות בסרי לנקה (${seasonTextHe})` 
        : `Payment Reference Received - Savtot in Sri Lanka (${seasonTextEn})`;

      const greeting = name ? (isHebrew ? `היי ${name},` : `Hi ${name},`) : (isHebrew ? 'שלום,' : 'Hello,');

      const registrantHtml = isHebrew ? `
        <div dir="rtl" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #0f766e; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">אסמכתת התשלום התקבלה! 👍</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">${greeting}</p>
            <p style="font-size: 16px;">קיבלנו את אסמכתת התשלום שצירפת (<strong>${file ? file.name : ''}</strong>) עבור <strong>מחזור ${seasonTextHe}</strong>.</p>
            <p style="font-size: 16px;">אנו נבדוק אותה ונאשר את הרישום הסופי שלך בהקדם האפשרי. עותק של האסמכתא ששלחת מצורף למייל זה.</p>
            <p style="font-size: 16px;">נתראה בקרוב,<br>צוות סבתות בסרי לנקה</p>
          </div>
        </div>
      ` : `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #0f766e; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Payment Reference Received! 👍</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">${greeting}</p>
            <p style="font-size: 16px;">We have received the payment reference you attached (<strong>${file ? file.name : ''}</strong>) for the <strong>${seasonTextEn}</strong> trip.</p>
            <p style="font-size: 16px;">We will verify it and confirm your final registration as soon as possible. A copy of the reference you sent is attached to this email.</p>
            <p style="font-size: 16px;">See you soon,<br>Savtot in Sri Lanka Team</p>
          </div>
        </div>
      `;

      const adminSubject = `אסמכתת תשלום חדשה מ- ${name} (${seasonTextHe})`;
      const adminHtml = `
        <div dir="rtl" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #0f766e;">התקבלה אסמכתת תשלום חדשה! 💳</h2>
          <p>להלן פרטי המשלם:</p>
          <table style="width: 100%; max-width: 500px; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 30%;">שם מלא:</td>
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
              <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">שם קובץ אסמכתא:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${file ? file.name : 'לא צורף קובץ'}</td>
            </tr>
          </table>
          <p style="margin-top: 20px;">קובץ האסמכתא מצורף להודעה זו.</p>
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

      return NextResponse.json({ success: true, message: 'Payment emails sent successfully' });
    }

    // Default Registration Email Flow (Step 1)
    // 1. Email to the registrant
    const registrantSubject = isHebrew 
      ? `אישור הרשמה - סבתות בסרי לנקה (${seasonTextHe})` 
      : `Registration Confirmation - Savtot in Sri Lanka (${seasonTextEn})`;

    const greeting = name ? (isHebrew ? `היי ${name},` : `Hi ${name},`) : (isHebrew ? 'שלום,' : 'Hello,');

    const registrantHtml = isHebrew ? `
      <div dir="rtl" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #0f766e; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">תודה שנרשמתם! 🎉</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px;">${greeting}</p>
          <p style="font-size: 16px;">אנו שמחים לאשר את הרשמתך לטיול סבתות בסרי לנקה - <strong>מחזור ${seasonTextHe}</strong>.</p>
          <p style="font-size: 16px;">אנו נשלח פרטים ועדכונים נוספים <strong>במייל הזה</strong>, וכמובן גם בקבוצת הוואצאפ בה אנחנו מעדכנים על הכל בזמן אמת.</p>
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
          <p style="font-size: 16px;">We are excited to confirm your registration for the Savtot in Sri Lanka - <strong>${seasonTextEn}</strong> trip.</p>
          <p style="font-size: 16px;">We will send all the details and updates <strong>via email</strong>, and of course in our WhatsApp group where we post real-time updates.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://chat.whatsapp.com/EfBba4Pilux40nrtu2vyjK?mode=gi_t" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">Join WhatsApp Group</a>
          </div>
          <p style="font-size: 16px;">See you soon,<br>Savtot in Sri Lanka Team</p>
        </div>
      </div>
    `;

    // 2. Email to the admins
    const adminSubject = `הרשמה חדשה לטיול (${seasonTextHe}): ${name}`;
    const adminHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #0f766e;">קיבלתם הרשמה חדשה מהאתר! 🎉</h2>
        <table style="width: 100%; max-width: 500px; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 30%;">שם מלא:</td>
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
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #888;">הודעה זו נשלחה אוטומטית ממערכת ההרשמה באתר Savtot in Sri Lanka.</p>
      </div>
    `;

    // Send to registrant
    await transporter.sendMail({
      from: '"Savtot in Sri Lanka" <' + gmailUser + '>',
      to: email,
      subject: registrantSubject,
      html: registrantHtml,
    });

    // Send to admin
    await transporter.sendMail({
      from: '"Savtot in Sri Lanka (System)" <' + gmailUser + '>',
      to: gmailUser,
      subject: adminSubject,
      html: adminHtml,
      replyTo: email,
    });

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
  }
}
