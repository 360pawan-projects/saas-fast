import { SupportForm } from "./form";

export default function SupportPage() {
  return (
    <main className="py-10 container mx-auto">
      <div className="mx-auto w-full md:max-w-xl">
        <h3 className="font-bold text-xl mb-3">Support Page</h3>
        <SupportForm />
      </div>
    </main>
  );
}
