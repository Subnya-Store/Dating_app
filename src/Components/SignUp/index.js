import React, { useState } from 'react'
import Sign_up from './Sign_up'
import Account_details from './account_details'
import Id_verification from './ID_Verification'
import Email_verifaction from '@/Components/SignUp/Verification'
import Questions from './Questions'

export default function index() {
  const [state, setState] = useState("signup")
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    full_name: '',
    middle_name: '',
    last_name: '',
    country: '',
    city: '',
    code: '',
    ID_card:'',
    age:'',
    LegalID:''
  })
  // console.log(inputs)
  return (
    <div className=" relative bg-[url('/Images/Signup_img.png')] md:py-4 bg-center  bg-no-repeat md:h-screen  ">
      <div className="  absolute  flex items-center  bg-[#0500629e]    bottom-0 top-0 left-0 w-[100%]  h-[100%] ">

        {
          state == "signup" && <Sign_up setInputs={setInputs} inputs={inputs} setState={setState} /> ||
          state == "AccountDetails" && <Account_details setInputs={setInputs} inputs={inputs} setState={setState} /> ||
          state == "email_vericaction" && <Email_verifaction setInputs={setInputs} inputs={inputs} setState={setState} /> ||
          state == "Id_verification" && <Id_verification setInputs={setInputs} inputs={inputs} setState={setState} /> 
        }

      </div>
      <div>
        {state == 'questions' && <Questions setState={setState} />}
      </div>
    </div>
  )
}
