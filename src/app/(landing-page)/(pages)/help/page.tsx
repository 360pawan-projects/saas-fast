import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HelpPage() {
  return (
    <main className="flex flex-col min-h-96 items-center justify-center text-center">
      <h1 className="text-2xl font-semibold">
        We are launching our help page soon
      </h1>
      <p>Thanks for your patience. Meanwhile you can contact us.</p>
      <Link
        className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-green-800 border-green-800 relative overflow-hidden rounded-full border px-8 py-3 group hover:bg-gray-50 hover:text-white mt-5"
        href="/support"
      >
        <span className="absolute left-0 block w-full h-0 transition-all opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease bg-green-800" />
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-3 ease">
          <ArrowRight className="w-4 h-4" />
        </span>
        <span className="relative">Send queries here</span>
      </Link>
    </main>
  );
}
