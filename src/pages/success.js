import API from '@/API/API'
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function success() {

  useEffect(() => {
    const Strip_wala = localStorage.getItem('strip_wala');

    //  console.log(Strip_wala)
    API.fetchPost({
      price: Strip_wala
    }, '/success')
      .then(x => {
        localStorage.setItem('strip_wala', 0)
      })
      .catch(x => console.log(x))
  }, [])

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='bg-[#7000ED] text-white rounded-3xl h-[50%] w-[90%] md:w-[50%] flex flex-col justify-center items-center'>
        <img src='/Images/tick.png' />
        <div className='text-xl font-extrabold'>
          Order Successfully !
        </div>
        <Link href={'dashboard'}>
          click here to Redirect to Dashboard
        </Link>
      </div>
      {/* successfully purchased!
      <Link href={'dashboard'}>
        Redirect to Dashboard
      </Link> */}
    </div>
  )
}
