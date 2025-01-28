"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Dummy Data (Replace with real data)
const gameScreenshots = [
  { id: 1, image: "/path/to/brigand-screenshot-1.png", isVideo: false },
  { id: 2, image: "/path/to/brigand-video-thumbnail.png", isVideo: true }, // Main video
  { id: 3, image: "/path/to/brigand-screenshot-2.png", isVideo: false },
  { id: 4, image: "/path/to/brigand-screenshot-3.png", isVideo: false },
];

// Custom Arrow Components
const CustomPrevArrow = (props: any) => (
  <button {...props} className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-white text-xl z-10">
    <FaChevronLeft />
  </button>
);

const CustomNextArrow = (props: any) => (
  <button {...props} className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-white text-xl z-10">
    <FaChevronRight />
  </button>
);

const GameCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Default to 1st index

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide in focus
    slidesToScroll: 1,
    centerMode: true, // Enables partial visibility of prev & next slides
    centerPadding: "160px", // Adjust for partial visibility
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: (index: number) => setCurrentSlide(index), // Track current slide
    appendDots: (dots: any) => (
      <div className="absolute bottom-[-30px] flex justify-center w-full">
        <ul className="flex gap-2 bg-gray-800 px-4 py-1 rounded-lg">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-3 h-3 bg-gray-500 rounded-full opacity-50 hover:opacity-100 transition"></div>
    ),
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <Slider {...settings}>
        {gameScreenshots.map((item, index) => (
          <div
            key={item.id}
            className={`px-2 transition-transform duration-300 ${
              index === currentSlide ? "scale-100 opacity-100" : "scale-90 opacity-50"
            }`}
          >
            <div className="relative rounded-lg border border-blue-400 overflow-hidden">
              {/* Image or Video */}
              <Image
                src={item.image}
                alt={`Game Screenshot ${item.id}`}
                width={700}
                height={400}
                className="w-full h-auto rounded-lg"
              />

              {/* Play Button for Video */}
              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <FaPlay className="text-white text-4xl cursor-pointer" />
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameCarousel;
