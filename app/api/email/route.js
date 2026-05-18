import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email, name, lang } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
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
    
    const subject = isHebrew 
      ? 'אישור הרשמה ופרטי התחברות לוובינר - סבתות בסרי לנקה' 
      : 'Registration Confirmation & Webinar Details - Savtot in Sri Lanka';

    const greeting = name ? (isHebrew ? `היי ${name},` : `Hi ${name},`) : (isHebrew ? 'שלום,' : 'Hello,');

    const htmlContent = isHebrew ? `
      <div dir="rtl" style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #0f766e; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">תודה שנרשמתם! 🎉</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px;">${greeting}</p>
          <p style="font-size: 16px;">אנו שמחים לאשר את הרשמתך לוובינר של סבתות בסרי לנקה.</p>
          <p style="font-size: 16px;"><strong>הנה פרטי ההתחברות לזום:</strong></p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>קישור לזום:</strong> <a href="#" style="color: #0f766e; text-decoration: underline;">[יש להוסיף כאן את הקישור לזום]</a></p>
            <p style="margin: 5px 0 0 0;"><strong>תאריך:</strong> [יש לעדכן תאריך]</p>
            <p style="margin: 5px 0 0 0;"><strong>שעה:</strong> [יש לעדכן שעה]</p>
          </div>
          <p style="font-size: 16px;">אל תשכחו להצטרף גם לקבוצת הוואצאפ שלנו לקבלת עדכונים ותזכורות:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://chat.whatsapp.com/EfBba4Pilux40nrtu2vyjK?mode=gi_t" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">הצטרפו לקבוצת הוואצאפ</a>
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
          <p style="font-size: 16px;">We are excited to confirm your registration for the Savtot in Sri Lanka webinar.</p>
          <p style="font-size: 16px;"><strong>Here are your Zoom details:</strong></p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Zoom Link:</strong> <a href="#" style="color: #0f766e; text-decoration: underline;">[Add Zoom link here]</a></p>
            <p style="margin: 5px 0 0 0;"><strong>Date:</strong> [Update Date]</p>
            <p style="margin: 5px 0 0 0;"><strong>Time:</strong> [Update Time]</p>
          </div>
          <p style="font-size: 16px;">Don't forget to join our WhatsApp group for updates and reminders:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://chat.whatsapp.com/EfBba4Pilux40nrtu2vyjK?mode=gi_t" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">Join WhatsApp Group</a>
          </div>
          <p style="font-size: 16px;">See you soon,<br>Savtot in Sri Lanka Team</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: '"Savtot in Sri Lanka" <' + gmailUser + '>',
      to: email,
      subject: subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
