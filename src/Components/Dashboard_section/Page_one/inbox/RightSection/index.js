import API from '@/API/API'
import React, { useState, useEffect } from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlinePlus } from 'react-icons/ai'
import Decode from 'jwt-decode'


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
  const [conversation_id, setConversation] = useState(null)
  const [msg, setmsg] = useState('')
  const [msgArray, setmsgArray] = useState({})
  const [User_id, setUser_id] = useState(null)
  const user = localStorage.getItem('user')

  useEffect(() => {
    API.fetchGet('/get_conve')
      .then(x => {
        setConversation(x.data.find_conve.id)
        const user_data = Decode(user)
        setUser_id(user_data.id)
      }
      )
      .catch(x => console.log(x))
  }, [])

  useEffect(() => {
    API.fetchPost({ conversation_id }, '/get_conversation')
      .then(x => {
        setmsgArray(x.data.all_msgs)

      })
      .catch(x => console.log(x))
  }, [conversation_id])

  const Msg_now = (e) => {
    e.preventDefault(),
      API.fetchPost({
        conversation_id,
        msg
      }, '/msg')
        .then(x => console.log(x))
        .catch(x => console.log(x))
  }
  return (
    <div className='  bg-white md:m-4 mt-4  rounded-2xl md:w-[80%] w-full py-2 px-1 h-[400px] md:h-[700px] overflow-y-scroll'>
      <div >
        <ul className='flex  justify-between items-center gap-3 p-4 m-2 '>
          <li>
            <figure className='flex gap-2'>
              <img className=' w-14 rounded-[50%]' src="/Images/img_1.png" />
              <ul className='text-[#050062] '>
                <li className='font-bold  mt-4'> wjdhjwehdjh
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

