import API from "@/API/API";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import moment from "moment/moment";
import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'
import apiUrl from '@/API/constant'


export default function index({ setStateHeader }) {
  let user, storage

  if (typeof window !== 'undefined') {
    // Access localStorage here
    storage = localStorage.getItem('user');
    // ...rest of your code
  }
  const socket = io(apiUrl)
  const [activit_arr, setArr] = useState([])
  const dispatch = useDispatch()
  const Selector_data = useSelector(x => x)

  useEffect(() => {
    socket.on('connection')
    socket.on('show_notify', () => {
       API.fetchGet('/get_notify')
        .then(x => setArr(x.data))
        .catch(x => console.log(x))
    })
  }, [])
  useEffect(() => {
     API.fetchGet('/get_notify')
      .then(x => setArr(x.data))
      .catch(x => console.log(x))
  }, [])
  
  const users = "/Images/user_img.png";
  const email = "/Images/email-icon.png";
  const search = "/Images/search-icon.png";

  const act =[
    {
      id:1,
      type:'follow',
      name:"waleed"
    },
    {
      id:2,
      type:'follow',
      name:"waleed"
    },
    {
      id:3,
      type:'follow',
      name:"waleed"
    },
    {
      id:4,
      type:'follow',
      name:"waleed"
    },
    {
      id:5,
      type:'follow',
      name:"waleed"
    },
    {
      id:6,
      type:'follow',
      name:"waleed"
    },
    {
      id:7,
      type:'follow',
      name:"waleed"
    },
  ]
  return (
    <div className="activity_box h-auto  rounded-2xl bg-whiteColor py-6">
      <div className="container mx-auto min-w-[300px]   px-6">

        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-blackColor text-xl  font-bold">
              Activity
            </h4>
          </div>
          <div>
            <span className="text-blackColor text-xl  font-bold">
              <BsThreeDots />
            </span>
          </div>
        </div>
        {/* {activit_arr?.length > 0 && activit_arr?.map((e, i) => (
          <div
            onClick={() => {
              e?.type == 'msg' && dispatch({
                type: 'ConversationId',
                payload: e.conversation_id
              }),
                e?.type == 'msg' && setStateHeader('Inbox')
            }}
            key={i}
          >
            <div className="flex justify-between  items-center w-full  mt-10">
              <div className="flex w-full items-center">
                <span>
                  <img
                    src={
                      e?.type == 'follow' && users ||
                      e?.type == 'msg' && email ||
                      e?.type == 'search' && search
                    }
                    className="w-[100%] object-contain h-[100%]"
                  />
                </span>
                <div className="flex justify-between items-center w-full px-2">
                  <div className="text-sm">
                    <div><strong>{e?.name}</strong></div>
                    <div>{e?.activity}</div>
                  </div>
                  <div className="text-sm">{moment(e?.updatedAt, "YYYYMMDD").fromNow()}</div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))} */}
      </div>
    </div>
  );
}
