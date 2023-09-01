import React from 'react'

export default function index() {
    const array = [
        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: 'Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        }
      
    ]
    return (
        <div className='  bg-white m-4  rounded-md grid grid-cols-2 gap-x-8 '>
        
            {array.map(e =>
                <div >
                    <ul className='flex  justify-between items-center gap-3  border-[#BAAEAE] p-2 border-b-2 m-2 '>
                        <li>
                            <figure className='flex gap-2'>
                                <img className=' w-14 rounded-[50%]' src={e.img} />
                                <ul className='text-[#050062]'>
                                <li className='font-bold '>{e.text}
                                </li>
                                <li>
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
    )
}
