import React from "react";

export default function index() {
  const User_img = "Images/imgsecond.png";
  return (
    <div className="right_header ">
      <ul>
        <li>
          <button className="bg-[#FD2579] mr-8 rounded-full items-center text-center cursor-pointer font-semibold text-white py-2 px-4">
            Upgrade now
          </button>
        </li>
        <li>
          <span>Hi, Alex</span>
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
