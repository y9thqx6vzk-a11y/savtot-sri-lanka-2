import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { comparePassword } from '../../../utils/passwordHash.js';
import { rateLimiter } from '../../../utils/rateLimiter.js';
import { logger } from '../../../utils/logger.js';

export async function POST(req) {
  // Rate limiting
  const allowed = await rateLimiter.check(req);
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const { password } = await req.json();
    const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

    if (!ADMIN_PASSWORD_HASH) {
      logger.error('ADMIN_PASSWORD_HASH environment variable is not set');
      return NextResponse.json({ success: false, message: 'Server misconfiguration: admin password hash not set' }, { status: 500 });
    }

    const passwordMatches = comparePassword(password, ADMIN_PASSWORD_HASH);

    if (passwordMatches) {
      // Set secure HttpOnly cookie for 30 days
      const cookieStore = await cookies();
      cookieStore.set('admin_token', password, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      });
      return NextResponse.json({ success: true, message: 'Logged in' });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
    }
  } catch (error) {
    logger.error('Login error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
