import React from "react";
import { BsThreeDots } from "react-icons/bs";

export default function index() {
  const activit_arr = [
    {
      user_img: "user",
      // user_img: "./Images/user_img.png",
      // email_img: "./Images/email-icon.png",
      // search_img: "./Images/search-icon.png",
      Act_heading: "  Activity",
      user_name: "Marie Campbell",
      hours: " 2 hours ago",
      user_follow: "is now following you",
    },
    {
      user_img: "email",
      user_name: "Jason Mamoa",
      hours: " 1 hours ago",
      user_follow: "messaged you",
    },
    {
      user_img: "search",
      user_name: "Alexa",
      hours: " 30 hours ago",
      user_follow: "Searched you",
    },

    {
      user_img: "email",
      user_name: "Jason Mamoa",
      hours: " 15 minutes ago",
      user_follow: "messaged you",
    },
    {
      user_img: "user",
      user_name: "Marie Campbell",
      hours: " 2 hours ago",
      user_follow: "is now following you",
    },
    {
      user_img: "email",
      user_name: "Jason Mamoa",
      hours: "1 hours ago",
      user_follow: "messaged you",
    },
    {
      user_img: "search",
      user_name: "Alexa",
      hours: " 30 hours ago",
      user_follow: "Searched you",
    },
  ];
const users="./Images/user_img.png";
const email= "./Images/email-icon.png";
const search= "./Images/search-icon.png";
  return (
    <div className="activity_box my-10  rounded-2xl bg-white py-6">
      <div className="container mx-auto   px-6">
        <div>
              <ul className="flex justify-between items-center">
                <li>
                  <h4 className="text-[#050062] text-2xl  font-bold">
                  Activity
                  </h4>
                </li>
                <li>
                  <span className="text-[#050062] text-2xl  font-bold">
                    <BsThreeDots />
                  </span>
                </li>
              </ul>
              {activit_arr.map((e,i) => (
            <>
              <div className="flex justify-between  items-center pb-4  mt-10">
                <div className="flex">
                  <span>
                    <img
                      src={
                        e.user_img == 'user' && users ||
                        e.user_img == 'email' && email ||
                        e.user_img == 'search' && search 
                       } 
                      className="w-[100%] object-contain h-[100%]"
                    />
                  </span>
                  <ul className=" items-center text-[#050062]   text-lg leading-7 ml-6">
                    <li className="">
                      <strong>{e.user_name}</strong>
                    </li>
                    <li>{e.user_follow}</li>
                  </ul>
                </div>
                <p className="text-[#050062]  font-bold text-base">{e.hours}</p>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
