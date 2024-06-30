import { NextRequest } from "next/server";
import { authConfig } from "./lib/auth/auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

import {
  PUBLIC_ROUTES,
  SIGNIN,
  ROOT,
  PROTECTED_SUB_ROUTES,
} from "./lib/auth/routes";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const session = await auth();
  const isAuthenticated = !!session?.user;

  const isPublicRoute =
    (PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
      nextUrl.pathname === ROOT) &&
    !PROTECTED_SUB_ROUTES.find((route) => nextUrl.pathname.includes(route));

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(SIGNIN, nextUrl));
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
