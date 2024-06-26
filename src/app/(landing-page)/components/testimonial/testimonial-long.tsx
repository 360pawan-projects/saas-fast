import { TwitterTweetIcon } from "@/components/ui/icons";

const testimonials = [
  {
    name: "Jake",
    username: "capojake",
    avatarUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    tweet:
      "SassFast is genuinely one of the best tools available to backend Dev's who struggle to make pretty ui 🎉",
  },
  {
    name: "Robert Johnson",
    username: "robertjohnsonux",
    avatarUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    tweet:
      "Just bumped into SassFast on twitter, as a former ux designer I love it! I love the quality of the components, I've seen a few libraries with many components but I would never use them because the components are outdated. I could definitely use @sassFast.",
  },
  {
    name: "Jane Smith",
    username: "codebyjanesmith",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    tweet:
      "As an early user of SassFast, it has been an amazing investment of time. The template are top notch and an affordable alternative to other templates out there. Very easy to customize and iterating over received feedback is at the core of their product. I'm excited to check out Pages+ and the Templates to come.",
  },
  {
    name: "Emily Davis",
    username: "devemilydavis",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tweet:
      "I've been an early user of SassFast, and I must say, the components are top-notch. The rapid release of new components is truly impressive. I'm genuinely excited about this template.",
  },
  {
    name: "Tyler Durden",
    username: "tylerdurden7",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    tweet: "Love the components already. Can't wait to see more! 🙌",
  },
  {
    name: "Ritika",
    username: "ritikathakur",
    avatarUrl:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    tweet:
      "I am absolutely blown away by the top-notch design which is not common in the templates I have seen so far. It's perfect in every way!",
  },
];

const Testimonial = ({
  name,
  username,
  avatarUrl,
  tweet,
}: {
  name: string;
  username: string;
  avatarUrl: string;
  tweet: string;
}) => (
  <div className="bg-white border-light-200 border overflow-hidden rounded-3xl bg-amber-red break-inside-avoid w-full mb-4 relative p-2">
    <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white text-dark">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-cover bg-center relative"
          style={{ backgroundImage: `url("${avatarUrl}")` }}
        />
        <div className="h-fit">
          <h6 className="text-sm font-bold mb-0 w-full">{name}</h6>
          <p className="text-xs opacity-70">@{username}</p>
        </div>
      </div>
      <TwitterTweetIcon />
    </div>
    <div className="px-4 py-4 text-dark">
      <p className="text-md">
        <span>{tweet}</span>
      </p>
    </div>
  </div>
);

export const TestimonialLong = () => {
  return (
    <section className="mt-10" id="reviews">
      <div className="p-4">
        <h5 className="text-center max-w-4xl mx-auto text-2xl font-bold xl:text-5xl xl:px-5 ">
          Loved by hundreds{" "}
        </h5>
        <p className="text-center max-w-4xl mx-auto text-md text-dark-300 mt-3 mb-5">
          We are proud to have helped hundreds of entrepreneurs, developers and
          designers around the world.
        </p>
      </div>
      <div className="max-w-7xl mx-auto gap-4 lg:columns-3 md:columns-2 sm:columns-1">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
