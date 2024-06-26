import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: "1",
            userName: "Pawan",
            name: "Pawan Kumar",
            password: "Mywebdev@sassfast",
            email: "360pawan@gmail.com",
          },
        ];

        const user = users.find((user) => user.email === credentials.email);

        if (!user) {
          throw new Error("User not found.");
        }

        if (user.password !== credentials.password) {
          throw new Error("Password is wrong.");
        }

        return user;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
