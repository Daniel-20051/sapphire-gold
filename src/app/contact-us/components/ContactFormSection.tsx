import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) => (
  <div>
    <label className="block text-xs font-medium text-slate-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
    />
  </div>
);

const ContactFormSection = () => {
  return (
    <section className="bg-slate-50 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Send us a Message
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Have a specific question or need assistance? Fill out the form
              below and we'll get back to you within 24 hours.
            </p>

            <form className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              <Input
                label="Email Address"
                type="email"
                placeholder="john.doe@example.com"
              />
              <Input label="Phone Number" placeholder="+1 (555) 123-4567" />

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Department
                </label>
                <select className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                  <option>Select Department</option>
                  <option>Admissions</option>
                  <option>Student Services</option>
                  <option>Finance</option>
                </select>
              </div>

              <Input
                label="Subject"
                placeholder="Brief subject of your message"
              />

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Please provide details about your inquiry..."
                  className="mt-1 w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <label className="flex items-start gap-2 text-xs text-slate-600">
                <input
                  type="checkbox"
                  className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                I agree to receive communications from Academic Portal regarding
                my inquiry and understand that I can unsubscribe at any time.
              </label>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2B2C6B] px-4 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-indigo-900/10 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-white/30 active:bg-indigo-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M2.25 4.5A.75.75 0 0 1 3 3.75h18a.75.75 0 0 1 .67 1.06l-7.5 15a.75.75 0 0 1-1.39-.11l-2.1-6.29-6.3-2.1A.75.75 0 0 1 2.25 4.5Z" />
                </svg>
                Send Message
              </button>
            </form>
          </div>

          {/* Quick contact + social */}
          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h4 className="text-sm font-semibold text-slate-900">
                Quick Contact
              </h4>
              <p className="mt-1 text-xs text-slate-500">
                Need immediate assistance? Use these quick contact options.
              </p>

              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-rose-100 bg-rose-50 p-4">
                  <div className="text-xs font-semibold text-rose-700">
                    Emergency Contact
                  </div>
                  <div className="text-sm text-rose-700">+1 (555) 911-HELP</div>
                  <div className="text-xs text-rose-600">Available 24/7</div>
                </div>
                <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                  <div className="text-xs font-semibold text-emerald-700">
                    WhatsApp Support
                  </div>
                  <div className="text-sm text-emerald-700">
                    +1 (555) 123-CHAT
                  </div>
                  <div className="text-xs text-emerald-600">
                    Mon-Fri: 8 AM - 8 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 shadow ring-1 ring-white/10 bg-gradient-to-r from-[#2E3192] to-[#1E6DEB] text-white">
              <h4 className="text-sm font-semibold text-white">Follow Us</h4>
              <p className="mt-1 text-xs text-indigo-100">
                Stay connected with Academic Portal
              </p>
              <div className="mt-3 flex gap-3">
                {[
                  {
                    name: "facebook",
                    url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
                  },
                  {
                    name: "twitter",
                    url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg",
                  },
                  {
                    name: "instagram",
                    url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
                  },
                  {
                    name: "linkedin",
                    url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    aria-label={s.name}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/20 hover:bg-white/30 ring-1 ring-white/20"
                  >
                    <img
                      src={s.url}
                      alt={s.name}
                      className="h-4 w-4 brightness-0 invert"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
