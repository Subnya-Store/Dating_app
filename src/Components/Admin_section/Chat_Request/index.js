import React from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlineSearch } from 'react-icons/ai'

export default function index() {
    const array = [
        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Thats sounds ",
            button_text: "New!"
        },
        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "New!"
        },
        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "New!"
        },

        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "2"
        }

    ]
    return (
        <div>
            <h2 className=' text-white font-bold text-[29px] px-4'> Chat Request</h2>
            <div className=' bg-white   rounded-2xl   min-w-[250px]  w-full py-2 px-2'>

                {/* <div className=' '> */}
                {array.map(e =>
                    <div className='gap-4 py-2 w-full'>
                        <div className='flex w-full items-center'>
                            <div>
                                <img className=' w-14 rounded-[50%]' src={e.img} />
                            </div>
                            <div className='flex w-full justify-between px-2 items-center'>
                                <div>
                                    <div className='font-bold '>{e.text}</div>
                                    <div className='text-[#FD2579] '>
                                        {e.text2}
                                    </div>
                                </div>
                                <div className="bg-[#e4cffc] text-[#FD2579] flex rounded-xl items-center text-center cursor-pointer font-semibold p-2">
                                    {e.button_text}
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                )}
            </div>

        </div>

    )
}



