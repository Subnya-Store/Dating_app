import React from "react";

export default function index() {
  const Steps_Away = "Images/Steps_Away.png";
  return (
    // <div className="bg-[url('/Images/SignIn_img.png')] bg-center p-5 h-32 bg-no-repeat">
    // </div>

    <div>
      <div className=" relative   mr-10">
        <div className=" iniline before:content-{} before: inline before:absolute 
         before:left-0 before:right-0 before:top-0 before:z-10 before:h-full 
         before:w-full before:bg-fuchsia-600 before:opacity-30  rounded-full">
        <img
          className=" rounded-lg "
          src={Steps_Away}
        />
        </div>
      
      </div>
    </div>
  );
}
