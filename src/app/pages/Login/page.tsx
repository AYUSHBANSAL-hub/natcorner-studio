"use client";

import React from "react";
import Image from "next/image";
import { FaGoogle, FaApple, FaFacebook, FaEye } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { loginImageCarousel } from "@/constants"; // Ensure this is defined correctly

const LoginPage = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="min-h-screen w-75 flex items-center justify-center bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Login in to your account</h1>
          <form className="space-y-6">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <div className="relative bg-gradient-to-r from-[rgba(44,47,51,0.75)] to-[rgba(26,31,54,0.75)] border border-white text-white font-normal uppercase font-lexend rounded-lg transform -skew-x-6">
                <input
                  type="text"
                  placeholder="New User_95"
                  className="w-full bg-transparent text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative bg-gradient-to-r from-[rgba(44,47,51,0.75)] to-[rgba(26,31,54,0.75)] border border-white text-white font-normal uppercase font-lexend rounded-lg transform -skew-x-6">
                <input
                  type="password"
                  placeholder="*********"
                  className="w-full bg-transparent text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaEye className="absolute top-3 right-4 text-gray-400 cursor-pointer" />
              </div>
              <a
                href="#"
                className="text-sm text-blue-400 hover:underline mt-2 block"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button className="w-full bg-gradient-to-r from-buttongradientpurple to-buttongradientblue py-6 rounded-lg text-lg font-bold uppercase tracking-wide hover:opacity-90 -skew-x-6">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 skew-x-6">Login</span>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-3 text-gray-400">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center bg-gray-700 py-3 rounded-lg hover:bg-gray-600">
              <FaGoogle className="mr-2 text-red-500" />
              Login with Google
            </button>
            <button className="w-full flex items-center justify-center bg-gray-700 py-3 rounded-lg hover:bg-gray-600">
              <FaApple className="mr-2 text-gray-400" />
              Login with Apple
            </button>
            <button className="w-full flex items-center justify-center bg-gray-700 py-3 rounded-lg hover:bg-gray-600">
              <FaFacebook className="mr-2 text-blue-600" />
              Login with Facebook
            </button>
          </div>
        </div>

        {/* Right Section - Image Carousel */}
        <div className="flex-1 hidden md:flex relative p-8">
          <style jsx global>{`
            .slick-dots {
              bottom: 30px !important; /* Adjust dot position */
              display: flex !important;
              justify-content: center;
              align-items: center;
              gap: 12px; /* Add spacing between dots */
            }
            .slick-dots li {
              width: 16px;
              height: 16px;
              border: 2px solid white; /* Outlined circle */
              border-radius: 50%; /* Make it circular */
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.3s ease;
            }
            .slick-dots li button,
            .slick-dots li button:before {
              width: 8px;
              height: 8px;
              background: transparent; /* Default empty state */
              border: none;
              border-radius: 50%;
              cursor: pointer;
            }
            .slick-dots li.slick-active button {
              background: white; /* Solid fill for active dot */
            }
            .slick-dots li.slick-active button:before {
              display: none;
            }
            .slick-dots li button:before {
              color: #00000000 !important;
            }
          `}</style>

          <Slider
            {...settings}
            className="w-[430px] h-[650px] rounded-xl border border-white overflow-hidden"
          >
            {loginImageCarousel.map((img, index) => (
              <div key={index} className="relative w-[430px] h-[650px] ">
                <Image
                  src={img}
                  alt={`Login Illustration ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-r-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
