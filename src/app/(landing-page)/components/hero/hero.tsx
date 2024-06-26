import { Gift, Sparkles, Star } from "lucide-react";

import { AnimatedTooltipPreview } from "@/components/ui/animatedToolTip";
import { CtaButton } from "@/components/ui/ctaButton";

export const Hero1 = () => {
  return (
    <section className="sm:mt-10 lg:mt-20 lg:flex items-center gap-0 lg:gap-10">
      <div className="lg:w-6/12">
        <span className="text-xs flex gap-1 px-4 border border-green-300 w-fit py-2 rounded-full my-2 bg-gradient-to-tr from-white via-white to-green-50 text-green-800 mb-5">
          <span className="text-green-300">
            <Sparkles className="h-4 w-4" />
          </span>
          The most extensive and varied templates for launching sass available.
        </span>
        <h1 className="xl:text-8xl sm:text-7xl text-5xl font-bold flex flex-col gap-3 bg-gradient-radial-green text-transparent bg-clip-text">
          Shipping Made Easy <span />
        </h1>
      </div>
      <div className="lg:w-6/12">
        <p className="sm:text-lg text-slate-600 leading-relaxed">
          The Next JS boilerplate offers a complete setup for building SaaS, AI
          tools, and web apps to help you monetize quickly online.
        </p>
        <div className="mt-5">
          <p className="mt-3 text-sm md:text-base flex flex-wrap items-center gap-1">
            <span className="text-green-700 flex items-center gap-1 whitespace-nowrap">
              <Gift />
              <span className="font-semibold">$70 off</span>
            </span>
            for the first 3000 customers (2890 left)
          </p>
        </div>
        <div className="sm:flex sm:gap-8 sm:items-center mb-5 sm:mb-0">
          <AnimatedTooltipPreview />
          <div className="">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-300 fill-yellow-300 ms-1"
                />
              ))}
            </div>
            <p className="text-slate-500 mt-1">
              <span className="font-bold text-slate-900">100+</span> makers ship
              faster
            </p>
          </div>
        </div>
        <CtaButton text="Start Shipping" />
      </div>
    </section>
  );
};
