import { Cta } from "../components/cta/cta";
import { Faq } from "../components/faq/faq";
import { Feature1 } from "../components/features/feature-1";
import { Feature2 } from "../components/features/feature-2";
import { Hero1 } from "../components/hero/hero";
import { Pricing } from "../components/pricing/pricing";
import { Problem1 } from "../components/problem/problem";
import { TestimonialLong } from "../components/testimonial/testimonial-long";
import { TestimonialShort } from "../components/testimonial/testimonial-short";

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <Hero1 />
      <Feature1 />
      <Problem1 />
      <Feature2 />
      <TestimonialShort />
      <Pricing />
      <TestimonialLong />
      <Faq />
      <Cta />
    </main>
  );
}
