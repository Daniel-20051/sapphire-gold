import React from "react";
import AdmissionsHero from "../../components/AdmissionsHero";
import ApplicationForm from "../../components/ApplicationForm";
import AdmissionProcess from "../../components/AdmissionProcess";

const page = () => {
  return (
    <div className="font-sans">
      <AdmissionsHero />
      <ApplicationForm />
      <AdmissionProcess />
    </div>
  );
};

export default page;
