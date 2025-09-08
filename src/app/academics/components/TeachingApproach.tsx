"use client";

function LightbulbIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171 6.727 6.727 0 0 1-4.406-6.169c0-1.61.834-3.031 2.084-3.778.574-.312.998-.817.98-1.385a6.214 6.214 0 0 1 1.436-4.505 6.25 6.25 0 0 1 6.5-1.28 6.25 6.25 0 0 1 4.5 5.615 6.214 6.214 0 0 1 1.436 4.505c-.018.568.406 1.073.98 1.385 1.25.747 2.084 2.168 2.084 3.778a6.727 6.727 0 0 1-4.406 6.169c-.312.062-.618.118-.937.171v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
    </svg>
  );
}

function UsersIcon() {
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

function ChartBarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

export default function TeachingApproach() {
  const approaches = [
    {
      title: "Interactive Learning",
      description:
        "Hands-on activities and engaging lessons that make learning fun and memorable",
      icon: <LightbulbIcon />,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      title: "Collaborative Environment",
      description:
        "Group projects and peer learning to develop teamwork and communication skills",
      icon: <UsersIcon />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Progress Tracking",
      description:
        "Regular assessments and feedback to monitor student progress and achievements",
      icon: <ChartBarIcon />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Critical Thinking",
      description:
        "Problem-solving activities that develop analytical and reasoning skills",
      icon: <BrainIcon />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Teaching Approach
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in personalized learning that adapts to each student's
            unique needs and learning style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 text-center"
            >
              <div
                className={`w-16 h-16 ${approach.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 ${approach.iconColor}`}
              >
                {approach.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {approach.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
