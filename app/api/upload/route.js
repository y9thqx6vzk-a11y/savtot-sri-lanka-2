import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const CLOUD_NAME = 'dsgvsqnjp'; // Reverted to original account where all old images reside
// Unsigned upload preset — create this in Cloudinary dashboard:
// Settings → Upload → Upload Presets → Add upload preset → Signing Mode: Unsigned
// Name it: savtot_admin
const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET || 'savtot_admin';

export async function POST(req) {
  try {
    // Authenticate
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token || token !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('image');
    const id = formData.get('id'); // e.g. "hero_bg", "gal_1"

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Forward to Cloudinary unsigned upload
    const cloudinaryForm = new FormData();
    cloudinaryForm.append('file', file);
    cloudinaryForm.append('upload_preset', UPLOAD_PRESET);
    // Use the image ID as the public_id so it's predictable
    if (id) {
      cloudinaryForm.append('public_id', id);
    }

    const cloudinaryRes = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: cloudinaryForm,
      }
    );

    if (!cloudinaryRes.ok) {
      const err = await cloudinaryRes.text();
      console.error('Cloudinary error:', err);
      return NextResponse.json({ error: 'Cloudinary upload failed', details: err }, { status: 500 });
    }

    const result = await cloudinaryRes.json();
    return NextResponse.json({
      success: true,
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
