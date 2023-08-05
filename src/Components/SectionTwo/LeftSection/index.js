import React from 'react'

export default function index() {
  return (
    
    <div className='w-[48%]'>
        <h5 className='text-[#FD166F] uppercase  font-bold text-5xl'>Your Destiny</h5>
        <h1 className='text-[#FD166F] uppercase  font-bold text-9xl'>Dating</h1>
        <h6 className=' text-black text-3xl uppercase font-bold'>Your Journey begins here</h6>
        <p className=' text-black text-base font-medium mt-2'> Welcome! Your Journey begins here! Meet people for dating & friendships in real life.This experience is not a online site for digital dating or digital friendships, it is designed for physical dating and physical friends to meet in real life, and to persue whichever venue you wish.</p>

        <ul className='flex  justify-start  pt-4'>
            <li className=' cursor-pointer  pr-6'><button className=' bg-pinkColor shadow-lg  py-2  px-6  font-medium rounded-full  text-white '>Find your love</button></li>
            <li className=' cursor-pointer  pr-6'><button className=' text-pinkColor shadow-lg  py-2  px-6  font-medium rounded-full  bg-white '> Find your friendship</button></li>
        </ul>
    </div>
  )
}
