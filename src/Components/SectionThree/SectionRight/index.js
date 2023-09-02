import React from 'react'
import Image from 'next/image'

export default function index() {
  return (
    <div className='w-[50%]'> 
     <Image
      src="/Images/Trust_and_safty.png"
      width={400}
      height={300}
      className=' object-cover h-[100%] w-full'
      alt="Picture of the author"
    />
    </div>
  )
}
