import React from "react";
import {MdEmail} from 'react-icons/md'
import {TbMoodSmileFilled} from 'react-icons/tb';
import {AiFillStar} from 'react-icons/ai'

export default function index() {
  return (
  
          <nav className="nav_list">
            <ul className="flex">
              <li><span><MdEmail/></span> Inbox</li>
              <li><span><TbMoodSmileFilled/></span> Mood</li>
              <li><span><AiFillStar/></span>Favorites</li>
            </ul>
          </nav>

  );
}
