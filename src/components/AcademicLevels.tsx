import Image from "next/image";

type Level = {
  title: string;
  age: string;
  image: string;
  points: { label: string; items: string[] }[];
};

const levels: Level[] = [
  {
    title: "Nursery School",
    age: "Ages 3–5 years",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
    points: [
      {
        label: "Play-Based Learning",
        items: ["Interactive activities and creative play"],
      },
      {
        label: "Early Literacy",
        items: ["Reading readiness and phonics foundation"],
      },
      {
        label: "Social Skills",
        items: ["Communication and teamwork development"],
      },
    ],
  },
  {
    title: "Primary School",
    age: "Ages 6–11 years (Grades 1–6)",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    points: [
      {
        label: "Core Subjects",
        items: ["English, Math, Science, Social Studies"],
      },
      {
        label: "STEM Education",
        items: ["Science, Technology, Engineering & Math focus"],
      },
      {
        label: "Language Arts",
        items: ["Reading comprehension and writing skills"],
      },
    ],
  },
  {
    title: "Junior Secondary",
    age: "Ages 12–14 years (Grades 7–9)",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    points: [
      {
        label: "Advanced Academics",
        items: ["Algebra, Biology, Chemistry, Physics"],
      },
      {
        label: "Critical Thinking",
        items: ["Problem‑solving and analytical skills"],
      },
      {
        label: "Leadership Development",
        items: ["Student council and project management"],
      },
    ],
  },
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-[13px] text-slate-600">
      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
      <span>{text}</span>
    </li>
  );
}

export default function AcademicLevels() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2b2c6b]">
            Our Academic Levels
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
            From early childhood to secondary education, we provide
            comprehensive learning experiences at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((lvl) => (
            <div
              key={lvl.title}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-indigo-100" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-emerald-100" />
              <div className="p-4">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={lvl.image}
                    alt={lvl.title}
                    width={640}
                    height={360}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-2 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-black/5">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    {lvl.title.split(" ")[0]}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-[#2b2c6b] font-bold">{lvl.title}</h3>
                  <div className="text-[12px] text-slate-500 mt-1">
                    {lvl.age}
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  {lvl.points.map((p) => (
                    <div key={p.label}>
                      <div className="text-[13px] font-semibold text-slate-800 flex items-center gap-2">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
                        {p.label}
                      </div>
                      <ul className="mt-1 space-y-1">
                        {p.items.map((t) => (
                          <CheckItem key={t} text={t} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex">
                  <button className="ml-auto inline-flex items-center gap-2 rounded-md bg-[#2b2c6b] text-white px-4 py-2 text-sm font-semibold shadow hover:bg-[#232a6b] ring-1 ring-black/5">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M13.5 4.5 21 12l-7.5 7.5v-5.25H3v-4.5h10.5V4.5Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
