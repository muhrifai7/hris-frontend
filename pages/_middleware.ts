import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest,ev : NextResponse) {
  // Add the user token to the response
  if(req.url === "/"){
    return NextResponse.rewrite(`/auth/login`);
  }
}