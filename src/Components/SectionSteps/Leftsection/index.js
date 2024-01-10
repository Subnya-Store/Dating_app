import React from "react";
import Image from "next/image";

export default function index() {
  return (
    // <div className="bg-[url('/Images/SignIn_img.png')] bg-center p-5 h-32 bg-no-repeat">
    // </div>

      <div className=" relative  mr-10">
        <div
          className="iniline before:content-{} before: inline before:absolute 
         before:left-0 before:right-0 before:top-0 before:z-10 before:h-full 
         before:w-full before:bg-fuchsia-600 before:opacity-30  rounded-full"
        >
        <Image
            src="/Images/sexy.png"
            width={900}
            height={100}
            className="rounded-lg object-contain"
            alt="Picture"
          />
        </div>
      </div>
  );
}
