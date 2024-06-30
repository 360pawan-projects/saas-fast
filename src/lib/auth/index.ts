import dbConnect from "@/lib/db-connect";
import { IUser, User as UserModel } from "../models/user";
import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (credentials === null) return null;

        const email = credentials.email as string;
        const password = credentials.password as string;

        await dbConnect();

        const user: IUser | null = await UserModel.findOne({ email });

        if (!user) {
          throw new Error("User not found.");
        }

        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid) {
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
