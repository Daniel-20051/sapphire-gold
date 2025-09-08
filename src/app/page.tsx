import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import AcademicLevels from "../components/AcademicLevels";
import Achievements from "../components/Achievements";
import AcademicPrograms from "../components/AcademicPrograms";
import Faculty from "../components/Faculty";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <WhyChoose />
      <AcademicLevels />
      <Achievements />
      <AcademicPrograms />
      <Faculty />
      <Testimonials />
      <CTA />
    </div>
  );
}
