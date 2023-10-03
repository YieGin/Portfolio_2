import AboutMe from "./AboutMe";
import Touch from "./Touch";

const About: React.FC = () => {
  return (
    <>
      <p className="font-bold TabletSm:text-[30px] Smartphones:text-center TabletSm:pl-[150px] SmartphonesSm:h-[50px] flex items-center">
        <span className="text-black dark:text-[#fff] font-Rubik">
          <span id="work" className="text-[#0ed]">
            &gt;
          </span>{" "}
          HIRE ME
        </span>
      </p>
    <div
      id="contact"
      className="flex font-Roboto PC:gap-x-10 Tablet:gap-x-5 mt-10 justify-center SmartphonesSm:flex-wrap TabletSm:flex-nowrap">
      <AboutMe />
      <Touch />
    </div>
    </>
  );
};

export default About;
