import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <div className=" flex justify-end ">
      <Image
        src="/Images/Contact_img.png"
        width={600}
        height={600}
        alt="Picture "
        className="object-contain"
      />
    </div>
  );
}
