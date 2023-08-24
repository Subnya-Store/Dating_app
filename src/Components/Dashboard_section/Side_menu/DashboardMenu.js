import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";

export default function DashboardMenu() {
  const sideBar_arr = [
    {
      Logo: "Images/logo-img.png",
      Logout_img: "Images/logout-img.png",
      Menu_heading: "Main Menu",
      headings_four: " Matches",
      heading_five: "Support",
      menu_list : "Settings",
      list_1: " Help",
      list_2:"Settings",
      list_3 :"Logout"
    },
  ];
  const Logo = "Images/logo-img.png";

  return (
    <div className="side_menu">
      {sideBar_arr.map( y => (
        <>
          <div className="container mx-auto px-4">
            <div className="side_logo ">
              <img src={y.Logo} />
            </div>
            <h3>{y.Menu_heading}</h3>
          </div>
          <div className="matches_box">
            <h4>{y.headings_four}</h4>
          </div>
          <div className="container mx-auto px-4">
            <div className=" border-b-[#000000] mt-10 border"></div>
            <div className="support_links">
              <h5>{y.heading_five}</h5>
              <ul>
                <li>
                 <span> <AiFillSetting /></span>
               { y.menu_list}
                </li>
                <li>
                 <span> <AiFillQuestionCircle /></span>
                 {y.list_1}
                </li>
                <li><span><img src={y.Logout_img}/></span>{y.list_3 } </li>
              </ul>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
