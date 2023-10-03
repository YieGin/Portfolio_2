'use client'
import React from "react";
import Image from "next/image"
import { HeroImagee } from "../../../assets";
import "./style.css";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const HeroImage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center SmartphonesSm:h-[95vh] Smartphones:h-[100vh]">
      <Image
        className="w-full h-full object-cover absolute top-0 right-0 left-0"
        alt="Hero image"
        src={HeroImagee}
      />
      <div className="flex">
        <div className="flex justify-center items-center w-[100%] z-10 flex-col">
          <div className="text-white">
            <h1 className="TabletSm:text-[40px] Tablet:text-[50px] tracking-widest font-Pacifico">
              I&apos;m <span className="text-[#0ed]">Belamri Yie</span>,
            </h1>
          </div>
          <p className="text-white font-Pacifico SmartphonesSm:text-[20px] Smartphones:text-[30px]">
            a <span className="decoration-[#0ed] underline">front-end </span>
            web developer
          </p>
        </div>
        <div className="flex flex-col items-center absolute SmartphonesSm:right-1 Smartphones:right-1 top-[25%]">
          <div className="flex flex-col gap-y-5 z-10">
            <a target="_blank" href="https://www.instagram.com/belamri_yie/">
              <AiOutlineInstagram className="Smartphones:text-[25px] SmartphonesSm:text-[20px] text-[#fff] hover:text-[#0ec] cursor-pointer transition-all duration-100" />
            </a>
            <a target="_blank" href="https://www.facebook.com/islam.bba.182/">
              <AiFillFacebook className="Smartphones:text-[25px] SmartphonesSm:text-[20px] text-[#fff] hover:text-[#0ec] cursor-pointer transition-all duration-100" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/islam-belamri/"
            >
              <AiFillLinkedin className="Smartphones:text-[25px] SmartphonesSm:text-[20px] text-[#fff] hover:text-[#0ec] cursor-pointer transition-all duration-100" />
            </a>
            <a target="_blank" href="https://github.com/YieGin">
              <AiFillGithub className="Smartphones:text-[25px] SmartphonesSm:text-[20px] text-[#fff] hover:text-[#0ec] cursor-pointer transition-all duration-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
