 import React from 'react'
 import Navbar from '@/Components/SectionOne/Navbar'
 import HeaderLogo from '@/Components/SectionOne/HeaderLogo'
 import NavButton from '@/Components/SectionOne/NavButton'
 
 export default function index() {
   return (
    
     <div className="flex  mx-14 justify-evenly px-2  justify-items-center">
      <Navbar/>
      <HeaderLogo/>
      <NavButton/>
     </div>
    
   )
 }
 