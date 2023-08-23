import React from "react";
import Left_section from "./Left_section";
import Right_section from "./Right_section";

export default function index() {
  return (
    <div className="flex">
      <h2> Matches</h2>
        <Left_section />
        <Right_section />
    </div>
  );
}
