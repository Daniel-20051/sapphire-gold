"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function GraduationCapIcon({ color = "#ffffff" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      className="h-6 w-6"
      aria-hidden
    >
      <path d="M12 3.75a1.5 1.5 0 0 0-.6.13L2.4 7.48a.75.75 0 0 0 0 1.36l9 3.75c.19.08.41.08.6 0l5.1-2.12v3.3c0 .62-.36 1.18-.93 1.43L12 17.9l-4.57-1.7a1.5 1.5 0 0 1-.93-1.43v-1.51l-1.5-.62v2.13c0 1.29.8 2.45 2.02 2.91l5.37 2c.36.13.75.13 1.1 0l5.37-2A3.12 3.12 0 0 0 21 12.95V9.61l1.2-.5a.75.75 0 0 0 0-1.36L12.6 3.88a1.5 1.5 0 0 0-.6-.13Z" />
    </svg>
  );
}

function PhoneIcon({ color = "#ffffff" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      stroke="none"
      strokeWidth="2.2"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.01a1.5 1.5 0 0 0-1.095-1.447l-3.02-.86a1.5 1.5 0 0 0-1.64.544l-.65.867a1.5 1.5 0 0 1-1.9.47 12.04 12.04 0 0 1-5.51-5.51 1.5 1.5 0 0 1 .47-1.9l.867-.65a1.5 1.5 0 0 0 .544-1.64l-.86-3.02A1.5 1.5 0 0 0 5.51 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MailIcon({ color = "#ffffff" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      stroke="#3A3B85"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 7.5v9A2.25 2.25 0 0 1 19.5 18.75h-15A2.25 2.25 0 0 1 2.25 16.5v-9A2.25 2.25 0 0 1 4.5 5.25h15A2.25 2.25 0 0 1 21.75 7.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ClockIcon({ color = "#ffffff" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  );
}

function FacebookIcon({ color = "#ffffff" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.62.76-1.62 1.54v1.86h2.77l-.44 2.9h-2.33V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function TwitterIcon({ color = "#ffffff" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99 4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.46-4.3 4.1 4.1 0 0 0 1.27 5.48c-.63-.02-1.22-.19-1.74-.47v.05a4.1 4.1 0 0 0 3.29 4.02c-.3.08-.62.12-.94.12-.23 0-.46-.02-.68-.06a4.11 4.11 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 19.54 11.63 11.63 0 0 0 8.29 21c7.54 0 11.67-6.25 11.67-11.66 0-.18-.01-.36-.02-.54A8.33 8.33 0 0 0 22 5.92Z" />
    </svg>
  );
}

function InstagramIcon({ color = "#ffffff" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="17.35" cy="6.65" r="1.1" fill={color} stroke="none" />
    </svg>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admisssions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close drawer when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Detect scroll to toggle transparent + blur styles
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 border-b border-indigo-100/50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg bg-transparent" : "bg-white"
      }`}
    >
      {/* Top info bar */}
      <div
        className={`w-full  transition-colors duration-300 ${
          scrolled ? "bg-transparent text-black" : "bg-[#131330] text-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs sm:text-sm py-2">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-3 opacity-90">
                <PhoneIcon color={scrolled ? "#000000" : "#ffffff"} />
                <span>+(234) 8023129615</span>
              </span>
              <span className="hidden md:inline-flex items-center gap-3 opacity-90">
                <MailIcon color={scrolled ? "#000000" : "#ffffff"} />
                <span>info@academicportal.edu</span>
              </span>
            </div>
            <div className="flex items-center gap-4 opacity-90">
              <span className="hidden sm:inline-flex items-center gap-3">
                <ClockIcon color={scrolled ? "#000000" : "#ffffff"} />
                <span>Mon - Fri: 8:00 AM - 4:00 PM</span>
              </span>
              <div
                className="hidden sm:flex items-center gap-4"
                aria-label="social links"
              >
                <FacebookIcon color={scrolled ? "#000000" : "#ffffff"} />
                <TwitterIcon color={scrolled ? "#000000" : "#ffffff"} />
                <InstagramIcon color={scrolled ? "#000000" : "#ffffff"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-[#2b2c6b] flex items-center justify-center">
              <GraduationCapIcon color=" #ffffff" />
            </div>
            <div>
              <div className="text-xl font-semibold text-indigo-900">
                Sapphire Gold International School
              </div>
              <div className="text-xs text-slate-500 -mt-0.5">
                Exploring the Gold Mine in Every Child
              </div>
            </div>
            {/* Hamburger button (mobile) */}
            <button
              type="button"
              aria-label="Open menu"
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-[#3A3B85] focus:outline-none"
              onClick={() => setMobileOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>

          <nav className="w-full sm:w-auto hidden sm:block">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-700">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`transition-colors hover:text-[#d2ae6d] ${
                        isActive
                          ? "text-[#131330] font-semibold underline underline-offset-2 decoration-1 decoration-[#3A3B85]"
                          : "text-slate-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 sm:hidden ${
          mobileOpen ? "" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-72 max-w-[85%] bg-white shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#2b2c6b] flex items-center justify-center">
                <GraduationCapIcon color="#2b2c6b" />
              </div>
              <span className="font-semibold text-[#2b2c6b]">
                Academic Portal
              </span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          </div>
          <nav className="px-2 py-3">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-indigo-50 text-[#3A3B85] font-semibold underline decoration-2 underline-offset-4 decoration-[#3A3B85]"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
