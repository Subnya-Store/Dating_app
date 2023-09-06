
import React from "react";


export default function index() {
    const option_one=[
        {
            option:"Light"
        },
        {
            option:"ksxncjkns"
        },
        {
            option:"ghegdh"
        }
    ]
    const option_two=[
        {
            option:"Choose"
        },
        {
            option:"ksxncjkns"
        },
        {
            option:"ghegdh"
        }
    ]
  
    return (
        <div className=" w-[70%] ">
            <div className="bg-[#FFF] p-10   rounded-3xl  shadow-2xl">
                <h4 className="text-[#050062]  py-3 text-3xl capitalize font-bold">
                Apperance
                </h4>
                <hr />

                <p className="text-[#FD2579] text-base font-semibold py-4">Export your data to your drive</p>
                <p  className="py-5 text-[#050062] ">Theme</p>

               <div>
               <select  className=" text-[#050062] ">
                {
                    option_one.map(x=>(
                        
                        <option>{x.option}</option>
                        
                     
                    ))
                }
                 </select>
               </div>
               <div> 
               <p className="text-[#FD2579] text-base font-semibold py-4">Chat Background</p>
               <select  className=" text-[#050062] ">
                {
                    option_two.map(x=>(
                        
                        <option>{x.option}</option>
                        
                     
                    ))
                }
                 </select>
               </div>
 

            </div>
        </div>
    );
}

