"use client";

import React from "react";
import Image from "next/image";
import { featuredGames } from "@/constants";

const GameListing = () => {
  return (
    <div className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {featuredGames.map((game) => (
            <a
              key={game.id}
              href={game.link}
              className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[350px] lg:h-[380px] rounded-lg overflow-hidden border border-blue-500 group"
            >
              {/* Game Image */}
              <div className="relative w-full h-full">
                <Image
                  src={game.image}
                  alt={game.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 group-hover:opacity-70"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
              </div>
              {/* Game Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-[40px] sm:text-2xl md:text-3xl font-black font-['Orbitron'] text-white text-center leading-tight">
                  {game.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameListing;
