import React from "react";

export default function Navbar() {
  return (

      <header className=" pt-4">
        <nav>
         <ul className="flex  justify-start gap-3 md:gap-0">
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize  text-black  active:text-[#FD166F] text-base sm:pr-2 md:pr-4 lg:pr-5 md:text-base ">Home</li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize  text-black text-sm sm:pr-2 md:pr-4 lg:pr-5 md:text-base ">About us</li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize  text-black text-sm sm:pr-2 md:pr-4 lg:pr-5 md:text-base ">Membership</li>
          {/* <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize   text-black text-sm sm:pr-2 md:pr-4 lg:pr-5 md:text-base ">Services</li> */}
         </ul>
        </nav>
      </header>
  );
}
