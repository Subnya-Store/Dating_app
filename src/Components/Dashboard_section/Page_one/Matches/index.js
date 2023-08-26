import React from "react";
import Left_section from "./Left_section";
import Right_section from "./Right_section";

export default function index() {
  return (
    <div className="">
      <h2 className=" text-white text-lg px-4"> Matches</h2>
       <div className="flex">
       <Left_section />
        <Right_section />
       </div>
    </div>
  );
}
