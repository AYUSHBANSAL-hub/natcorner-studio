"use-client";
import React from "react";
import { Navbar, Hero, News, ETFs, Merchandise, Footer } from "./components";

const Home = () => {
  return (
    // A div to wrap the entire Homelication
    <div className="bg-black text-white w-screen overflow-hidden">
      <Navbar />
      <Hero />
      <News/>
      <ETFs/>
      <Merchandise/>
      <Footer/>
    </div>
  );
};

export default Home;
