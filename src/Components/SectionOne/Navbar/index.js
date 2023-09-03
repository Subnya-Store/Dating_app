import React from "react";

export default function Navbar() {
  return (

      <header className=" pt-6">
        <nav>
         <ul className="flex  justify-start">
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize font-medium  text-black  active:text-[#FD166F]  text-lg pr-8">Home</li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize font-medium  text-black   text-lg pr-8">About us</li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize font-medium  text-black   text-lg pr-8">Membership</li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize font-medium  text-black   text-lg pr-8">Services</li>
         </ul>
        </nav>
      </header>
  );
}
