import { CircleArrowUp, Clock3, Layers } from "lucide-react";

export const Feature1 = () => {
  return (
    <section className="my-10 lg:my-20">
      <div className="flex flex-col md:flex-row item-center mt-5 gap-8">
        <div>
          <Layers className="w-5 h-5" />
          <div className="mt-4">
            <h2 className="mb-1 text-lg font-semibold text-gray-900">
              Diverse components
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Access a variety of carefully crafted components to streamline
              your design process and save time.
            </p>
          </div>
        </div>
        <div>
          <Clock3 className="w-5 h-5" />
          <div className="mt-4">
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Time and Cost Savings
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Use pre-built components to save time and costs, enabling a focus
              on innovation and efficient development.
            </p>
          </div>
        </div>
        <div>
          <CircleArrowUp className="w-5 h-5" />
          <div className="mt-4">
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Continuous Updates
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Stay current and secure with continuous updates, ensuring your
              software remains optimized and reliable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
