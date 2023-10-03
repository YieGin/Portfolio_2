"use client"
import React from "react";
import "./style.scss";
import caseStudies from "../caseStudies";
import { GrReactjs } from "react-icons/gr";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const CaseStudyMotionDiv: React.FC<{ index: number, study: any }> = ({ index, study }) => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <motion.div
    ref={ref}
    key={index}
    className="flex font-Roboto TabletSm:justify-center SmartphonesSm:mt-0 TabletSm:mt-20 h-full SmartphonesSm:flex-wrap Smartphones:flex-nowrap SmartphonesSm:bg-[#fff] SmartphonesSm:dark:bg-[#2a2a2a] TabletSm:bg-[#F0F0F0] TabletSm:dark:bg-[#181818] SmartphonesSm:px-2 TabletSm:px-0 SmartphonesSm:py-10 Smartphones:py-1"
    initial={{ x: index % 2 === 0 ? -300 : 300 }}
    animate={{ x: inView ? 0 : index % 2 === 0 ? -300 : 300 }}
    transition={{ duration: 1 }}
  >
    <Image
      className="Tablet:w-[500px] SmartphonesSm:object-cover TabletSm:object-cover PC:object-cover Tablet:h-[500px] PC:w-[800px] PC:h-[500px] TabletSm:w-[350px] TabletSm:h-[500px] Smartphones:w-[50%] SmartphonesSm:h-[320px] border-solid TabletSm:border-[10px] SmartphonesSm:mr-2 TabletSm:mr-0 dark:border-[#2a2a2a] border-white"
      alt={`${study.title} Image`}
      src={study.imgSrc}
    />
    <div className="flex flex-col bg-white dark:bg-[#2a2a2a] SmartphonesSm:h-full SmartphonesSm:w-full Smartphones:h-[300px] Smartphones:w-[50%] TabletSm:w-[350px] TabletSm:h-[500px] Tablet:w-[500px] Tablet:h-[500px] PC:w-[550px] PC:h-[500px] TabletSm:px-5 SmartphonesSm:px-0 Smartphones:px-1 Tablet:px-14 TabletSm:py-10">
      <div className="flex items-center gap-x-1 SmartphonesSm:mt-5 TabletSm:mt-0">
        <GrReactjs className="text-[20px] dark:text-white" />
        <p className="TabletSm:text-[15px] Tablet:text-[20px] font-bold text-[#181818] dark:text-[#fff] SmartphonesSm:text-[17px] Smartphones:text-[12px]">
          {study.title}
        </p>
      </div>
      <h1 className="text-[#000] dark:text-[#fff] SmartphonesSm:text-[20px] Smartphones:text-[12px] TabletSm:text-[30px] Tablet:text-[35px] font-bold">
        <span className="text-[#41c6c6]">{study.subtitle}</span>{" "}
      </h1>
      <p className="text-[#838383] dark:text-[#D7D7D7] Smartphones:text-[11px] TabletSm:text-[14px] PC:text-[15px] PC:w-[400px] SmartphonesSm:mt-2 TabletSm:mt-0 pt-[15px]">
        {study.description}
      </p>
      <div className="center SmartphonesSm:mt-5 Smartphones:mt-auto flex gap-x-5">
        <div className="btn-phone-2 SmartphonesSm:w-full Smartphones:w-[100px] TabletSm:w-[150px] Tablet:w-[150px] PC:w-[200px]">
          <Link
            className="SmartphonesSm:p-2 Smartphones:p-1 TabletSm:p-2"
            target="_blank"
            rel="noopener noreferrer"
            href={study.websiteLink}
          >
            <span className="Smartphones:text-[8px] TabletSm:text-[14px] PC:text-[15px] text-[#328f8f] font-bold">
              View website
            </span>
          </Link>
        </div>
        <div className="btn-phone-2 SmartphonesSm:w-full Smartphones:w-[100px] TabletSm:w-[150px] Tablet:w-[150px] PC:w-[200px]">
          <a
            className="SmartphonesSm:p-2 Smartphones:p-1 TabletSm:p-2"
            target="_blank"
            rel="noopener noreferrer"
            href={study.codeLink}
          >
            <span className="Smartphones:text-[8px] TabletSm:text-[14px] PC:text-[15px] text-[#328f8f] font-bold">
              Check code
            </span>
          </a>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

const CaseStudyCard: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <p className="font-bold TabletSm:text-[30px] Smartphones:text-center TabletSm:pl-[150px] SmartphonesSm:h-[50px] flex items-center">
        <span className="text-black dark:text-[#fff] font-Rubik">
          <span id="work" className="text-[#0ed]">
            &gt;
          </span>{" "}
          WORK
        </span>
      </p>
      <div className="flex flex-col Smartphones:gap-y-3">
        {caseStudies.map((study, index) => {
          return <CaseStudyMotionDiv key={index} index={index} study={study} />;
        })}
      </div>
    </div>
  );
};

export default CaseStudyCard;
