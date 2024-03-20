import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ['/dashboard', '/products']

export default function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('user')?.value;

    // if (!currentUser && protectedRoutes.includes(request.nextUrl.pathname)) {
    //     const absoluteURL = new URL('/login', request.nextUrl.origin);
    //     return NextResponse.redirect(absoluteURL.toString());
    // } => uncomment to authenticate

    // console.log(currentUser);

    // if (currentUser) {
    //     return NextResponse.redirect(new URL('/dashboard', request.url));
    // }
        // return NextResponse.redirect(new URL('/login', request.url));    
}

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
//   }