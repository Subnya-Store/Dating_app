import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function index() {
    return (
        <div className='flex justify-center items-center '>
            <div className='bg-[#7000ed] absolute opacity-50 top-0 bottom-0 right-0 left-0 z-10'></div>
            <div className=' absolute flex justify-center items-center z-20 top-0 bottom-0 right-0 left-0 '>
                <div className='animate-spin'>
                    <AiOutlineLoading3Quarters color='#fd166f' size={50} />
                </div>
            </div>
        </div>
    )
}
