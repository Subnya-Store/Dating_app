import React from 'react'
import Image from 'next/image' 
export default function index() {

  return (
    <div className='md:flex justify-center'>
        <Image
      src="/Images/logo-img.png"
      className='  object-contain '
      width={150}
      height={100}
      alt="logo"
    />
    
    </div>
  )
}
