import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export default function Message(request) {
  const { pathname } = request.nextUrl;
  const cookie = cookies()?.get('token');
  // go to next page or login
  if (cookie) {
    return NextResponse.next();
  } else if (pathname == '/') {
    return NextResponse.next();
  }
} // end function
