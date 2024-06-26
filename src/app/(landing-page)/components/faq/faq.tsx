import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What exactly is included?",
    answer:
      "You'll receive the NextJS starter kit containing all the essential boilerplate code for launching an online business: a payment system, a database, login functionality, a blog, UI components, and more. The repository is accessible in TypeScript with app router for now but soon available in JavaScript, with options for both the /app router and /pages router. Additionally, our comprehensive documentation(Coming soon) guides you through setting up your application from scratch, crafting compelling copy that drives sales, and accelerating your project delivery. Plus, gain entry to our Discord community where like-minded makers collaborate to build quickly and stay on track!",
  },
  {
    question: "Javascript or Typescript?",
    answer:
      "Both! Soon you will get access to both for now we have Typescript.",
  },
  {
    question: "/app router or /pages router?",
    answer:
      "Both! Soon you will get access to both for now we have Typescript with app router.",
  },
  {
    question: "Can I still utilize it even if my tech stack differs?",
    answer:
      "Absolutely! As long as you're familiar with React and Next JS, you can adapt the components to fit your preferred tech stack. The libraries are interchangeable, so you can opt for SendGrid over Resend, LemonSqueezy instead of Stripe, or Postgres in lieu of MongoDB, for example.",
  },
  {
    question: "Is this a website template?",
    answer:
      "It's more than just a template. You can easily copy and paste sections to rapidly build your site, such as a pricing section, an FAQ, and even a complete blog. Additionally, you'll have access to a variety of UI components like buttons, modals, popovers, and more. The NextJS starter kit also includes essential tools required to operate an online business—payment processing, email functionality, SEO tools, and more.",
  },
  {
    question: "What sets SassFast apart from other boilerplate's?",
    answer:
      "Customers aren't purchasing code; they're investing in a life transformation. They're launching startups consistently, week after week, and seeing tangible financial gains as a result. Also I am using this personally so it's get updated frequently.",
  },
  {
    question: "Are there any additional expenses involved?",
    answer:
      "Numerous hosting platforms, such as Vercel, offer free hosting for both front-end and back-end projects, and MongoDB provides free tiers, allowing you to launch your first app for $0/month. Additionally, if you opt for Magic Link sign-ups, you'll incur a cost of $1 per 1,000 users.",
  },
  {
    question: "How frequently is SassFast updated?",
    answer:
      "I ship like a madman and use SassFast for all my projects, so I'm constantly updating it. The last update was just 1 day ago. I use it personally and updates are more frequent.",
  },
  {
    question: "Is it possible to receive a refund?",
    answer:
      "Once you've gained access to the repo, SassFast becomes yours indefinitely, so refunds aren't possible. However, it's worth noting that SassFast users typically launch startups within 7 days on average and achieve their first online earnings in record time.",
  },
  {
    question: "Can I use PayPal or any other payment gateway or provider?",
    answer:
      "Sure thing! In addition to PayPal, you can also use Google Pay or any other preferred payment provider to transfer the equivalent amount in USD for the plan you'd like to purchase ($99). Once the payment is made, please email me your GitHub username so I can provide you with access to the repository. Rest assured, with people trusting me on Twitter, your payment is in safe hands 😊",
  },
];

export const Faq = () => {
  return (
    <section id="faq">
      <div className="py-10 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="sm:text-4xl text-3xl font-extrabold mb-8">
            Frequently Asked Questions
          </p>
          <div>
            Have another question? Contact me on{" "}
            <a target="_blank" href="https://twitter.com/360pawan">
              Twitter
            </a>{" "}
            or by{" "}
            <a href="mailto:360pawan@gmail.com" target="_blank">
              email
            </a>
            .
          </div>
        </div>
        <div className="basis-1/2">
          <Accordion type="single" collapsible>
            {/* Map over the FAQ data array to create each accordion item */}
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left py-5 text-base font-semibold border-t md:text-lg data-[state=open]:text-green-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-5 leading-relaxed text-base">
                    <p>{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
