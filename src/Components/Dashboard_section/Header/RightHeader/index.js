import React, { useEffect, useState } from "react";
import API from "@/API/API";
import apiUrl from "@/API/constant";

export default function index() {
  const User_img = "/Images/imgsecond.png";
  const [user_info, setUser_info] = useState(null)
  useEffect(() => {
    API.fetchGet('/info')
      .then(x => setUser_info(x.data))
      .catch(x => console.log(x))
  }, [])
  
  return (
    <div className="right_header flex ">

      <button className="bg-[#FD2579] mr-8 rounded-full items-center text-center cursor-pointer font-semibold text-white py-2 px-4 text-sm ">
        <p className="text-xs md:text-base">Upgrade now</p>
      </button>
      <div className="flex justify-center items-center ">
        {user_info && <span className="mx-2" > <p className="text-sm md:text-base">{'hi! ' + user_info?.Users?.full_name || 'Loading..'}</p></span>}
        {user_info && user_info?.profile?.img != null ? <img src={apiUrl + '/Uploads/' + user_info?.profile?.img} width={50} className="rounded-full" /> : "its loading..."}
      </div>
    </div>
  );
}
