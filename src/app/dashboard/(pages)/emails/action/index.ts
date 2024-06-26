"use server";

import dbConnect from "@/lib/db/dbConnect";
import { Email } from "@/models/email.model";
import { EmailDataType } from "./type";

export const sendSupportEmail = async (emailData: EmailDataType) => {
  try {
    await dbConnect();

    const email = await Email.create(emailData);

    if (!email) {
      return {
        success: false,
        message: "Error sending support email.",
      };
    }

    return {
      success: true,
      message: "Your message has been sent. I will get back to you soon.",
    };
  } catch (error) {
    // console.log(error);

    return { success: false, message: "Error sending support email." };
  }
};
