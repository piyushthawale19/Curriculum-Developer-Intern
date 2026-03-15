import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin/... paths (except the login page at /admin)
  const isAdminPath = pathname.startsWith('/admin/') && pathname !== '/admin';
  const isApiProtectedPath = pathname.startsWith('/api/content') && request.method !== 'GET';

  if (isAdminPath || isApiProtectedPath) {
    const token = request.cookies.get('token')?.value;
    
    console.log(`[Middleware] Path: ${pathname}, Token present: ${!!token}`);

    if (!token || !verifyToken(token)) {
      console.log(`[Middleware] Auth failed for ${pathname}. Redirecting...`);
      // Redirect to login if not authenticated
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    console.log(`[Middleware] Auth success for ${pathname}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/content/:path*'],
};
