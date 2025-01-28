"use client";

import React from "react";
import Image from "next/image";
import { FaGoogle, FaApple, FaFacebook, FaEye } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { loginImageCarousel } from "@/constants"; // Ensure this is defined correctly
import { Footer, GameListing, Navbar } from "@/app/components";
import MerchandiseListing from "@/app/components/MerchandiseListing";
import HeroMerchandise from "@/app/components/HeroMerchandise";

const Games = () => {
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
    <div>
      <Navbar/>
      <HeroMerchandise/>
      <MerchandiseListing/>
      <Footer/>
    </div>
  );
};

export default Games;
