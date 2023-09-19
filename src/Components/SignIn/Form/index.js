import React from "react";
import Link from 'next/link'
import axios from 'axios'

export default function index() {
    const hitApi =() => {
    console.log("clicked")
    axios.post("https://api101.investit.store/login", {
      username: "waleed",
      password: "admin"
    })
    .then(x=>console.log(x))
  }
  const Singin_logo = "Images/SignIn_logo.png";
  return (

    <div className=" md:w-1/3  bg-white p-8  my-12  mx-16 rounded-2xl shadow-lg -z-10 opacity-90">
      <div className=" flex">
        <ul className="flex justify-between w-72">
          <li>
            <img className="flex" src={Singin_logo} />
          </li>
          <li>
            <Link href='signup'>
              <p className="text-right pl-6 text-[#7000ED]">
                Don’t have an account? Sign Up.
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className=" text-4xl font-bold py-4 capitalize"> Sign In</div>
      <div className="inline-flex gap-5 pt-6 pb-6 ">
        <button className="bg-[#7000ED] flex rounded-xl text-white py-2 pr-5">
          <img className=" object-contain px-4" src="Images/Google_img.png " /> Sign in
          with google
        </button>
        <button className="bg-[#7000ED] flex rounded-xl text-white  px-4 p-2">
          <img src="Images/facbook_signin.png" className=" object-contain" />
        </button>
      </div>
      <div className="pt-4 pb-4 font-medium ">
        <label> Username or Email Address</label>
        <input
          className=" rounded-xl p-3  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none  w-72"
          type="email"
          placeholder="hello@yourdestinydating.com"
        />
      </div>
      <div>
        <ul className="flex justify-between w-72">
          <li className="mb-3">

            <label> Password</label>
          </li>
          <li className=" text-[#7000ED]">
            <label> Forgot password?</label>
          </li>
        </ul>
        <input
          className=" rounded-xl bg-[#FFF]  p-3 flex border outline-none border-[#7000ED]  w-72"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="pt-4 pb-4">
        {/* <Link href="/Dashboard"> */}
        <button onClick={()=>hitApi()}  className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
          Sign in
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
