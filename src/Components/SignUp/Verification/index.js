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
    <div className="h-screen flex items-center justify-center">
      <div className="bg-whiteColor p-8 mx-4 rounded-2xl shadow-lg max-w-md w-full">
      
        <p className=" text-4xl font-bold py-4 capitalize"> Email <br />
          Verification</p>
        <div className=" flex mb-5">
          <ul className="flex gap-4 ">
            <li>
              <div>
                <p>Verification code sent to your email</p>
                <div className='flex'>
                  <input
                    onChange={e => setInputs({ ...inputs, code: e.target.value })}
                    className=" rounded-xl w-56  bg-[#FFF]  flex  px-2 py-2 border border-[#7000ED]  outline-none"
                    type="text"
                    placeholder="****"
                  />

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
