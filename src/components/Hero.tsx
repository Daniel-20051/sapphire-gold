import Image from "next/image";
import Link from "next/link";

function CapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#2b2c6b"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M12 3.75a1.5 1.5 0 0 0-.6.13L2.4 7.48a.75.75 0 0 0 0 1.36l9 3.75c.19.08.41.08.6 0l5.1-2.12v3.3c0 .62-.36 1.18-.93 1.43L12 17.9l-4.57-1.7a1.5 1.5 0 0 1-.93-1.43v-1.51l-1.5-.62v2.13c0 1.29.8 2.45 2.02 2.91l5.37 2c.36.13.75.13 1.1 0l5.37-2A3.12 3.12 0 0 0 21 12.95V9.61l1.2-.5a.75.75 0 0 0 0-1.36L12.6 3.88a1.5 1.5 0 0 0-.6-.13Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M8.25 6.75v10.5L18 12 8.25 6.75Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#151a3b_0%,#141a34_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7 md:py-17">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-items-center">
          {/* Left text */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Shaping Tomorrow's
              <br />
              Leaders Today
            </h1>
            <p className="mt-5 text-slate-200/90 max-w-2xl">
              Discover excellence in education with our comprehensive academic
              programs, dedicated faculty, and vibrant campus community.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/admisssions"
                className="inline-flex items-center gap-3 rounded-lg bg-white text-[#1e2556] px-6 py-3 text-base font-semibold shadow-sm hover:bg-slate-50 transition"
              >
                <CapIcon />
                <span>Apply Now</span>
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-3 rounded-lg border border-white/70 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                <span className="text-white">
                  <PlayIcon />
                </span>
                <span>Virtual Tour</span>
              </Link>
            </div>
          </div>

          {/* Right image card */}
          <div className="relative w-full">
            <div className="hidden md:block rounded-xl bg-white/5 ring-1 ring-white/10 shadow-2xl overflow-hidden max-w-lg mx-auto lg:ml-auto">
              <Image
                src="/window.svg"
                alt="Campus"
                width={720}
                height={360}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
