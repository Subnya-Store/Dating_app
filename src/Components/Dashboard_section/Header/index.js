import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
export default function index({ stateHeader, setStateHeader,setHamburger,hamburger }) {
  return (
    <div className="dash_header shadow-lg bg-whiteColor py-4">
      <div className="container mx-auto px-4">
        <div className=' md:flex  justify-between items-center'>
          <LeftHeader hamburger={hamburger} setHamburger={setHamburger} stateHeader={stateHeader} setStateHeader={setStateHeader} />
          <RightHeader />
        </div>
      </div>
    </div>
  )
}
