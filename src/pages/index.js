import React, { useState } from 'react'
import SectionOne from "@/Components/SectionOne";
import SectionTwo from "@/Components/SectionTwo";
import SectionThree from "@/Components/SectionThree";
import SectionFour from "@/Components/sectionFour";
import SectionFive from "@/Components/sectionFive";
import SectionSix from "@/Components/sectionSix";
import SectionAbout from "@/Components/SectionAbout";
// import BgShapes from "@/Components/BgShapes";
import SectionSteps from "@/Components/SectionSteps";
// https://wallpapercave.com/wp/wp11705135.jpg
export default function index() {
  const [contruction, setConstruction] = useState(true)
  return (
    <div>
      {!contruction ?
        <div className='md:w-full md:h-screen overflow-hidden'>
          <img className='md:w-full md:h-full' src='Images/cool.jpg'/>
        </div>
        :
        <>
          <div className=" bg-gradient-to-r border-1 rounded-b-[46%] overflow-hidden relative from-[#D74EFF] to-[#FF80B4]  md:pt-16 pt-4">
            <div className="bg-[url('/Images/banner-shape.png')]     md:mx-14 mx-4 rounded-t-3xl h-full bg-center pt-16   pb-36 bg-no-repeat bg-cover">
              <div className="container mx-auto md:px-20 px-10">
                <SectionOne />
                <SectionTwo />
              </div>
            </div>
          </div>
          <div className=''>
          <SectionAbout  />
          </div>
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
