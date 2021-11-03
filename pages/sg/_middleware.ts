import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { COOKIE_NAME } from '../../constants';
import { removeQuotes } from '../../utils/removeQuotes';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const cookieData = removeQuotes(req.cookies?.[COOKIE_NAME]);

  const cookie = cookieData || 'not-defined';
  return NextResponse.rewrite(`/sg/${cookie}`);
}
