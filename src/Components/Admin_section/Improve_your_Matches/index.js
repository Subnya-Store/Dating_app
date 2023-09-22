import React from 'react'

export default function index() {
  return (
    <div className='flex bg-white py-6 m-2 rounded-xl '>
        <div className=''>
            <h2 className='text-[#050062] font-bold text-[25px] px-4 py-3'> Improve your Matches</h2>
            <p className='text-[#050062] text-[21px] px-4'>Would you fight for your work or partner?</p>
            <ul className='flex justify-center gap-2 pt-9 '>
                <li><button className='bg-[#FF5CA5] rounded-md py-2 px-4'> No</button> </li>
                <li><button className='bg-[#00B5AC] rounded-md py-2 px-4'> yes</button> </li>
            </ul>
        </div>
    </div>
  )
}
