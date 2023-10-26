import API from '@/API/API'
import React, { useState, useEffect, useRef } from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlinePlus } from 'react-icons/ai'
import Decode from 'jwt-decode'
import io from 'socket.io-client'
import apiUrl from '@/API/constant'
// import io from Socket

const socket = io(apiUrl)

export default function index({ Conversations_id, setConversation_id, setProfile, Profile, recieve_msgs, setrecieve_msg, msg, setmsg }) {
  // const socket = io.8080

  const [conversation_id, setConversation] = useState(1)
  const messagesContainerRef = useRef(null);

  const [msgArray, setmsgArray] = useState({})
  const [User_id, setUser_id] = useState(null)

  const [aik, setaik] = useState(null)
  const user = localStorage.getItem('user')

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      // Scroll to the full bottom of the container
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    socket.on('connection', () => {
      console.log(socket.id)
    })
    socket.emit("join_room", Conversations_id)
    Conversations_id != null && API.fetchPost({ conversation_id: Conversations_id }, '/get_conversation')
      .then(x => {
        setUser_id(Decode(user))
        setmsgArray(x.data.all_msgs)
        scrollToBottom()
      })
      .catch(x => console.log(x))
  }, [Conversations_id, recieve_msgs, msg])

  useEffect(() => {
    socket.on('connection', () => {
      console.log(socket.id)
    })
    socket.on('recieve_msg', (data) => {
      setrecieve_msg(data)
      console.log(data, '<== receiver')
      scrollToBottom()
    })
  }, [])
  console.log(User_id)
  const Msg_now = (e) => {
    e.preventDefault(),
      API.fetchPost({
        conversation_id: Conversations_id,
        msg
      }, '/msg')
        .then(x => (socket.emit('send_msg', { msg, room: Conversations_id }), setmsg(''),scrollToBottom()))
        .catch(x => console.log(x))
  }
  // console.log(Profile)
  return (
    <div className='  bg-white md:m-4 mt-4  rounded-2xl md:w-[80%] w-full py-2 px-1 h-[400px] md:h-[700px] '>
      <div >
        <ul className='flex  justify-between items-center gap-3 p-4 m-2 '>
          <li>
            <figure className='flex gap-2'>
              <img className=' w-14 rounded-[50%]' src={apiUrl + '/Uploads/' + Profile?.profile?.img || '/Images/video.png'} />
              <ul className='text-[#050062] '>
                <li className='font-bold  mt-4'>
                  {Profile?.full_name}
                </li>
              </ul>
            </figure>
          </li>

          <li className="flex md:gap-6 gap-2">
            <div> <img className=' w-5 h-3 md:h-6 md:w-8' src="/Images/video.png" /></div>
            <div> <img className=' w-5  h-3 md:h-6 md:w-6' src="/Images/phone.png" /></div>
            <div> <img className=' w-5  h-3  md:h-6 md:w-6' src="/Images/info.png" /></div>
          </li>
        </ul>

      </div>
      <div className='h-full'>
        <div className='overflow-y-scroll h-[75%] ' ref={messagesContainerRef} >
          {msgArray.length > 0 && msgArray.map((e, i) =>
            <div  key={i} onClick={() => console.log(e)} className="">
              <div  className={`flex ${e.from == User_id.id ? 'justify-start px-4' : 'justify-end px-4 mb-5'}`} >
                <p  className={`p-2 m-2 rounded-xl  ${e.from == User_id.id ? 'bg-[#D9D9D9]' : 'bg-[#FD166F]'}`}>
                  {e.message}
                </p>
              </div>
            </div>
          )}
          <div  className='mb-10'></div>
          
        </div>

        <div>
          <ul className='flex justify-between bg-[#D9D9D9] rounded-full my-2'>
            <li className=' rounded-full justify-middle flex'>
              <form className="flex" onSubmit={Msg_now}>

                <div>
                  <div className=" flex gap-3 ">
                    <button className='rounded-[100%] shadow-lg p-3'>
                      <i>
                        < AiOutlinePlus size={"25px"} className="text-red-700" />
                      </i>
                    </button>
                    <input className='w-full bg-[#D9D9D9] text-[#FD166F] placeholder:text-[#FD166F]' value={msg} type="text" placeholder="Type here" onChange={e => setmsg(e.target.value)} />
                  </div>
                </div>

              </form>
            </li>
            <li className='p-4'><img src="/Images/mic.png" /></li>
          </ul>
        </div>
      </div>


    </div>
  )
}

