import React from 'react'
import Leftsection from '@/Components/Aboutus/Sectiontwo/Left_sec';
import Rightsection from '@/Components/Aboutus/Sectiontwo/Right_sec'

export default function index() {
  return (
    <div className=' grid grid-cols-2 p-10'>
       <Leftsection/>
       <Rightsection/>
    </div>
  )
}
