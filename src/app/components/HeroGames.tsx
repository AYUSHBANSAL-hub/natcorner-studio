"use client";
import React from "react";
import Image from "next/image";
import { gamesSection,featuredGames } from "../../constants"; // Ensure correct import path
import GradientButton from "./GradientButton";
import OutlineButton from "./OutlineButton";

const HeroGames = () => {
  return (
    <div className="relative w-screen h-[600px] md:h-[700px] flex items-center justify-center text-center text-white pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={gamesSection.image}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-50"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl z-10 px-4">
        <div className="max-w-3xl z-10 px-4 flex flex-col items-center justify-center text-center">
          <h1 className="w-full font-orbitron font-extrabold text-[56px] leading-[120px] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 ">
            {gamesSection.heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroGames;
