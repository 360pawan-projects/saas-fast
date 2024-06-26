import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheck } from "lucide-react";

const tabContents = [
  {
    title: "Emails",
    timeSaved: 3,
    items: [
      "Send transactional emails",
      "Set up DNS to prevent emails from going to spam (DKIM, DMARC, SPF in subdomain)",
      "Webhook for receiving and redirecting emails",
    ],
  },
  {
    title: "Payments",
    timeSaved: 8,
    items: [
      "Facilitate checkout sessions creation",
      "Manage webhooks for updating user accounts (subscriptions, one-time payments...)",
      "Guidelines for optimizing account setup & minimizing chargebacks",
    ],
  },
  {
    title: "Login",
    timeSaved: 4,
    items: [
      "Configuration of magic links for authentication",
      "Step-by-step guide for logging in with Google",
      "Storing user data securely in MongoDB",
      "Securing private pages and API calls",
    ],
  },
  {
    title: "Database",
    timeSaved: 2,
    items: [
      "Mongoose schema",
      "Utilizing Mongoose plugins for enhanced efficiency",
    ],
  },
  {
    title: "SEO",
    timeSaved: 8,
    items: [
      "The complete blog framework",
      "Comprehensive meta tags for Google ranking",
      "OpenGraph tags for social media sharing",
      "Automated sitemap generation to expedite Google indexing",
      "Structured data markup for Rich Snippets",
      "SEO-enhanced UI components",
    ],
  },
  {
    title: "Style",
    timeSaved: 8,
    items: [
      "Elements, animations & sections (e.g., features section)",
      "Over 20 themes integrated with daisyUI",
      "Automatic dark mode functionality",
    ],
  },
  {
    title: "More",
    timeSaved: "∞",
    items: [
      "Strategies for compelling sales copywriting",
      "Engage in a supportive Discord community for accountability",
      "Efficient customer support features (auto show/hide, variables...)",
      "Gather emails for a wait list if your product is still in development",
      "Access readily available code templates for easy integration",
    ],
  },
];

const ListItem = ({
  children,
  greenText = false,
}: {
  children: React.ReactNode;
  greenText?: boolean;
}) => (
  <li
    className={`flex items-center gap-2 ${
      greenText ? "text-green-700 font-medium" : ""
    }`}
  >
    <span className="whitespace-nowrap">
      <CircleCheck className="fill-black text-white" />
    </span>
    {children}
  </li>
);

export const Feature2 = () => {
  return (
    <section className="py-10 md:py-14" id="features">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bold text-3xl lg:text-4xl tracking-tight mb-3">
          Build, ship, and make money quicker
        </h2>
        <div className="text-slate-600 leading-relaxed mb-8 lg:text-lg">
          Empower Your Startup: Login, Payment Processing, and Email Delivery at
          Warp Speed! With SassFast, Get Ready to Launch Instantly and Maximize
          Your Success.
        </div>
      </div>
      <Tabs defaultValue="emails" className="max-w-3xl mx-auto w-full">
        <TabsList className="justify-start sm:justify-between gap-5 w-full bg-transparent h-full flex-wrap">
          {tabContents.map(({ title }) => (
            <TabsTrigger
              className="data-[state=active]:shadow-none data-[state=active]:text-green-700 p-0 hover:text-green-700 transition-colors text-base"
              key={title}
              value={title.toLowerCase()}
            >
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
          {tabContents.map(({ title, timeSaved, items }) => (
            <TabsContent value={title.toLowerCase()} key={title}>
              <div className="leading-relaxed space-y-4 py-5 max-w-2xl animate-opacity">
                <p className="font-medium text-lg">{title}</p>
                <ul className="space-y-1">
                  {items.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                  <ListItem greenText>
                    {`Time saved: ${timeSaved} hours`}
                  </ListItem>
                </ul>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
};
