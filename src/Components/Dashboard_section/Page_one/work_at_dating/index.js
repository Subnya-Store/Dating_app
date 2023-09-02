import React from 'react'

export default function index() {
    const img ="Images/dating_work.svg";
  return (
    <div className='bg-[#FD2579]  rounded-lg p-10'>
    <h2 className='text-white text-3xl font-bold pt-5 pb-5'>Work at Dating</h2>
    <p className='text-white text-xl pt-5 '>Would you fight for your work or partner?</p>
    <ul className='flex justify-between'>
        <li><button className='text-white text-xl border-b-2 pt-10 justify-center'>View Careers</button></li>
        <li className=' pt-5'> <img src={img}/></li>
    </ul>
    
    </div>
  )
}
