import Image from "next/image";

type Testimonial = {
  name: string;
  program: string;
  year: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    program: "Computer Science",
    year: "Class of 2023",
    quote:
      "The faculty here are incredible. They really care about student success and provide amazing mentorship opportunities.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    program: "Business Administration",
    year: "Class of 2024",
    quote:
      "The campus life is vibrant and the networking opportunities are endless. I've made lifelong connections here.",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    program: "Medical Sciences",
    year: "Class of 2022",
    quote:
      "The research opportunities and modern facilities prepared me perfectly for my career in medicine.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M11.48 3.499a.75.75 0 0 1 1.04 0l2.43 2.43a.75.75 0 0 0 .424.214l3.41.494a.75.75 0 0 1 .416 1.279l-2.468 2.406a.75.75 0 0 0-.216.664l.582 3.392a.75.75 0 0 1-1.088.791l-3.046-1.602a.75.75 0 0 0-.698 0l-3.046 1.602a.75.75 0 0 1-1.088-.79l.582-3.393a.75.75 0 0 0-.216-.664L5.2 7.916a.75.75 0 0 1 .416-1.279l3.41-.494a.75.75 0 0 0 .424-.214l2.03-2.43Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-14 bg-[#d2ae6d] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            What Our Students Say
          </h2>
          <p className="mt-2 text-white/80">
            Hear from our community about their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white text-slate-800 shadow-sm ring-1 ring-black/5 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2b2c6b]">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t.program}, {t.year}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-700">“{t.quote}”</p>
              <div className="mt-3">
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
