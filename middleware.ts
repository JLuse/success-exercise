import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request.nextUrl)
  if (request.nextUrl.pathname.startsWith('/blog')) {
    return NextResponse.redirect(new URL('https://jluse.github.io/', request.url))
  }
}
