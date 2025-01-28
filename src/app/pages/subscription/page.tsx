"use client";

import { GradientButton } from "@/app/components";
import { useRouter } from "next/navigation";
import React from "react";

const Subscription = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#2c2f33] text-white">
      {/* Feature Message */}
      <h1 className="text-3xl sm:text-5xl font-normal text-[#e5e4e2] mb-8 text-center">
        Feature will be available soon
      </h1>

      {/* Clickable Wrapper Around Gradient Button */}
      <div onClick={() => router.back()} className="cursor-pointer">
        <GradientButton text="Go Back" className="w-[523px]" />
      </div>
    </div>
  );
};

export default Subscription;
