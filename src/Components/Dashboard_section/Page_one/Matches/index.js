import React from "react";
import Left_section from "./Left_section";
import Right_section from "./Right_section";
import Activity_folder from '@/Components/Dashboard_section/Page_one/Matches/Activity_folder';
import Chat_request from '@/Components/Dashboard_section/Page_one/Chat_Request'
export default function index({setuser_index,setStateHeader}) {
  return (
    <div className=" py-6 mx-auto">
      <div className="md:container mx-auto px-6">
        {/* <h2 className=" text-white text-lg "> Matches</h2> */}
        <div className="md:flex">
          <Left_section setuser_index={setuser_index} setStateHeader={setStateHeader}/>
          <Right_section setStateHeader={setStateHeader}/>
        </div>
        <div className="md:flex gap-12">
          <div className=' md:w-[35%]'>
          <Activity_folder />
          </div>
          
          <div className=" md:w-[65%] ">
            <h2 className=" text-white text-lg px-4 font-bold" >Chat Request</h2>
            <Chat_request  setStateHeader={setStateHeader}/>
          </div>

        </div>

      </div>

    </div>
  );
}
