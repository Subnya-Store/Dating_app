import React, { useEffect, useState } from 'react'
import SectionOne from "@/Components/SectionOne";
import SectionTwo from "@/Components/SectionTwo";
import SectionThree from "@/Components/SectionThree";
import SectionFour from "@/Components/sectionFour";
import SectionFive from "@/Components/sectionFive";
import SectionSix from "@/Components/sectionSix";
import SectionAbout from "@/Components/SectionAbout";
// import BgShapes from "@/Components/BgShapes";
import SectionSteps from "@/Components/SectionSteps";
// import { requestFortoken } from '@/Firebase';
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import Image from 'next/image';

const firebaseConfig = {
  apiKey: "AIzaSyA5iWSQw61-km2u2XusWWgy6SX3wQH24x4",
  authDomain: "forpush-notify.firebaseapp.com",
  projectId: "forpush-notify",
  storageBucket: "forpush-notify.appspot.com",
  messagingSenderId: "565931321714",
  appId: "1:565931321714:web:10907b4c5ceeb765cc95eb",
  measurementId: "G-F2412L8SLH"
};


// if (app != null) {
// }
export default function index() {
  let messaging, user

  // console.log(user)
  const [contruction, setConstruction] = useState(true)
  const requestForToken = () => {
    return getToken(messaging, { vapidKey: "BAiuRjrYmAoyKmoIy2uqbajt3iH2B0KP-_ovjbuazcGOCupx9XhaI5v4qV4pJO2UCZfEai-D8jBgLw_jwDAZapU" })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };
  useEffect(() => {
    user = localStorage.getItem('user')
    if (user != undefined) {
      const app = initializeApp(firebaseConfig);
      messaging = getMessaging(app);
      requestForToken()
    }
  }, [])
  return (
    <div>
      {!contruction ?
        <div className='md:w-full md:h-screen overflow-hidden'>
          <img className='md:w-full md:h-full' src='/Images/cool.jpg' />
        </div>
        :
        <>
          {/* START */}
          <div className=" bg-gradient-to-r border-1 overflow-hidden relative from-[#D74EFF] to-[#FF80B4] py-5 px-5">
          
            <SectionOne />
          </div>
          <SectionTwo />
          {/* <div className=" bg-gradient-to-r border-1 overflow-hidden relative from-[#D74EFF] to-[#FF80B4] py-5 px-10 flex flex-col justify-center items-center">
            <div className='text-5xl text-blue-gray-50'>SPECIAL OFFER</div>
            <div className='text-xl text-blue-gray-50'>The FULL Training for just $67.00! SAVE $1997.00 for a limited time.</div>
            <img src='/Images/btn.png' />
          </div> */}
          <SectionAbout />
          <SectionSteps />
          {/* <SectionThree /> */}
        <SectionFour />
        <div>
          <img src='/Images/Group.png'/>
        </div>
           {/* <SectionFive /> */}
          <SectionSix />  
          {/* STOP */}
        </>
      }

    </div>
  );
}
