import React, { useState } from 'react'
import Matches from "./Matches";
import Active_girl from '@/pages/active_girl';

// import Inbox from '@/Components/Dashboard_section/Page_one/inbox'

export default function index({setuser_index,stateHeader,setStateHeader}) {
//background laga du bas
  return (
    <div className=" relative bg-[url('/Images/Dashboard_pg1.png')]     w-[100%] h-screen   bg-center  bg-cover  bg-no-repeat   ">
      <div className="  absolute  before:content-[]   bg-[#0500629e]  overflow-y-scroll  bottom-0 top-0 left-0 w-[100%]  h-[100%] ">
        <Matches setuser_index={setuser_index} setStateHeader={setStateHeader}/>
        {/* <Active_girl/> */}
        {/* <Inbox/> */}
    
        {/* {
        stateHeader == "Matches" && <Matches setStateHeader={setStateHeader} /> ||
        stateHeader == "Inbox" && <Inbox setStateHeader={setStateHeader} /> 
        
      } */}

      </div>
    </div>

   
  );
}
