import React from "react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2E3192] via-[#2B3FB0] to-[#1E43D6]">
      <div className="mx-auto max-w-6xl px-4 py-16 text-left sm:px-6 lg:px-8 lg:py-20">
        <div className="flex items-start gap-3 text-white">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 2.25a8.25 8.25 0 0 0-8.25 8.25c0 6.063 7.11 10.84 7.412 11.036a.75.75 0 0 0 .825 0C13.289 21.34 20.25 16.563 20.25 10.5A8.25 8.25 0 0 0 12 2.25Zm0 11.25a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
          </span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-1 text-sm text-indigo-100">
              Get in touch with Academic Portal
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-7 text-indigo-100 sm:text-lg">
          We&apos;re here to help and answer any questions you might have. Reach
          out to us through any of the methods below, and we&apos;ll get back to
          you as soon as possible.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V5.25A2.25 2.25 0 0 0 17.25 3H6.75Zm.75 3h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 7.5 6Zm0 3h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 7.5 9Zm0 3h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 7.5 12Z" />
              </svg>
            </span>
            Mon-Fri: 8:00 AM – 6:00 PM
          </span>

          <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path d="M2.25 6.75A3.75 3.75 0 0 1 6 3h12a3.75 3.75 0 0 1 3.75 3.75v10.5A3.75 3.75 0 0 1 18 21H6a3.75 3.75 0 0 1-3.75-3.75V6.75Zm5.72-.53a.75.75 0 0 0-1.06 1.06l1.72 1.72a1.5 1.5 0 0 0 2.12 0l1.22-1.22 5.28 5.28a.75.75 0 1 0 1.06-1.06l-5.81-5.81a1.5 1.5 0 0 0-2.12 0l-1.22 1.22-1.19-1.19Z" />
              </svg>
            </span>
            24/7 Emergency Line
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
