import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  // If there's no session cookie and trying to access protected routes, redirect to sign-in
  if (!sessionCookie && isProtectedRoute(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // If there is a session cookie and trying to access auth pages, redirect to dashboard
  if (sessionCookie && isAuthRoute(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

function isProtectedRoute(pathname: string): boolean {
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];
  return protectedRoutes.some((route) => pathname.startsWith(route));
}

function isAuthRoute(pathname: string): boolean {
  const authRoutes = ["/sign-in", "/sign-up", "/forgot-password"];
  return authRoutes.some((route) => pathname.startsWith(route));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
