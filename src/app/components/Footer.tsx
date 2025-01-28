"use client";
import React from "react";
import { footer } from "../../constants";
import Image from "next/image";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="relative w-full h-[310px] bg-[#2C2F33] text-white">
      {/* Follow Us Section */}
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-[#1E90FF] to-[#8A2BE2]"></div>
      <div className="absolute left-[78px] top-[102px]">
        <h3 className="font-lexend text-[20.4px] font-normal leading-[25px] uppercase mb-[18.14px]">
          Follow Us
        </h3>
        <div className="flex gap-[18.14px]">
          {footer.socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[43.09px] h-[43.09px] flex items-center text-[25px] justify-center border border-white rounded-full hover:bg-gray-700 transition"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Logo Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[101px]">
        <Image
          src={footer.logo.image} // Replace with the actual path
          alt={footer.logo.label}
          width={355}
          height={88}
          className="object-contain"
        />
        <div
          className="absolute left-[902px] top-[111px] w-[14px] h-[14px]"
          style={{
            backgroundImage: 'url(C.png)', // Add the correct file path
          }}
        />
      </div>

      {/* Back to Top Section */}
      <div className="absolute right-[125px] top-[88px] flex flex-col items-center gap-[15px]">
        <div className="w-[95px] h-[74px] flex items-center justify-center text-[40px] border border-[#E5E4E2] rounded-[7px] relative">
          {footer.backToTop.icon}
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-lexend text-[15px] font-normal leading-[25px] text-white"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
