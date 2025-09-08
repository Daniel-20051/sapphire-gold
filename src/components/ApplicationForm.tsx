"use client";

import { useState } from "react";

function PaperPlaneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
  );
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    startTerm: "",
    educationLevel: "",
    personalStatement: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Start Your Application
          </h2>
          <p className="mt-2 text-gray-600">
            Take the first step toward your academic journey with us
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="program"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Program of Interest *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a program</option>
                  <option value="nursery">Nursery School</option>
                  <option value="primary">Primary School</option>
                  <option value="junior-secondary">Junior Secondary</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="startTerm"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Intended Start Term *
                </label>
                <select
                  id="startTerm"
                  name="startTerm"
                  value={formData.startTerm}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select term</option>
                  <option value="september-2024">September 2024</option>
                  <option value="january-2025">January 2025</option>
                  <option value="september-2025">September 2025</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="educationLevel"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Current Class Level *
              </label>
              <select
                id="educationLevel"
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select current class</option>
                <option value="creche">Creche</option>
                <option value="nursery-1">Nursery 1</option>
                <option value="nursery-2">Nursery 2</option>
                <option value="nursery-3">Nursery 3</option>
                <option value="primary-1">Primary 1</option>
                <option value="primary-2">Primary 2</option>
                <option value="primary-3">Primary 3</option>
                <option value="primary-4">Primary 4</option>
                <option value="primary-5">Primary 5</option>
                <option value="primary-6">Primary 6</option>
                <option value="js1">Junior Secondary 1</option>
                <option value="js2">Junior Secondary 2</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="personalStatement"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Personal Statement *
              </label>
              <textarea
                id="personalStatement"
                name="personalStatement"
                value={formData.personalStatement}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us about yourself, your goals, and why you want to join our academic community..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                I agree to the Terms and Conditions and Privacy Policy. I
                understand that submitting this form does not guarantee
                admission.
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex w-full cursor-pointer justify-center items-center gap-2 bg-indigo-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
              >
                <PaperPlaneIcon />
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
