import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const HEBREW_EVENT_ID = '2rj8sfsdbka3adgvhp3jvoovt2';
const ENGLISH_EVENT_ID = '0pfp03a1navjk3jp15e0v2c5u9';
const CALENDAR_ID = 'srilankasavtot@gmail.com';

export async function POST(req) {
  try {
    const { email, lang } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Default to Hebrew event if language is not English
    const eventId = lang === 'en' ? ENGLISH_EVENT_ID : HEBREW_EVENT_ID;

    // We assume the service account credentials are in environment variables
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    if (!clientEmail || !privateKey) {
       console.error("Missing Google Service Account credentials in environment variables.");
       return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }
    
    // Format private key (replace literal \n with actual newlines if necessary)
    privateKey = privateKey.replace(/\\n/g, '\n');

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/calendar.events'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // Fetch the existing event to get current attendees
    const event = await calendar.events.get({
      calendarId: CALENDAR_ID,
      eventId: eventId,
    });

    const currentAttendees = event.data.attendees || [];
    
    // Check if user is already an attendee
    const alreadyAttending = currentAttendees.some(a => a.email === email);
    
    if (!alreadyAttending) {
      // Add the new attendee
      const updatedAttendees = [...currentAttendees, { email }];
      
      // Update the event with sendUpdates: 'all'
      await calendar.events.patch({
        calendarId: CALENDAR_ID,
        eventId: eventId,
        sendUpdates: 'all',
        requestBody: {
          attendees: updatedAttendees,
        },
      });
    }

    return NextResponse.json({ success: true, message: 'Invitation sent' });
  } catch (error) {
    console.error('Calendar API Error:', error);
    return NextResponse.json({ error: 'Failed to send calendar invitation' }, { status: 500 });
  }
}
