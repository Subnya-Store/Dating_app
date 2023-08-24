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
    
    <div className='flex bg-white m-4'>
        {
        array.map(e => <div className='p-4'>
        
          <img className=' w-full  rounded-md' src={e.img}/>
          <div className='p-1 text-sm flex justify-center'>{e.heading}</div>
        </div>)
      }
    </div>
  )
}
