import React from "react";
import Matches from "./Matches";
import Setting from "./Setting";

export default function index() {
  return (
    <div className=" relative bg-[url('/Images/Dashboard_pg1.png')]     w-[100%] h-screen  bg-center  bg-cover  bg-no-repeat   ">
      <div className="  absolute  before:content-[]   bg-[#0500629e]  overflow-y-scroll  bottom-0 top-0 left-0 w-[100%]  h-[100%] ">
        <Matches />
    
      </div>
    </div>

    // <div className=" bg-[#fcf8f8]   py-9 overflow-y-scroll  bottom-0 top-0 left-0 w-[100%]  h-[100%] ">
    //   <Setting />
    // </div>
  );
}
