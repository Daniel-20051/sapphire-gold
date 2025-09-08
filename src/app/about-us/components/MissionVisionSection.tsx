import React from "react";

const cards = [
  {
    title: "Our Mission",
    body: "To provide exceptional education that empowers students to become critical thinkers, innovative leaders, and responsible global citizens who contribute positively to society.",
  },
  {
    title: "Our Vision",
    body: "To be a leading educational institution recognized for academic excellence, innovation in teaching, and developing future leaders who shape a better world.",
  },
];

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6  ring-1 ring-black/5"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-700 text-white border-1 border-gray-200">
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
                  <h3 className="text-lg font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {c.body}
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

export default MissionVisionSection;
