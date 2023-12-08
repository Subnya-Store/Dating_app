"use client"
import React from "react";
import { useTheme } from "next-themes";
import { Switch } from '@material-tailwind/react'

export default function index() {
    const { theme, setTheme } = useTheme()
    const option_one = [
        {
            option: "light"
        },
        {
            option: "dark"
        }
    ]
    // const option_two = [
    //     {
    //         option: "Choose"
    //     },
    //     {
    //         option: "ksxncjkns"
    //     },
    //     {
    //         option: "ghegdh"
    //     }
    // ]

    return (
        <div className=" md:w-[70%] ">
            <div className="bg-[#FFF] p-10   rounded-3xl  shadow-2xl">
                <h4 className="text-black  py-3 md:text-3xl text=lg capitalize font-bold">
                    Apperance
                </h4>
                <hr />

                {/* <p className="text-pinkColor text-sm md:text-basefont-semibold py-4">Export your data to your drive</p> */}
                <div className="py-5 text-blackColortext-sm md:text-base ">Theme</div>
                <div>
                    <select onChange={(e)=> setTheme(e.target.value)} className=" text-blackColor bg-whiteColor">
                        {
                            option_one.map((x, i) => (

                                <option value={x.option} key={i}>{x.option.toUpperCase()}</option>


                            ))
                        }
                    </select>
                </div>
                {/* <div>
                    <p className="text-pinkColor  font-semibold py-4 text-sm md:text-base">Chat Background</p>
                    <select className=" text-blackColor text-sm md:text-base">
                        {
                            option_two.map((x, i) => (

                                <option key={i}>{x.option}</option>


                            ))
                        }
                    </select>
                </div> */}


            </div>
        </div>
    );
}

