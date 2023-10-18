import API from '@/API/API'
import React,{useState,useEffect} from 'react'

export default function index({ setStateHeader, setuser_index }) {
  const array = [{
    id: 0,
    img: '/Images/img_1.png',
    heading: "Mia,22"
  },
  {
    id: 1,
    img: '/Images/imgsecond.png',
    heading: "Marie, 24"
  },
  {
    id: 2,
    img: '/Images/img_1.png',
    heading: "Charlotte, 24"
  },
  ]

  useEffect(()=>{
    API.fetchGet('/matches')
    .then(x=>console.log(x))
    .catch(x=>console.log(x)) 
  },[])
  return (

    <div className='md:flex bg-white my-4  rounded-md '>
      {
        array.map(e => <div className='p-4'>

          <img onClick={() => (setuser_index(e.id), setStateHeader('Active_girl'))} className=' w-full  rounded-md' src={e.img} />
          <div className='p-1  mt-2 font-semibold flex justify-center text-[#050062] text-lg '>{e.heading}</div>
        </div>)
      }
    </div>
  )
}
