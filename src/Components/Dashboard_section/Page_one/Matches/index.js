import React from "react";
import Left_section from "./Left_section";
import Right_section from "./Right_section";
import Activity_folder from '@/Components/Dashboard_section/Page_one/Matches/Activity_folder';
import Chat_request from '@/Components/Dashboard_section/Page_one/Chat_Request';
import Work_at_dating from '@/Components/Dashboard_section/Page_one/work_at_dating'
export default function index() {
  return (
    <div className=" py-6">
      <div className="container mx-auto px-6">
        {/* <h2 className=" text-white text-lg "> Matches</h2> */}
        <div className="flex">
          <Left_section />
          <Right_section />
        </div>
        <div className="flex gap-x-20">
       <div className="w-[40%]">   <Activity_folder /></div>
          <div className="w-[60%]">
            <h2 className=" text-white text-lg px-4 font-bold" >Chat Request</h2>


            <Chat_request />
            <div className="m-4 mr-72">
          <Work_at_dating/>
        </div>
          </div>

        </div>
        

      </div>

    </div>
  );
}
