import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <div className=" mt-20">
      <div className="bg-[url('/Images/Ellipse-1.png')]  overflow-auto   py-28 bg-no-repeat  w-[100%]  bg-cover bg-center">
        <div className="container mx-auto px-20">
          <div className=" flex  justify-center flex-col m-auto text-center items-center">
            <Image
              src="/Images/footer-logo.png"
              width={200}
              height={220}
              className="object-contain pb-4"
              alt="Picture"
            />

            <p className="text-white text-lg   mb-3  m-auto w-2/5">
              Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
              iaculis mollis.
            </p>
          </div>
          <div className=" w-auto flex align-middle justify-center mt-3 gap-4">
            <a href="/">
              <Image
                src="/Images/Facebook-img.png"
                width={45}
                height={45}
                className=" object-contain"
                alt="Picture"
              />
            </a>
            <a href="/">
              <Image
                src="/Images/instagram-img.png"
                width={45}
                height={45}
                className=" object-contain"
                alt="Picture"
              />
            </a>
            <a href="/">
              <Image
                src="/Images/Twitter-img.png"
                width={45}
                height={45}
                className=" object-contain"
                alt="Picture"
              />
            </a>
          </div>
        </div>
      
      </div>
      <div className="flex justify-center  text-lg capitalize font-medium align-center ">
          <p className="py-2"> Copyrights &copy; 2023. All Rights Reserved.</p>
        </div>
    </div>
  );
}
