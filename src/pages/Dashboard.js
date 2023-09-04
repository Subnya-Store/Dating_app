import React,{useState} from 'react'
import Dashboard_section from '@/Components/Dashboard_section';
import Side_menu from '@/Components/Dashboard_section/Side_menu';
import Header from '@/Components/Dashboard_section/Header';
import Setting from '@/Components/Dashboard_section/setting'

export default function Dashboard() {
  const [State,SetState]=useState('dashboard')
  return (
    <div className='flex  h-screen w-[100%] flex-row  overflow-hidden'>
      <Side_menu SetState={SetState}/>
      <div className='w-[100%]'>
        <Header />
        {State=='dashboard'&&<Dashboard_section /> || State=='Setting'&&<Setting  />  }
     


      </div>

    </div>
  )
}
