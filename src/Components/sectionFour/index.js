import React from "react";
import Rightside from "./Rightside";
import Leftside from "./Leftside";
export default function index() {
  return (
    <div className=" bg-[#7000ED]   py-32 ">
      <div className="container px-20 mx-auto">

     <div className="flex justify-between">
     <div className="w-[50%]">
        <Leftside />
      </div>
      <div className="w-[50%]">
        <Rightside />
      </div>
     </div>
     
    </div>
    </div>
  );
}
