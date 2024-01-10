import React from 'react'

export default function index() {
  return (
    
    <div className='w-[50%]'>
        <h5 className='text-[#FD166F] uppercase  font-bold md:text-5xl text-lg '>Your Destiny</h5>
        <h1 className='text-[#FD166F] uppercase  font-bold md:text-6xl text-lg'>Dating</h1>
        <h6 className=' text-white md:text-3xl text-sm uppercase font-bold '>Your Journey begins here</h6>
        <div className=' text-white md:text-base text-sm font-medium mt-2'> Welcome! Your Journey begins here! Meet people for dating & friendships in real life.This experience is not a online site for digital dating or digital friendships, it is designed for physical dating and physical friends to meet in real life, and to persue whichever venue you wish.</div>

        <ul className='md:flex  md:justify-start justify-center pt-4'>
            <li className=' cursor-pointer  pr-6'><button className='  bg-pinkColor shadow-lg  py-2  px-6  md:font-medium rounded-full text-sm md:text-lg text-whiteColor '>Find your love</button></li>
            <li className=' cursor-pointer  pr-6'><button className=' text-pinkColor shadow-lg  py-2  px-6  md:font-medium rounded-full text-sm md:text-lg bg-whiteColor mt-3 md:mt-0'> Find your friendship</button></li>
        </ul>
    </div>
  )
}
