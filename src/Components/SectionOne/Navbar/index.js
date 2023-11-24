import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (

    <header className=" pt-4">
      <nav>
        <ul className="flex  justify-start gap-3 md:gap-0">
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize  text-black  active:text-[var(--pink-color)] text-base sm:pr-2 md:pr-4 lg:pr-5 md:text-base ">
            <Link href={'/'}>
              Home
            </Link>
          </li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize  text-black text-sm sm:pr-2 md:pr-4 lg:pr-5 md:text-base ">
            <Link href={'about_us'}>
              About us
            </Link>
          </li>
          <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize  text-black text-sm sm:pr-2 md:pr-4 lg:pr-5 md:text-base ">
            <Link href={'membership'}>
              Membership
            </Link>
          </li>
          {/* <li className=" cursor-pointer inline-flex hover:text-pinkColor capitalize   text-black text-sm sm:pr-2 md:pr-4 lg:pr-5 md:text-base ">Services</li> */}
        </ul>
      </nav>
    </header>
  );
}
