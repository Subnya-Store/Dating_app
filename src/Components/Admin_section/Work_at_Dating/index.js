import React from 'react'

export default function index() {
  return (
    <div className='flex bg-[#FD2579] py-6 m-2 rounded-xl '>
        <div className=''>
            <h2 className='text-white font-bold text-[25px] px-4 py-3'> Work at Dating</h2>
            <p className='text-white text-[21px] px-4'>Would you fight for your work or partner?</p>
            <ul className='flex '>
                <li className='text-white  text-[18px]  pt-20'><p className='border-b-2 border-[#fff]'>  View Careers</p> </li>
                <li><img src='/Images/ViewCareers.svg' /></li>
            </ul>
        </div>
    </div>
  )
}
