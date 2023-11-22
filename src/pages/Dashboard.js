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
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA5iWSQw61-km2u2XusWWgy6SX3wQH24x4",
  authDomain: "forpush-notify.firebaseapp.com",
  projectId: "forpush-notify",
  storageBucket: "forpush-notify.appspot.com",
  messagingSenderId: "565931321714",
  appId: "1:565931321714:web:10907b4c5ceeb765cc95eb",
  measurementId: "G-F2412L8SLH"
};

let messaging

export default function Dashboard() {
  const data = useSelector(x => x)
  const [State, SetState] = useState(data.state)
  const [stateHeader, setStateHeader] = useState('Matches');
  const [datas, setdatas] = useState('')
  const [user_index, setuser_index] = useState(null);
  const Socket = io(apiUrl)

  let user



  useEffect(() => {
    Socket.on('connection', (data) => {
      console.log(Socket.id, '<=== check me')
    });
    Socket.on('recieve_hookup', (data) => {
      API.fetchGet('/get_hook_up')
        .then(x => setdatas(x))
        .catch(x => console.log(x))
    })
    user = localStorage.getItem('user')
    console.log(user)
    if (user != undefined) {
      const app = initializeApp(firebaseConfig);
      messaging = getMessaging(app);
      requestForToken()
    }
  }, [])
  const requestForToken = () => {
    return getToken(messaging, { vapidKey: "BAiuRjrYmAoyKmoIy2uqbajt3iH2B0KP-_ovjbuazcGOCupx9XhaI5v4qV4pJO2UCZfEai-D8jBgLw_jwDAZapU" })
      .then((currentToken) => {
        if (currentToken) {
          // console.log('current token for client: ', currentToken);
          API.fetchPost({ notification_id: currentToken }, '/set_notification')
            .then(x => console.log(x))
            .catch(x => console.log(x))
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };



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