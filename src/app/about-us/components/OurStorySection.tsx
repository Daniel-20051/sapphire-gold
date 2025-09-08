import React from "react";
import Image from "next/image";

const OurStorySection = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
          <span>Our Story</span>
        </div>

        <div className="mt-4 flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Left column: text content */}
          <div>
            <h2 className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
              From Humble Beginnings to
              <br className="hidden sm:block" /> Educational Excellence
            </h2>

            <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-600">
              <p>
                What began as a small community school with just 50 students and
                a handful of dedicated teachers has blossomed into one of the
                region&apos;s most respected educational institutions. Our
                journey to the limelight wasn&apos;t overnight – it was built on
                decades of unwavering commitment to excellence.
              </p>
              <p>
                In the early years, we faced numerous challenges – limited
                resources, outdated facilities, and skepticism from the
                community. However, our founding vision remained clear: to
                provide quality education that transforms lives and builds
                character.
              </p>
              <p>
                The turning point came in the late 1990s when our innovative
                teaching methods began producing exceptional results. Students
                started winning national competitions, our graduates gained
                admission to prestigious universities, and word of our success
                spread throughout the region.
              </p>
              <p>
                Today, we stand proud as a beacon of educational excellence,
                having nurtured over 10,000 graduates who now serve as leaders
                in various fields worldwide. Our story is one of perseverance,
                innovation, and the transformative power of education.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:max-w-md">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">
                  39 Years
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  of Educational Excellence
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">
                  10,000+
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Successful Graduates
                </div>
              </div>
            </div>
          </div>

          {/* Right column: testimonial card */}
          <div className="flex flex-col">
            <div className="relative rounded-xl bg-gradient-to-br from-[#2E3192] via-[#2B4BC4] to-[#1E6DEB] p-5 text-indigo-50 shadow-lg ring-1 ring-black/5 sm:p-6 md:p-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 opacity-60"
                aria-hidden="true"
              >
                <path d="M7.5 6.75A3.75 3.75 0 0 0 3.75 10.5v6.75h6V10.5H6a.75.75 0 0 1-.75-.75V9A2.25 2.25 0 0 1 7.5 6.75Zm9 0A3.75 3.75 0 0 0 12.75 10.5v6.75h6V10.5h-3.75a.75.75 0 0 1-.75-.75V9a2.25 2.25 0 0 1 2.25-2.25Z" />
              </svg>

              <p className="mt-3 text-sm leading-6 sm:text-[15px]">
                Education is not preparation for life; education is life itself.
                Our journey has been about creating an environment where every
                student can discover their potential and shine.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  alt="Dr. Sarah Johnson avatar"
                  className="h-9 w-9 rounded-full border border-white/50"
                  width={36}
                  height={36}
                />
                <div>
                  <div className="text-sm font-semibold text-white">
                    Dr. Sarah Johnson
                  </div>
                  <div className="text-xs text-indigo-100">
                    Principal & Educational Leader
                  </div>
                </div>
              </div>

              {/* Trophy badge */}
              <div className="absolute -right-3 -bottom-3 hidden h-11 w-11 items-center justify-center rounded-full bg-[#d2ae6d] text-white shadow-md ring-4 ring-white sm:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M8.25 2.25a.75.75 0 0 0-.75.75v1.5H5.25a.75.75 0 0 0-.75.75v1.5A3.75 3.75 0 0 0 7.836 12.2a5.251 5.251 0 0 0 3.414 3.242c-.025.877-.276 1.746-.804 2.507-.493.71-1.265 1.376-2.446 1.551a.75.75 0 0 0-.636.742v.75h8.272v-.75a.75.75 0 0 0-.636-.742c-1.181-.175-1.953-.841-2.446-1.551a4.999 4.999 0 0 1-.804-2.507A5.251 5.251 0 0 0 16.164 12.2 3.75 3.75 0 0 0 19.5 6.75V5.25a.75.75 0 0 0-.75-.75H16.5V3a.75.75 0 0 0-.75-.75h-7.5Z" />
                </svg>
              </div>
            </div>

            {/* Feature cards */}
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "National Recognition",
              desc: "Awarded 'School of Excellence' for three consecutive years",
              iconBg: "bg-amber-100",
              dot: "bg-amber-500",
            },
            {
              title: "Innovation Leader",
              desc: "First in region to integrate AI and digital learning platforms",
              iconBg: "bg-emerald-100",
              dot: "bg-emerald-500",
            },
            {
              title: "Community Impact",
              desc: "Over $2M raised for local charities and community projects",
              iconBg: "bg-indigo-100",
              dot: "bg-indigo-500",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                </span>
                <div className="font-medium text-slate-900">{item.title}</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
