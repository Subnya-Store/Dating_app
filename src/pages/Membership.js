import React, { useState } from 'react'
import Member_ship from '@/Components/Membership'
import Herosection from '@/Components/Membership/Herosection'
import Section from '@/Components/SectionOne'

import SectionThree from "@/Components/SectionThree";

import SectionFive from "@/Components/sectionFive";
import SectionSix from "@/Components/sectionSix";
import SectionAbout from "@/Components/SectionAbout";
import About from '@/Components/Aboutus'
import Sectiontwo from '@/Components/Aboutus/Sectiontwo'


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
               
                <div>
                <Section/>
                  <Herosection/>
                </div>
                {/* <SectionTwo /> */}
              </div>
            </div>
          </div>
          <div className='-mt-[50px]'>
        

          </div>
          <Member_ship/>
        
         
          <SectionFive />
          <SectionSix />
          
        </>
      }

    </div>
  );
}


