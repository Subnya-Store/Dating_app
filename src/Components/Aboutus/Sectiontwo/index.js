import React from 'react'
import Leftsection from '@/Components/Aboutus/Sectiontwo/Left_sec';
import Rightsection from '@/Components/Aboutus/Sectiontwo/Right_sec'

export default function index() {
  return (
    <div className=' md:flex md:px-16 py-5 md:mx-8'>
       <div className=' w-[50%]'>
       <Leftsection/>
       </div>
       <div className='w-[50%]'>
       <Rightsection/>
       </div>
    </div>
  )
}
