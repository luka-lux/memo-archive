import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';


export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const { pathname } = req.nextUrl;

  if (token) { // user est connecté
    if (pathname.startsWith('/tableaux-de-bords')) {
      if (token.isAdmin) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL('/etudiantPage', req.url));
      }
    }

    if (pathname === '/login') {
      if (token.isAdmin) {
        return NextResponse.redirect(new URL('/tableaux-de-bords', req.url));
      } else {
        return NextResponse.redirect(new URL('/etudiantPage', req.url));
      }
    }
  } else { // no connecté
    if (pathname.startsWith('/tableaux-de-bords') || pathname.startsWith('/etudiantPage')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
