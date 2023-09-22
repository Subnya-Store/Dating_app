import React from 'react'
import Header from '@/Components/Admin_section/Header_admin/header'
import Sidebar from '@/Components/Admin_section/Header_admin/Sidebar'
import Side_menu_admin from '@/Components/Admin_section/Side_menu_admin'

export default function index() {
  // const [StateSetting, SetStateSetting] = useState('Admin')

  return (
    <div>
       <div className="dash_header shadow-lg bg-[#FFFFFF] py-4">
    <div className="container mx-auto px-4">
    <div className=' md:flex  justify-between items-center'>
     
   <Header/>
   <Sidebar/>
    </div>
    </div>
</div>

    </div>
   
  )
}
