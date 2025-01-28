"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { gameDetails } from "@/constants";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer, GradientButton, Navbar } from "@/app/components";

const GameDetailPage = () => {
  const { id } = useParams(); // Get the game ID from the URL
  const game = gameDetails.find((game) => game.id === id);

  // If no game found, show 404 message
  if (!game) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-2xl">
        Game Not Found
      </div>
    );
  }

  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-[#2c2f33] text-white min-h-screen">
      <Navbar />
      {/* Background Image with Title */}
        <div className="flex items-center justify-center relative w-full h-[600px] text-center text-white">
          <Image
            src={game.image}
            alt={game.title}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="relative z-20">
            <div className="max-w-3xl z-10 px-4">
              <div className="max-w-3xl z-10 px-4 flex flex-col items-center justify-center text-center">
                <h1 className="w-full font-orbitron font-extrabold text-8xl mb-[56px] leading-[120px] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 ">
                  {game.title}
                </h1>
              </div>
            </div>
            {/* Action Button */}
            <Link href={game.button.action} passHref>
              {/* <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:opacity-90">
              {game.button.label}
            </button> */}
              <GradientButton
                text={game.button.label}
                className="w-[300px] h-[48px] font-semibold"
              />
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 z-10 bg-gradient-to-t from-[#2c2f33] to-[rgba(44, 47, 51, 0)] w-full h-[268px]"></div>
        </div>

      {/* Game Description */}
      <div className="max-w-4xl mx-auto px-6 text-center py-12">
        <p className="text-lg">{game.description}</p>
      </div>

      {/* Video & Screenshots Carousel */}
      <div className="container mx-auto px-6">
        <Slider {...settings} className="w-full">
          {/* Video Thumbnail */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            <Image
              src={game.screenshots[0]}
              alt="Video Thumbnail"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <Link href={#} passHref>
                <div className="w-20 h-20 bg-black bg-opacity-50 flex items-center justify-center rounded-full cursor-pointer hover:bg-opacity-70 transition">
                  <FaPlay className="text-white text-3xl" />
                </div>
              </Link> */}
            </div>
          </div>
          {/* Screenshots */}
          {game.screenshots.map((screenshot, index) => (
            <div key={index} className="w-full h-[400px] relative">
              <Image
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default GameDetailPage;
