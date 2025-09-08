"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Active Students", value: 2500, suffix: "+" },
  { label: "Expert Faculty", value: 150, suffix: "+" },
  { label: "Academic Programs", value: 25, suffix: "+" },
  { label: "Awards & Recognition", value: 50, suffix: "+" },
];

function useCountUp(target: number, start: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTs = performance.now();
    const tick = () => {
      const elapsed = performance.now() - startTs;
      const progress = Math.min(1, elapsed / durationMs);
      setValue(Math.floor(target * progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, durationMs]);
  return value;
}

function AchievementStat({
  label,
  value,
  suffix,
  start,
}: {
  label: string;
  value: number;
  suffix?: string;
  start: boolean;
}) {
  const current = useCountUp(value, start);
  return (
    <div className="space-y-1">
      <div className="text-3xl font-extrabold tracking-tight">
        {current}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-white/80">{label}</div>
    </div>
  );
}

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#3A3B85] text-white py-12 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-extrabold">Our Achievements</h2>
        <p className="mt-2 text-sm text-white/80">
          Numbers that reflect our commitment to excellence
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <AchievementStat
              key={s.label}
              label={s.label}
              value={s.value}
              suffix={s.suffix}
              start={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
