import React from "react";
import AcademicExcellenceHero from "./components/AcademicExcellenceHero";
import AcademicPrograms from "./components/AcademicPrograms";
import TeachingApproach from "./components/TeachingApproach";
import WorldClassFacilities from "./components/WorldClassFacilities";

const page = () => {
  return (
    <div className="font-sans">
      <AcademicExcellenceHero />
      <AcademicPrograms />
      <TeachingApproach />
      <WorldClassFacilities />
    </div>
  );
};

export default page;
