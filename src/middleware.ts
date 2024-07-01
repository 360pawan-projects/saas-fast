import NextAuth from "next-auth";
import { NextRequest } from "next/server";

import {
  PUBLIC_ROUTES,
  SIGNIN,
  ROOT,
  PROTECTED_SUB_ROUTES,
} from "./lib/auth/routes";

const { auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [],
});

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
