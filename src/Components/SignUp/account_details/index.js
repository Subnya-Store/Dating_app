import API from '@/API/API'
import Link from 'next/link'
import React from 'react'


export default function index({ setState, setInputs, inputs, toast }) {

  const sign_up_img = '/Images/SignIn_logo.png'
  const Make_acount = () => {
    // setState("email_vericaction")
    API.fetchPost(inputs, '/register')
      .then(x => {
        if (x.data.message == 'Verification email sent') {
          setState("email_vericaction")
        } else {

          toast.error(x.data.check, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        }
        // console.log(x.data.check)
      })
      .catch(x => console.log(x))
  }
  return (
    <div>
      <div className=" md:w-fit  bg-white p-8  my-12  mx-16 rounded-2xl shadow-lg -z-10 opacity-90">
        <div className=" flex">
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
        </div>
        <div className=" text-4xl font-bold py-4 capitalize"> Account Details</div>
        <div className="inline-flex gap-5 pt-1 pb-1">
          <button className="bg-[#7000ED] flex rounded-xl text-white py-2 pr-5" >
            <img className=" object-contain px-4" src="/Images/Google_img.png " /> signin with google
          </button>
          <button className="bg-[#7000ED] flex rounded-xl text-white  px-4 p-2">
            <img src="/Images/facbook_signin.png" className=" object-contain" />
          </button>
        </div>
        <div className="pt-1 pb-1 font-medium ">
          <label> Email Address</label>
          <input
            onChange={e => setInputs({ ...inputs, email: e.target.value })}

            className=" rounded-xl p-2  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none  w-72"
            type="email"
            placeholder="Michealjohn@gmail.com"
          />
        </div>
        <div className=" flex">
          <ul className="flex gap-4 ">
            <li>
              <div>
                <label> Password</label>
                <input
                  onChange={e => setInputs({ ...inputs, password: e.target.value })}

                  className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none"
                  type="password"
                  placeholder=""
                />
              </div>
            </li>
            <li>
              <div>
                <label> confirm</label>
                <input
                  onChange={e => setInputs({ ...inputs, confirm: e.target.value })}

                  className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none "
                  type="text"
                  placeholder=""
                />
              </div>
            </li>
          </ul>
        </div>

        <div className=" flex">
          <ul className="flex gap-4 ">
            <li>
              <div>
                <label> Country</label>
                <input
                  onChange={e => setInputs({ ...inputs, country: e.target.value })}

                  className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none"
                  type="text"
                  placeholder="UAE"
                />
              </div>
            </li>
            <li>
              <div>
                <label> City</label>
                <input
                  onChange={e => setInputs({ ...inputs, city: e.target.value })}

                  className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none "
                  type="text"
                  placeholder="New York"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="pt-1 pb-1">
          <button onClick={Make_acount} className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
