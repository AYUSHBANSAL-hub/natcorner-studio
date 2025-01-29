"use client";

import React from "react";
import Image from "next/image";
import { FaGoogle, FaApple, FaFacebook, FaEye } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { loginImageCarousel } from "@/constants"; // Ensure this is defined correctly
import { Footer, ETFsListing, Navbar } from "@/app/components";
import HeroETFs from "@/app/components/HeroETFs";

const ETFPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroETFs/>
      <ETFsListing/>
      <Footer/>
    </div>
  );
};

export default ETFPage;
