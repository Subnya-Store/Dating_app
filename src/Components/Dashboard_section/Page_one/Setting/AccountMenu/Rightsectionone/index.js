
import React,{useEffect,useState} from "react";

import { Switch } from '@material-tailwind/react'
import API from "@/API/API";


export default function index() {
    const textone = [
        {

            firstheading: "News and Updates",
            secondheading: "News and Updates product and feature updates."
        }
    ]
    const texttwo = [
        {

            firstheading: "Chats and Updates",
            secondheading: "Chats and Updates product and feature updates."
        }
    ]

    const [isTrue,setIsTrue]=useState(false)
    useEffect(()=>{
        API.fetchGet('/check_notify')
        .then(x=> setIsTrue(x.data.notification))
        .catch(x=> console.log(x))
    },[])
    return (

        <div className="bg-[#FFF] p-10 h-[100%] md:w-[90%] overflow-y-auto  rounded-3xl  shadow-2xl">
             <h4 className="text-[#050062] text-xl py-3 md:text-3xl capitalize font-bold">
                Notifications
            </h4>
            <hr />
{/*
            <p className="text-pinkColor md:text-base font-semibold py-2 text-sm ">Email Notifications</p>
            <p className="text-[#050062] text-sm md:text-base">Get emails to find out what’s going on when you’re not online. You can turn these off.</p> */}


            {/* {textone.map((x, i) => (
                <div key={i} className="flex gap-4 py-4 text-[#050062]" >

                    <Switch color="pink" checked={isTrue} onClick={() => {
                        setIsTrue(!isTrue),
                        API.fetchGet('/turn_notification')
                    }} />
                    <div>
                        <p className="text-pinkColor md:text-base font-semibold text-sm ">{x.firstheading}</p>
                        <p className="text-sm md:text-base">{x.secondheading}</p>
                    </div>

                </div>
            ))}

            <hr /> */}
            <p className="text-pinkColor md:text-base font-semibold py-2 text-sm">Push notifications</p>
            <p className="text-[#050062] text-sm md:text-base">Get Notification to find out what’s going on when you’re not online. You can turn these off.</p>

            {texttwo.map((x, i) => (
                <div key={i} className="flex gap-4 py-4 text-[#050062]" >

                    <Switch className='bg-[var(--pink-color)]'  checked={isTrue} onClick={() => {
                         setIsTrue(!isTrue),
                         API.fetchGet('/turn_notification')
                    }} />
                    <div>
                        <p className="text-pinkColor font-semibold text-sm md:text-base">{x.firstheading}</p>
                        <p className="text-sm md:text-base">{x.secondheading}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

