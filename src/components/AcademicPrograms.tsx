function Badge({
  iconBg,
  children,
}: {
  iconBg: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} text-[#2b2c6b] ring-1 ring-black/5`}
    >
      {children}
    </span>
  );
}

type Program = {
  title: string;
  description: string;
  iconBg: string;
  icon: React.ReactNode;
};

const programs: Program[] = [
  {
    title: "Computer Science",
    description:
      "Cutting-edge curriculum covering AI, machine learning, and software development.",
    iconBg: "bg-indigo-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5A2.25 2.25 0 0 1 19.5 5.25v9A2.25 2.25 0 0 1 17.25 16.5H6.75A2.25 2.25 0 0 1 4.5 14.25v-9Z" />
        <path d="M3 18.75h18v1.5H3z" />
      </svg>
    ),
  },
  {
    title: "Medical Sciences",
    description:
      "Comprehensive medical education with state-of-the-art facilities and research opportunities.",
    iconBg: "bg-emerald-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M11.25 3.75a2.25 2.25 0 0 1 1.5 0l6.75 2.7a.75.75 0 0 1 0 1.4l-6.75 2.7a2.25 2.25 0 0 1-1.5 0l-6.75-2.7a.75.75 0 0 1 0-1.4l6.75-2.7Z" />
        <path d="M3 10.5l7.5 3v6.75L3 17.25V10.5Zm18 0v6.75l-7.5 2.25v-6.75l7.5-2.25Z" />
      </svg>
    ),
  },
  {
    title: "Business Administration",
    description:
      "Develop leadership skills and business acumen for the modern marketplace.",
    iconBg: "bg-violet-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M3.75 4.5h16.5v3H3.75z" />
        <path d="M6 9h12v10.5H6z" />
      </svg>
    ),
  },
];

export default function AcademicPrograms() {
  return (
    <section className="py-14 bg-[#F7F9FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2b2c6b]">
            Academic Programs
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
            Explore our diverse range of academic programs designed to prepare
            students for success in their chosen fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition"
            >
              <div className="p-5">
                <Badge iconBg={p.iconBg}>{p.icon}</Badge>
                <h3 className="mt-4 font-semibold text-[#2b2c6b]">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-indigo-700 font-medium text-sm hover:underline">
                  Learn More
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
