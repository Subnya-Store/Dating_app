import React from "react";
import Form from "./Form";

export default function index() {
  return (
    <div className="  bg-[url('/Images/SignIn_img.png')] md:py-4 bg-center  bg-no-repeat md:h-screen  ">
      <div className="  absolute bg-[#0500629e]  bottom-0 top-0 left-0 w-[100%]  h-[100%] ">
        <div className=" h-full flex  items-center">
          <Form />
        </div>
      </div>
    </div>
  );
}
