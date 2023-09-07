import React from 'react'
import Leftsection from '@/Components/Dashboard_section/Page_one/inbox/LeftSection'
import Rightsection from "@/Components/Dashboard_section/Page_one/inbox/RightSection"

export default function index() {
    //backhround lagao g sir 
    return (
        <div className=" relative bg-[url('/Images/Dashboard_pg1.png')]     w-[100%] h-screen  bg-center  bg-cover  bg-no-repeat   ">
            <div className="  absolute  before:content-[]   bg-[#0500629e]  overflow-y-scroll  bottom-0 top-0 left-0 w-[100%]  h-[100%] ">

                <div className='w-[50%]'>   <Leftsection /></div>
                <div className='w-[50%]'> <Rightsection /></div>
            </div>
        </div>
    )
}
