import React from "react";
import AboutLeft from "@/Components/SectionAbout/AboutLeft";
import AboutRight from "@/Components/SectionAbout/AboutRight";
import Image from "next/image";

export default function index({page}) {
  return (
    <div className={` bg-whiteColor  relative  -z-10   md:px-16  `}>
      <div className="container mx-auto  ">
        <div className="md:flex justify-between items-center p-10">
          <AboutLeft page={page}/>
          <AboutRight />
        </div>
        {/* <div className="hidden md:flex md:absolute md:top-[68%] md:left-[41%] ">
          <Image
            src={page != 'about'?`/Images/arrow-img.png`:`/Images/Vector@2x.png`}
            width={300}
            height={300}
            className="rotate-4 object-contain"
            alt="arrow"
          />
        </div> */}
      </div>
    </div>
  );
}
