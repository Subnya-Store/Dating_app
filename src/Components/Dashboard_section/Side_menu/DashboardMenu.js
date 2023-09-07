import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
//humay state yahan tak lani hay 
export default function DashboardMenu({ setStateHeader }) { 
  const sideBar_arr = [
    {
      Logo: "Images/logo-img.png",
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
      listImg: ["Images/settingImg.svg"],
      listHeading: "Setting"
    },
    {
      listImg: ["Images/helpimg.svg"],
      listHeading: "Help"
    },
    {
      listImg: ["Images/LogoutImg.svg"],
      listHeading: "Logout"
    }



  ]
  const Logo = "Images/logo-img.png";

  return (
    <div className="side_menu">
      {sideBar_arr.map(y => (
        <>
          <div onClick={() => console.log(y)} className="container mx-auto px-4">
            <div className="side_logo ">
              <img src={y.Logo} />
            </div>
            <h3>{y.Menu_heading}</h3>
          </div>
          {/* <div className="matches_box">
            <h4>{y.headings_four}</h4>
          </div> */}

        </>
      ))}
      {
        main_manu.map(x => (
          <>
           
            <div onClick={()=>setStateHeader('Matches')} className="matches_box cursor-pointer">
              <h4 >{x.menu}</h4>
            </div>
          </>
        ))
      }
      <div className="border-b-[#000000] mt-10 border-2 ml-2 mr-2">

      </div>
    
      {Support_menu.map(x => (
        <>
          <div onClick={()=>console.log(x)} className="container mx-auto px-4">

            <h3>{x.heading}</h3>
          </div>


        </>
      ))}
    


      <div className=" pt-10">
        {
          list.map(x => (
            <div className="container mx-auto px-6 py-1">

              <ul className="flex gap-4" >
                <li><img src={x.listImg} /></li>
                <li> 
                <button onClick={() =>setStateHeader(x.listHeading)} className="text-[#050062] font-bold"> {x.listHeading}</button>
                </li>
                
              </ul>
            </div>

          ))
        }
      </div>

    </div>
  );
}
