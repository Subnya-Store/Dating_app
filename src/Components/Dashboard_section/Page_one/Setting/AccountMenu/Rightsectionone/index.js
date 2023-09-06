
import React from "react";

import { Switch } from '@material-tailwind/react'


export default function index() {
    const textone = [
        {
           
            firstheading: "News and Updates",
            secondheading: "News and Updates product and feature updates."
        },
        {
            
            firstheading: "News and Updates",
            secondheading: "News and Updates product and feature updates."

        },
        {
            
            firstheading: "News and Updates",
            secondheading: "News and Updates product and feature updates."

        },
        {
            
            firstheading: "News and Updates",
            secondheading: "News and Updates product and feature updates."

        }
    ]
    const texttwo = [
        {
           
            firstheading: "News and Updates",
            secondheading: "News and Updates product and feature updates."
        },
        {
            
            firstheading: "News and Updates",
            secondheading: "News and Updates product and feature updates."

        }
    ]
    return (
        <div className=" w-[70%] ">
            <div className="bg-[#FFF] p-10   rounded-3xl  shadow-2xl">
                <h4 className="text-[#050062]  py-3 text-3xl capitalize font-bold">
                    Notifications
                </h4>
                <hr />

                <p className="text-[#FD2579] text-base font-semibold py-2 ">Email Notifications</p>
                <p className="text-[#050062]">Get emails to find out what’s going on when you’re not online. You can turn these off.</p>

                <div>  </div>
                {textone.map(x => (
                    <div className="flex gap-4 py-4 text-[#050062]" >

                        <div>      <Switch color="pink" defaultChecked /></div>
                        <div>
                            <p className="text-[#FD2579] text-base font-semibold">{x.firstheading}</p>
                            <p>{x.secondheading}</p>
                        </div>

                    </div>
                ))}


                {/* <input type="checkbox" className="appearance-none checked:bg-blue-500" /> */}

                <hr />
                <p className="text-[#FD2579] text-base font-semibold py-2">Push notifications</p>
                <p className="text-[#050062]">Get emails to find out what’s going on when you’re not online. You can turn these off.</p>

                {texttwo.map(x => (
                    <div className="flex gap-4 py-4 text-[#050062]" >

                        <div>      <Switch color="pink" defaultChecked /></div>
                        <div>
                            <p className="text-[#FD2579] text-base font-semibold">{x.firstheading}</p>
                            <p>{x.secondheading}</p>
                        </div>

                    </div>
                ))}
            </div>
          
             
        </div>
    );
}

