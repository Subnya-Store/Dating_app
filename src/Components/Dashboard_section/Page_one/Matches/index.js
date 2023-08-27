import React from "react";
import Left_section from "./Left_section";
import Right_section from "./Right_section";
import Activity_folder from '@/Components/Dashboard_section/Page_one/Matches/Activity_folder';

export default function index() {
  return (
    <div className="container mx-auto px-4">
      <h2 className=" text-white text-lg "> Matches</h2>
      <div className="flex">
        <Left_section />
        <Right_section />
      </div>
      <Activity_folder />
    </div>
  );
}
