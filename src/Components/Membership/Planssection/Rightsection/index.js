import React from 'react'

export default function index() {
  const plane=[
    {
      images:"Images/Plane_check.png",
      text:"Lorem Ipsum Dolor Decit"
    },
    {
      images:"Images/Plane_check.png",
      text:"Lorem Ipsum Dolor Decit"
    },
    {
      images:"Images/Plane_check.png",
      text:"Lorem Ipsum Dolor Decit"
    },
    {
      images:"Images/Plane_check.png",
      text:"Lorem Ipsum Dolor Decit"
    }

  ]
  const price=[
    {
      prices:"80.00",
      currancy:"$"
    }
  ]
  return (
    
    <div className=' rounded-3xl  bg-[#EDEDED] p-10 drop-shadow-xl hover:drop-shadow-2xl my-4 '>



      <div className=' border-b-2 border-[#FD166F] flex justify-center mb-8 py-2 '> 
      <h2 className=' text-[23px]   text-[#FD166F] font-bold  py-1'> Premium</h2>

      </div>
      
      <div className=' py-10'>
      { 
        plane.map (x=>(
          <div> 
            <ul className='flex justify-center gap-2 py-3'>
          <li>
                <img src={x.images}/>
          </li>
          <li>
            <p> {x.text}</p>
            
          </li>
        </ul>

          </div>
        ))} 
      </div>

        {
          price.map(x=>(
            <div className=' flex justify-center place-items-center'> 
                                        <h2 className=' text-[20px]   text-[#FD166F] font-bold' >{x.currancy} </h2>

                          <h2 className=' text-[23px]   text-[#FD166F] font-bold'> {x.prices}</h2>
            </div>


          ))
        }

      <div className=' flex justify-center'>
      <button className=' bg-[#FD166F] py-2 px-6 rounded-xl'> 
        <ul  className=' flex justify-center'>
                             
                            <li className=' text-[21px]  text-white'>  Buy</li>
                            <li className=' flex place-items-center'> <img  className=' w-8 h-5' src='Images/Buymore.svg'/></li>
                            </ul></button>
      </div>
      
    </div>
  )
}
