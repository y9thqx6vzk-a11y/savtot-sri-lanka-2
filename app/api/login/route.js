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

    const toHex = (str) => str ? Array.from(str).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ') : 'null';
    console.log("Client:", `[${password}]`, "Len:", password?.length, "Hex:", toHex(password));
    console.log("Server:", `[${ADMIN_PASSWORD}]`, "Len:", ADMIN_PASSWORD?.length, "Hex:", toHex(ADMIN_PASSWORD));
    
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
