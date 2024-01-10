import React from 'react'
import Image from 'next/image'

export default function index() {
 
  return (
    <div className=' md:w-[50%]'> 
     <Image
      src="/Images/whitePhoto.png"
      width={700}
      height={700}
      alt="about img"
    />
   
    </div>
  )
}
