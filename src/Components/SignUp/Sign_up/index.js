import Link from 'next/link'
import React from 'react'
import axios from 'axios'

// import SectionSteps from '@/Components/SectionSteps'

export default function index({ setState, setInputs, inputs }) {
  const hitApi = () => {
    console.log("clicked"),
      axios.post("https://api101.investit.store/register", {
        username: "waleed",
        password: "admin",
        email: 'waleed@gmail.com'
      })
        .then(x => console.log(x))
  }



  const sign_up_img = '/Images/SignIn_logo.png/'

  return (
    <div>
      <div className=" md:w-[400px]  bg-white p-8  my-12  mx-16 rounded-2xl shadow-lg  opacity-90">
        <div className=" flex w-full">
          <ul className="flex justify-between w-full">
            <li>
              <img className="flex" src={sign_up_img} />
            </li>
            <li className=' w-32'>

              <Link href='signin' className="  text-[#7000ED]">
                Already have a account? <br />Sign In.
              </Link>

            </li>
          </ul>
        </div>
        <div className=" text-4xl font-bold py-4 capitalize cursor-pointer"> Sign up </div>
        <div className="inline-flex gap-5 pt-1 pb-1 ">
          <button className="bg-[#7000ED] flex rounded-xl text-white py-2 pr-5">
            <img className=" object-contain px-4" src="/Images/Google_img.png " /> Sign in
            with google
          </button>
          <button className="bg-[#7000ED] flex rounded-xl text-white  px-4 p-2">
            <img src="/Images/facbook_signin.png" className=" object-contain" />
          </button>
        </div>
        <div className=" flex">
          <ul className="flex gap-4 ">
            <li>
              <div>
                <label> Full name</label>
                <input
                  onChange={e => setInputs({ ...inputs, full_name: e.target.value })}
                  className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none"
                  type="text"
                  placeholder="Micheal"
                />
              </div>
            </li>
            <li>

              <div>
                <label> Middle name</label>
                <input
                  onChange={e => setInputs({ ...inputs, middle_name: e.target.value })}
                  className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none "
                  type="text"
                  placeholder="Jhon"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="pt-1 pb-1 font-medium ">
          <label> Last name</label>
          <input
            onChange={e => setInputs({ ...inputs, last_name: e.target.value })}
            className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none  "
            type="text"
            placeholder="Angelo"
          />
        </div>
        <div>
          <ul className="flex w-72">
            <li className="mb-3">

              <label>Username</label>
            </li>

          </ul>
          <input
            onChange={e => setInputs({ ...inputs, username: e.target.value })}

            className=" rounded-xl bg-[#FFF]  p-2 flex border outline-none border-[#7000ED] w-44"
            type="text"
            placeholder="Micheal jhon angelo"
          />
        </div>
        <div className="pt-1 pb-1">
          <button
            onClick={() => setState("AccountDetails")}
            //  onClick={() => hitApi()}
            className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
