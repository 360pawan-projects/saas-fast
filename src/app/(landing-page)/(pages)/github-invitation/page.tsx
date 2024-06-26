import { redirect } from "next/navigation";
// import { GithubConfirmationForm } from "./form";

export default function ConfirmUsernamePage({
  searchParams,
}: {
  searchParams: { token: string; _id: string };
}) {
  if (!searchParams.token) {
    redirect("/");
  }

  return (
    <main className="py-10 container mx-auto">
      <div className="mx-auto w-full md:max-w-xl">
        <h3 className="font-bold text-xl mb-3">Invitation Page</h3>
        {/* <GithubConfirmationForm
          token={searchParams.token}
          _id={searchParams._id}
        /> */}
      </div>
    </main>
  );
}
