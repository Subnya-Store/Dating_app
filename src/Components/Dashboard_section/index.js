import React from 'react'
import PAge_one from './Page_one';
import  Header from '@/Components/Dashboard_section/Header'

export default function index({storage, setuser_index,stateHeader, setStateHeader}) {
  return (
      <PAge_one storage={storage} setuser_index={setuser_index}  stateHeader={stateHeader} setStateHeader={setStateHeader}/>
  )
}
