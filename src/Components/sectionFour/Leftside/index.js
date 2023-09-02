import React from "react";
import Image from 'next/image'

export default function index() {
  return (
    <div>
      <div className="">
      <Image
      src="/Images/membership_img.png"
      width={500}
      height={500}
      alt="Picture"
    />
      </div>
    </div>
  );
}
