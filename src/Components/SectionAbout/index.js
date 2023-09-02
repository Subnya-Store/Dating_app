import React from "react";
import AboutLeft from "@/Components/SectionAbout/AboutLeft";
import AboutRight from "@/Components/SectionAbout/AboutRight";
import Image from "next/image";

export default function index() {
  return (
    <div className=" bg-[#7000ED] pt-[530px] relative pb-10 -z-10   px-16 ">
      <div className="container mx-auto px-20">
        <div className="flex justify-between ">
          <AboutLeft />
          <AboutRight />
        </div>
        <div className=" absolute top-[70%] left-[37%]">
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
