import React, { useState } from 'react'
import Sign_up from './Sign_up'
import Account_details from './account_details'
import Id_verification from './ID_Verification'
import Questions from './Questions'

export default function index() {
  const [state, setState] = useState("questions")

  console.log(state)
  return (
    <div className="bg-[url('/images/Signup_img.png')] py-4 bg-center  bg-no-repeat h-screen ">
      
      {
        state == "signup" && <Sign_up setState={setState} /> ||
        state == "SignIn" && <Account_details setState={setState} /> ||
        state == "Id_verification" && <Id_verification  setState={setState} /> ||
        state == 'questions' && <Questions setState={setState}/>
        
      }

    </div>
  )
}
