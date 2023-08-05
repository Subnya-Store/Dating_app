import React from "react";

export default function index() {
  return (
    <div className="felx justify-end text-white pr-36 pt-24">
      <div className=" justify-end flex">
        <h3 className="border-b-4 border-white text-xl pt-3 pb-3 w-32 text-right font-bold text-[#FD166F]">
          Membership
        </h3>
      </div>
      <div className=" justify-end flex pt-4 pb-4">
        <h1 className="flex text-4xl font-bold w-52 text-right">
          Simple Membership
        </h1>
      </div>
      <div className=" justify-end flex pt-4 pb-4">
        <p className="flex  text-right text-lg">
          Simple to sign up as a member. The process usually takes less than 10
          minutes, including your basic profile of your Ruleset of Desires.{" "}
        </p>
      </div>

      <div className=" justify-end flex pt-4 pb-4">
         <button className=' bg-pinkColor shadow-lg text-right py-2  px-6  font-medium rounded-full  text-white '> Membership Details</button>

      </div>
    </div>
  );
}
