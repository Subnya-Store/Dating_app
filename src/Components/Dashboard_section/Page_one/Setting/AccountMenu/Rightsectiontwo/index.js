
import React from "react";


export default function index() {
    const text = [
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
        <div className=" md:w-[70%] ">
            <div className="bg-[#FFF] p-10   rounded-3xl  shadow-2xl">
                <h4 className="text-[#050062]  py-3 text-3xl capitalize font-bold">
                Data Exports
                </h4>
                <hr />

                <p className="text-[#FD2579] text-base font-semibold py-4">Export your data to your drive</p>
                <p  className="py-5">Total Size: 125 mb</p>

                <div className="py-5"> <button className=" bg-[#FD2579] px-4 py-2 rounded-2xl text-white font-medium">Export now</button> </div>
               


            </div>
        </div>
    );
}

