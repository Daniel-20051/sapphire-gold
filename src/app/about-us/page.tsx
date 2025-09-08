import React from "react";
import AboutHero from "./components/AboutHero";
import OurStorySection from "./components/OurStorySection";
import MissionVisionSection from "./components/MissionVisionSection";
import CoreValuesSection from "./components/CoreValuesSection";
import OurJourneyTimeline from "./components/OurJourneyTimeline";
import LeadershipTeamSection from "./components/LeadershipTeamSection";
import Achievements from "@/components/Achievements";

const page = () => {
  return (
    <main>
      <AboutHero />
      <OurStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <OurJourneyTimeline />
      <Achievements />
      <LeadershipTeamSection />
    </main>
  );
};

export default page;
