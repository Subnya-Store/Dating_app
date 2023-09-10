import React from 'react'
import SectionLeft from '@/Components/SectionThree/SectionLeft';
import SectionRight from '@/Components/SectionThree/SectionRight'

export default function index() {
  return (
    <div className=' bg-gradient-to-t from-[#FF80B4] to-[#D74EFF] '>
        <div className='md:flex'>
      < SectionLeft/>
        <SectionRight/>
      </div>
    </div>
  )
}
