
'use client'
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import { LogoWhite, LogoBlack } from "../../assets";
import Theme from "./Theme";
import { useThemeMenu } from "./Theme/ThemeMenuProvider";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { theme } = useThemeMenu();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 150;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarStyle = {
    transform: visible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <>
      <div
        style={navbarStyle}
        className="sticky top-0 z-50 w-full dark:bg-[#000] bg-white SmartphonesSm:h-[40px] TabletSm:h-[70px] flex items-center justify-between SmartphonesSm:px-2 TabletSm:px-10 font-Roboto font-bold text-[#181818]"
      >
        <NavigationBar />
        <Link className="fixed top-0 left-1/2 -translate-x-1/2 z-10" href={"/"}>
          {theme === "dark" && (
            <Image
              className="TabletSm:h-[70px] h-10"
              alt="Logo"
              src={LogoWhite}
            />
          )}
          {theme === "light" && (
            <Image
              className="h-max w-max"
              alt="Logo"
              src={LogoBlack}
            />
          )}
        </Link>
        <Theme />
      </div>
    </>
  );
};

export default Navbar;
