import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
export default function index() {
  return (
    <div className="dash_header bg-[#FFFFFF] py-4">
        <div className="container mx-auto px-4">
        <div className=' flex justify-between'>
        <LeftHeader/>
        <RightHeader/>
        </div>
        </div>
    </div>
  )
}
