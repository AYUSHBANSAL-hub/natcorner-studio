"use client";

import React from "react";
import Image from "next/image";
import { featuredGames } from "@/constants";
import Link from "next/link";

const GameListing = () => {
  return (
    <div className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {featuredGames.map((game) => (
            <div
            key={game.id}
            className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[350px] lg:h-[380px] rounded-lg overflow-hidden border border-blue-500 group"
          >
            {/* Game Image */}
            <div className="relative w-full h-full">
              <Image
                src={game.image}
                alt={game.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 group-hover:opacity-50"
              />
            </div>

            {/* Initial Name Display */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="text-3xl font-black font-['Orbitron'] text-white text-center">
                {game.title.split(" ").map((word, index) => (
                  <span key={index} className="block">
                    {word}
                  </span>
                ))}
              </h3>
            </div>

            {/* Hover Overlay Content (Hidden Initially) */}
            <div className="p-8 absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl sm:text-3xl font-black font-['Orbitron'] text-white text-center mb-4">
                {game.title}
              </h3>
              <Link
                href={game.link}
                className="text-[#e5e4e2] text-center text-xl font-normal mb-2 hover:text-blue-400 transition"
              >
                Official Site
              </Link>
              <div className="border border-white w-full"></div>
              <span className="text-center text-[#e5e4e2] text-xl font-normal">Download Now</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameListing;
