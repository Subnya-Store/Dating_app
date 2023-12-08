import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { IoSettings } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
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
      menu: "Matches"
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
  const Logo = "/Images/logo-img.png";
  const dispatch = useDispatch()
  return (
    <div className="side_menu  text-xs md:text-lg bg-whiteColor">
      {sideBar_arr.map((y, i) => (
        <div className="bg-whiteColor" key={i}>
          <div className=" mx-auto px-4 bg-whiteColor">
            <div className="side_logo ">
              <img src={y.Logo} />
            </div>
            <h3 className="text-xs md:text-lg text-blackColor">{y.Menu_heading}</h3>
          </div>
        </div>
      ))}
      {
        main_manu.map((x, i) => (
          <div className="bg-whiteColor" key={i}>

            <div
              onClick={() => (dispatch({
                type: 'state',
                payload: x.menu
              }), setStateHeader('Matches'))}
              className=" flex justify-center items-center cursor-pointer bg-whiteColor">
              <p className=" p-5" >{x.menu}</p>
            </div>
          </div>
        ))
      }
      <div className="border-b-blackColor border-2 bg-whiteColor">
 
      </div>

      {Support_menu.map((x, i) => (
        <div className="bg-whiteColor" key={i}>
          <div className="container mx-auto px-4 bg-whiteColor">
            <h3 className="bg-whiteColor text-blackColor">{x.heading}</h3>
          </div>
        </div>
      ))}



      <div className="bg-whiteColor text-blackColor">
        {
          list.map((x, i) => (
            <div key={i} onClick={() => {
              if (x.listHeading == 'Logout') {
                localStorage.removeItem('user')
                window.location.href = '/signin'
              }
            }} className="container mx-auto px-6 py-1 bg-whiteColor" >

              <ul className="flex gap-4  items-center bg-whiteColor" >
                <li>
                  {
                    x.listHeading == 'Setting' && <IoSettings className="text-pinkColor" /> ||
                    x.listHeading == 'Help' && <IoIosHelpCircle className="text-pinkColor" /> ||
                    x.listHeading == 'Logout' && <FaSignOutAlt className="text-pinkColor" />
                  }
                </li>
                <li>
                  <button onClick={() => setStateHeader(x.listHeading)} className="text-blackColor font-bold"> {x.listHeading}</button>
                </li>

              </ul>
            </div>

          ))
        }
      </div>

    </div>
  );
}
