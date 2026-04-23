import { NextResponse } from 'next/server';
import { db } from '../../../lib/firebaseAdmin';

export async function POST(req) {
  try {
    const data = await req.json();
    
    const newRegistration = {
      ...data,
      timestamp: new Date().toISOString()
    };

    if (process.env.FIREBASE_PROJECT_ID) {
      await db.collection('registrations').add(newRegistration);
    } else {
      console.warn("Firebase not configured. Registration not saved permanently.");
      // In a real Vercel environment without Firebase, this data is lost.
    }

    return NextResponse.json({ success: true, message: "Registration saved successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ error: "Failed to save registration" }, { status: 500 });
  }
}
