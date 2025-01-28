"use client";

import React, { useState } from "react";
import Image from "next/image";
import { merchandise } from "@/constants";

const MerchandiseListing = () => {
  const [sortOption, setSortOption] = useState("Featured");

  // Sorting Logic (Basic Sorting Example)
  const sortedMerchandise = [...merchandise].sort((a, b) => {
    if (sortOption === "Price: Low to High") {
      return (
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
      );
    } else if (sortOption === "Price: High to Low") {
      return (
        parseFloat(b.price.replace("$", "")) -
        parseFloat(a.price.replace("$", ""))
      );
    }
    return 0; // Default order
  });

  return (
    <div className="bg-[#2c2f33] text-white min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Sorting Dropdown */}
        <div className="h-8 pl-3 pr-1 py-1 bg-white rounded-md border border-[#dde1e3] justify-center items-center gap-1 inline-flex overflow-hidden">
          <div className="justify-start items-center gap-2 flex">
            <div className="text-[#2c2f33]/50 text-sm font-normal leading-normal">
              Sort by
            </div>
            <div className="text-[#2c2f33] text-sm font-normal leading-normal">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="py-2 bg-white text-black rounded-md cursor-pointer"
              >
                <option value="Featured">Featured</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Merchandise from home */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
          {sortedMerchandise.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden flex flex-col items-center mt-5 h-[430px]" // Fixed height for consistency
            >
              {/* Product Image */}
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="cover"
                  className="w-[248px] h-[314px] rounded-[7px]"
                />
              </div>

              {/* Product Title & Button */}
              <div className="relative text-center flex flex-col justify-between items-center w-full flex-grow">
                {/* Title with Fixed Height */}
                <div className="text-white text-xl font-bold font-Lexend mt-4 min-h-[50px] flex items-center">
                  {item.title}
                </div>

                {/* Purchase Button */}
                <button className="mt-2 px-16 py-4 text-[#E5E4E2] opacity-50 hover:opacity-100 rounded-md border border-gray-500 hover:bg-gray-600 transition -skew-x-6">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 skew-x-6">
                    Purchase
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchandiseListing;
