import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const values = JSON.parse(rawBody);

    const formData = new FormData();
    formData.append("access_key", process.env.SUPPORT_FORM_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify({ ...object, ...values });

    const data = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const response = await data.json();

    if (response?.success) {
      return NextResponse.json(
        {
          message: "Your message has been sent. I will get back to you soon.",
          success: true,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        { message: "Error sending support email", success: false },
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { message: "Error sending support email", success: false },
      {
        status: 500,
      }
    );
  }
}
