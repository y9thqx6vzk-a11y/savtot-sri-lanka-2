import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { storage } from '../../../lib/firebaseAdmin';

const USE_FIREBASE = false; // Set to true when you want to reconnect Firebase

export async function POST(req) {
  try {
    // Authenticate
    const token = cookies().get('admin_token')?.value;
    if (!token || token !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('image');
    const id = formData.get('id');

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (!USE_FIREBASE || !process.env.FIREBASE_PROJECT_ID) {
      console.warn("Firebase is temporarily disconnected. Image cannot be saved permanently.");
      return NextResponse.json({ error: "Firebase Storage not configured on server" }, { status: 500 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const bucket = storage.bucket();
    const fileName = id ? `uploads/${id}.jpg` : `uploads/img-${Date.now()}.jpg`;
    const fileRef = bucket.file(fileName);

    await fileRef.save(buffer, {
      metadata: { contentType: file.type },
      public: true // Make file publicly accessible
    });

    const imageUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    return NextResponse.json({ success: true, imageUrl });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}
