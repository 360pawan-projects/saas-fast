import dbConnect from "@/lib/db/dbConnect";
import { User as UserModel } from "@/models/user.model";
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
        // await dbConnect();

        // const user = await UserModel.findOne({
        //   email: credentials.email,
        //   password: credentials.password,
        // });

        // if (!user) {
        //   throw new Error("User not found.");
        // }

        // return user;
        return null;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
