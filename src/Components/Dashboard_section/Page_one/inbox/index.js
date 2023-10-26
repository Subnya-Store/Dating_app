import React, { useState } from 'react'
import Leftsection from '@/Components/Dashboard_section/Page_one/inbox/LeftSection'
import Rightsection from "@/Components/Dashboard_section/Page_one/inbox/RightSection"
import API from '@/API/API'
import io from 'socket.io-client'
import apiUrl from '@/API/constant';

export default function index({ setStateHeader }) {
    const [Conversations_id, setConversation_id] = useState(null)
    const [Profile, setProfile] = useState(null)
    const [recieve_msgs, setrecieve_msg] = useState('')
    const [msg, setmsg] = useState('')
    // Matches
    const Socket = io(apiUrl)
    return (
        <div className=" relative bg-[url('/Images/Dashboard_pg1.png')]     w-[100%] h-screen  bg-center  bg-cover  bg-no-repeat   ">
            <div className="  absolute  before:content-[]   bg-[#0500629e] md:overflow-hidden overflow-y-scroll   bottom-0 top-0 left-0 w-[100%]  h-[100%] ">

                <div className="md:flex py-5 px-5 gap-10">
                    <div className='md:w-[50%] w-full'>
                        <div className="px-4 py-1">
                            <button className=" bg-transparent text-white  items-center text-center cursor-pointer font-semibold py-2 px-4 text-2xl">
                                Inbox
                            </button>
                        </div>
                        <Leftsection msg={msg} setmsg={setmsg} recieve_msgs={recieve_msgs} setrecieve_msg={setrecieve_msg} Conversations_id={Conversations_id} setConversation_id={setConversation_id} Profile={Profile} setProfile={setProfile} />
                    </div >

                    <div className='md:w-[50%] w-full'>


                        {/* <div className="md:px-4 py-1 justify-end md:flex hidden">
                            <button
                                onClick={() => {
                                    API.fetchGet('/unhook')
                                        .then(x => {
                                            // console.log(x)
                                            setStateHeader('Matches');
                                            Socket.on('connection');
                                            Socket.emit('send_breakup', 'hi')
                                        })
                                        .catch(x => console.log(x))
                                }}
                                className=" bg-white text-[#FD2579] rounded-md items-center text-center cursor-pointer font-semibold py-2 px-4">
                                Break up
                            </button>
                        </div> */}

                        <Rightsection msg={msg} setmsg={setmsg} recieve_msgs={recieve_msgs} setrecieve_msg={setrecieve_msg} Conversations_id={Conversations_id} setConversation_id={setConversation_id} Profile={Profile} setProfile={setProfile} />
                    </div>
                </div>
            </div>
        </div>
    )
}
