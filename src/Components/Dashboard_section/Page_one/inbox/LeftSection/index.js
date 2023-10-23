import React from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlineSearch } from 'react-icons/ai'

export default function index() {
    const array = [
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Thats sounds good,  work around......",
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
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "2"
        },
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "2"
        },
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "2"
        }

    ]
    return (
        <div className=' bg-white md:m-4  rounded-2xl h-[400px]   md:w-[80%] w-full py-2 md:px-1'>
            {/* <div className="p-2">
        <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
      </div> */}
             <div> <ul className='flex justify-between p-4 '>
                <li className='  bg-[#D9D9D9] p-2 rounded-2xl  justify-middle flex'>
                    <form className="flex">

                       
                        <div className="pt-1 flex">

                            <input className=' bg-[#D9D9D9] text-[#050062] placeholder:text-[#050062]' type="text" placeholder="Type here" name="search" />
                            <button type="submit"><i> < AiOutlineSearch size={"25px"} /> </i></button>
                        </div>
                    </form></li>
                <li className='p-4'><img src="/Images/bar.svg" /></li>
            </ul>
            
            </div> 
             <div className='overflow-y-scroll h-[80%]'>
                {array.map((e,i) =>
                    <div key={i} >
                        <ul className='flex  justify-between items-center gap-3  border-[#BAAEAE] p-2  border-b m-2  '>
                            <li>
                                <figure className='flex gap-2 overflow-y'>
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
    )
}



