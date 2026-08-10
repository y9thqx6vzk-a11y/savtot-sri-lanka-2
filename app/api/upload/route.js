import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { logger } from '../../../utils/logger.js';
import { rateLimiter } from '../../../utils/rateLimiter.js';

const CLOUD_NAME = 'dsgvsqnjp'; // Reverted to original account where all old images reside
// Unsigned upload preset — create this in Cloudinary dashboard:
// Settings → Upload → Upload Presets → Add upload preset → Signing Mode: Unsigned
// Name it: savtot_admin
const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET || 'savtot_admin';

export async function POST(req) {
  // Rate limiting
  const allowed = await rateLimiter.check(req);
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
  try {
    // Authenticate via admin token
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token || token !== process.env.ADMIN_API_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('image');
    const id = formData.get('id'); // e.g. "hero_bg", "gal_1"

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type and size (max 5 MB)
    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedMimes.includes(file.type)) {
      return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 });
    }
    const maxSize = 5 * 1024 * 1024; // 5 MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File too large (max 5 MB)' }, { status: 400 });
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
      logger.error('Cloudinary error:', err);
      return NextResponse.json({ error: 'Cloudinary upload failed', details: err }, { status: 500 });
    }

    const result = await cloudinaryRes.json();
    return NextResponse.json({
      success: true,
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    logger.error('Upload Error:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
