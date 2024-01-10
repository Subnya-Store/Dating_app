import React from 'react'

export default function index() {
  const Banner_img = '/Images/banner-img.png'
  return (
    <div className='md:w-[50%]  w-full'>
     <img  className='w-fit ' src={Banner_img}/>
    </div>
  )
}
