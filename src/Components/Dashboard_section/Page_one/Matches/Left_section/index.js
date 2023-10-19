import API from '@/API/API'
import apiUrl from '@/API/constant'
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
const [Matches,setMatches]=useState(null)
  useEffect(()=>{
    API.fetchGet('/matches')
    .then(x=>setMatches(x.data.shuffledMates))
    .catch(x=>console.log(x)) 
  },[])
  return (

    <div className='md:flex bg-white my-4  rounded-md grid grid-cols-2'>
      {
        Matches&&Matches.map(e => <div onClick={()=>console.log(e)} className='p-4 '>

          <img  onClick={() => (setuser_index(e.id), setStateHeader('Active_girl'))} className=' w-[200px] h-[200px]  rounded-md' src={apiUrl+"/Uploads/"+e.img} />
          <div className='p-1  mt-2 font-semibold flex justify-center text-[#050062] text-lg '>{e.user.full_name}</div>
        </div>)
      }
    </div>
  )
}
