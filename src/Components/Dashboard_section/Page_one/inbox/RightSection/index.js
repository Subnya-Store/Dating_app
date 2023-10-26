import API from '@/API/API'
import React, { useState, useEffect } from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlinePlus } from 'react-icons/ai'
import Decode from 'jwt-decode'
import io from 'socket.io-client'
import apiUrl from '@/API/constant'
// import io from Socket

const socket = io(apiUrl)

export default function index() {
  // const socket = io.8080
 
  const [conversation_id, setConversation] = useState(1)
  const [msg, setmsg] = useState('')
  const [recieve_msgs, setrecieve_msg] = useState('')
  const [msgArray, setmsgArray] = useState({})
  const [User_id, setUser_id] = useState(null)
  const [Profile, setProfile] = useState(null)
  const [aik, setaik] = useState(null)
  const user = localStorage.getItem('user')

  useEffect(() => {
    socket.on('connection', () => {
      console.log(socket.id)
    })
    setConversation(null)
    API.fetchGet('/get_conve')
      .then(x => {
        setConversation(x.data.find_conve.id)
        const user_data = Decode(user)
        setUser_id(user_data.id)
        setProfile(x.data.User_data)
        socket.emit("join_room", x.data.find_conve.id)
        // console.log(x.data.find_conve.id,'<== get conversation')
      }
      )
      .catch(x => console.log(x))
  }, [socket])

  useEffect(() => {
    API.fetchPost({ conversation_id }, '/get_conversation')
      .then(x => {
        setmsgArray(x.data.all_msgs)

      })
      .catch(x => console.log(x))
  }, [conversation_id,recieve_msgs,msg])

  useEffect(() => {
    socket.on('connection', () => {
      console.log(socket.id)
    })
    socket.on('recieve_msg', (data) => {
      setrecieve_msg(data)
      console.log(data,'<== receiver')
    })
  }, [])

  const Msg_now = (e) => {
    e.preventDefault(),
      API.fetchPost({
        conversation_id,
        msg
      }, '/msg')
        .then(x => (socket.emit('send_msg', {msg,room:conversation_id}),setmsg('')))
        .catch(x => console.log(x))
  }
  // console.log(Profile)
  return (
    <div className='  bg-white md:m-4 mt-4  rounded-2xl md:w-[80%] w-full py-2 px-1 h-[400px] md:h-[700px] overflow-y-scroll'>
      <div >
        <ul className='flex  justify-between items-center gap-3 p-4 m-2 '>
          <li>
            <figure className='flex gap-2'>
              <img className=' w-14 rounded-[50%]' src="/Images/img_1.png" />
              <ul className='text-[#050062] '>
                <li className='font-bold  mt-4'>
                  {Profile?.user?.full_name}
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
      <div className='   '>
        <div className=' h-[100%] overflow-y-scroll '>
          {msgArray.length > 0 && msgArray.map((e, i) =>
            <div key={i} onClick={() => console.log(e)} className="py-3 ">
              <div className={`flex ${e.from == User_id ? 'justify-start px-4' : 'justify-end px-4'}`} >
                <p className={`p-2 rounded-xl  ${e.from == User_id ? 'bg-[#D9D9D9]' : 'bg-[#FD166F]'}`}>{e.message}
                </p>
              </div>

              {/* <div className=" flex justify-end px-4"> <p className="  bg-[#FD166F] p-2 rounded-xl text-white">{e.text2}</p></div> */}
            </div>

          )}
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
                    <input className='w-full bg-[#D9D9D9] text-[#FD166F] placeholder:text-[#FD166F]' type="text" placeholder="Type here" onChange={e => setmsg(e.target.value)} />
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

