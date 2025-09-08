"use client";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChildIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" />
    </svg>
  );
}

function StudentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128a9.586 9.586 0 0 0 6.75 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Z" />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.129 56.129 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.711 47.878 47.878 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.877 47.877 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 0 1 .551-1.608 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.668 2.25 2.25 0 0 0 2.12 0Z" />
    </svg>
  );
}

export default function AcademicPrograms() {
  const programs = [
    {
      name: "Nursery",
      ageRange: "Ages 3-5",
      icon: <ChildIcon />,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      checkColor: "text-pink-600",
      features: [
        "Play-based Learning",
        "Social Development",
        "Creative Arts & Crafts",
        "Motor Skills Development",
      ],
    },
    {
      name: "Primary",
      ageRange: "Ages 6-11",
      icon: <StudentIcon />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      checkColor: "text-blue-600",
      features: [
        "Core Subjects Mastery",
        "STEM Foundation",
        "Language Development",
        "Critical Thinking Skills",
      ],
    },
    {
      name: "Junior Secondary",
      ageRange: "Ages 12-15",
      icon: <GraduationCapIcon />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      checkColor: "text-green-600",
      features: [
        "Advanced Curriculum",
        "Specialized Subjects",
        "Career Guidance",
        "Leadership Development",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Academic Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide quality education across multiple levels, ensuring each
            student receives personalized attention and comprehensive learning
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 relative overflow-hidden"
            >
              {/* Background color accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${program.iconBg} rounded-full -translate-y-16 translate-x-16 opacity-20`}
              ></div>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${program.iconBg} rounded-full flex items-center justify-center mb-6 ${program.iconColor}`}
                >
                  {program.icon}
                </div>

                {/* Program name and age */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-6">{program.ageRange}</p>

                {/* Features list */}
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckIcon className={`h-5 w-5 ${program.checkColor}`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
