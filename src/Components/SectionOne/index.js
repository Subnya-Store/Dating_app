import React from "react";
import Navbar from "@/Components/SectionOne/Navbar";
import HeaderLogo from "@/Components/SectionOne/HeaderLogo";
import NavButton from "@/Components/SectionOne/NavButton";

export default function index() {
  return (
    //  <div className="flex  mx-14 justify-evenly  justify-items-center">
    //   <Navbar/>
    //   <HeaderLogo/>
    //   <NavButton/>
    //  </div>
   
    <div className=" grid grid-cols-3 items-center ">
      <Navbar />
      <HeaderLogo />
      <NavButton />
      </div>
  );
}
