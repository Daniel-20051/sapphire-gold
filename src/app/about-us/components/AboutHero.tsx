import React from "react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2E3192] via-[#2B3FB0] to-[#1E43D6]">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur ring-1 ring-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M12 2c-.414 0-.75.336-.75.75V6.2a6.8 6.8 0 1 0 1.5 0V2.75A.75.75 0 0 0 12 2Zm0 6.5a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Z" />
          </svg>
          <span>Excellence in Education</span>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          About Our Institution
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-indigo-100 sm:text-lg">
          Discover the rich history, values, and vision that drive our
          commitment to educational excellence and student success.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
