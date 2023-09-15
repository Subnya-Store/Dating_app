import React from 'react'
import Leftsection from '@/Components/Membership/Planssection/LeftSection'
import MiddleSection from '@/Components/Membership/Planssection/Middlesection'
import Rightsection from '@/Components/Membership/Planssection/Rightsection'

export default function index() {
  return (
    <div className='md:flex justify-between p-10 mx-14 md:my-7 '>
       <div className=' md:w-[30%] py-5  '>
       <Leftsection/>
       </div>
       <div className=' md:w-[31%] py-5 '>
       <MiddleSection/>
       </div>
       <div className=' md:w-[30%] py-5 '>
       <Rightsection/>
       </div>

       
        
    </div>
  )
}
