'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TbBrandReactNative } from "react-icons/tb";
import caseStudies from "./caseStudies";
import "./style/Phone.scss";
import Image from "next/image";

const CaseStudyMotion: React.FC<{ study: any }> = ({ study }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  let initialAnimation = {};
  switch (study.subtitle) {
    case "Shopping App":
      initialAnimation = { x: -100, y: 0, opacity: 0 };
      break;
    case "Spotfiy clone":
      initialAnimation = { x: 0, y: 100, opacity: 0 };
      break;
    case "Instagram clone":
      initialAnimation = { x: 100, y: 0, opacity: 0 };
      break;
    default:
      initialAnimation = { x: 0, y: 0, opacity: 0 };
  }

  const animationVariants = {
    hidden: initialAnimation,
    visible: { x: 0, y: 0, opacity: inView ? 1 : 0 },
  };

  return (
    <div
    key={study.id}
    className="overflow-x-hidden overflow-y-hidden SmartphonesSm:pr-5 Smartphones:pr-0"
  >
    <motion.figure
      className="snip1361 mt-10"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 0.1, delay: study.id * 0.1 }}
    >
      <Image src={study.imgSrc} alt="InstagramImg" />
      <figcaption className="bg-white dark:bg-[#202020] py-5 px-3 cursor-pointer absolute Tablet:top-[82%] Tablet:mt-[60px] w-full TabletSm:top-[82%] TabletSm:mt-[65px] Smartphones:top-[82%] Smartphones:mt-[60px] SmartphonesSm:top-[86%] SmartphonesSm:mt-[35px] shadow-black shadow-2xl h-[500px] z-10">
        <div className="flex items-center gap-x-[2px]">
          <TbBrandReactNative className="text-[20px] mb-2 dark:text-white text-black" />
          <h3 className="dark:text-white text-[#000]">{study.title}</h3>
        </div>
        <div className="ml-1">
          <h3 className="dark:text-white text-[#41c6c6]">
            {study.subtitle}
          </h3>
          <p className="dark:text-white text-[#000]">
            {study.description}
          </p>
          <div className="flex gap-x-5 SmartphonesSm:mt-10 TabletSm:mt-5">
            <a target="_blank" href={study.websiteLink}>
              <button className="btn-23">
                <span className="font-Roboto font-bold">
                  VIEW WEBSITE
                </span>
              </button>
            </a>
            <a target="_blank" href={study.codeLink}>
              <button className="btn-23">
                <span className="font-Roboto font-bold ">
                  CHECK CODE
                </span>
              </button>
            </a>
          </div>
        </div>
      </figcaption>
    </motion.figure>
  </div>
  );
};

const ReactNativeProjects: React.FC = () => {
  return (
    <div className="pb-10 flex SmartphonesSm:flex-wrap Tablet:flex-nowrap justify-center PC:gap-x-[150px] Tablet:gap-x-28 gap-y-5 mt-10">
      {caseStudies.map((study) => {
        return <CaseStudyMotion key={study.id} study={study} />;
      })}
    </div>
  );
};


export default ReactNativeProjects;
