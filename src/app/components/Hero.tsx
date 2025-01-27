"use client";
import React from "react";
import Image from "next/image";
import { heroSection } from "../../constants"; // Ensure correct import path
import GradientButton from "./GradientButton";
import OutlineButton from "./OutlineButton";

const Hero = () => {
  return (
    <div className="relative w-screen h-[600px] md:h-[700px] flex items-center justify-center text-center text-white pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSection.image}
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
          <h1 className="w-full font-orbitron font-extrabold text-[96px] leading-[120px] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 shadow-custom-text">
            {heroSection.title}
          </h1>

          <p className="mt-4 text-lg md:text-xl opacity-90">
            {heroSection.subtitle}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-8">
          {heroSection.buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className={`${index % 2 == 0 ? "font-semibold" : "font-normal"}`}
            >
              {index % 2 == 0 ? (
                <GradientButton
                  className="font-semibold uppercase"
                  text={button.label}
                />
              ) : (
                <OutlineButton text={button.label} />
              )}
            </a>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 2 ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
