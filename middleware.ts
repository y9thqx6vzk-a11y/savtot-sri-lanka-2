import { NextResponse } from 'next/server';


export function middleware(request) {
  const origin = request.headers.get('origin');
  
  // Allow all origins in development
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  // Allowed origins for CORS in production
  const ALLOWED_ORIGINS = [
    'https://savtot.com',
    'https://www.savtot.com'
  ];

  if (origin && !ALLOWED_ORIGINS.includes(origin) && !origin.endsWith('.vercel.app')) {
    return new NextResponse('Origin not allowed', { status: 403 });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply to all routes
};
