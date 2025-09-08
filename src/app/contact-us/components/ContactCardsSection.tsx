import React from "react";

type Card = {
  iconBg: string;
  title: string;
  items: Array<{ icon: React.ReactNode; label: string; sub?: string }>;
};

const Icon = ({ path }: { path: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d={path} />
  </svg>
);

const cards: Card[] = [
  {
    iconBg: "bg-indigo-700",
    title: "Main Office",
    items: [
      {
        icon: (
          <Icon path="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75V21h4.5v-6h4.5v6h4.5V9c0-3.728-3.022-6.75-6.75-6.75Z" />
        ),
        label:
          "Academic Portal Campus\n123 Education Boulevard\nKnowledge District, ED 12345\nUnited States",
      },
      {
        icon: (
          <Icon path="M2.25 6.75A3.75 3.75 0 0 1 6 3h12a3.75 3.75 0 0 1 3.75 3.75v10.5A3.75 3.75 0 0 1 18 21H6a3.75 3.75 0 0 1-3.75-3.75V6.75Zm3 2.25a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H5.25Z" />
        ),
        label: "+1 (555) 123-4567",
        sub: "Main Reception",
      },
      {
        icon: (
          <Icon path="M2.25 4.5a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75V6l-9 6L2.25 6V4.5Z" />
        ),
        label: "+1 (555) 123-4568",
        sub: "Fax Number",
      },
    ],
  },
  {
    iconBg: "bg-emerald-700",
    title: "Admissions Office",
    items: [
      {
        icon: (
          <Icon path="M2.25 6.75A3.75 3.75 0 0 1 6 3h12a3.75 3.75 0 0 1 3.75 3.75v10.5A3.75 3.75 0 0 1 18 21H6a3.75 3.75 0 0 1-3.75-3.75V6.75Z" />
        ),
        label: "+1 (555) 123-4570",
        sub: "Direct Line",
      },
      {
        icon: (
          <Icon path="M2.25 6.75v-.75A2.25 2.25 0 0 1 4.5 3h15a2.25 2.25 0 0 1 2.25 2.25v.75l-9.75 6.375L2.25 6.75Z" />
        ),
        label: "admissions@academicportal.edu",
        sub: "Email",
      },
      {
        icon: (
          <Icon path="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V5.25A2.25 2.25 0 0 0 17.25 3H6.75Z" />
        ),
        label: "Office Hours",
        sub: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed",
      },
    ],
  },
  {
    iconBg: "bg-violet-700",
    title: "Student Services",
    items: [
      {
        icon: (
          <Icon path="M2.25 6.75A3.75 3.75 0 0 1 6 3h12a3.75 3.75 0 0 1 3.75 3.75v10.5A3.75 3.75 0 0 1 18 21H6a3.75 3.75 0 0 1-3.75-3.75V6.75Z" />
        ),
        label: "+1 (555) 123-4571",
        sub: "Student Support",
      },
      {
        icon: (
          <Icon path="M2.25 6.75v-.75A2.25 2.25 0 0 1 4.5 3h15a2.25 2.25 0 0 1 2.25 2.25v.75l-9.75 6.375L2.25 6.75Z" />
        ),
        label: "support@academicportal.edu",
        sub: "Email",
      },
      {
        icon: (
          <Icon path="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.761 9.761 0 0 0 12 2.25Z" />
        ),
        label: "Live Chat",
        sub: "Available 24/7",
      },
    ],
  },
];

const ContactCardsSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border-1 border-slate-200 bg-white p-6 "
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-md ${card.iconBg} text-white`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M3 9.75V21h6v-6h6v6h6V9.75L12 3 3 9.75Z" />
                  </svg>
                </span>
                <div className="text-base font-semibold text-slate-900">
                  {card.title}
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {card.items.map((it, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-slate-500">{it.icon}</span>
                    <div className="text-sm text-slate-700 whitespace-pre-line">
                      {it.label}
                      {it.sub && (
                        <div className="text-xs text-slate-500">{it.sub}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCardsSection;
