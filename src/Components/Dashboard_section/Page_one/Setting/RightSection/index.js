import React from "react";
import Image from "next/image";

export default function index() {
  return (
    
      <div className="bg-[#FFF] p-10  md:w-[90%] h-[60%] overflow-y-scroll rounded-3xl  shadow-2xl">
        <h4 className="text-[#050062]  py-3 md:text-3xl capitalize font-bold text-xl">
          Account
        </h4>
        <hr />
        <div className=" my-2">
          <h6 className="text-[#050062] md:text-base text-sm  font-semibold capitalize">
            Avatar
          </h6>
          <div className=" my-4">
            <ul className=" md:flex justify-between w-[55%] items-center">
              <li>
                <Image
                  src="/Images/imgsecond.png"
                  width={80}
                  height={80}
                  className=" rounded-full mr-2 object-contain"
                  alt="Picture of the author"
                />
              </li>
              <li>
                <button className=" md:text-base text-sm bg-pinkColor  rounded-md items-center text-center cursor-pointer font-semibold text-white py-2 px-4">
                  Upload
                </button>
              </li>
              <li>
                <button className=" md:text-base text-sm bg-[#fff] border-pinkColor border  rounded-md items-center text-center cursor-pointer font-semibold text-pinkColor py-2 px-4 mt-1">
                  Remove
                </button>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className=" my-4">
          <form>
            <div className=" grid  grid-cols-2  gap-4">
              <div>
                <label className="block text-[#050062] pb-2  md:text-base text-sm font-semibold capitalize">
                  Display name
                </label>
                <input
                  type="text"
                  placeholder="Alex"
                  className=" placeholder:text-pinkColor w-[100%] outline-none rounded-md  py-2 px-3 border border-[#05006]"
                />
              </div>
              <div>
                <label className="block text-[#050062] pb-2  md:text-base text-sm font-semibold capitalize">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Alex"
                  className=" placeholder:text-pinkColor w-[100%] outline-none rounded-md  py-2 px-3 border border-[#05006]"
                />
              </div>
            </div>
            <span className=" block my-5">
              {" "}
              <hr />
            </span>

            <div className=" grid  grid-cols-2  gap-4">
              <div>
                <label className="block text-[#050062] pb-2 text-lg font-semibold capitalize  md:text-base text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alexmercer@yahoo.com"
                  className=" placeholder:text-pinkColor w-[100%] outline-none rounded-md  py-2 px-3 border border-[#05006]"
                />
              </div>
              <div>
                <label className="block text-[#050062] pb-2 text-lg font-semibold capitalize  md:text-base text-sm">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="Alex"
                  className=" placeholder:text-pinkColor w-[100%] outline-none rounded-md  py-2 px-3 border border-[#05006]"
                />
              </div>
            </div>
            <span className=" block my-5">
              {" "}
              <hr />
            </span>

            <div className=" flex justify-between items-center">
              <div>
                <label className="block text-[#050062]  pb-4 text-lg font-semibold capitalize  md:text-base text-sm">
                  Linked Accounts
                </label>
                <div className="flex items-center">
                  <Image
                    src="/Images/google-img.svg"
                    width={40}
                    height={40}
                    className=" rounded-full mr-2 object-contain"
                    alt="Picture of the author"
                  />
                  <a
                    href="/"
                    className="text-pinkColor text-base font-semibold  md:text-base text-sm"
                  >
                    Sign in with Google
                  </a>
                </div>
              </div>
              <div>
                <span className="block text-right items-center">
               
                  <button className="bg-[#fff]  border-pinkColor border  rounded-md items-center text-center cursor-pointer font-semibold text-pinkColor py-2 px-4  md:text-base text-sm">
                    Connect
                  </button>
                </span>
              </div>
            </div>
            <span className=" block my-5">
            
              <hr />
            </span>

            <div className="flex justify-between items-center">
              <div>
                <label className="block text-[#050062] pb-2  font-semibold capitalize  md:text-lg text-sm">
                  Linked Accounts
                </label>
                <p className="text-pinkColor font-semibold  md:text-base text-sm">
                  By deleting your account you will lose your data.
                </p>
              </div>
              <div>
                <label className="block text-[#050062] pb-2  md:text-lg text-sm font-semibold capitalize">
                  Delete Account.
                </label>
              </div>
            </div>
            <span className=" block my-5">
              <hr />
            </span>

            <div className="flex justify-end">
              <button className="bg-pinkColor  rounded-md items-center text-center cursor-pointer font-semibold text-white py-2 px-4  md:text-base text-sm">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
