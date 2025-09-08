import React from "react";

type Member = {
  name: string;
  title: string;
  bio: string;
  avatar: string;
};

const members: Member[] = [
  {
    name: "Dr. Sarah Johnson",
    title: "Principal",
    bio: "Leading with 20+ years of educational excellence and innovation in curriculum development.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Prof. Michael Chen",
    title: "VP Academic Affairs",
    bio: "Overseeing academic programs and ensuring the highest standards of educational delivery.",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Ms. Emily Rodriguez",
    title: "Dean of Students",
    bio: "Dedicated to student welfare, development, and creating a supportive learning environment.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
  },
];

const LeadershipTeamSection = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Leadership Team
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Meet the dedicated professionals guiding our institution
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border-1 border-slate-200 bg-white p-6 text-center"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white shadow"
              />
              <div className="mt-4 text-[15px] font-semibold text-slate-900">
                {m.name}
              </div>
              <div className="text-xs text-indigo-700">{m.title}</div>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamSection;
