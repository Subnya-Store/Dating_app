import React from "react";
import Rightsection from "@/Components/sectionFive/RightSection";
import Leftsection from "@/Components/sectionFive/Leftsection";

export default function index() {
  return (
    
      <div className="md:flex">
        <div className="md:w-[50%]">
          <Leftsection />
        </div>
        <div className="md:w-[40%]">
          <Rightsection />
        </div>
      </div>
  );
}
