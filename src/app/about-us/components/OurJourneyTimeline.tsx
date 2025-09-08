import React from "react";

type Milestone = {
  year: string;
  title: string;
  desc: string;
  side: "left" | "right";
};

const milestones: Milestone[] = [
  {
    year: "1985",
    title: "Foundation",
    desc: "Established with 50 students and a vision for quality education",
    side: "left",
  },
  {
    year: "1995",
    title: "Expansion",
    desc: "Added new facilities and expanded to 500 students",
    side: "right",
  },
  {
    year: "2010",
    title: "Innovation",
    desc: "Introduced digital learning and modern laboratories",
    side: "left",
  },
  {
    year: "2024",
    title: "Excellence",
    desc: "Recognized as a premier educational institution",
    side: "right",
  },
];

const OurJourneyTimeline = () => {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Our Journey
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            A timeline of growth, achievement, and educational excellence
          </p>
        </div>

        <div className="relative mx-auto mt-10 grid gap-10">
          {/* Vertical line */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2 border-l-2 border-slate-200" />

          {milestones.map((m) => (
            <div
              key={m.year}
              className={`relative flex ${
                m.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              {/* Year badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-700 text-xs font-semibold text-white ring-4 ring-white shadow-lg">
                  {m.year}
                </span>
              </div>

              <div
                className={`w-full max-w-xl ${
                  m.side === "left" ? "pr-20" : "pl-20"
                }`}
              >
                <div className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-md">
                  {/* Connector nub */}
                  <span
                    className={`absolute top-1/2 -mt-2 h-4 w-4 rotate-45 border border-slate-200 bg-white ${
                      m.side === "left"
                        ? "-right-2 border-l-0 border-t-0"
                        : "-left-2 border-r-0 border-b-0"
                    }`}
                  />
                  <div className="text-sm font-semibold text-slate-900">
                    {m.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {m.desc}
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

export default OurJourneyTimeline;
