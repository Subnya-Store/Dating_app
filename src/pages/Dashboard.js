import React from 'react'
import Dashboard_section from '@/Components/Dashboard_section';
import Side_menu from '@/Components/Dashboard_section/Side_menu';

export default function Dashboard() {
  return (
    <div className='flex  h-screen w-screen flex-row  overflow-hidden'>
       <Side_menu/>
        <Dashboard_section/>
       
    </div>
  )
}
