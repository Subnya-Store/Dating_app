import React from 'react';
import {BsThreeDots} from 'react-icons/bs'

export default function index() {
  return (
    <div className='activity_box mt-10 w-[50%]  rounded-2xl bg-white py-6' >
    <div className='container mx-auto px-4'>
    <table border={1}>
      <tr>
        <th><h4 className='text-[#050062] text-2xl  font-bold'>Activity</h4></th>
        <th colSpan={6} className='text-[#050062] text-2xl  font-bold'><BsThreeDots/></th>
      </tr>
      <tr>
      </tr>
    </table>
    </div>
    </div>
  )
}
