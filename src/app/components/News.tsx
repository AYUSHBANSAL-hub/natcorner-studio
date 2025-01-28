"use client";

import React, { useState } from "react";
import Image from "next/image";
import { newsCategories, latestNews } from "@/constants";

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All News");

  // Filter news articles based on the selected category
  const filteredNews =
    activeCategory === "All News"
      ? latestNews
      : latestNews.filter((news) => news.category === activeCategory);

  return (
    <div className="bg-[#2C2F33] py-12 text-white">
      <div className="container mx-[80px] px-6">
        {/* Section Title */}
        <h2 className="text-center text-[#e5e4e2] text-[56px] font-semibold font-Lexend mb-4">
          LATEST NEWS & ARTICLES
        </h2>
        
        {/* Category Tabs */}
        <div className="flex h-[78px] justify-center space-x-6 mb-12 -skew-x-6 bg-[#1A1F36] rounded-lg border border-blue-500 shadow-lg">
          {newsCategories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-4 font-light text-2xl ${
                activeCategory === category
                  ? "text-white font-medium"
                  : "text-[#e5e4e2] hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="min-h-[500px]">
          {/* News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <div
                key={news.id}
                className="relative bg-gray-800 min-h-[470px] rounded-lg overflow-hidden border border-blue-500 shadow-lg"
              >
                {/* News Image */}
                <div className="w-full self-stretch h-[272px] relative">
                  <Image
                    src={news.image}
                    alt={news.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                {/* News Content */}
                <div className="p-4">
                  <p className="text-sm text-gray-400">{news.date}</p>
                  <h3 className="text-lg font-bold mt-2 mb-4">{news.title}</h3>

                  {/* Read More Button */}
                  <a
                    href={news.link}
                    className="absolute bottom-[32px] mt-4 px-6 py-2 border border-gray-500 rounded-md text-white hover:bg-gray-700 transition -skew-x-6"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Read More Button */}
        <div className="flex justify-center mt-8 ">
          <button className="px-7 py-3 text-center bg-gradient-to-r from-[#2C2F33] to-[#1A1F36] text-white border border-[#E5E4E2] -skew-x-6 text-xl font-normal rounded-lg hover:font-medium">
            <div className="skew-x-6">Read More</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
