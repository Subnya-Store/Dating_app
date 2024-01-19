import React from "react";

export default function index() {
  return (
    <div className=" text-white">
      <div className=" justify-end flex">
        <h3 className="border-b-4 border-white text-xl pt-3 pb-3 w-32 text-right font-bold text-[var(--pink-color)]">
          Membership
        </h3>
      </div>
      <div className=" justify-end flex pt-4 pb-4">
        <h1 className="flex text-4xl font-bold w-52 text-right">
          Simple Membership
        </h1>
      </div>
      <div className=" justify-end flex pt-4 pb-4">
        <div className="flex  text-right text-lg text-white">
        Our user-friendly platform allows you to plan and schedule your destiny dates effortlessly. Connect with others who share your interests and passions. Your journey is uniquely yours, and we're here to help you make it unforgettable.{" "}
        </div>
      </div>

      <div className=" justify-end flex pt-4 pb-4">
         <button className=' bg-pinkColor shadow-lg text-right py-2  px-6  font-medium rounded-full  text-whiteColor '> Membership Details</button>
      </div>
    </div>
  );
}
