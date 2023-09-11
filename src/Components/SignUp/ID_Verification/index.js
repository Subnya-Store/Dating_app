import React from 'react'
import Link from 'next/link'

export default function index({setState}) {
    const sign_up_img ='Images/SignIn_logo.png/'
    const id_varification ='Images/id_varification.png'
    return (
      <div>
            <div className=" md:w-1/3  bg-white p-8  my-12  mx-16 rounded-2xl shadow-lg -z-10 opacity-90">
        <div className=" flex">
          <ul className="flex justify-between w-80">
            <li>
              <img className="flex" src={sign_up_img}/>
            </li>
            <li className=' w-32'>
  
             
              <Link  href='signin' className="  text-[#7000ED]">
              Already have a account? <br/>Sign In. </Link>
            </li>
          </ul>
        </div>
        <div className=" text-4xl font-bold py-4 capitalize"> 
        <ul className=' justify-between flex'>
            <li>
            ID Verification
            </li>
            <li>
            
            </li>
        </ul>
        
        </div>
        
      
  
  
  
  
        <div className=" flex">
          <ul className="flex gap-4 ">
            <li>
            <div> 
               <label> ID Card</label>
          <input
            className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none "
            type="image" src="Images/input_image.png"
            placeholder=""
          />
          <input
            className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none "
            type="text" 
            placeholder=" Upload"
          />
            </div>
            </li>
            <li>
  
           
            <div> 
               <label> Age</label>
          <input
            className=" rounded-xl p-2 w-34  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none"
            type="date"
            placeholder=""
          />
          <li className=' pt-6 pl-2'>
          <img className="flex" src={id_varification}/>

          </li>
          
            </div>
            </li>
          </ul>
        </div>
  
        <div className="pt-1 pb-1 font-medium ">
          <label> Legal ID</label>
          <input
            className=" rounded-xl p-2  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none  w-72"
            type="text"
            placeholder=""
          />
        </div>
  
  
  
  
       
        <div className="pt-1 pb-1">
          <button  onClick={() => setState("questions")} className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
          Next
          </button>
        </div>
      </div>
      </div>
    )
  }