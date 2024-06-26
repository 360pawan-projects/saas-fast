import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db/dbConnect";
import { sendInviteEmail } from "@/lib/email/send-email";
import { generateToken } from "@/lib/token/generate-token";
import { Token } from "@/models/token.model";
import { User } from "@/models/user.model";

export async function POST(request: Request) {
  try {
    /* Check webhook signature */

    const crypto = require("crypto");

    const rawBody = await request.text();

    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
    const signature = Buffer.from(
      request.headers.get("X-Signature") || "",
      "utf8"
    );

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    /* Parse webhook data */

    const data = JSON.parse(rawBody);

    const name = data["data"]["attributes"]["user_name"];
    const email = data["data"]["attributes"]["user_email"];
    const orderId = data["data"]["id"];

    // Connect to the database

    await dbConnect();

    // Generate a unique user token

    const token = generateToken();
    const { _id } = await Token.create({ token });

    /* Send an email invitation to user for private git repo  */

    const subject = "Confirm github username.";
    const emailData = {
      to: email,
      subject,
      name,
      token,
      _id,
    };

    await sendInviteEmail(emailData);
    await User.create({ email, name, orderId, tokenId: _id });
    revalidatePath("/dashboard/customers");

    /* Send back a 200 response */

    return Response.json("OK");
  } catch (error) {
    // console.log(error);
    return Response.json({ error: "Error hitting webhook" });
  }
}
