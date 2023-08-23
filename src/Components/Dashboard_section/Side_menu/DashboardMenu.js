import React from "react";

export default function DashboardMenu() {
  // const sideBar_arr =[{
  //   Logo:'./Imageslogo-img.png',
  // }]
  const Logo = "Images/logo-img.png";
  return (
    <div className="side_menu bg-[#fff] h-screen pt-4 ">
      <div className="container mx-auto px-4">
        <img className="w-[70%]" src={Logo} />
        <h3 className="text-[#050062]   mt-7 text-xl font-bold">Main Menu</h3>
      </div>
      <div className="bg-[#FD2579] mt-5 py-2">
        <h3 className=" text-center text-xl  font-medium text-[#fff]">
          Matches
        </h3>
      </div>

      <div className="container mx-auto px-4">
        <div className=" border-b-[#000000] mt-10 border"></div>
      </div>
    </div>
  );
}
