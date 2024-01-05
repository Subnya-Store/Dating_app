import React from "react";
import { MdEmail } from 'react-icons/md'
import { FaSmile } from 'react-icons/fa'; // Assuming you want a smiley face icon
import { AiFillStar } from 'react-icons/ai'
import { GiHamburgerMenu } from "react-icons/gi";
export default function Index({setStateHeader,setHamburger,hamburger}) {
  return (
    <nav className="nav_list bg-whiteColor">
      <ul className="flex">
        <li onClick={() => setHamburger(!hamburger)}><GiHamburgerMenu/></li>
        <li  onClick={() => setStateHeader('Inbox')}><span ><MdEmail className="text-pinkColor" /></span> <p  className="md:text-lg text-sm "> Inbox</p></li>
        <li><span><AiFillStar className="text-pinkColor" /></span> <p  className="md:text-lg text-sm "> Favorites</p></li>
      </ul>
    </nav>
  );
}
