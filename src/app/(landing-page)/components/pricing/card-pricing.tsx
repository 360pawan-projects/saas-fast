import { CircleCheck, CircleX, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const ListItem = ({
  icon,
  text,
}: {
  icon: React.ReactElement;
  text: string;
}) => (
  <li className="flex items-center gap-2">
    {icon}
    <span className="">{text}</span>
  </li>
);

export const CardPricing = () => {
  return (
    <section className="overflow-hidden" id="pricing">
      <div className="py-10 md:py-24 pb-0 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-10 md:mb-20">
          <p className="font-medium text-green-600 mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 max-w-2xl mx-auto">
            Save hours of repetitive code, ship fast, get profitable!
          </h2>
          <p className="text-green-700 text-sm md:text-base flex justify-center items-center gap-1">
            <Gift className="w-5 h-5" />
            <span className="text-slate-800">
              <span className="text-green-700">$50 off</span> for the first 3000
              customers (2890 left)
            </span>
          </p>
        </div>
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <div className="relative w-full shadow-x rounded-lg">
            <div className="relative flex flex-col gap-5 lg:gap-8 z-10 px-5 md:p-8 rounded-lg">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <p className="text-lg lg:text-xl font-bold ">Starter</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col justify-end mb-[4px] text-lg ">
                  <p className="relative opacity-80">
                    <span className="absolute h-[1.5px] inset-x-0 top-[48%]" />
                    <span className="line-through">$99</span>
                  </p>
                </div>
                <p className="text-5xl tracking-tight font-extrabold">$49</p>
                <div className="flex flex-col justify-end mb-[4px]">
                  <p className="text-xs opacity-60 uppercase font-semibold">
                    USD
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="NextJS boilerplate"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="SEO & Blog"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="usePlunk emails"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="Lemon Squeezy payments"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="MongoDB"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="Google Oauth & Magic Links"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="Components & animations"
                />
                <ListItem
                  icon={<CircleX className="w-5 h-5" />}
                  text="Discord community"
                />
                <ListItem
                  icon={<CircleX className="w-5 h-5" />}
                  text="Lifetime updates"
                />
              </ul>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <a href={process.env.PRODUCT_LINK}>Start Shipping</a>
                </Button>
                <p className="flex items-center justify-center gap-2 text-sm text-center font-medium relative">
                  Pay once. Build unlimited projects!
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full border-2 rounded-lg border-green-600">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <span className="badge text-xs text-white font-semibold border-0 bg-green-600 p-2 rounded-2xl">
                POPULAR
              </span>
            </div>
            <div className="relative flex flex-col gap-5 lg:gap-8 z-10 p-4 md:p-8 rounded-lg">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <p className="text-lg lg:text-xl font-bold ">All-in</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col justify-end mb-[4px] text-lg ">
                  <p className="relative opacity-80">
                    <span className="absolute h-[1.5px] inset-x-0 top-[48%]" />
                    <span className="line-through">$149</span>
                  </p>
                </div>
                <p className="text-5xl tracking-tight font-extrabold">$99</p>
                <div className="flex flex-col justify-end mb-[4px]">
                  <p className="text-xs opacity-60 uppercase font-semibold">
                    USD
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="NextJS boilerplate"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="SEO & Blog"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="usePlunk emails"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="Lemon Squeezy payments"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="MongoDB"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="Google Oauth & Magic Links"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="Components & animations"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="Discord community"
                />
                <ListItem
                  icon={<CircleCheck className="text-white fill-black" />}
                  text="Lifetime updates"
                />
              </ul>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <a href={process.env.PRODUCT_LINK}>Start Shipping</a>
                </Button>
                <p className="flex items-center justify-center gap-2 text-sm text-center font-medium relative">
                  Pay once. Build unlimited projects!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-md mt-10 md:mt-20">
          <span className="text-5xl text-black block">❝</span>
          <p className="md:text-lg leading-relaxed">
            It is so easy to launch project with this template. I am already
            able to make $100.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <p>Kevin</p>
            <span className="border border-green-600 py-1 px-2 text-green-600 font-semibold text-sm rounded-full">
              Built a SaaS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
