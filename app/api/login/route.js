import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const { password } = await req.json();
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!ADMIN_PASSWORD) {
      console.error("ADMIN_PASSWORD environment variable is not set");
      return NextResponse.json({ success: false, message: "Server misconfiguration: Admin password not set" }, { status: 500 });
    }

    if (password === ADMIN_PASSWORD) {
      // Set secure HttpOnly cookie for 30 days
      cookies().set('admin_token', ADMIN_PASSWORD, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        path: '/',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      });
      return NextResponse.json({ success: true, message: "Logged in" });
    } else {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
