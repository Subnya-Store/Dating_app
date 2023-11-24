import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";


export default function index({page}) {
  let ABOUT = page == "about"
  return (
    <div className={`md:w-[48%]  pb-14 ${ABOUT ? 'pt-10':'pt-2'}`} >
      {page == 'about'?'':<h6 className="text-[var(--pink-color)]   font-bold  border-b-2   w-36  mb-2 text-lg md:text-2xl ">
        About Us
      </h6>}
      <h5 className={`  md:text-5xl text-lg   font-medium ${ABOUT ?'text-black':'text-white'} `}>
        <span className="text-[#FFA500]">Love </span>Can Happen
      </h5>
      <h4 className="md:text-5xl text-lg   capitalize font-medium text-[#66D300] mt-2">
        Any where , Any time
      </h4>
      <p className={`mt-2 ${ABOUT?"text-black":"text-white"} md:text-base text-sm`}>
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
            <li className="text-[var(--pink-color)]  font-bold text-3xl">
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
            <li className="text-[var(--pink-color)]  font-bold text-4xl">
              <HiOutlineUserGroup />
            </li>
            <li>
              <span className={`mt-6 ${ABOUT?"text-black":"text-white"} pl-2   font-medium  text-xl`}>
                10k+ Members
              </span>
            </li>
          </ul>
          <p className={`mt-2  text-base ${ABOUT?"text-black":"text-white"}`}>
            Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
            iaculis mollis eget. Facilisis dolor nisi tincidunt augue volutpat
            amet diam odio lacus. Urna tellus sed scelerisque.
          </p>
        </div>
        <div>
          <ul className="flex ">
            <li className="text-[var(--pink-color)]  font-bold text-4xl">
              <AiOutlineHeart />
            </li>
            <li>
              <span className={` mt-6 pl-2  font-medium  text-xl ${ABOUT?"text-black":"text-white"}`}>
                90% Progress
              </span>
            </li>
          </ul>
          <p className={`mt-2 ${ABOUT?"text-black":"text-white"}  text-base`}>
            Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
            iaculis mollis eget. Facilisis dolor nisi tincidunt augue volutpat
            amet diam odio lacus. Urna tellus sed scelerisque.
          </p>
        </div>
      </div>

    </div>
  );
}
