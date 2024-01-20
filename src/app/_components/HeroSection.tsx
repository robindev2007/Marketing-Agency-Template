import WidthContainer from "@/Components/WidthContainer";
import { backgroundEffact, heroBg } from "@/lib/constance";
import Image from "next/image";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="relative max-w-[100vw] overflow-hidden">
      <WidthContainer className="">
        <div className="flex flex-col items-center py-7 text-center">
          <h1 className="text-[4rem] leading-[1] md:text-[5rem] ">
            The loud voice <br className="hidden md:flex" /> of your brand
          </h1>
          <div className="relative mx-auto w-fit max-w-[90%] md:max-w-[50%]">
            <Image height={600} width={600} src={heroBg} alt="" />
          </div>
          <div className="-mt-2 flex w-full justify-between opacity-70 md:-mt-10">
            <p className="text-xs md:text-sm">
              We help to show your ads <br /> to more people for less money
            </p>
            <div className="group flex items-center gap-2">
              Explore{" "}
              <FaArrowDown className="-rotate-45 transition-all duration-200 group-hover:rotate-0 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </WidthContainer>
      <Image
        className="absolute left-0 top-0 -z-10 h-screen w-screen"
        src={backgroundEffact}
        height={1400}
        width={1200}
        alt=""
      />
    </div>
  );
}

export default HeroSection;
