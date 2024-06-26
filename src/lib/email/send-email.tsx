import Plunk from "@plunk/node";

const sendEmail = async ({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) => {
  try {
    const plunk = new Plunk(process.env.USEPLUNK_SECRET);

    await plunk.emails.send({
      to,
      subject,
      body,
    });
  } catch (error) {
    // console.log("ERROR sending email", error);
  }
};

export const sendInviteEmail = async ({
  to,
  subject,
  name,
  token,
  _id,
}: {
  to: string;
  subject: string;
  name: string;
  token: string;
  _id: string;
}) => {
  const body = `<h1>Hi ${name}, Thanks for your order.</h1>
  <p>You have successfully purchased <strong>SassFast</strong> template.</p>
  <p>
    You are just one step away from building your next big thing. Visit the
    below URL and add your Github username so I can add you to our private Github
    repo.
  </p>
  <a href='${process.env.SITE_URL}/github-invitation?token=${token}&_id=${_id}'
  target="_blank">Confirm github username<a />`;

  await sendEmail({ to, subject, body });
};
