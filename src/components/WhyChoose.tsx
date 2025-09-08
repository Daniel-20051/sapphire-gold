import Image from "next/image";

function Icon({ bg, className }: { bg: string; className?: string }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm ring-1 ring-white/20 ${bg} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M11.25 3.3a1.5 1.5 0 0 1 1.5 0l6.5 3.61a1.5 1.5 0 0 1 0 2.62l-6.5 3.61a1.5 1.5 0 0 1-1.5 0l-6.5-3.6a1.5 1.5 0 0 1 0-2.62l6.5-3.62Z" />
      </svg>
    </span>
  );
}

const items = [
  {
    title: "Research Excellence",
    desc: "State-of-the-art laboratories and cutting-edge research facilities providing students with hands-on experience in innovative learning environments.",
    bg: "bg-indigo-600",
  },
  {
    title: "Global Network",
    desc: "International partnerships and exchange programs connecting students worldwide, fostering global perspectives and cultural understanding.",
    bg: "bg-emerald-600",
  },
  {
    title: "Industry Recognition",
    desc: "Accredited programs with strong industry partnerships ensuring excellent career placement rates and professional development opportunities.",
    bg: "bg-purple-600",
  },
  {
    title: "Innovation Hub",
    desc: "Entrepreneurship center fostering creativity through startup incubation programs and collaborative innovation spaces.",
    bg: "bg-orange-600",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative  py-14 sm:py-16 bg-[#EFF6FF]">
      <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-15">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2b2c6b]">
            Why Choose Sapphire <span className="text-[#D2AE6D]">Gold</span>{" "}
            International School
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
            Discover what makes our institution stand out with world-class
            education and a nurturing campus community.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left features */}
          <ul className="space-y-10  flex-1">
            {items.map((it) => (
              <li key={it.title} className="flex items-start gap-2   ">
                <Icon className="" bg={it.bg} />
                <div className="flex-1">
                  <h3 className="text-[#2b2c6b] font-bold flex-1 text-base md:text-lg">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {it.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Right spotlight card */}
          <div className="relative  isolate w-[35vw]">
            <div className="pointer-events-none absolute -inset-1 z-0 hidden sm:block">
              <div className="h-full w-full rounded-3xl bg-[#CCC8E8] rotate-5 " />
            </div>
            <div className=" flex flex-col items-center h-[65vh] justify-center relative z-10 rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden">
              <div className="flex-1 w-full p-6 sm:p-8 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
                  alt="Campus life"
                  width={500}
                  height={200}
                  className="rounded-lg block mx-auto h-[230px] object-cover"
                />
              </div>
              <div className="px-5  h-[40%] text-center py-2">
                <h4 className="text-[#2b2c6b] text-2xl font-bold">
                  Excellence in Action
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  Experience our vibrant campus community where innovation meets{" "}
                  <br />
                  tradition in creating tomorrow's leaders.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#2b2c6b] text-white px-4 py-2 text-sm font-semibold hover:bg-[#232a6b]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M8.25 6.75v10.5L18 12 8.25 6.75Z" />
                  </svg>
                  Watch Campus Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
