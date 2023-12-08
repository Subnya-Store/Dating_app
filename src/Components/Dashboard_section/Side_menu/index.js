import React from 'react'
import DashboardMenu from './DashboardMenu'
export default function index({setStateHeader}) {
  return (
    <div className='bg-whiteColor'>
        < DashboardMenu setStateHeader={setStateHeader}/>
    </div>
  )
}
