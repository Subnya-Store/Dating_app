import React from 'react'
import LeftSection from '@/Components/SectionTwo/LeftSection'
import RightSection from '@/Components/SectionTwo/RightSection'

export default function index() {
  return (
    <div className="md:flex bg-[url('/Images/MaskCouple.jpg')]  md:bg-[url('/Images/Maskgroup.png')]  h-auto py-40 px-10 items-center z-40 "> 
      <LeftSection/>
    </div>
  )
}
