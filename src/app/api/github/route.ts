import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/db/dbConnect";
import { Token } from "@/models/token.model";
import { User } from "@/models/user.model";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const { _id, token, username } = JSON.parse(rawBody);

    // Connect to the database

    await dbConnect();

    const tokenDetails = await Token.findById(_id);
    const decodedToken = jwt.verify(token, process.env.INVITATION_TOKEN_SECRET);

    if (typeof decodedToken !== "object" || token !== tokenDetails.token) {
      return NextResponse.json(
        { message: "Token is not valid", success: false },
        {
          status: 500,
        }
      );
    }

    // Add user to github private repo

    const response = await fetch(
      `https://api.github.com/repos/360pawan/sass-fast/collaborators/${username}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 404) {
      return Response.json(
        {
          message: "Sorry we can't find your github account.",
          success: false,
        },
        {
          status: 404,
        }
      );
    }

    if (response.status === 201) {
      await User.findOneAndUpdate(
        { tokenId: _id },
        {
          $set: {
            githubUsername: username,
          },
          $unset: {
            tokenId: 1,
          },
        },
        { new: true }
      );
      revalidatePath("/dashboard/customers");
      await Token.deleteOne({ _id });

      return Response.json(
        {
          message: "You are successfully invited to our private repo.",
          success: true,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      {
        message:
          "Error validating token. Connect with me on email at 360pawan@gmail.com",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
