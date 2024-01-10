import React from "react";
import Image from 'next/image'

export default function index() {
  return (
    <div>
      <Image
        src="/Images/pony_hot.png"
        width={500}
        height={500}
        alt="Picture"
      />
    </div>
  );
}
