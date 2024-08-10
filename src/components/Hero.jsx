import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="container pt-8 ">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2  gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__1.webp"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Orignal Dry Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Dried Fruits Best Quality
            </h2>
            <p className="text-gray-400 pt-4 text-xl sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 sm:text-4xl text-2xl pb-4 sm:pb-8">
              $20.36
            </div>
            <div className="bg-accentDark flex hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__2.webp"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yammy Pizza</h2>
            <p className="text-gray-400 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 sm:text-4xl text-2xl pb-4 sm:pb-8">
              $25.36
            </div>
            <div className="bg-accent flex hover:bg-accentDark text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__3.webp"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yammy Chips</h2>
            <p className="text-gray-400 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 sm:text-4xl text-2xl pb-4 sm:pb-8">
              $10
            </div>
            <div className="bg-accent flex hover:bg-accentDark text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
