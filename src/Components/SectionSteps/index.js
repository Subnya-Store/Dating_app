import React from "react";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
export default function index() {
  return (
    <div className="flex py-20 px-24">
      <div className="w-[55%]">
        <Leftsection/>
      </div>
      <div className="w-[45%]">
        <Rightsection />
      </div>
    </div>
  );
}
