
import React from "react";


export default function index() {
    const option_one = [
        {
            option: "Everyone"
        },
        {
            option: "ksxncjkns"
        },
        {
            option: "ghegdh"
        }
    ]
    const option_two = [
        {
            option: "Everyone"
        },
        {
            option: "ksxncjkns"
        },
        {
            option: "ghegdh"
        }

    ]
    const option_Three = [
        {
            option: "Friends"
        },
        {
            option: "ksxncjkns"
        },
        {
            option: "ghegdh"
        }

    ]
    const option_Four = [
        {
            option: "Everyone"
        },
        {
            option: "ksxncjkns"
        },
        {
            option: "ghegdh"
        }

    ]
    const block_list = [
        {
            option: "2 blocked Persons"
        }
    ]


    return (
        <div className="bg-[#FFF] p-10  h-[60%] md:w-[90%] overflow-y-scroll   rounded-3xl  shadow-2xl">
            <h4 className="text-[#050062]  py-3 md:text-3xl text-lg capitalize font-bold">
                Privacy Settings
            </h4>
            <hr />

            <p className="text-[#FD2579] text-sm md:text-base font-semibold py-4">Who can see me online</p>


            <div>
                <select className=" text-[#050062] text-sm md:text-base ">
                    {
                        option_one.map((x, i) => (
                            <option key={i}>{x.option}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <p className="text-[#FD2579] text-base font-semibold py-4">Who can add me</p>
                <select className=" text-[#050062] ">
                    {
                        option_two.map((x, i) => (

                            <option key={i}>{x.option}</option>


                        ))
                    }
                </select>
            </div>
            <div>
                <p className="text-[#FD2579] text-sm md:text-base font-semibold py-4">Who can add me</p>
                <select className=" text-[#050062] ">
                    {
                        option_Three.map((x, i) => (

                            <option key={i}>{x.option}</option>


                        ))
                    }
                </select>
            </div>
            <div className=" pb-4">
                <p className="text-[#FD2579] font-semibold py-4 text-sm md:text-base">Who can message me</p>
                <select className=" text-[#050062] ">
                    {
                        option_Four.map((x, i) => (

                            <option key={i}>{x.option}</option>


                        ))
                    }
                </select>
            </div>
            <hr />
            <div>
                <p className="text-[#FD2579] text-sm md:text-base font-semibold py-4">Blocked Person’s List</p>
                <select className=" text-[#050062] ">
                    {
                        block_list.map((x, i) => (

                            <option key={i}>{x.option}</option>


                        ))
                    }
                </select>
            </div>
            <div className="py-5"> <button className=" bg-[#FD2579] px-4 py-2 rounded-2xl text-white font-medium">Unblock</button> </div>
        </div>
    );
}

