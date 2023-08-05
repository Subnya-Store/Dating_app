import React, { useState } from 'react'
import Sign_up from './Sign_up'
import Account_details from './account_details'

export default function index() {
  const [state, setState] = useState("signup")

  console.log(state)
  return (
    <div className="bg-[url('/images/Signup_img.png')] py-4 bg-center  bg-no-repeat  ">
      <button onClick={() => setState("signup")}> signup</button> <br />
      <button onClick={() => setState("SignIn")}> signIn</button>
      {
        state == "signup" && <Sign_up setState={setState} /> ||
        state == "SignIn" && <Account_details setState={setState} />
      }

    </div>
  )
}
