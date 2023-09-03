import React from "react";
import AccountMenu from "./AccountMenu";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function index() {
  return (
    <div className="container  mx-auto px-4">
      <AccountMenu />

     
        <div className=" grid  grid-cols-2">
          <LeftSection />
          <RightSection />
        </div>
      </div>
  );
}
