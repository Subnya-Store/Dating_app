import React from "react";
import {MdEmail} from 'react-icons/md'
import {TbMoodSmileFilled} from 'react-icons/tb';
import {AiFillStar} from 'react-icons/ai'

export default function Header() {
  return (
    <div className="dash_header bg-[#FFFFFF] py-4">
      <div className="container  mx-auto px-4">
        <div className="flex">
          <nav className="nav_list">
            <ul className="flex">
              <li><span><MdEmail/></span> Inbox</li>
              <li><span><TbMoodSmileFilled/></span> Mood</li>
              <li><span><AiFillStar/></span>Favorites</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
