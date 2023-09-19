import React from "react";
import Rightsection from "@/Components/sectionFive/RightSection";
import Leftsection from "@/Components/sectionFive/Leftsection";

export default function index() {
  return (
    
      <div className="md:flex md:py-20">
        <div className="md:w-[55%]  ">
          <Leftsection />
        </div>
        <div className="md:w-[45%] p-5  bg-white rounded-l-[15%] ml-[-80px] ">
          <Rightsection />
        </div>
      </div>
  );
}
