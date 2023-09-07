import React from 'react'
import DashboardMenu from './DashboardMenu'
export default function index({setStateHeader}) {
  return (
    <div>
        < DashboardMenu setStateHeader={setStateHeader}/>
    </div>
  )
}
