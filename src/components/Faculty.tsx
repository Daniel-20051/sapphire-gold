import Image from "next/image";

type Faculty = {
  name: string;
  title: string;
  blurb: string;
  image: string;
};

const faculty: Faculty[] = [
  {
    name: "Dr. James Wilson",
    title: "Professor of Computer Science",
    blurb: "PhD from MIT, 15+ years in AI research",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=512&auto=format&fit=crop",
  },
  {
    name: "Dr. Maria Garcia",
    title: "Dean of Medical Sciences",
    blurb: "Harvard Medical School graduate, renowned surgeon",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=512&auto=format&fit=crop",
  },
  {
    name: "Prof. David Chen",
    title: "Business Administration Chair",
    blurb: "Former Fortune 500 executive, MBA from Wharton",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=512&auto=format&fit=crop",
  },
];

export default function Faculty() {
  return (
    <section className="py-16 bg-[linear-gradient(180deg,#1b2250_0%,#1a1f48_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Meet Our Faculty
          </h2>
          <p className="mt-2 text-white/80">
            Learn from distinguished educators and researchers who are leaders
            in their fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faculty.map((f) => (
            <div
              key={f.name}
              className="rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur-sm p-6 text-center"
            >
              <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/40">
                <Image
                  src={f.image}
                  alt={f.name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 font-semibold">{f.name}</div>
              <div className="text-sm text-white/80">{f.title}</div>
              <div className="mt-2 text-xs text-white/70">{f.blurb}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
