import React, { useEffect, useState } from 'react'
import Sign_up from './Sign_up'
import Account_details from './account_details'
import Id_verification from './ID_Verification'
import Email_verifaction from '@/Components/SignUp/Verification'
import Questions from './Questions'
import { useRouter } from 'next/router'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
  const [state, setState] = useState("questions")
  const router = useRouter()
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
    ID_card: '',
    age: '',
    LegalID: '',
    gender: ''
  })
  // console.log(router.asPath.includes('ref'))
  useEffect(() => {
    if (router?.asPath?.includes('ref')) {
      setState('Id_verification')
    } else {
      console.log('ref not available')
    }
  }, [])

  return (
    <div className="relative bg-[url('/Images/Signup_img.png')] bg-center bg-no-repeat min-h-screen flex justify-center items-center">
      <div className="absolute w-full h-full bg-[#0500629e]">
        <div className='flex items-center  bg-[#0500629e]  w-[100%]  h-[100%]  md:mt-0'>
          <ToastContainer />
          {
            state == "signup" && <Sign_up setInputs={setInputs} inputs={inputs} setState={setState} /> ||
            state == "AccountDetails" && <Account_details toast={toast} setInputs={setInputs} inputs={inputs} setState={setState} /> ||
            state == "email_vericaction" && <Email_verifaction setInputs={setInputs} inputs={inputs} setState={setState} /> ||
            state == "Id_verification" && <Id_verification setInputs={setInputs} inputs={inputs} setState={setState} /> ||
            state == 'questions' && <Questions setState={setState} inputs={inputs} />
          }
        </div>
      </div>

    </div>
  )
}
