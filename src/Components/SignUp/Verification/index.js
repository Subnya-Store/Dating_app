import Link from 'next/link'
import React from 'react'
import axios from 'axios'


export default function index({ setState,inputs,setInputs }) {

  // const hitApi =() => {
  //   axios.post("https://api101.investit.store/login", {
  //     username: "waleed",
  //     password: "admin"
  //   })
  //   .then(x=>console.log(x))
  // }
 


//   const hitApi = () => {
//     axios.post('”https://api101.investit.store/login“')
//     const [username, setusername] = useState({})
//     const [password, setpassword] = useState({})
//     const [full_name, setfull_name] = useState({})
//         .then(x => console.log(x))
//         .catch(x => console.log(x))
// }



  const sign_up_img = 'Images/SignIn_logo.png/'
  return (
    <div>
      <div className=" md:w-1/3  bg-white p-8  my-12  mx-16 rounded-2xl shadow-lg -z-10 opacity-90">
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
        <div className=" text-4xl font-bold py-4 capitalize"> phone <br/>
Verification</div>
        
        <div className="pt-1 pb-1 font-medium ">
          <label>Mobile Number</label>
          <input
          onChange={e=>setInputs({...inputs,mobile_no:e.target.value})}
            className=" rounded-xl p-3  bg-[#FFF] m-1 flex border border-[#7000ED]  outline-none  w-72"
            type="number"
            placeholder="+1234578951564"
          />
        </div>
        <div className=" flex mb-5">
          <ul className="flex gap-4 ">
            <li>
              <div>
                <label> OTP Verification</label>
                <div className='flex'> 
                <input
                          onChange={e=>setInputs({...inputs,otp_code:e.target.value})}

                  className=" rounded-xl w-56  bg-[#FFF]  flex  px-2 py-2 border border-[#7000ED]  outline-none"
                  type="text"
                  placeholder="*************"
                />
              
        
          <button className="bg-[#66D300] font-medium flex rounded-xl text-white px-2 py-2 m-1">
            <img src='images/CheckPink.png'/>
          </button>
     
                </div>
             
              </div>
            </li>
            <li>
            
            </li>
          </ul>
        </div>

       
        <div className="pt-1 pb-1">
          <button onClick={() => setState("Id_verification")} className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
