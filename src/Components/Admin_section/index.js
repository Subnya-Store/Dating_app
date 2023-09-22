import React from 'react'
import Header from '@/Components/Admin_section/Header_admin'
import Side_bar from '@/Components/Admin_section/Side_menu_admin'
import Slider from '@/Components/Admin_section/Slider'
import Activity from '@/Components/Dashboard_section/Page_one/Matches/Activity_folder'
import May_Like from '@/Components/Admin_section/You_May_Like'
import Chat_Request from '@/Components/Admin_section/Chat_Request'
import Work_at_Dating from '@/Components/Admin_section/Work_at_Dating'
import Improve_your_Matches from '@/Components/Admin_section/Improve_your_Matches'

export default function index() {
  return (
    <div>
      <div className='flex w-full'>
        <div className='w-[15%]'>
          <Side_bar />
        </div>
        <div className='w-[85%]'>
        <div className=" relative bg-[url('/Images/Dashboard_pg1.png')]     w-[100%] h-screen  bg-center  bg-cover  bg-no-repeat   ">
      <div className="  absolute  before:content-[]   bg-[#0500629e]  overflow-y-scroll  bottom-0 top-0 left-0 w-[100%]  h-[100%] ">
          <Header />
          <div className='mx-2'>
          <Slider />
          </div>
          <div className='flex mx-2'>
            <div className='w-[30%]'>
              <Activity />
            </div>
            <div className='w-[40%]'>
             <div className='my-10  rounded-2xl bg-white py-6 h-[50%] mx-2'> 
             <img src='images/Vector.png' />
             </div>
              <div className='flex'>
                <Work_at_Dating/>
               <Improve_your_Matches/>
              </div>

            </div>
            <div className='w-[30%]'>
              <May_Like />
              <Chat_Request/>
            </div>
          </div>
        </div>


      </div>

    </div>
    </div>
    </div>

  )
}
