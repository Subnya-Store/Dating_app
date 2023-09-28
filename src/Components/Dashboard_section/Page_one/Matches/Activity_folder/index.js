import React from "react";
import { BsThreeDots } from "react-icons/bs";

export default function index() {
  const activit_arr = [
    {
      user_img: "user",
      // user_img: "/Images/user_img.png",
      // email_img: "/Images/email-icon.png",
      // search_img: "/Images/search-icon.png",
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
  const users = "/Images/user_img.png";
  const email = "/Images/email-icon.png";
  const search = "/Images/search-icon.png";
  return (
    <div className="activity_box my-10  rounded-2xl bg-white py-6">
      <div className="container mx-auto min-w-[300px]   px-6">

        <ul className="flex justify-between items-center">
          <li>
            <h4 className="text-[#050062] text-xl  font-bold">
              Activity
            </h4>
          </li>
          <li>
            <span className="text-[#050062] text-xl  font-bold">
              <BsThreeDots />
            </span>
          </li>
        </ul>
        {activit_arr.map((e, i) => (
          <>
            <div className="flex justify-between  items-center w-full  mt-10">
              <div className="flex w-full items-center">
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
                <div className="flex justify-between items-center w-full px-2">
                  <div className="text-sm">
                    <div><strong>{e.user_name}</strong></div>
                    <div>{e.user_follow}</div>
                  </div>
                  <div className="text-sm">{e.hours}</div>
                </div>
              </div>
              {/* <p className="text-[#050062]  font-bold text-base">{e.hours}</p> */}
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
