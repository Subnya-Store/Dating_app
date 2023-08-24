import React from 'react'
import Matches from './Matches'
import Activity_folder from '@/Components/Dashboard_section/Page_one/Matches/Activity_folder'


export default function index() {
  return (
    <div className="bg-[url('/Images/Dashboard_pg1.png')]  bg-center  bg-no-repeat h-screen ">
       <Matches/>
       <Activity_folder/>
    </div>
  )
}
