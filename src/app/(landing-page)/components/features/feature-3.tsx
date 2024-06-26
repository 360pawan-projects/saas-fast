import {
  Check,
  CreditCard,
  Lock,
  Mail,
  Paintbrush,
  Plus,
  Server,
} from "lucide-react";

export const Feature3 = () => {
  const features = [
    {
      title: "Emails",
      description: [
        "Send transactional emails",
        "Send marketing emails",
        "Powered using usePlunk",
      ],
      icon: <Mail className="w-4 h-4" />,
    },
    {
      title: "Payments",
      description: [
        "Create custom pricing plans",
        "Facilitate checkout sessions creation",
        "Powered using Lemon Squeezy",
      ],
      icon: <CreditCard className="w-4 h-4" />,
    },
    {
      title: "Authentication",
      description: [
        "Magic links setup",
        "Login with Google, GitHub, Discord",
        "User data stored in your Mongo DB",
        "Secured pages and routes",
      ],
      icon: <Lock className="w-4 h-4" />,
    },
    {
      title: "Components",
      description: [
        "Pre-built component library",
        "100% customizable",
        "Built using ShadCN UI",
        "Tailwind",
      ],
      icon: <Paintbrush className="w-4 h-4" />,
    },
    {
      title: "Database",
      description: ["Mongo DB", "Mongoose ORM", "Schema included"],
      icon: <Server className="w-4 h-4" />,
    },
    {
      title: "Extras",
      description: [
        "All future updates",
        "Various templates in future",
        "Blog using markdown",
        "Seo Friendly copy",
      ],
      icon: <Plus className="w-4 h-4" />,
    },
  ];

  const Icon = ({ icon }: { icon: React.ReactElement }) => (
    <div className="w-8 h-8 grid place-items-center rounded shrink-0 bg-gradient-to-b from-container to-container/50 border-t border-accent">
      {icon}
    </div>
  );

  const FeatureItem = ({
    title,
    description,
  }: {
    title: string;
    description: string[];
  }) => (
    <div className="flex flex-col">
      <p className="font-medium text-lg py-4">{title}</p>
      <div className="flex flex-col gap-2">
        {description.map((item, index) => (
          <div key={index} className="text-sm flex items-center gap-2">
            <Check className="w-4 h-4" />
            <p className="tracking-tight">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="flex flex-col py-20" id="features">
      <div className="max-w-5xl m-auto w-full">
        <h2 className="font-bold text-3xl lg:text-4xl tracking-tight mb-3">
          Build, ship, and make money quicker
        </h2>
        <div className="text-slate-600 leading-relaxed mb-8 lg:text-lg">
          Empower Your Startup: Login, Payment Processing, and Email Delivery at
          Warp Speed! With SassFast, Get Ready to Launch Instantly and Maximize
          Your Success.
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <Icon icon={feature.icon} />
              <FeatureItem
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
