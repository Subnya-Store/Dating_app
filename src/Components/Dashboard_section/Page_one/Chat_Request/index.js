import API from '@/API/API'
import apiUrl from '@/API/constant'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import io from 'socket.io-client'

export default function index({ setStateHeader }) {
    const Socket = io(apiUrl)
    const dispatch = useDispatch()
    const array = [
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        },
        {
            img: '/Images/img_1.png',
            text: "Marie",
            text2: "Teacher, 23",
            button_text: "Replay"
        }

    ]
    const [how_many_request, sethow_many_request] = useState({})
    const [datas, setdatas] = useState('')

    let user, storage

  if (typeof window !== 'undefined') {
    // Access localStorage here
    storage = localStorage.getItem('user');
    // ...rest of your code
  }

    useEffect(() => {
        Socket.on('connection');
        Socket.on('recieve_request', (data) => {
             API.fetchGet('/request_find')
                .then(x => (
                    sethow_many_request(x.data)
                ))
                .catch(x => console.log(x))
        })
    }, [])

    useEffect(() => {
         API.fetchGet('/request_find')
            .then(x => (
                sethow_many_request(x.data)
            ))
            .catch(x => console.log(x))
    }, [datas])

    const HookItUp = (e) => {

         API.fetchPost({ hook_up_with: e.user_id }, '/hook_up')
            .then(x => (
                setdatas(x),
                Socket.emit('send_hookup', 'hi')

            ))
            .catch(x => console.log(x))
    }
    return (
        <div className='  bg-whiteColor md:m-4  rounded-2xl grid grid-cols-2 gap-x-8 '>

            {how_many_request.length > 0 && how_many_request.map((e, i) =>
                <div key={i} >
                    <ul className='md:flex  justify-between items-center gap-3  border-[#BAAEAE] p-2  border-b m-2 '>
                        <li>
                            <figure className='md:flex md:gap-2 sm:gap-1'>
                                <img className=' w-14 rounded-[50%]' src={e?.user.profile?.img} />
                                <ul className='text-blackColor'>
                                    <li className='font-bold '>
                                        {e?.user?.full_name}
                                    </li>
                                    <li>
                                        teacher {e?.user.profile?.age}
                                    </li>
                                </ul>
                            </figure>
                        </li>

                        <li>
                            <button onClick={() => HookItUp(e)} className="bg-[#e4cffc] text-pinkColor rounded-md items-center text-center cursor-pointer font-semibold py-2 px-4">
                                reply
                            </button>
                        </li>


                    </ul>


                </div>
            )}
        </div>
    )
}
