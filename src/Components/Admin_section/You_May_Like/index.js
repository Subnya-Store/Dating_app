import React from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlineSearch } from 'react-icons/ai'

export default function index() {
    const array = [
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Thats sounds ",
            button_text: "New!"
        },
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "New!"
        },
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "New!"
        },



    ]
    return (
        <div className='pt-8 '>
            <h2 className=' text-white font-bold text-[29px] '> You May Like</h2>
            <div className=' bg-white   rounded-2xl  w-full py-2 md:px-1'>
                <div className='min-w-[250px]'>
                    {array.map((e,i) =>
                        <div key={i} >
                            <ul className='flex  justify-between items-center gap-3  border-[#BAAEAE] p-2  border-b m-2  '>
                                <li>
                                    <figure className='flex gap-2'>
                                        <img className=' w-14 rounded-[50%]' src={e.img} />
                                        <ul className='text-[#050062]'>
                                            <li className='font-bold '>{e.text}
                                            </li>
                                            <li className='text-[#FD2579] '>
                                                {e.text2}
                                            </li>
                                        </ul>
                                    </figure>
                                </li>

                                <li>
                                    <button className="bg-[#e4cffc] text-[#FD2579] rounded-md items-center text-center cursor-pointer font-semibold py-2 px-4">
                                        {e.button_text}
                                    </button>
                                </li>


                            </ul>


                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}



