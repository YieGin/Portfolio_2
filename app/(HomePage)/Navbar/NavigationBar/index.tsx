import React from "react";
import "./style.scss";
import { Link } from 'react-scroll';

const NavigationBar: React.FC = () => {
  return (
    <ul className="TabletSm:flex SmartphonesSm:gap-x-5 TabletSm:gap-x-10 Tablet:gap-x-20 SmartphonesSm:flex font-Rubik tracking-[1px]">
      <Link 
        to="work" 
        smooth={true} 
        duration={500}
      >
        <p className="dark:text-[#fff] text TabletSm:text-[16px] SmartphonesSm:text-[10px] cursor-pointer">WORK</p>
      </Link>
      <Link 
        to="contact" 
        smooth={true} 
        duration={500}
      >
        <p className="dark:text-[#fff] text TabletSm:text-[16px] SmartphonesSm:text-[10px] cursor-pointer">CONTACT</p>
      </Link>
    </ul>
  );
};

export default NavigationBar;
