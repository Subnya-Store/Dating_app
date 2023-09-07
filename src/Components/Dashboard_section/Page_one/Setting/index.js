import React, { useState } from 'react'
import AccountMenu from "./AccountMenu";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Rightsectionone from "@/Components/Dashboard_section/Page_one/Setting/AccountMenu/Rightsectionone";
import Rightsectiontwo from '@/Components/Dashboard_section/Page_one/Setting/AccountMenu/Rightsectiontwo';
import RightsectionThree from '@/Components/Dashboard_section/Page_one/Setting/AccountMenu/RightSectionThree'
import RightsectionFour from '@/Components/Dashboard_section/Page_one/Setting/AccountMenu/RightSectionFour'
export default function index() {
  const [StateSetting, SetStateSetting] = useState('Account')
  console.log(StateSetting, '<== check this')
  return (
    <div className="  mx-auto ">
      <AccountMenu />
      {/* <AccountMenu  SetState={SetState} /> */}


      <div className="flex ">
        <div className="w-[30%]">
          <LeftSection SetStateSetting={SetStateSetting} />
        </div>
        <div className="w-[70%]">
          {StateSetting == "Account" && <RightSection /> || StateSetting == 'Notifications' && < Rightsectionone /> ||
            StateSetting == 'Data Export' && < Rightsectiontwo /> || StateSetting == 'Apperance' && <RightsectionThree /> ||
            StateSetting == "Privacy Settings" && <RightsectionFour />
          }
        </div>

      </div>
    </div>
  );
}



