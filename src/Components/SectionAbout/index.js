import React from "react";
import AboutLeft from "@/Components/SectionAbout/AboutLeft";
import AboutRight from "@/Components/SectionAbout/AboutRight";
import Image from "next/image";

export default function index() {
  return (
    <div className=" bg-[#7000ED] pt-36 relative pb-10 -z-10   md:px-16 md:mt-[-40%] -mt-[94%]  ">
      <div className="container mx-auto px-20 md:pt-96 pt-96 ">
        <div className="md:flex justify-between ">
          <AboutLeft />
          <AboutRight />
        </div>
        <div className="hidden md:flex md:absolute md:top-[68%] md:left-[37%]  ">
          <Image
            src="/Images/arrow-img.png"
            width={300}
            height={300}
            className="rotate-4 object-contain"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}
