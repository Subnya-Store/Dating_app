import React,{useState} from 'react'
import AccountMenu from "./AccountMenu";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Rightsectionone from "@/Components/Dashboard_section/Page_one/Setting/AccountMenu/Rightsectionone";
import Rightsectiontwo from '@/Components/Dashboard_section/Page_one/Setting/AccountMenu/Rightsectiontwo';
import RightsectionThree from '@/Components/Dashboard_section/Page_one/Setting/AccountMenu/RightSectionThree'
import RightsectionFour from '@/Components/Dashboard_section/Page_one/Setting/AccountMenu/RightSectionFour'
export default function index() {
  // const [State,SetState]=useState('Settings')
  return (
    <div className="  mx-auto ">
      <AccountMenu />
      {/* <AccountMenu  SetState={SetState} /> */}

     
        <div className="flex ">
          <div className="w-[30%]">
          <LeftSection />
          </div>
          <div className="w-[70%]">
          {/* <RightSection /> */}
          {/* {State=='Settings'&&<RightSection/> || State=='Setting'&&<Setting/>   } */}
          < Rightsectionone/>
          {/* < Rightsectiontwo /> */}
          {/* <RightsectionThree /> */}
          {/* <RightsectionFour/> */}
          </div>
         
          
        </div>
      </div>
  );
}



