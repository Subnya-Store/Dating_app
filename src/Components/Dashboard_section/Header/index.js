import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
export default function index({stateHeader,setStateHeader}) {
  return (
    <div className="dash_header shadow-lg bg-[#FFFFFF] py-4">
        <div className="container mx-auto px-4">
        <div className=' md:flex  justify-between items-center'>
        <LeftHeader stateHeader={stateHeader} setStateHeader={setStateHeader}/>
        <RightHeader/>
        </div>
        </div>
    </div>
  )
}
