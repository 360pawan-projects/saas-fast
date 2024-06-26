export const TestimonialShort = () => {
  return (
    <section className="py-4">
      <div
        className="relative"
        style={{
          willChange: "transform",
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          transform:
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        }}
      >
        <div className="relative bg-slate-100 mx-auto max-w-3xl rounded-3xl p-5 md:p-10 sm:px-16">
          <div className="text-center mt-10">
            <h2 className="text-base  sm:text-2xl">
              <span className="relative">
                <span className="text-4xl text-black absolute -translate-x-7 -translate-y-2">
                  ❝
                </span>{" "}
                SassFast has been a{" "}
                <span className=" bg-green-700 text-white p-1 font-bold">
                  game-changer
                </span>{" "}
                for me! While I excel in backend development, CSS and frontend
                design are not my strong suits. But with SassFast, I&apos;ve
                saved time, avoided frustration, and brought my visions to life
                effortlessly.
                <span className="text-4xl text-[#414141] absolute xl:-bottom-2 -bottom-4  mt-20 ml-1">
                  ❞
                </span>
              </span>
            </h2>
            <div className="mt-5 text-center">
              <h3 className="text-lg font-semibold text-gray-600 mb-1">
                Peter Seb
              </h3>
              <p className="text-xs text-dark-300 sm:text-base">
                Backend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
