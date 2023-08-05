import React from 'react'
import AboutLeft from '@/Components/SectionAbout/AboutLeft';
import AboutRight from '@/Components/SectionAbout/AboutRight';


export default function index() {
  return (
    <div className='flex justify-between  bg-[#7000ED] pt-[530px] pb-10 -mt-[34%] px-16 '>
        <AboutLeft />
        <AboutRight />
    </div>
  )
}
