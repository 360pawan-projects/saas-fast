import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingItems = [
  "Next JS boilerplate with latest version",
  "Resend to send emails to customer",
  "SEO & Blog already optimized",
  "Stripe and Lemon Squeezy for payments",
  "MongoDB database",
  "Google Oauth & Magic Links for user management",
  "Multiple components & animations",
  "Pay once and get lifetime updates",
];

const PricingListItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-2 items-center">
    <div className="rounded-xl bg-green-50 text-white">
      <CircleCheck className="fill-green-500" />
    </div>
    <div className="text-[14px]">{children}</div>
  </div>
);

export const Pricing = () => {
  return (
    <section id="pricing">
      <div className="max-w-2xl mx-auto text-center mt-10 md:mt-20">
        <p className="text-xl text-blue-600 mb-2">Pricing</p>
        <h3 className="text-capitalize text-4xl lg:text-5xl font-semibold ">
          Gain a Competitive Edge with{" "}
          <span className="bg-gradient-to-r from-[rgb(173,255,171)] via-[rgb(0,203,27)] to-[rgb(14,57,15)] bg-clip-text text-transparent">
            Better
          </span>{" "}
          Template!
        </h3>
        <p className="text-dark" />
      </div>
      <div className="grid justify-center w-fit max-w-[1280px] gap-3 mx-auto py-4">
        <div className="text-center mt-5 py-10 relative mx-auto grid md:grid-cols-2 gap-10 px-4 md:px-10 rounded-3xl max-w-4xl items-start border-2 border-light-100 md:divide-x-2 md:divide-light-100">
          <div>
            <div className="bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full -mt-[1px] absolute top-0 left-10 right-10 p-[1px]" />
            <h3 className="text-2xl  font-bold bg-gradient-to-br from-[rgb(24,62,14)] via-[rgb(0,189,91)] to-[rgb(251,244,254)] bg-clip-text text-transparent">
              Components
            </h3>
            <div className="text-center">
              <p className="small my-3">
                Explore our diverse component and template library for faster
                and stunning UI designs. Discover new additions consistently.
                And of course ship your projects faster.
              </p>
              <div className="text-center p-3 rounded-xl transition bg-light-50">
                <span className="text-sm text-green-700">
                  Pay once and get it for lifetime
                </span>
                <h4 className="text-3xl font-bold mt-1 flex items-center gap-2 justify-center">
                  <span className="line-through font-normal text-sm">$99</span>
                  $29
                </h4>
              </div>
              <Button className="mt-5 w-full" asChild>
                <a href={process.env.PRODUCT_LINK}>Start Shipping</a>
              </Button>
            </div>
          </div>
          <div className="space-y-5 text-left md:pl-7">
            {pricingItems.map((item, index) => (
              <PricingListItem key={index}>{item}</PricingListItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
