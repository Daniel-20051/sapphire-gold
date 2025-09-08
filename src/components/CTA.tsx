import Link from "next/link";

function CapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M12 3.75a1.5 1.5 0 0 0-.6.13L2.4 7.48a.75.75 0 0 0 0 1.36l9 3.75c.19.08.41.08.6 0l5.1-2.12v3.3c0 .62-.36 1.18-.93 1.43L12 17.9l-4.57-1.7a1.5 1.5 0 0 1-.93-1.43v-1.51l-1.5-.62v2.13c0 1.29.8 2.45 2.02 2.91l5.37 2c.36.13.75.13 1.1 0l5.37-2A3.12 3.12 0 0 0 21 12.95V9.61l1.2-.5a.75.75 0 0 0 0-1.36L12.6 3.88a1.5 1.5 0 0 0-.6-.13Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/20 bg-gradient-to-r from-[#2b2c6b] to-[#1f3ea6] p-6 sm:p-10 text-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/90 max-w-3xl mx-auto">
            Join thousands of students who have chosen excellence. Apply today
            and become part of our legacy.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/admisssions"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#2b2c6b] shadow hover:shadow-md transition-shadow"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[#e9ecff] text-[#2b2c6b]">
                <CapIcon />
              </span>
              Apply Now
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-md border border-white/60 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded border border-white/60 text-white">
                <CalendarIcon />
              </span>
              Schedule Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
