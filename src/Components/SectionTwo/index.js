import React from 'react'
import LeftSection from '@/Components/SectionTwo/LeftSection'
import RightSection from '@/Components/SectionTwo/RightSection'

export default function index() {
  return (
    <div className="flex  justify-between  py-24  justify-items-center "> 
      <LeftSection/>
      <RightSection/>
    </div>
  )
}
