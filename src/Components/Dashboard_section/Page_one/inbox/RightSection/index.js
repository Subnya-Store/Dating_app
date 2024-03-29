import API from '@/API/API'
import React, { useState, useEffect, useRef } from 'react'
// import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { AiOutlinePlus } from 'react-icons/ai'
import Decode from 'jwt-decode'
import io from 'socket.io-client'
import apiUrl from '@/API/constant'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosInformationCircleOutline } from "react-icons/io"
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";

// import io from Socket

const socket = io(apiUrl)

export default function index({ Conversations_id, setConversation_id, setProfile, Profile, recieve_msgs, setrecieve_msg, msg, setmsg }) {
  // const socket = io.8080
  const Selector_data = useSelector(x => x)

  const messagesContainerRef = useRef(null);
  const [alt_msg,setAlt_msg]=useState('')
  const [msgArray, setmsgArray] = useState({})
  const [User_id, setUser_id] = useState(null)
  const [Typing, setType] = useState('')
  const [isTyping, setIsTyping] = useState(false);

  const [after_msg, setafter_mg] = useState('')
  const user = localStorage.getItem('user')

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      // Scroll to the full bottom of the container
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  if(!socket){
    socket.on('connection', () => {
        console.log(socket.id)
      })
  }

  useEffect(() => {

    //api now for seen
    API.fetchPost({ conversation_id: Selector_data.ConversationId }, '/see_notify')
      .then(x => API.fetchPost({ conversation_id: Conversations_id }, '/seen')
        .then(x => socket.emit('seen', 'hi')))
    return () => {
      socket.disconnect();
    };
  }, [Selector_data.ConversationId])


  useEffect(() => {
    socket.on('connection', () => {
      console.log(socket.id, "<============== ye connected hy")
    })
    socket.emit("join_room", Conversations_id)
    Conversations_id != null && API.fetchPost({ conversation_id: Conversations_id }, '/get_conversation')
      .then(x => {
        setUser_id(Decode(user))
        setmsgArray(x.data.all_msgs)
        setProfile(x.data.Profile)
        scrollToBottom()
      })
      .catch(x => console.log(x))

    return () => {
      socket.disconnect();
    };
  }, [Conversations_id])

  useEffect(() => {
    Conversations_id != null && API.fetchPost({ conversation_id: Conversations_id }, '/get_conversation')
      .then(x => {
        setUser_id(Decode(user))
        setmsgArray(x.data.all_msgs)
        setProfile(x.data.Profile)
        scrollToBottom()
      })
      .catch(x => console.log(x))
  }, [after_msg])


  useEffect(() => {
    socket.on('recieve_msg', (data) => {
      console.log(data)
      setrecieve_msg(data)
      Conversations_id != null && API.fetchPost({ conversation_id: Conversations_id }, '/get_conversation')
        .then(x => {
          setUser_id(Decode(user))
          setmsgArray(x.data.all_msgs)
          setProfile(x.data.Profile)
          scrollToBottom()
        })
        .catch(x => console.log(x))
      scrollToBottom()
    })
    return () => {
      socket.disconnect();
    };
  }, [socket])


  // useEffect(() => {
  //   let typingTimeout;
  //   let isTypings = false;
  //   let duration = 200; // Default duration

  //   socket.on('connection', () => {
  //     console.log(socket.id);
  //   });


  //   const setIsTypingTrue = () => {
  //     isTypings = true;
  //     setIsTyping(isTypings);
  //     clearTimeout(typingTimeout);

  //     // Set a new timeout with the updated duration
  //     typingTimeout = setTimeout(() => {
  //       isTypings = false;
  //       setIsTyping(isTypings);
  //     }, duration);
  //   };

  //   socket.on('show_typing', (data) => {
  //     setIsTypingTrue();
  //     duration += 25; // Increase the duration based on a condition
  //   });

  //   return () => {
  //     socket.disconnect();
  //     clearTimeout(typingTimeout);
  //   };

  // }, []);


  const sendTypingIndicator = () => {
    socket.on('connection', () => {
      console.log(socket.id)
    })
    socket.emit('typing', { userId: socket.id });
  };


  const Msg_now = (e) => {
    e.preventDefault(),
      API.fetchPost({
        conversation_id: Conversations_id,
        msg:alt_msg
      }, '/msg')
        .then(x => (
          // socket.on('connection', () => {
          //   console.log(socket.id)
          // }),
          socket.emit('send_msg', { msg, room: Conversations_id }),
          socket.emit('all_notify', { msg: 'hello' }),
          setmsg(alt_msg),
          setAlt_msg(''),
          setafter_mg(alt_msg),
          scrollToBottom()
          // socket.disconnect()
        )
        )
        .catch(x => console.log(x))
  }
  useEffect(() => {
    // Add this useEffect to scroll to the bottom initially and whenever msgArray or isTyping changes.
    scrollToBottom();
    Selector_data?.ConversationId && API.fetchPost({ conversation_id: Selector_data?.ConversationId }, '/see_notify')
      .then(x => API.fetchPost({ conversation_id: Conversations_id }, '/seen')
        .then(x => socket.emit('seen', 'hi')))
  }, [msgArray, isTyping]);


  
  return (
    <div className='  bg-whiteColor md:m-4 mt-4  rounded-2xl md:w-[80%] w-full py-2 px-1 h-[400px] md:h-[550px] '>

      <div className='flex  justify-between items-center gap-3 px-2 h-auto'>
        <div className='flex gap-2'>
          <img className=' w-14 rounded-[50%]' src={Profile?.profile?.img || '/Images/video.png'} />
          <div className='text-blackColor '>
            <div className='font-bold  mt-4'>
              {Profile?.full_name}
            </div>
          </div>
        </div>

        <div className="flex md:gap-6 gap-2">
          {/* <div> <img className=' w-5 h-3 md:h-6 md:w-8' src="/Images/video.png" /></div>
          <div> <img className=' w-5  h-3 md:h-6 md:w-6' src="/Images/phone.png" /></div> */}
          <div>
            <IoIosInformationCircleOutline className='text-pinkColor' size={26} />
          </div>
        </div>
      </div>
      <div className=' flex justify-between  flex-col h-[95%]'>
        <div className='overflow-y-scroll h-[79%] ' ref={messagesContainerRef} >
          {msgArray.length > 0 && msgArray.map((e, i) =>
            <div key={i} className="">
              <div className={`flex ${e.from == User_id.id ? 'justify-end px-4 mb-5' : 'justify-start px-4'}`} >
                <p className={`p-2 m-2 rounded-xl  ${e.from == User_id.id ? 'bg-[#D9D9D9]' : 'bg-[var(--pink-color)]'}`}>
                  {e.message}
                </p>
              </div>
            </div>
          )}
          <div className='mb-5'></div>
        </div>
        {/* {isTyping ? <p className='h-[9%] w-full '>typing...</p> : <div className='h-[20px]  w-full '></div>} */}

        <div className='h-[22%] flex justify-center items-center '>
          <div className='flex justify-between bg-[#D9D9D9] rounded-full  w-full'>
            <div className=' rounded-full justify-middle flex w-full'>
              <form className="flex w-full" onSubmit={Msg_now}>

                <div className=" flex gap-3 w-full justify-between items-center">

                  <i className='rounded-[100%] shadow-lg p-3'>
                    < IoAddOutline size={25} className="text-pinkColor" />
                  </i>
                  <input
                    className='w-full outline-none bg-[#D9D9D9] text-[var(--pink-color)] placeholder:text-[var(--pink-color)]'
                    value={alt_msg}
                    type="text"
                    placeholder="Type here"
                    onFocus={async () => (
                      await API.fetchPost({ conversation_id: Conversations_id }, '/see_notify').then(x => socket.emit('seen', 'hi')),
                      await API.fetchPost({ conversation_id: Conversations_id }, '/seen')
                        .then(x => socket.emit('seen', 'hi'))
                    )}
                    // onClick={()=>  socket.emit('seen', 'hi')}
                    // onChange={e => (setmsg(e.target.value))}
                    onChange={e => (setAlt_msg(e.target.value))}
                  />
                  {/* <input type='text'/> */}
                </div>

              </form>
            </div>
            <div className='p-4'>
              <FaMicrophoneAlt className='text-pinkColor' size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

