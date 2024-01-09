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
    <div className='flex w-full'>
      
      <div className="w-full relative bg-[url('/Images/Dashboard_pg1.png')] h-screen  bg-center  bg-cover  bg-no-repeat">
        <div className="absolute flex justify-center  bg-[#0500629e]  overflow-y-auto  bottom-0 top-0 left-0 w-full ">
          <div className=' w-[98%]  h-screen overflow-y-auto'>
            <Slider />
            <div className='flex justify-between flex-col md:flex-row h-[50%]  w-full bg-red-200'>
              <Activity />
              <div className='w-full flex flex-col md:flex-row '>

                <div className=' rounded-2x pt-9  px-2 w-full'>
                  {/* <div className='w-[100%] mt-1 rounded-2xl h-[360px] bg-whiteColor'>
                    hello
                  </div> */}
                  {/* <div className='flex'>
                    <Work_at_Dating />
                    <Improve_your_Matches />
                  </div> */}
                </div>
                {/* <div>
                  <May_Like />
                  <Chat_Request />
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
