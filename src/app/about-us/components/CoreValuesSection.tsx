import React from "react";

type Value = {
  title: string;
  desc: string;
};

const values: Value[] = [
  {
    title: "Excellence",
    desc: "Striving for the highest standards in teaching, learning, and personal development.",
  },
  {
    title: "Integrity",
    desc: "Building character through honesty, respect, and ethical behavior in all interactions.",
  },
  {
    title: "Innovation",
    desc: "Embracing creativity and forward-thinking approaches to education and problem-solving.",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="bg-[#2B2E6A] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Our Core Values
        </h2>
        <p className="mt-2 text-sm text-indigo-200">
          The principles that guide everything we do
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl bg-white/5 p-5 text-left shadow-sm ring-1 ring-white/10 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white ring-1 ring-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm.75 5.5a.75.75 0 0 0-1.5 0v5.19l4.12 2.38a.75.75 0 1 0 .74-1.3l-3.36-1.94Z" />
                  </svg>
                </span>
                <div className="flex-1">
                  <div className="text-base font-semibold text-white">
                    {v.title}
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-indigo-100">
                    {v.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
