import React from 'react'
import Image from 'next/image'

export default function index() {
 
  return (
    <div className=' w-[50%]'> 
     <Image
      src="/Images/about-img.png"
      width={700}
      height={700}
      alt="about img"
    />
   
    </div>
  )
}
