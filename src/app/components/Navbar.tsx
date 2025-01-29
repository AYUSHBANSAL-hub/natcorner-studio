"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../constants";
import { natcorner } from "@/assets";
import GradientButton from "./GradientButton";

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-gradient-to-r from-[rgba(44,47,51,0.75)] to-[rgba(26,31,54,0.75)] text-white px-6 py-6 z-20">
      <div className=" relative h-8 mx-auto w-4/5 flex items-center justify-between  ">
        {/* Logo */}
        <div className="flex items-center justify-end h-full flex-grow-[1] cursor-pointer]">
        <Link href={"/"}  legacyBehavior>
          <Image
            src={natcorner} // Replace with the actual logo path
            alt="Natcorner Studio Logo"
            className="h-full w-48 object-contain" // Ensures the image scales within its container
            priority
          />
           </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between flex-grow-[10]">
        <ul className="flex justify-start space-x-8 items-center flex-wrap" >
          {navLinks.map((nav) =>
            !nav.isButton && (
              <li key={nav.id} className="w-42 font-lexend font-normal text-[20px] leading-[25px] text-[#E5E4E2] opacity-85">
                <Link href={nav.link} legacyBehavior>
                  <a className="hover:text-gray-100 transition cursor-pointer">{nav.title}</a>
                </Link>
              </li>
            )
          )}
        </ul>
        <ul >
          {navLinks.map((nav) =>
            nav.isButton && (
              <li key={nav.id}>
                <Link href={nav.link} legacyBehavior>
                  <a>
                    <GradientButton text={nav.title} className="mr-4" />
                  </a>
                </Link>
              </li>
            )
          )}
        </ul>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-[#1E90FF] to-[#8A2BE2]"></div>
    </nav>
  );
};

export default Navbar;
