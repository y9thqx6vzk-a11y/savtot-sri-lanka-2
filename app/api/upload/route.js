import { NextResponse } from 'next/server';
import { storage } from '../../../lib/firebaseAdmin';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image');
    const id = formData.get('id');

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (!process.env.FIREBASE_PROJECT_ID) {
      console.warn("Firebase not configured. Image cannot be saved permanently.");
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
