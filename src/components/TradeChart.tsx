"use client";
import React from "react";
import Image from "next/image";
import TradeImg from "../app/assets/images/landing-trade-img.png";
import VideoIcon from "../app/assets/images/video.svg";

const TradeChart = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  gap-[80px] mb-5 overflow-hidden px-4 relative">
      <div className="flex flex-col gap-[20px] items-center max-w-[1616px]">
        <h4 className="text-white font-metropolis text-[32px] sm:text-[40px] font-bold leading-[120%]">
          Trade like a{" "}
          <span className="bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB] bg-clip-text text-transparent">
            Pro
          </span>
        </h4>
        <p className="text-[#FAFAFA] max-w-[504px] text-center font-metropolis text-[16px] sm:text-[18px] font-normal leading-[120%]">
          Get the lowest fees, fastest transactions, powerful APIs, and more
        </p>
      </div>
      <div className="relative w-[100vw]  h-auto  flex-shrink-0">
        <Image
          src={TradeImg}
          alt="Trading Interface"
          className="w-full h-[200px] sm:h-auto rounded-lg"
        />
      </div>
      <div className="border-[1px]  p-1 rounded-[50%] flex items-center justify-center stroke-[#FEF8C3] stroke-2  absolute top-[95.7%] sm:top-[93%] left-1/2 transform -translate-x-1/2 -translate-y-[80%] ">
        <div
          className="w-[24px] md:w-[40px] h-[24px] md:h-[40px] xl:w-[56px] xl:h-[56px] p-[8px] md:p-[10px] xl:p-[13px] cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-r from-[#FEF9CC] via-[#F6DBD4] to-[#F0C2DB] opacity-100"
          onClick={() => window.open("https://www.youtube.com/", "_blank")}
        >
          <Image src={VideoIcon} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default TradeChart;
