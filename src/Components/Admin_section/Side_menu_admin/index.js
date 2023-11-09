import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
//humay state yahan tak lani hay 
export default function DashboardMenu({ setStateHeader }) {
  const sideBar_arr = [
    {
      Logo: "/Images/logo-img.png",
      Menu_heading: "Main menu"

    },
  ];
  const Support_menu = [
    {
      heading: "Support",

    }
  ];
  const main_manu = [
    {
      menu: "Dashboard"
    }
  ];
  const list = [
    {
      listImg: ["/Images/settingImg.svg"],
      listHeading: "Setting"
    },
    {
      listImg: ["/Images/helpimg.svg"],
      listHeading: "Help"
    },
    {
      listImg: ["/Images/LogoutImg.svg"],
      listHeading: "Logout"
    }



  ]
  const list2 = [
    {
      listImg: ["/Images/Dash_match.svg"],
      listHeading: "Matches"
    },
    {
      listImg: ["/Images/New_online.svg"],
      listHeading: "New Online"
    },
    {
      listImg: ["/Images/Chat_req.svg"],
      listHeading: "Chat Request"
    },
    {
      listImg: ["/Images/Dash_contact.svg"],
      listHeading: "Contacts"
    }



  ]
  const Logo = "/Images/logo-img.png";

  return (
    <div className="side_menu text-xs md:text-lg ">
      {sideBar_arr.map((y,i) => (
          <div key={i}  className="container mx-auto px-4">
            <div className="side_logo ">
              <img src={y.Logo} />
            </div>
            <h3 className="text-xs md:text-lg">{y.Menu_heading}</h3>
          </div>
      ))}
      {
        main_manu.map((x, i) => (
          <div key={i} onClick={() => setStateHeader('Matches')} className="matches_box cursor-pointer">
            <ul className="flex justify-center gap-2">
              <li> <img src="/Images/Dashboard.svg" /></li>
              <li>
                <h4 className="" >{x.menu}</h4>
              </li>
            </ul>
          </div>
        ))
      }
      <div className=" pt-10">
        {
          list2.map((x, i) => (
            <div key={i} className="container mx-auto px-6 py-2">

              <ul className="flex gap-4" >
                <li><img src={x.listImg} /></li>
                <li>
                  <button onClick={() => setStateHeader(x.listHeading)} className="text-[#050062] font-bold"> {x.listHeading}</button>
                </li>

              </ul>
            </div>

          ))
        }
      </div>

      <div className="border-b-[#000000] mt-10 border-2 ml-2 mr-2">

      </div>

      {Support_menu.map((x, i) => (
       
          <div key={i} className="container mx-auto px-4">

            <h3>{x.heading}</h3>
          </div>
      ))}



      <div className=" pt-10">
        {
          list.map((x, i) => (
            <div key={i} className="container mx-auto px-6 py-1">

              <ul className="flex gap-4" >
                <li><img src={x.listImg} /></li>
                <li>
                  <button onClick={() => setStateHeader(x.listHeading)} className="text-[#050062] font-bold"> {x.listHeading}</button>
                </li>

              </ul>
            </div>

          ))
        }
      </div>

    </div>
  );
}
