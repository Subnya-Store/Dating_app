import API from '@/API/API'
import apiUrl from '@/API/constant'
import React, { useEffect, useState } from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlineSearch } from 'react-icons/ai'
import io from 'socket.io-client'
// import io from Socket

const socket = io(apiUrl)

export default function index({ setProfile, setConversation_id, recieve_msgs, setrecieve_msg, msg, setmsg, Conversations_id }) {


    const [Conversations, setConversation] = useState('')
    const [update, setupd] = useState('')
    useEffect(() => {
        API.fetchGet('/get_all_hookup')
            .then(x => setConversation(x.data.users))
            .catch(x => console.log(x))
    }, [])
    useEffect(() => {
        API.fetchGet('/get_all_hookup')
            .then(x => setConversation(x.data.users))
            .catch(x => console.log(x))
    }, [recieve_msgs, msg, Conversations_id])


    // socket.on('recieve_msg', (data) => {
    //     API.fetchGet('/get_all_hookup')
    //         .then(x => setConversation(x.data.users))
    //         .catch(x => console.log(x))
    // })
    return (
        <div className=' bg-white md:m-4  rounded-2xl h-[400px]   md:w-[80%] w-full py-2 md:px-1'>

            <div> <div className='flex justify-between p-4 '>
                <div className='  bg-[#D9D9D9] p-2 rounded-2xl  justify-middle flex'>
                    <form className="flex">
                        <div className="pt-1 flex">

                            <input className=' bg-[#D9D9D9] text-[#050062] placeholder:text-[#050062]' type="text" placeholder="Type here" name="search" />
                            <button type="submit"><i> < AiOutlineSearch size={"25px"} /> </i></button>
                        </div>
                    </form></div>
                <div className='p-4'><img src="/Images/bar.svg" /></div>
            </div>
            </div>
            <div className='overflow-y-scroll h-[80%]'>
                {Conversations && Conversations.length > 0 && Conversations.map((e, i) =>
                    <div key={e.conve_id} >
                        <div className={`flex  justify-between items-center gap-3  border-[#BAAEAE] p-2  border-b m-2 ${e?.unseenMessages?.length > 0 && 'animate-pulse'}  `}>
                            <div className='flex gap-2 overflow-y w-full'>

                                <img className=' w-14 rounded-[50%]' src={apiUrl + '/Uploads/' + e?.user?.profile?.img} />

                                <div className='text-[#050062] w-full'>
                                    <div className='font-bold '>
                                        {e?.user?.full_name}
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <div className='text-[#FD2579] '>
                                            {e?.lastMessage}
                                        </div>
                                    </div>
                                </div>

                                {e?.unseenMessages?.length > 0 && <div className='text-[#FD2579] p-1  text-xs w-[200px] flex justify-center items-center'>
                                    {e?.unseenMessages?.length} unread message
                                </div>}
                            </div>
                            <div>
                                <button

                                    onClick={() => (
                                        setConversation_id(e.conve_id),
                                        setProfile(e.user),
                                        setupd('hi'),
                                        API.fetchGet('/get_all_hookup')
                                            .then(x => setConversation(x.data.users))
                                            .catch(x => console.log(x))

                                    )} className="bg-[#e4cffc] text-[#FD2579] rounded-md items-center text-center cursor-pointer font-semibold py-2 px-4">
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}



