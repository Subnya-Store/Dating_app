import React from 'react'
import LeftSection from '@/Components/SectionTwo/LeftSection'
import RightSection from '@/Components/SectionTwo/RightSection'

export default function index() {
  return (
    <div className="md:flex  justify-between  md:py-14 py-0  justify-items-center z-40"> 
      <LeftSection/>
      <RightSection/>
    </div>
  )
}
