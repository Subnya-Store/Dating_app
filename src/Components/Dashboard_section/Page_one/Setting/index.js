import React from "react";
import AccountMenu from "./AccountMenu";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function index() {
  return (
    <div className="  mx-auto ">
      <AccountMenu />

     
        <div className="flex ">
          <div className="w-[30%]">
          <LeftSection />
          </div>
          <div className="w-[70%]">
          <RightSection />
          </div>
         
          
        </div>
      </div>
  );
}
