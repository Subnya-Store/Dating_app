import React from 'react'

export default function index() {
  const Banner_img = '/Images/banner-img.png'
  return (
    <div className='md:w-[50%] md:pt-2 w-full'>
     <img  className='w-[100%] ' src={Banner_img}/>
    </div>
  )
}
