import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/wordjumble/answersheet')) {
    return NextResponse.rewrite(new URL('/games/63330f75edaf740219179400/answersheet', request.url));
  }
}
