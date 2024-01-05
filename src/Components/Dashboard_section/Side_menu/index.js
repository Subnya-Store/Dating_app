import React from 'react'
import DashboardMenu from './DashboardMenu'
export default function index({setStateHeader,setHamburger,hamburger}) {
  return (
    <div className={`bg-whiteColor absolute z-40 bottom-0 top-0 md:relative`}>
    {/* <div className='bg-whiteColor '> */}
        < DashboardMenu hamburger={hamburger} setHamburger={setHamburger} setStateHeader={setStateHeader}/>
    </div>
  )
}
