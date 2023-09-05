import React,{useState} from 'react'
import Dashboard_section from '@/Components/Dashboard_section';
import Side_menu from '@/Components/Dashboard_section/Side_menu';
import Header from '@/Components/Dashboard_section/Header';
import Setting from '@/Components/Dashboard_section/Page_one/Setting'
import Activity from '@/Components/Dashboard_section/Page_one/Matches/Activity_folder'

export default function Dashboard() {
  const [State,SetState]=useState('matches')
  return (
    <div className='flex   w-[100%] flex-row  overflow-hidden'>
      <Side_menu SetState={SetState}/>
      <div className='w-[100%]'>
        <Header />
        {State=='matches'&&<Dashboard_section /> || State=='Setting'&&<Setting/>  }
     


      </div>

    </div>
  )
}
