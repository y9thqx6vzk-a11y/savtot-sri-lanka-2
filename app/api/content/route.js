import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '../../../lib/firebaseAdmin';

// Default content fallback if Firestore is empty or not configured yet
import { defaultContentData } from '../../../contexts/SiteContext';

export const dynamic = 'force-dynamic';

const USE_FIREBASE = false; // Set to true when you want to reconnect Firebase

export async function GET() {
  try {
    // If Firebase env vars are missing or disabled, return default content locally (so the site doesn't crash)
    if (!USE_FIREBASE || !process.env.FIREBASE_PROJECT_ID) {
      console.warn("Firebase is temporarily disconnected. Returning default content.");
      return NextResponse.json(defaultContentData);
    }

    const doc = await db.collection('settings').doc('content_v2').get();
    
    if (!doc.exists) {
      // Initialize with default if it doesn't exist
      await db.collection('settings').doc('content_v2').set(defaultContentData);
      return NextResponse.json(defaultContentData);
    }

    return NextResponse.json(doc.data());
  } catch (error) {
    console.error("Error reading content:", error);
    return NextResponse.json(defaultContentData); // Fallback
  }
}

export async function POST(req) {
  try {
    // Authenticate
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token || token !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { path: fieldPath, newValue } = await req.json();
    
    if (!USE_FIREBASE || !process.env.FIREBASE_PROJECT_ID) {
      return NextResponse.json({ error: "Firebase is temporarily disconnected" }, { status: 500 });
    }

    // Read current
    const docRef = db.collection('settings').doc('content_v2');
    const doc = await docRef.get();
    let content = doc.exists ? doc.data() : { ...defaultContentData };

    // Update path
    const keys = fieldPath.split('.');
    let current = content;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = newValue;

    // Save
    await docRef.set(content);

    return NextResponse.json({ success: true, content });
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}
