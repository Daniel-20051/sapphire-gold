"use client";

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function AdmissionProcess() {
  const steps = [
    {
      number: "1",
      title: "Submit Application",
      description:
        "Complete our online application form with all required documents and personal information.",
      duration: "15 minutes",
      isCompleted: false,
    },
    {
      number: "2",
      title: "Document Review",
      description:
        "Our admissions team carefully reviews your academic records and supporting documents.",
      duration: "3-5 days",
      isCompleted: false,
    },
    {
      number: "3",
      title: "Interview & Assessment",
      description:
        "Participate in a personal interview and complete any required assessments.",
      duration: "1-2 hours",
      isCompleted: false,
    },
    {
      number: "4",
      title: "Decision & Enrollment",
      description:
        "Receive your admission decision and complete the enrollment process.",
      duration: "1-2 weeks",
      isCompleted: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Admission Process
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our streamlined admission process designed to make your
            application experience smooth and efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 relative"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    step.isCompleted ? "bg-green-600" : "bg-indigo-600"
                  }`}
                >
                  {step.isCompleted ? (
                    <CheckIcon />
                  ) : (
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <ClockIcon />
                  <span>{step.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
