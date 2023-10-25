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

    // useEffect(() => {

    // }, [datas])

    useEffect(() => {
        Socket.on('connection');
        Socket.on('recieve_request', (data) => {
            // setdatas(data)
            API.fetchGet('/request_find')
                .then(x => (
                    sethow_many_request(x.data)
                ))
                .catch(x => console.log(x))
            // console.log(data)
        })
    }, [])

    const HookItUp = (e) => {

        API.fetchPost({ hook_up_with: e.user_id }, '/hook_up')
            .then(x => (
                console.log(x)
                // dispatch({
                //     type: 'state',
                //     payload: 'Inbox'
                // }),
                // setStateHeader('Inbox'),
                // Socket.emit('send_hookup', 'hi')
                // window.location.href = '/dashboard/',
                // window.location.reload()

            ))
            .catch(x => console.log(x))
    }
    return (
        <div className='  bg-white md:m-4  rounded-2xl grid grid-cols-2 gap-x-8 '>

            {how_many_request.length > 0 && how_many_request.map((e, i) =>
                <div key={i} >
                    <ul className='md:flex  justify-between items-center gap-3  border-[#BAAEAE] p-2  border-b m-2 '>
                        <li>
                            <figure className='md:flex md:gap-2 sm:gap-1'>
                                <img className=' w-14 rounded-[50%]' src={apiUrl + '/Uploads/' + e?.user.profile?.img} />
                                <ul className='text-[#050062]'>
                                    <li className='font-bold '>
                                        {e.user.full_name}
                                    </li>
                                    <li>
                                        teacher {e?.user.profile?.age}
                                    </li>
                                </ul>
                            </figure>
                        </li>

                        <li>
                            <button onClick={() => HookItUp(e)} className="bg-[#e4cffc] text-[#FD2579] rounded-md items-center text-center cursor-pointer font-semibold py-2 px-4">
                                reply
                            </button>
                        </li>


                    </ul>


                </div>
            )}
        </div>
    )
}
