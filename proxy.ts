import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies"

const protectedRoute = ['/wishlist'];
const authRoute = ["/signIn"]

export default async function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const sessionCookie = getSessionCookie(request);

  const res = NextResponse.next();
  const isLoggedIn = !!sessionCookie;
  const pathname = nextUrl.pathname;

  const onProtectRoute = protectedRoute.includes(pathname);
  const onAuthRoute = authRoute.includes(pathname);

  if (onProtectRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/signIn", request.url))
  }

  if (onAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth|images|icons|fonts).*)']
}