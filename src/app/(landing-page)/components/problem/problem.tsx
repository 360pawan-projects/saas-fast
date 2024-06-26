import { CircleCheck } from "lucide-react";

const problems = [
  {
    boldText: "2 hrs",
    text: "to setup initial projects",
  },
  { boldText: "+ 4 hrs", text: "to setup authentication" },
  { boldText: "+ 3 hrs", text: "to setup email" },
  { boldText: "+ 8 hrs", text: "to setup stripe and payments" },
  { boldText: "+ 4 hrs", text: "to setup protected pages" },
  { boldText: "+ 8 hrs", text: "to setup seo and dns records" },
  { boldText: "+ ♾️", text: "of overthinking" },
  { boldText: "= 1 day", text: "of pure headaches" },
];

export const Problem1 = () => {
  return (
    <section className="max-w-max mx-auto">
      {problems.map((problem, i) => (
        <div className="flex gap-1 my-3 items-center" key={i}>
          <CircleCheck className="w-5 h-5" />
          <span
            className={"text-black dark:text-white flex items-center gap-2"}
          >
            <span className="font-bold">{problem.boldText}</span>
            {problem.text}
          </span>
        </div>
      ))}
      <h3 className="text-center text-lg mt-10">
        But this can be solved in <span className="font-bold">😀 1 hour</span>
      </h3>
    </section>
  );
};
