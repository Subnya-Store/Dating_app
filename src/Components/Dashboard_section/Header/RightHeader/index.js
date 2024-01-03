import React, { useEffect, useState } from "react";
import API from "@/API/API";
import apiUrl from "@/API/constant";
import { Switch } from '@material-tailwind/react'
import { useTheme } from "next-themes";

export default function index() {
  const { theme, setTheme } = useTheme()
  const { themes, setThemes } = useState('')
  const User_img = "/Images/imgsecond.png";
  const [user_info, setUser_info] = useState(null)

  let  storage

  if (typeof window !== 'undefined') {
    storage = localStorage.getItem('user');
  }

  useEffect(() => {
    typeof storage !== 'undefined' && API.fetchGet('/info')
      .then(x => setUser_info(x.data))
      .catch(x => console.log(x))
       API.fetchGet('/get_theme')
      .then(x =>
        setTheme(x.data.theme)
        // (setTheme(x.data.theme),setThemes(x.data.theme))
      )
      .catch(x => console.log(x))
  }, [])
  useEffect(() => {
     API.fetchGet('/create_theme')
      .then(x => {
        if (x.data == 'Created!') {
          setTheme('light')
        }
      })
      .catch(x => console.log(x))

  }, [])

  return (
    <div className="right_header flex ">
      <div className="w-[120px] flex flex-col justify-center items-center">
        <div className="text-blackColor">change Theme</div>
        <Switch
          className={`${themes == 'light' ? 'bg-blackColor' : 'bg-[var(--pink-color)]'}`}
          onClick={() => {
            if (theme == 'dark') {
              setTheme('light')
              API.fetchGet('/put_theme')
              // window.location.reload()
            } else {
              setTheme('dark')
              API.fetchGet('/put_theme')
              // window.location.reload()
            }
          }}
        />
      </div>
      <button className="bg-pinkColor mr-8 rounded-full items-center text-center cursor-pointer font-semibold text-white py-2 px-4 text-sm ">
        <div className="text-xs md:text-base text-whiteColor">Upgrade now</div>
      </button>

      <div className="flex justify-center items-center ">
        {user_info && <span className="mx-2" > <p className="text-sm md:text-base">{'hi! ' + user_info?.Users?.full_name || 'Loading..'}</p></span>}
        {user_info && user_info?.profile?.img != null ? <img src={user_info?.profile?.img} width={50} className="rounded-full" /> : "its loading..."}
      </div>
    </div>
  );
}
