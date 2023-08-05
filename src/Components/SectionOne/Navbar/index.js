import React from "react";

export default function Navbar() {
  return (

      <header className=" pt-6">
        <nav>
         <ul className="flex justify-start">
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize font-medium  text-black   text-base pr-7">Home</li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize font-medium  text-black   text-base pr-7">About us</li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize font-medium  text-black   text-base pr-7">Membership</li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize font-medium  text-black   text-base pr-7">Services</li>
         </ul>
        </nav>
      </header>
  );
}
