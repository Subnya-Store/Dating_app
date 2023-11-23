
import React from "react";


export default function index() {
    const option_one = [
        {
            option: "Light"
        },
        {
            option: "Dark"
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
                <h4 className="text-[#050062]  py-3 md:text-3xl text=lg capitalize font-bold">
                    Apperance
                </h4>
                <hr />

                <p className="text-[#FD2579] text-sm md:text-basefont-semibold py-4">Export your data to your drive</p>
                <p className="py-5 text-[#050062]text-sm md:text-base ">Theme</p>

                <div>
                    <select className=" text-[#050062] ">
                        {
                            option_one.map((x, i) => (

                                <option key={i}>{x.option}</option>


                            ))
                        }
                    </select>
                </div>
                {/* <div>
                    <p className="text-[#FD2579]  font-semibold py-4 text-sm md:text-base">Chat Background</p>
                    <select className=" text-[#050062] text-sm md:text-base">
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

