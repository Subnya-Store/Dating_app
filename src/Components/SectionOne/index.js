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
   <div>
 <div className=" md:grid md:grid-cols-3 md:items-center hidden">
   
   <Navbar/>
      <HeaderLogo />
      <NavButton />
   </div>

   <div className="   items-center md:hidden">
   
   
   <div className="flex justify-center">
     <HeaderLogo />
     </div>
     <div className="flex justify-center py-2">
     <NavButton />
     </div>
      <Navbar className="flex justify-center py-2 "/>
      
   </div>

   </div>
   


      
    
      
  );
}
