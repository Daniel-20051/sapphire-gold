import React from "react";

const ContactMapSection = () => {
  const address =
    "Sapphire Gold International School, 15-17 White House Avenue, Off Ilom St, Woji, Port Harcourt";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;
  const directionsUrl =
    "https://www.google.com/maps/dir//Sapphire+Gold+International+School+15-17+White+House+Avenue+Off+Ilom+St+Woji,+Port+Harcourt/@4.8323903,7.0571387,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1069cd0c46495df7:0xbaff192665af9a74!2m2!1d7.0571387!2d4.8323903?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Find Us on the Map
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Located in the heart of the Knowledge District, our campus is easily
            accessible by public transport and offers ample parking facilities
            for visitors.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="overflow-hidden  border border-slate-200 ">
            <iframe
              title="Campus Location"
              src={mapSrc}
              className="block h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <aside className="rounded-xl flex flex-col items-center justify-between border border-slate-200 bg-white p-5 ">
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Location Details
              </div>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M12 2.25a7.25 7.25 0 0 0-7.25 7.25c0 5.5 7.25 12.25 7.25 12.25S19.25 15 19.25 9.5A7.25 7.25 0 0 0 12 2.25Zm0 9.75a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-medium text-slate-900">
                      Full Address
                    </div>
                    <div className="text-slate-600">{address}</div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#2B2C6B] px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 2.25c5.108 0 9.25 4.142 9.25 9.25S17.108 20.75 12 20.75 2.75 16.608 2.75 11.5 6.892 2.25 12 2.25Z" />
              </svg>
              Get Directions
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
