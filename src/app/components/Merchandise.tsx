"use client";

import React from "react";
import Image from "next/image";
import { merchandise } from "@/constants";
import { FiArrowRight } from "react-icons/fi";
import { merc_gradient } from "@/assets";

const Merchandise = () => {
  return (
    <div className="bg-[#2C2F33] py-12 text-white">
      <div className="container pb-12 mx-auto px-6">
        {/* Section Title */}
        <div className="text-center text-white text-[56px] font-semibold font-Lexend">Brand Merchandise</div>

        <div className="flex items-center">
          {/* Merchandise Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
            {merchandise.map((item) => (
              <div
                key={item.id}
                className=" rounded-lg overflow-hidden flex flex-col items-center mt-5"
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                
                    objectFit="cover"
                    className="w-[248px] h-[314px] rounded-[7px]"
                  />
                </div>
                <div className="text-center pb-4">
                  <div className="text-white text-xl font-bold font-Lexend">{item.title}</div>
                  <button className="mt-2 px-16 py-4 text-[#E5E4E2] opacity-50 hover:opacity-100 rounded-md border border-gray-500 hover:bg-gray-600 transition -skew-x-6">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 skew-x-6">
                      Purchase
                    </span>
                  </button>
                </div>
              </div>
            ))}
            <div className="absolute right-0 top-0">
              <Image alt="" src={merc_gradient} />
            </div>
          </div>

          {/* View More Button */}
          <div className="flex flex-col items-center ml-6">
            <div className="w-[95px] h-[74px] border border-white -skew-x-6 rounded-lg flex items-center justify-center hover:bg-gray-800 transition">
              <FiArrowRight className="text-white text-6xl" />
            </div>
            <p className="mt-2 text-sm">View more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
