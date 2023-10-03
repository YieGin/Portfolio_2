import React from "react";
import HeroImage from "./HeroImage";
import CaseStudyCard from "./ReactProjects/CaseStudyCard";
import ReactNativeProjects from "./ReactNativeProjects";
import About from "./About";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#F0F0F0] dark:bg-[#181818] SmartphonesSm:pb-0 TabletSm:pb-32">
      <HeroImage />
      <CaseStudyCard />
      <ReactNativeProjects />
      <About />
    </div>
  );
};

export default LandingPage;
