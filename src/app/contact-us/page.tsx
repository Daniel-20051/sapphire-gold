import React from "react";
import ContactHero from "./components/ContactHero";
import ContactCardsSection from "./components/ContactCardsSection";
import ContactFormSection from "./components/ContactFormSection";
import ContactMapSection from "./components/ContactMapSection";

const page = () => {
  return (
    <main>
      <ContactHero />
      <ContactCardsSection />
      <ContactFormSection />
      <ContactMapSection />
    </main>
  );
};

export default page;
