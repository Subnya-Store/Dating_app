import React, { useState } from 'react'
import Sign_up from './Sign_up'
import Account_details from './account_details'
import Id_verification from './ID_Verification'
import Phone_verifaction from '@/Components/SignUp/Verification'
import Questions from './Questions'

export default function index() {
  const [state, setState] = useState("signup")
  const [inputs,setInputs]=useState({
    username:'',
    password:'',
    full_name:'',
    middle_name:'',
    last_name:''
  })

  console.log(inputs)
  return (
    // <div className=" relative bg-[url('/Images/Signup_img.png')] md:py-4 bg-center  bg-no-repeat md:h-screen ">
    //         <div className="  absolute  before:content-[]   bg-[#0500629e]    bottom-0 top-0 left-0 w-[100%]  h-[100%] ">
    <div className=" relative bg-[url('/Images/Signup_img.png')] md:py-4 bg-center  bg-no-repeat md:h-screen  ">
    <div className="  absolute  before:content-[]   bg-[#0500629e]    bottom-0 top-0 left-0 w-[100%]  h-[100%] ">

      {
        state == "signup" && <Sign_up setState={setState} /> ||
        state == "SignIn" && <Account_details setState={setState} /> ||
        state == "phone_vericaction" && <Phone_verifaction setState={setState}/>||
        state == "Id_verification" && <Id_verification  setState={setState} /> ||
        state == 'questions' && <Questions setState={setState}/>
        
      }

    </div>
    </div>
  )
}
