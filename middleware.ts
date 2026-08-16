import { NextResponse } from 'next/server';

// Allowed origins for CORS
const ALLOWED_ORIGINS = process.env.NODE_ENV === 'production' ? ['https://savtot.com','https://www.savtot.com'] : ['*'];
  'https://savtot.com',
  'https://www.savtot.com'
];

export function middleware(request) {
  const origin = request.headers.get('origin');
  const isAllowed = origin && (
    ALLOWED_ORIGINS.includes(origin) || 
    origin.startsWith('http://localhost:') || 
    origin.endsWith('.vercel.app')
  );

  if (origin && !isAllowed) {
    return new NextResponse('Origin not allowed', { status: 403 });
  }
  // Continue to the next middleware / route handler
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply to all routes
};
