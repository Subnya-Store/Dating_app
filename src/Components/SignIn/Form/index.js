import React, { useState } from "react";
import Link from 'next/link'
import axios from 'axios'
import API from "@/API/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const hitApi = () => {
    API.fetchPost(credentials, '/login')
      .then(x => {
        // console.log(x,'data')
        if (x?.data?.message === 'Logged in successfully') {
          toast.success(x?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          localStorage.setItem('user', x?.data?.token)
          window.location.href = '/dashboard'
        } else {
          toast.error(x?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })

        }
        
      })
      .catch(x => console.log(x, 'error'))
  }
  const Singin_logo = "/Images/SignIn_logo.png";
  return (
    <div className=" md:w-[450px]  bg-whiteColor p-8  flex flex-col  mx-16 rounded-2xl shadow-lg-z-10 opacity-90">
      <ToastContainer />
      <div className=" flex">
        <ul className="flex justify-between w-full">
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
      <p className=" text-4xl font-bold py-8 capitalize"> Sign In</p>
      <div className="inline-flex gap-5 pt-6 pb-6 ">
        <button className="bg-[#7000ED] flex rounded-xl text-white py-2 pr-5">
          <img className=" object-contain px-4" src="/Images/Google_img.png " />
          Sign in with google
        </button>
        <button className="bg-[#7000ED] flex rounded-xl text-white  px-4 p-2">
          <img src="/Images/facbook_signin.png" className=" object-contain" />
        </button>
      </div>
      <div className="pt-4 pb-4 font-medium ">
        <p> Username or Email Address</p>
        <input
          className=" rounded-xl p-3  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none  w-72"
          type="email"
          onChange={e => setCredentials({ ...credentials, username: e.target.value })}
          placeholder="hello@yourdestinydating.com"
        />
      </div>
      <div>
        <ul className="flex justify-between w-72">
          <li className="mb-3">

            <p> Password</p>
          </li>
          <li className=" text-[#7000ED]">
            <p> Forgot password?</p>
          </li>
        </ul>
        <input
          className=" rounded-xl bg-[#FFF]  p-3 flex border outline-none border-[#7000ED]  w-72"
          type="password"
          onChange={e => setCredentials({ ...credentials, password: e.target.value })}
          placeholder="Password"
        />
      </div>
      <div className="pt-4 pb-4">
        {/* <Link href="/dashboard"> */}
        <button onClick={hitApi} className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
          Sign in
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
