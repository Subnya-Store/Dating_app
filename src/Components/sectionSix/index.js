import React from "react";

export default function index() {
  const Facebook_img = " Images/Vector.png";
  const instagram_img = "Images/Vector (2).png";
  const Twitter_img = "Images/Vector (1).png";
  const footer_Logo = "Images/Layer_1.png";

  return (
    <div className=" mt-14">
      <div className="bg-[url('/Images/Ellipse.png')] p-4  bg-no-repeat bg-cover bg-center  ">
        <div className=" flex  justify-center pt-20 pb-6">
          <img src={footer_Logo} className="w-[20%] object-contain" />
        </div>

        <div className=" flex justify-center text-base align-center pt-6 pb-6">
          <p className="text-white flex text-lg   text-center w-1/3">
            Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
            iaculis mollis.
          </p>
        </div>
        <div></div>
        <div className=" w-auto flex align-middle justify-center gap-4">
          <a href="#">
            <img className=" object-contain w-[45.535px]" src={Facebook_img} />
          </a>
          <a href="#">
            <img className=" object-contain w-[45.535px]" src={instagram_img} />
          </a>
          <a href="#">
            <img className=" object-contain w-[45.535px]" src={Twitter_img} />
          </a>
        </div>
      </div>
      <div className="flex justify-center  text-lg capitalize font-medium align-center ">
        <p className="py-2"> Copyrights &copy; 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
}
