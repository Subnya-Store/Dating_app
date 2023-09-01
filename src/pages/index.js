import React, { useState } from 'react'
import SectionOne from "@/Components/SectionOne";
import SectionTwo from "@/Components/SectionTwo";
import SectionThree from "@/Components/SectionThree";
import SectionFour from "@/Components/sectionFour";
import SectionFive from "@/Components/sectionFive";
import SectionSix from "@/Components/sectionSix";
import SectionAbout from "@/Components/SectionAbout";
import BgShapes from "@/Components/BgShapes";
import SectionSteps from "@/Components/SectionSteps";
// https://wallpapercave.com/wp/wp11705135.jpg
export default function index() {
  const [contruction, setConstruction] = useState(true)
  return (
    <div>
      {!contruction ?
        <div className='w-full h-screen overflow-hidden'>
          <img className='w-full h-full' src='Images/cool.jpg'/>
        </div>
        :
        <>
          <div className=" bg-gradient-to-r border-1 rounded-b-[46%] overflow-hidden relative from-[#D74EFF] to-[#FF80B4]  pt-16">
            {/* <div className="clip  z-20 absolute   w-full object-cover bg-black  h-full ">
          <BgShapes />
        </div> */}
            <div className="bg-[url('/Images/banner-shape.png')]   relative  mx-14 rounded-t-3xl h-full bg-center pt-16   pb-36 bg-no-repeat bg-cover">
              <div className="">

                <SectionOne />
                <SectionTwo />
              </div>

            </div>

          </div>
          <SectionAbout />

          <SectionSteps />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </>
      }

    </div>
  );
}
