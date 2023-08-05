import React from "react";
import Rightsection from "@/Components/sectionFive/RightSection";
import Leftsection from "@/Components/sectionFive/Leftsection";

export default function index() {
  return (
    
      <div className="flex">
        <div className="w-[50%]">
          <Leftsection />
        </div>
        <div className="w-[40%]">
          <Rightsection />
        </div>
      </div>
  );
}
