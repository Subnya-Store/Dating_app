import Link from 'next/link'
import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
// import Link from 'next/link'

export default function index() {
  return (
    <div>
      <ul className='md:flex flex  justify-between'>
        <li className=' cursor-pointer  '>
          <Link href='signin'>
            <button className=' bg-pink-400  text-base shadow-lg  py-2   px-5 font-medium rounded-full  text-white min-w-[100px]'>Sign in</button>
          </Link>
        </li>
        <li className=' cursor-pointer  '>
          <Link href='signup'>
            <button className=' bg-pink-400 shadow-lg text-base py-2  px-5 font-medium rounded-full  text-white min-w-[150px]'>Create Account</button>
          </Link>
        </li>
        <li className='cursor-pointer  pt-3  text-2xl font-medium text-blackColor'><RiSearchLine /></li>
      </ul>
    </div >
  )
}
