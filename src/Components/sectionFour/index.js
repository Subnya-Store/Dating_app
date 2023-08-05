import React from "react";
import Rightside from "./Rightside";
import Leftside from "./Leftside";
export default function index() {
  return (
    <div className="flex bg-[#7000ED]   py-8">
      <div className="w-[50%]">
        <Leftside />
      </div>
      <div className="w-[50%]">
        <Rightside />
      </div>
    </div>
  );
}
