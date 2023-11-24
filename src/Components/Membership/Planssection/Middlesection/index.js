import React from 'react'

export default function index() {
  const plane = [
    {
      images: "/Images/CheckPink.png",
      text: "Lorem Ipsum Dolor Decit"
    },
    {
      images: "/Images/CheckPink.png",
      text: "Lorem Ipsum Dolor Decit"
    },
    {
      images: "/Images/CheckPink.png",
      text: "Lorem Ipsum Dolor Decit"
    }

  ]
  const price = [
    {
      prices: "50.00",
      currancy: "$"
    }
  ]
  return (

    <div className=' rounded-3xl  bg-[var(--pink-color)] p-20  drop-shadow-xl hover:drop-shadow-2xl '>



      <div className=' border-b-2 border-[#fff] flex justify-center mb-8 py-2'>
        <h2 className=' text-[23px]   text-[#FFF] font-bold py-1'> Standard</h2>

      </div>

      <div className=' py-10'>
        {
          plane.map((x,i) => (
            <div  key={i}>
              <ul className='flex justify-center gap-2 py-3 text-white'>
                <li>
                  <img src={x.images} />
                </li>
                <li>
                  <p> {x.text}</p>

                </li>
              </ul>

            </div>
          ))}
      </div>

      {
        price.map((x, i) => (
          <div  key={i} className=' flex justify-center place-items-center'>
            <h2 className=' text-[20px]   text-[#FFF] font-bold' >{x.currancy} </h2>

            <h2 className=' text-[23px]   text-[#FFF] font-bold'> {x.prices}</h2>
          </div>


        ))
      }

      <div className=' flex justify-center'>
        <button className=' bg-[#FFF] py-2 px-6 rounded-xl'>
          <ul className=' flex justify-center'>

            <li className=' text-[21px]  text-[var(--pink-color)]'>  Buy</li>
            <li className=' flex place-items-center'> <img className=' w-8 h-5' src='/Images/Buynow.svg' /></li>
          </ul></button>
      </div>

    </div>
  )
}
