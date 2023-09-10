import Link from 'next/link'
import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
// import Link from 'next/link'

export default function index() {
  return (
    <div>
      <ul className='flex'>
        <li className=' cursor-pointer  pr-8'>
          <Link href='signin'>
            <button className=' bg-pinkColor  text-base shadow-lg  py-2   px-9  font-medium rounded-full  text-white '>Sign in</button>
          </Link>
        </li>
        <li className=' cursor-pointer  pr-6'>
          <Link href='signup'>
            <button className=' bg-pinkColor shadow-lg text-base py-2  px-9  font-medium rounded-full  text-white '>Create Account</button>
          </Link>
        </li>
        <li className='cursor-pointer pr-6  pt-3  text-2xl font-medium text-[#050062]'><RiSearchLine /></li>
      </ul>
    </div >
  )
}
