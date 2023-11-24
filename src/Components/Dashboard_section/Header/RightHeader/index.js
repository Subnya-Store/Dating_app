import React, { use, useEffect, useState } from "react";
import API from "@/API/API";
import apiUrl from "@/API/constant";
import { Switch } from '@material-tailwind/react'
import { useTheme } from "next-themes";

export default function index() {
  const { theme, setTheme } = useTheme()
  const User_img = "/Images/imgsecond.png";
  const [user_info, setUser_info] = useState(null)
  useEffect(() => {
    API.fetchGet('/info')
      .then(x => setUser_info(x.data))
      .catch(x => console.log(x))
  }, [])
  useEffect(()=>{
    setTheme('dark')
  },[])
  return (
    <div className="right_header flex ">
      <div className="w-[120px] flex flex-col justify-center items-center">
        <div className="text-[#000]">change Them</div>
        <Switch 
        className={`${theme == 'light'?'bg-black':'bg-[var(--pink-color)]'}`}
        onClick={()=>{
          if(theme=='dark'){
            setTheme('light')
          }else{
            setTheme('dark')
          }
        }}
         />
      </div>
      <button className="bg-pinkColor mr-8 rounded-full items-center text-center cursor-pointer font-semibold text-white py-2 px-4 text-sm ">
        <div className="text-xs md:text-base text-white">Upgrade now</div>
      </button>

      <div className="flex justify-center items-center ">
        {user_info && <span className="mx-2" > <p className="text-sm md:text-base">{'hi! ' + user_info?.Users?.full_name || 'Loading..'}</p></span>}
        {user_info && user_info?.profile?.img != null ? <img src={apiUrl + '/Uploads/' + user_info?.profile?.img} width={50} className="rounded-full" /> : "its loading..."}
      </div>
    </div>
  );
}
