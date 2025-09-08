import Image from "next/image";
import Link from "next/link";

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function AdmissionsHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#151a3b_0%,#141a34_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Join Our Academic Excellence
            </h1>
            <p className="mt-5 text-slate-200/90 max-w-2xl">
              Begin your journey toward academic success and personal growth.
              Our comprehensive admission process ensures the right fit for
              every student.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#apply"
                className="inline-flex items-center gap-3 rounded-lg bg-white text-[#1e2556] px-6 py-3 text-base font-semibold shadow-sm hover:bg-slate-50 transition"
              >
                <DocumentIcon />
                <span>Apply Now</span>
              </Link>
              <Link
                href="#visit"
                className="inline-flex items-center gap-3 rounded-lg border border-white/70 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                <CalendarIcon />
                <span>Schedule Visit</span>
              </Link>
            </div>
          </div>

          {/* Right image card */}
          <div className="relative">
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 shadow-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
                alt="Campus"
                width={720}
                height={360}
                className="w-full h-auto"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">
                      95% Acceptance Rate
                    </div>
                    <div className="text-xs text-slate-600">
                      for Qualified Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
