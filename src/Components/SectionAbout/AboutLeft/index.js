import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";


export default function index() {
  return (
    <div className=" w-[48%]  pb-14">
      <h6 className="text-[#FD166F]   font-bold  border-b-2   w-24  mb-2 text-lg">
        About Us
      </h6>
      <h5 className="  text-5xl   font-medium text-white">
        <span className="text-[#FFA500]">Love </span>Can Happen
      </h5>
      <h4 className="text-5xl   capitalize font-medium text-[#66D300] mt-2">
        Any where , Any time
      </h4>
      <p className="mt-2 text-white  text-base">
        Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
        iaculis mollis eget. Facilisis dolor nisi tincidunt augue volutpat amet
        diam odio lacus. Urna tellus sed scelerisque.
      </p>
      <div className=" relative my-4">
        <form className=" py-8 ">
          <ul className="flex justify-between">
            <li className=" relative">
              <input
                className=" border-none  rounded-full  w-full  bg-[#D9D9D9] outline-none py-1 px-6"
                placeholder="I am ...."
              />
              <span className=" absolute  top-2 font-bold text-lg  text-gray-500  right-3">
                <IoIosArrowDown />
              </span>
            </li>
            <li className="text-[#FD166F]  font-bold text-3xl">
              <AiOutlineHeart />
            </li>
            <li className="relative">
              <input
                className=" border-none  rounded-full  w-full  bg-[#D9D9D9] outline-none py-2 px-6"
                placeholder="Interested in....."
              />
              <span className=" absolute  top-2 font-bold text-lg  text-gray-500  right-3">
                <IoIosArrowDown />
              </span>
            </li>
          </ul>
          <ul className="pt-6">
            <li className=" relative">
              <input
                className=" border-none  rounded-full  w-full  bg-[#D9D9D9] outline-none py-2 px-6"
                placeholder="Looking for......"
              />
              <span className=" absolute  top-2 font-bold text-lg  text-gray-500  right-3">
                <IoIosArrowDown />
              </span>
            </li>
          </ul>
          <button className=" bg-[#DF00FF]  py-2 px-6  my-4 font-medium rounded-full  text-white ">
            Find your Partner
          </button>
        </form>
       
      </div>

      <div className="flex justify-between  mt-10">
        <div className=" mr-4">
          <ul className="flex">
            <li className="text-[#FD166F]  font-bold text-4xl">
              <HiOutlineUserGroup />
            </li>
            <li>
              <span className=" mt-6 text-white pl-2   font-medium  text-xl">
                10k+ Members
              </span>
            </li>
          </ul>
          <p className="mt-2 text-white  text-base">
            Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
            iaculis mollis eget. Facilisis dolor nisi tincidunt augue volutpat
            amet diam odio lacus. Urna tellus sed scelerisque.
          </p>
        </div>
        <div>
          <ul className="flex ">
            <li className="text-[#FD166F]  font-bold text-4xl">
              <AiOutlineHeart />
            </li>
            <li>
              <span className=" mt-6 text-white pl-2  font-medium  text-xl">
                90% Progress
              </span>
            </li>
          </ul>
          <p className="mt-2 text-white  text-base">
            Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
            iaculis mollis eget. Facilisis dolor nisi tincidunt augue volutpat
            amet diam odio lacus. Urna tellus sed scelerisque.
          </p>
        </div>
      </div>
     
    </div>
  );
}
