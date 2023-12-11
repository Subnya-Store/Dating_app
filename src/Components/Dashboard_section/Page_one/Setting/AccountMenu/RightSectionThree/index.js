"use client"
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from '@material-tailwind/react'
import API from "@/API/API";

export default function index() {
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        API.fetchGet('/get_theme')
            .then(x => {
                setTheme(x.data.theme)
            })
            .catch(x => console.log(x))
    }, [])

    const option_one = [
        {
            option: "dark"
        },
        {
            option: "light"
        }
    ]

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
                    <select onChange={(e) => { setTheme(e.target.value), API.fetchGet('/put_theme') }} value={theme} className=" text-blackColor bg-whiteColor">
                        {
                            option_one.map((x, i) => (

                                <option value={x.option} key={i}>{x.option.toUpperCase()}</option>


                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

