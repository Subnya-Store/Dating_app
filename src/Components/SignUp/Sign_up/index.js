import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import API from '@/API/API'

// import SectionSteps from '@/Components/SectionSteps'

export default function index({ setState, setInputs, inputs }) {

  const sign_up_img = '/Images/SignIn_logo.png'

  return (
    <div>
      <div className=" md:w-[400px]  bg-whiteColor p-8  my-12  mx-16 rounded-2xl shadow-lg  opacity-90">
        <div className=" flex w-full">
          <div className="flex justify-between w-full">
            <div>
              <img className="flex" src={sign_up_img} />
            </div>
            <div className=' w-32'>

              <Link href='signin' className="  text-[#7000ED]">
                Already have a account? <br />Sign In.
              </Link>

            </div>
          </div>
        </div>
        <p className=" text-4xl font-bold py-4 capitalize cursor-pointer"> Sign up </p>
        <div className="inline-flex gap-5 pt-1 pb-1 ">
          <button className="bg-[#7000ED] flex rounded-xl text-white py-2 pr-5">
            <img className=" object-contain px-4" src="/Images/Google_img.png " /> Sign in
            with google
          </button>
          <button className="bg-[#7000ED] flex rounded-xl text-white  px-4 p-2">
            <img src="/Images/facbook_signin.png" className=" object-contain" />
          </button>
        </div>
        <form onSubmit={() => {
          setState("AccountDetails")
        }}>
          <div className=" flex">
            <div className="flex gap-4 ">
              <div>
                <div>
                  <p> Full name</p>
                  <input
                    required
                    onChange={e => setInputs({ ...inputs, full_name: e.target.value })}
                    className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none"
                    type="text"
                    placeholder="Micheal"
                  />
                </div>
              </div>
              <div>

                <div>
                  <p> Middle name</p>
                  <input
                    required
                    onChange={e => setInputs({ ...inputs, middle_name: e.target.value })}
                    className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none "
                    type="text"
                    placeholder="Jhon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className="pt-1 pb-1 font-medium ">
              <p> Last name</p>
              <input
                required
                onChange={e => setInputs({ ...inputs, last_name: e.target.value })}
                className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none  "
                type="text"
                placeholder="Angelo"
              />
            </div>
            <div className="pt-1 pb-1 font-medium ">
              <p> gender</p>
              <select
                required
                className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED] " name='Gender'
                placeholder='select gender'
                onChange={e => (console.log(e.target.value), setInputs({ ...inputs, gender: e.target.value }))}>
                <option></option>
                <option>male</option>
                <option>female</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex w-72">
              <div className="mb-3">

                <p>Username</p>
              </div>

            </div>
            <input
              required
              onChange={e => setInputs({ ...inputs, username: e.target.value })}

              className=" rounded-xl bg-[#FFF]  p-2 flex border outline-none border-[#7000ED] w-44"
              type="text"
              placeholder="Micheal jhon angelo"
            />
          </div>
          <div className="pt-1 pb-1">
            <button type='submit'
              className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
