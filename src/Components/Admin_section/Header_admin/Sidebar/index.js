import React from "react";


export default function index() {
  const User_img = "/Images/imgsecond.png";
  return (
    <div className="right_header flex ">
      <ul>
        

        <li>
          <button className="bg-pinkColor mr-8 rounded-full items-center text-center cursor-pointer font-semibold text-white py-2 px-4 text-sm ">
            <div className="text-xs md:text-base text-[#fff]">   Upgrade now</div>
          </button>
        </li>
        <li>
          <span  > <p className="text-sm md:text-base"> Hi, Alex</p></span>
        </li>
        <li>
          <figure>
            <img src={User_img} />
          </figure>
        </li>
      </ul>
    </div>
  );
}
