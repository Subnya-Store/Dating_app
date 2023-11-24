import React from "react";
import { MdEmail } from 'react-icons/md'
import { FaSmile } from 'react-icons/fa'; // Assuming you want a smiley face icon
import { AiFillStar } from 'react-icons/ai'
// ye tuh bhut door hay dashboard sections mien eik kaam akrty hay
export default function Index({setStateHeader}) {
  return (
    <nav className="nav_list">
      <ul className="flex">
        {/* <li onClick={() => SetState('Inbox')}><span><MdEmail /></span> Inbox</li> */}
        <li  onClick={() => setStateHeader('Inbox')}><span ><MdEmail className="text-pinkColor" /></span> <p  className="md:text-lg text-sm "> Inbox</p></li>

        <li  ><span className="text-sm"><FaSmile className="text-pinkColor" /></span> <p className="md:text-lg text-sm "> Mood</p></li>
        <li><span><AiFillStar className="text-pinkColor" /></span> <p  className="md:text-lg text-sm "> Favorites</p></li>
      </ul>
    </nav>
  );
}
