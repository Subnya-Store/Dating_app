import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import API from '@/API/API'


export default function index({ setState, inputs, setInputs }) {

  const VerifyNow = () => {
    API.fetchPost(inputs, '/verify_code')
      .then(x => {
        if (x.data.msg == 'Verified successfully !') {
          setState("Id_verification")
        }
      })
      .catch(x => console.log(x))
  }

  const sign_up_img = '/Images/SignIn_logo.png'
  return (
    <div>
      <div className=" md:w-fit  bg-whiteColor p-8  my-12  mx-16 rounded-2xl shadow-lg -z-10 opacity-90">
        {/* <div className=" flex">
          <ul className="flex justify-between w-80">
            <li>
              <img className="flex" src={sign_up_img} />
            </li>
            <li className=' w-32'>
              <Link href='signin' className="  text-[#7000ED]">
                Already have a account? <br />Sign In.
              </Link>
            </li>
          </ul>
        </div> */}
        <div className=" text-4xl font-bold py-4 capitalize"> Email <br />
          Verification</div>

        {/* <div className="pt-1 pb-1 font-medium ">
          <label>Verify your Email</label>
          <input
            // onChange={e => setInputs({ ...inputs, mobile_no: e.target.value })}
            className=" rounded-xl p-3  bg-[#FFF] m-1 flex border border-[#7000ED]  outline-none  w-72"
            value={inputs.email}
            type="email"
            placeholder="Michael@gmail.com"
          />
        </div> */}

        <div className=" flex mb-5">
          <ul className="flex gap-4 ">
            <li>
              <div>
                <label>Verification code sent to your email</label>
                <div className='flex'>
                  <input
                    onChange={e => setInputs({ ...inputs, code: e.target.value })}
                    className=" rounded-xl w-56  bg-[#FFF]  flex  px-2 py-2 border border-[#7000ED]  outline-none"
                    type="text"
                    placeholder="****"
                  />


                  <button className="bg-[#66D300] font-medium flex rounded-xl text-white px-2 py-2 m-1">
                    <img src='/Images/CheckPink.png' />
                  </button>

                </div>

              </div>
            </li>
          </ul>
        </div>


        <div className="pt-1 pb-1">
          <button onClick={VerifyNow} className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
