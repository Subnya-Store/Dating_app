import API from '@/API/API'
import apiUrl from '@/API/constant'
import React, { useEffect, useState } from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlineSearch } from 'react-icons/ai'

export default function index({setProfile, setConversation_id,recieve_msgs, setrecieve_msg,msg, setmsg }) {

    
    const [Conversations, setConversation] = useState({msg, setmsg})
    useEffect(() => {
        API.fetchGet('/get_all_hookup')
            .then(x => setConversation(x.data.users))
            .catch(x => console.log(x))
    }, [])
    useEffect(() => {
        API.fetchGet('/get_all_hookup')
            .then(x => setConversation(x.data.users))
            .catch(x => console.log(x))
    }, [recieve_msgs,setrecieve_msg,msg])
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
                {Conversations&&Conversations.length > 0 && Conversations.map((e, i) =>
                    <div key={e.conve_id} >
                        <ul className='flex  justify-between items-center gap-3  border-[#BAAEAE] p-2  border-b m-2  '>
                            <li>
                                <figure className='flex gap-2 overflow-y'>
                                    <img className=' w-14 rounded-[50%]' src={apiUrl + '/Uploads/' + e?.user?.profile?.img} />
                                    <ul className='text-[#050062]'>
                                        <li className='font-bold '>
                                            {e?.user?.full_name}
                                        </li>
                                        <li className='text-[#FD2579] '>
                                            {e?.lastMessage}
                                        </li>
                                    </ul>
                                </figure>
                            </li>
                            <li>
                                <button onClick={()=>(setConversation_id(e.conve_id),setProfile(e.user))} className="bg-[#e4cffc] text-[#FD2579] rounded-md items-center text-center cursor-pointer font-semibold py-2 px-4">
                                    Reply
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}



