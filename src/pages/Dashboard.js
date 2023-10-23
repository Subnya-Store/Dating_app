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
// import Matches 

export default function Dashboard() {
  const data = useSelector(x => x)
  const [State, SetState] = useState(data.state)
  const [stateHeader, setStateHeader] = useState(data.state);
  const [user_index, setuser_index] = useState(null);


  useEffect(() => {

    setStateHeader('Inbox')
  }, [data.state])
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