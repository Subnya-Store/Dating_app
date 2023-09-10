import React from 'react'
import Leftsection from '@/Components/Dashboard_section/Page_one/inbox/LeftSection'
import Rightsection from "@/Components/Dashboard_section/Page_one/inbox/RightSection"

export default function index() {
    return (
        <div className=" relative bg-[url('/Images/Dashboard_pg1.png')]     w-[100%] h-screen  bg-center  bg-cover  bg-no-repeat   ">
            <div className="  absolute  before:content-[]   bg-[#0500629e]  overflow-y-scroll  bottom-0 top-0 left-0 w-[100%]  h-[100%] ">

                <div className="flex py-5 px-5 gap-10">
                    <div className='w-[50%]'>
                        <div className="px-4 py-1">
                            <button className=" bg-transparent text-white  items-center text-center cursor-pointer font-semibold py-2 px-4 text-2xl">
                            Inbox
                            </button>
                        </div>
                        <Leftsection />
                    </div >

                    <div className='w-[50%]'>


                        <div className="px-4 py-1 justify-end flex">
                            <button className=" bg-white text-[#FD2579] rounded-md items-center text-center cursor-pointer font-semibold py-2 px-4">
                                Back
                            </button>
                        </div>

                        <Rightsection /></div>
                </div>
            </div>
        </div>
    )
}
