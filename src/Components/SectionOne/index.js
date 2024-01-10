import React from "react";
import Navbar from "@/Components/SectionOne/Navbar";
import HeaderLogo from "@/Components/SectionOne/HeaderLogo";
import NavButton from "@/Components/SectionOne/NavButton";

export default function index() {
  return (
    <div className=" flex justify-between items-center">
      <HeaderLogo />
      <div className="flex items-center">
        <Navbar />
        <NavButton />
      </div>
    </div>
    // <div>
    //   <div className=" md:grid md:grid-cols-3 md:items-center hidden ">

    //     <Navbar />
    //     <HeaderLogo />
    //     <NavButton />
    //   </div>

    //   <div className="   items-center md:hidden">
    //     <div className="flex justify-center">
    //       <HeaderLogo />
    //     </div>
    //     <div className="flex justify-center py-2">
    //       <NavButton />
    //     </div>
    //     <Navbar className="flex justify-center py-2 " />
    //   </div>
    // </div>
  );
}
