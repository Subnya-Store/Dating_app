import React from 'react'

export default function index() {
    const array = [{
        img:'Images/img_1.png',
        heading:"Mia,22"
      },
      {
    
     img:'Images/imgsecond.png',
        heading:"Marie, 24"
      },
      {
        img:'Images/img_1.png',
        heading:"Charlotte, 24"
      },
    ]
  return (
    
    <div className='flex bg-white my-4  rounded-md '>
        {
        array.map(e => <div className='p-4'>
        
          <img className=' w-full  rounded-md' src={e.img}/>
          <div className='p-1  mt-2 font-semibold flex justify-center text-[#050062] text-lg '>{e.heading}</div>
        </div>)
      }
    </div>
  )
}
