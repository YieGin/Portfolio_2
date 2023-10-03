import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#131313] h-[150px] font-Rubik flex items-center justify-center flex-col">
      <ul className="flex TabletSm:gap-x-20 SmartphonesSm:gap-x-2 text-[20px] text-white">
        <a target="_blank" href="https://www.instagram.com/belamri_yie/">
          <p className="text text-[16px] cursor-pointer">INSTAGRAM</p>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/islam-belamri/">
          <p className="cursor-pointer text text-[16px]">LINKEDIN</p>
        </a>
        <a target="_blank" href="https://github.com/YieGin">
          <p className="text text-[16px] cursor-pointer">GITHUB</p>
        </a>
        <a target="_blank" href="https://codepen.io/yiegin">
          <p className="text text-[16px] cursor-pointer">CODEPEN</p>
        </a>
      </ul>
      <p className="mt-10 text-white font-medium">
        © Copyright 2020 – Yie. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
