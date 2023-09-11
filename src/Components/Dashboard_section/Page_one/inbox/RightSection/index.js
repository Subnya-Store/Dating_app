import React from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlinePlus} from 'react-icons/ai'


export default function index() {
  const array = [
    {

      text: "hey",
      text2: "Thats sounds good, i get off work around......",

    },
    {

      text: "whatsup",
      text2: "Teacher, 23",

    },
    {

      text: "Thats sounds good, i get off work around.",
      text2: "Teacher, 23",

    },
   
    {

      text: "Marie",
      text2: "Typing....",
    }

  ]
  return (
    <div className='  bg-white m-4  rounded-2xl w-[80%] h-[60%] overflow-y-auto '>
      {/* <div className="p-2">
        <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
      </div> */}
      {/* <div> <ul className='flex justify-between p-4'>
                <li className='  bg-[#D9D9D9] p-2 rounded-2xl  justify-middle flex'>
                    <form className="flex">
                    
                    <div>                     
                        <input className=' bg-[#D9D9D9] text-[#050062] placeholder:text-[#050062]' type="text" placeholder="Search" name="search" />
                    </div>
                    <div className="pt-1">                    
                         <button type="submit"><i> < AiOutlineSearch size={"25px"} /> </i></button>
                    </div>
                </form></li>
                <li className='p-4'><img src="/Images/bar.svg" /></li>
            </ul>
           
            
            
            </div> */}
<div >
                    <ul className='flex  justify-between items-center gap-3 p-4 m-2 '>
                        <li>
                            <figure className='flex gap-2'>
                                <img className=' w-14 rounded-[50%]' src='/images/img_1.png' />
                                <ul className='text-[#050062] '>
                                    <li className='font-bold  mt-4'> wjdhjwehdjh
                                    </li>
                                    
                                </ul>
                            </figure>
                        </li>

                        <li className="flex gap-6">
                            <div> <img src="/Images/video.png" /></div>
                            <div> <img src="/Images/phone.png" /></div>
                            <div> <img src="/Images/info.png" /></div>
                        </li>


                    </ul>


                </div>

      <div className='p-4'>
        {array.map(e =>
          <div className="py-3 ">
            <div className="  flex justify-start px-4"> <p className="p-2 rounded-xl bg-[#D9D9D9;]">{e.text}</p></div>
        
            <div className=" flex justify-end px-4"> <p className="  bg-[#FD166F] p-2 rounded-xl text-white">{e.text2}</p></div>
          </div>

        )}
         <div> <ul className='flex justify-between bg-[#D9D9D9] rounded-full my-2'>
                <li className=' rounded-full justify-middle flex'>
                    <form className="flex">
                    
                    <div>  
                    <div className=" flex gap-3 ">                    
                         <button type="search" className='rounded-[100%] shadow-lg p-3'><i> < AiOutlinePlus size={"25px"} className="text-red-700" /> </i></button>
                         <input className=' bg-[#D9D9D9] text-[#FD166F] placeholder:text-[#FD166F]' type="text" placeholder="Type here" name="search" />

                    </div>                   
                    </div>
                    
                </form></li>
                <li className='p-4'><img src="/Images/mic.png" /></li>
            </ul>
           
            
            
            </div>
      </div>

    </div>
  )
}

