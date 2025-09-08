"use client";

function StudentsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128a9.586 9.586 0 0 0 6.75 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Z" />
    </svg>
  );
}

function TeachersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 1 7.74-3.342M6.76 6.76a50.57 50.57 0 0 1 7.74 3.342m0 0a50.57 50.57 0 0 1 7.74 3.342m-7.74 0a50.57 50.57 0 0 0-7.74-3.342m0 0a50.57 50.57 0 0 0-7.74 3.342m0 0a50.57 50.57 0 0 1 7.74-3.342m0 0a50.57 50.57 0 0 1 7.74 3.342" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function AcademicExcellenceHero() {
  const stats = [
    {
      icon: <StudentsIcon />,
      text: "500+ Students",
    },
    {
      icon: <TeachersIcon />,
      text: "50+ Teachers",
    },
    {
      icon: <AwardIcon />,
      text: "Excellence Awards",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Academic Excellence
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed">
            Nurturing young minds through comprehensive education programs
            designed for every stage of development
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-white">{stat.icon}</div>
                <span className="text-white font-medium text-lg">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
