import { CtaButton } from "@/components/ui/ctaButton";

export const Cta = () => {
  return (
    <section className="max-w-xl mx-auto text-center mb-10 md:mb-20">
      <h2 className="text-5xl md:text-5xl font-bold text-green-600">
        Ship fast without compromise
      </h2>
      <p className="mb-5 mt-5 text-md text-dark-300">
        Your shortcut to excellence begins here.
      </p>
      <CtaButton text="Start Shipping" />
    </section>
  );
};
