import React, { useEffect, useState } from 'react'
import Dashboard_section from '@/Components/Dashboard_section';
import Side_menu from '@/Components/Dashboard_section/Side_menu';
import Header from '@/Components/Dashboard_section/Header';
import Setting from '@/Components/Dashboard_section/Page_one/Setting'
import Activity from '@/Components/Dashboard_section/Page_one/Matches/Activity_folder'
import Inbox from '@/Components/Dashboard_section/Page_one/inbox'
import Admin_section from '@/Components/Admin_section'
import Active_girl from '@/Components/Dashboard_section/Page_one/Active_girl'
import { useSelector } from 'react-redux';
import API from '@/API/API';
// import Matches 
import io from 'socket.io-client'
import apiUrl from '@/API/constant';

export default function Dashboard() {
  const data = useSelector(x => x)
  const [State, SetState] = useState(data.state)
  const [stateHeader, setStateHeader] = useState('Matches');
  const [datas, setdatas] = useState('')
  const [user_index, setuser_index] = useState(null);
  const Socket = io(apiUrl)
  // useEffect(() => {

  // }, [Socket])

  // useEffect(() => {
  //   Socket.on('connection');
  //   Socket.on('recieve_hookup', (data) => {
  //     API.fetchGet('/get_hook_up')
  //       .then(x => {
  //         if (x.data.msg == 'found!') {
  //           setStateHeader('Inbox')
  //           console.log(x, '<== checking api')
  //         } else {
  //           setStateHeader('Matches')
  //         }
  //       })
  //       .catch(x => console.log(x))
  //   })
  //   Socket.on('recieve_breakup', (data) => {
  //     API.fetchGet('/get_hook_up')
  //       .then(x => {
  //         if (x.data.msg == 'found!') {
  //           setStateHeader('Inbox')
  //           console.log(x, '<== checking api')
  //         } else {
  //           setStateHeader('Matches')
  //         }
  //       })
  //       .catch(x => console.log(x))
  //   })
  //   // setStateHeader('Inbox')
  // }, [])
  return (
    <div className='flex  h-screen w-[100%] flex-row  '>
      <Side_menu setStateHeader={setStateHeader} />
      <div className='w-[100%] overflow-y-hidden'>
        <Header stateHeader={stateHeader} setStateHeader={setStateHeader} />
        {
          stateHeader == 'Matches' && <Dashboard_section setuser_index={setuser_index} stateHeader={stateHeader} setStateHeader={setStateHeader} /> ||
          stateHeader == 'Setting' && <Setting stateHeader={stateHeader} setStateHeader={setStateHeader} /> ||
          stateHeader == 'Inbox' && <Inbox stateHeader={stateHeader} setStateHeader={setStateHeader} /> ||
          stateHeader == 'Admin' && <Admin_section stateHeader={stateHeader} setStateHeader={setStateHeader} /> ||
          stateHeader == 'Active_girl' && <Active_girl user_index={user_index} stateHeader={stateHeader} setStateHeader={setStateHeader} />

        }
      </div>

    </div>
  )
}