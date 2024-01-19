import Link from 'next/link'
import React from 'react'

export default function cancel() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='bg-[#7000ED] text-white rounded-3xl h-[30%] w-[90%] md:w-[50%] flex flex-col justify-center items-center'>

        <div className='text-5xl font-extrabold'>
          Order Cancelled
        </div>
        Your order has been cancelled
        <Link href={'signin'}>
          click here to Redirect to Sign in
        </Link>
      </div>
    </div>
  )
}
