import React from "react";
import "../style.css";

const AboutMe: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#202020] TabletSm:w-[50%] Tablet:w-[48%] PC:w-[45%] py-10 SmartphonesSm:px-2 Tablet:px-10 shadow-lg SmartphonesSm:w-[95%]">
      <h1 className="PC:text-[40px] Tablet:text-[30px] dark:text-white">
        About Me
      </h1>
      <h5 className="text-[#00eedec0] text-[20px] my-5">Front-end developer</h5>
      <p className="uppercase dark:text-white SmartphonesSm:w-[100%] text-[#000] PC:w-[90%] Tablet:w-[100%] text-justify SmartphonesSm:leading-6 TabletSm:leading-8 SmartphonesSm:text-[11px] TabletSm:text-[11px] Tablet:text-[13px] PC:text-[15px]">
        I&apos;m an experienced front-end developer with a deep passion for crafting
        intricate designs. My expertise lies in using HTML, CSS/SCSS, Tailwind
        CSS, and bringing my websites to life with JavaScript, React, and
        Next.js for over four years. I&apos;ve recently expanded my skill set with
        React Native for mobile app development, enhancing UI development speed.
        For version control and collaborative development, I&apos;m proficient with
        Git/GitHub and Bitbucket. Additionally, I employ Jest to test my
        applications, ensuring their utmost reliability. Throughout my career,
        I&apos;ve been driven by the challenge of designing. I take pride in
        leveraging my creativity to devise simple yet elegant solutions that
        elevate the user experience. I&apos;ve successfully collaborated with two
        companies, one in Poland and another in Pakistan, making significant
        contributions to both. Beyond professional pursuits, I&apos;m highly
        competitive and motivated in all aspects of life. For a more in-depth
        look at my projects and accomplishments, I invite you to explore my
        portfolio.
      </p>
    </div>
  );
};

export default AboutMe;
