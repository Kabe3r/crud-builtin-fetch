import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('user')?.value;

    console.log(currentUser);

    // if (currentUser) {
    //     return NextResponse.redirect(new URL('/products', request.url));
    // }
    if (!currentUser) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }