import React from 'react'
import PAge_one from './Page_one';
import  Header from '@/Components/Dashboard_section/Header'

export default function index({stateHeader, setStateHeader}) {
  return (
    <div className=" flex flex-col w-full">
       {/* <Header/> */}
      <PAge_one  stateHeader={stateHeader} setStateHeader={setStateHeader}/>
    </div>
  )
}
