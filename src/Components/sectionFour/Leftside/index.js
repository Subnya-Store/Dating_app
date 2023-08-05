import React from "react";

export default function index() {
  const membership_img = "Images/membership_img.png";
  return (
    <div>
      <div className="p-24">
        <img src={membership_img} className=" w-full object-cover" />
      </div>
    </div>
  );
}
