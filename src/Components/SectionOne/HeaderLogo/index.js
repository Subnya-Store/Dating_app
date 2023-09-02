import React from 'react'
import Image from 'next/image' 
export default function index() {

  return (
    <div className='flex justify-center'>
        <Image
      src="/Images/logo-img.png"
      className='  object-contain'
      width={210}
      height={110}
      alt="logo"
    />
    
    </div>
  )
}
