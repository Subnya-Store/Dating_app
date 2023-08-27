import React from "react";
import { BsThreeDots } from "react-icons/bs";

export default function index() {
  const user_img = "./Images/user_img.png";
  const email_img = "./Images/email-icon.png";
  const search_img = "./Images/search-icon.png";
  return (
    
    <div className="activity_box mt-10 w-[50%]  rounded-2xl bg-white py-6">
      <div className="container mx-auto   px-6">
        <div>
          <ul className="flex justify-between items-center">
            <li>
              <h4 className="text-[#050062] text-2xl  font-bold">Activity</h4>
            </li>
            <li>
              <span className="text-[#050062] text-2xl  font-bold">
                <BsThreeDots />
              </span>
            </li>
          </ul>
          <div className="flex justify-between  items-center pb-4  mt-10">
            <div className="flex">
              <span>
                <img src={user_img} className="w-[100%] object-contain h-[100%]" />
              </span>
              <ul className=" items-center text-[#050062]   text-lg leading-7 ml-6">
                <li className=""><strong>Marie Campbell</strong></li>
                <li>is now following you</li>
              </ul>
            </div>
            <p className="text-[#050062]  font-bold text-base">2 hours ago</p>
          </div>
          <hr/>
          <div className="flex justify-between  items-center pb-4  mt-10">
            <div className="flex">
              <span>
                <img src={email_img} className="w-[100%] object-contain h-[100%]" />
              </span>
              <ul className=" items-center text-[#050062]   text-lg leading-7 ml-6">
                <li className=""><strong>Jason Mamoa</strong></li>
                <li>messaged you</li>
              </ul>
            </div>
            <p className="text-[#050062]  font-bold text-base">1 hours ago</p>
          </div>
          <hr/>
          <div className="flex justify-between  items-center pb-4  mt-10">
            <div className="flex">
              <span>
                <img src={search_img} className="w-[100%] object-contain h-[100%]" />
              </span>
              <ul className=" items-center text-[#050062]   text-lg leading-7 ml-6">
                <li className=""><strong>Alexa</strong></li>
                <li>Searched you</li>
              </ul>
            </div>
            <p className="text-[#050062]  font-bold text-base">1 hours ago</p>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  );
}
