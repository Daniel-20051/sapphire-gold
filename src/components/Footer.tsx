import Link from "next/link";

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.62.76-1.62 1.54v1.86h2.77l-.44 2.9h-2.33V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99 4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.46-4.3 4.1 4.1 0 0 0 1.27 5.48c-.63-.02-1.22-.19-1.74-.47v.05a4.1 4.1 0 0 0 3.29 4.02c-.3.08-.62.12-.94.12-.23 0-.46-.02-.68-.06a4.11 4.11 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 19.54 11.63 11.63 0 0 0 8.29 21c7.54 0 11.67-6.25 11.67-11.66 0-.18-.01-.36-.02-.54A8.33 8.33 0 0 0 22 5.92Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="17.35" cy="6.65" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className=" text-white">
      <div className="relative overflow-hidden">
        {/* Base gradient + spotlight accents + subtle grid */}
        <div className="absolute inset-0 [background-image:linear-gradient(180deg,#17153a_0%,#0b0f1f_100%),radial-gradient(900px_400px_at_-10%_-10%,rgba(88,80,236,0.55),transparent_60%),radial-gradient(800px_360px_at_120%_-20%,rgba(49,46,129,0.6),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:22px_22px] [background-position:0px_0px]" />
        {/* Soft top border glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-xl" aria-hidden>
                    🎓
                  </span>
                </div>
                <div>
                  <div className="text-lg font-semibold">Academic Portal</div>
                  <div className="text-xs text-slate-300">
                    Excellence in Education
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-6 max-w-sm">
                Empowering minds, shaping futures, and building tomorrow&apos;s
                leaders through innovative education and comprehensive academic
                excellence.
              </p>
              <div className="mt-4 flex items-center gap-3 text-slate-300">
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/academics"
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/admisssions"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/gallery">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white transition"
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200">
                Student Resources
              </h4>
              <div className="mt-4 space-y-3">
                <a
                  className="block rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300 bg-white/5 transition"
                  href="#"
                >
                  Student Portal
                </a>
                <a
                  className="block rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300 bg-white/5 transition"
                  href="#"
                >
                  Digital Library
                </a>
                <a
                  className="block rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300 bg-white/5 transition"
                  href="#"
                >
                  Career Services
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200">
                Get in Touch
              </h4>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="rounded-md border border-white/10 px-3 py-2">
                  <div className="text-slate-200">Campus Address</div>
                  <div>123 University Avenue</div>
                  <div>Education City, State</div>
                  <div>12345</div>
                </div>
                <div className="rounded-md border border-white/10 px-3 py-2">
                  <div className="text-slate-200">Phone & Email</div>
                  <div>+(234) 8023129615</div>
                  <div>info@academicportal.edu</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-5 text-[11px] text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
            <div>
              © {new Date().getFullYear()} Sapphire Gold International School.
              All rights reserved.
            </div>

            <div className="flex items-center gap-2">
              <span aria-hidden>❤️</span>
              <span>Made with care for education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
