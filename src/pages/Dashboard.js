import React, { useState } from 'react'
import Dashboard_section from '@/Components/Dashboard_section';
import Side_menu from '@/Components/Dashboard_section/Side_menu';
import Header from '@/Components/Dashboard_section/Header';
import Setting from '@/Components/Dashboard_section/Page_one/Setting'
import Activity from '@/Components/Dashboard_section/Page_one/Matches/Activity_folder'
import Inbox from '@/Components/Dashboard_section/Page_one/inbox'
import Admin_section from '@/Components/Admin_section'
// import Matches 

export default function Dashboard() {
  const [State, SetState] = useState('matches')
  const [stateHeader, setStateHeader] = useState("Matches");
  console.log(stateHeader)
  return (
    <div className='flex  h-screen w-[100%] flex-row  '>
      <Side_menu setStateHeader={setStateHeader} />
      <div className='w-[100%]'>
        <Header stateHeader={stateHeader} setStateHeader={setStateHeader} />
        {
         stateHeader == 'Matches'&& <Dashboard_section stateHeader={stateHeader} setStateHeader={setStateHeader} /> || 
        stateHeader == 'Setting' && <Setting stateHeader={stateHeader} setStateHeader={setStateHeader}/> ||
        stateHeader == 'Inbox' && <Inbox stateHeader={stateHeader} setStateHeader={setStateHeader}/> ||
        stateHeader == 'Admin' && <Admin_section stateHeader={stateHeader} setStateHeader={setStateHeader}/> 

}
      </div>

    </div>
  )
}