import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { api } from './app/(marketing)/hooks/api';
import { ur } from 'zod/v4/locales';
import { requestToBodyStream } from 'next/dist/server/body-streams';

async function isLoggedIn(request: NextRequest): Promise<boolean> {
  const sessionCookie = request.cookies.get('connect.sid');

  if (sessionCookie) {
    try {
      const res = await api.get('/me', {
        headers: {
          Cookie: `connect.sid=${sessionCookie.value}`,
        },
      });

      return true;
    } catch (err: any) {
      console.log(err);
      return false;
    }
  }

  return false;
}

export default async function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const loggedIn = await isLoggedIn(request);

  if (url.pathname == '/login') {
    if (loggedIn) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  } else if (url.pathname.endsWith('/dashboard')) {
    if (!loggedIn) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/login', '/(.*?)/dashboard'],
};
