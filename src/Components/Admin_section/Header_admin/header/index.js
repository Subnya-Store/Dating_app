import React from "react";
import { MdEmail } from 'react-icons/md'
import { FaSmile } from 'react-icons/fa'; // Assuming you want a smiley face icon
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
// ye tuh bhut door hay dashboard sections mien eik kaam akrty hay
export default function Index({setStateHeader}) {
  return (
    <nav className="nav_list">
      <ul className="flex">
        {/* <li onClick={() => SetState('Inbox')}><span><MdEmail /></span> Inbox</li> */}
        <li  onClick={() => setStateHeader('Inbox')}><span ><MdEmail /></span> <p  className="md:text-lg text-sm "> Inbox</p></li>

        <li  ><span className="text-sm"><FaSmile /></span> <p className="md:text-lg text-sm "> Mood</p></li>
        <li><span><AiFillStar /></span> <p  className="md:text-lg text-sm "> Favorites</p></li>
        <li className="bg-[#D9D9D9] p-2 rounded-3xl">
          <form className="flex">


            <div className="pt-1 flex">

              <input className=' bg-[#D9D9D9] text-blackColor placeholder:text-blackColor' type="text" placeholder="Search here" name="search" />
              <button type="submit"><i> < AiOutlineSearch size={"25px"} /> </i></button>
            </div>
          </form></li>
      </ul>
    </nav>
  );
}
