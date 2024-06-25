import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "@/services/auth-token.service";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import jwt from 'jsonwebtoken';

function isTokenExpired(token: string): boolean {
    try {
        const decodedToken = jwt.decode(token);
        if (decodedToken && typeof decodedToken === 'object' && 'exp' in decodedToken) {
            const expirationTime = (decodedToken as { exp: number }).exp;
            const currentTime = Math.floor(Date.now() / 1000);
            return expirationTime < currentTime;
        }
    } catch (error) {
        console.error('Error decoding token:', error);
    }
    return true; // Treat token as expired if any error occurs
}

export async function middleware(request: NextRequest) {
    const { url, cookies } = request;
    const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value;

    const isLoginPage = url.includes('/login');
    const isAdminPage = url.includes('/admin');

    if (accessToken && isTokenExpired(accessToken)) {
        // Delete expired token
        const res = NextResponse.redirect(new URL('/', request.url));
        res.cookies.delete(EnumTokens.ACCESS_TOKEN);
        return res;
    }

    if (isLoginPage && accessToken) {
        return NextResponse.redirect(new URL(DASHBOARD_PAGES.ADMIN, url));
    }

    if (isAdminPage && !accessToken) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin', '/login'],
};
