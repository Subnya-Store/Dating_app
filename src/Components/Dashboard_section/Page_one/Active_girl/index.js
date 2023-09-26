import React, { useState, useEffect } from 'react';

export default function Index({ user_index }) {
  const div = [
    {
      picture: "images/girl.png",
      text: "She Likes You 1",
      picture2: "images/hot_img.svg",
      button_text: "90% Match",
      nametext: 'Marie, 24',
      profile_star: "images/star.svg",
      text_buttom: 'Researcher at Tesla',
      text_para: 'A good listener, i love having a good talk to know each others’s side. Mountain over beach.',
      lefttop: '10+ Same Interests.',
      lestbottom: "See All",
      rightbutton: 'Message',
    },
    {
      picture: "images/girl2.png",
      text: "She Likes You 2",
      picture2: "images/hot_img.svg",
      button_text: "90% Match",
      nametext: 'Marie, 24',
      profile_star: "images/star.svg",
      text_buttom: 'Researcher at Tesla',
      text_para: 'A good listener, i love having a good talk to know each others’s side. Mountain over beach.',
      lefttop: '10+ Same Interests.',
      lestbottom: "See All",
      rightbutton: 'Message',
    },
    {
      picture: "images/girl3.png",
      text: "She Likes You 3",
      picture2: "images/hot_img.svg",
      button_text: "90% Match",
      nametext: 'Marie, 24',
      profile_star: "images/star.svg",
      text_buttom: 'Researcher at Tesla',
      text_para: 'A good listener, i love having a good talk to know each others’s side. Mountain over beach.',
      lefttop: '10+ Same Interests.',
      lestbottom: "See All",
      rightbutton: 'Message',
    },
    {
      picture: "images/girl.png",
      text: "She Likes You 4",
      picture2: "images/hot_img.svg",
      button_text: "90% Match",
      nametext: 'Marie, 24',
      profile_star: "images/star.svg",
      text_buttom: 'Researcher at Tesla',
      text_para: 'A good listener, i love having a good talk to know each others’s side. Mountain over beach.',
      lefttop: '10+ Same Interests.',
      lestbottom: "See All",
      rightbutton: 'Message',
    },
    {
      picture: "images/girl2.png",
      text: "She Likes You 5",
      picture2: "images/hot_img.svg",
      button_text: "90% Match",
      nametext: 'Marie, 24',
      profile_star: "images/star.svg",
      text_buttom: 'Researcher at Tesla',
      text_para: 'A good listener, i love having a good talk to know each others’s side. Mountain over beach.',
      lefttop: '10+ Same Interests.',
      lestbottom: "See All",
      rightbutton: 'Message',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(user_index);

  useEffect(() => {

    setCurrentIndex((prevIndex) => (prevIndex + 1) % div.length);
  }, []);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % div.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? div.length - 1 : prevIndex - 1
    );
  };

  const visibleItems = [div[currentIndex], div[(currentIndex + 1 ) % div.length], div[(currentIndex + 2) % div.length]];

  return (
    <div className=" relative bg-[url('/Images/Dashboard_pg1.png')]     w-[100%] h-full  bg-center  bg-cover  bg-no-repeat   ">
      <div className="  absolute  before:content-[]   bg-[#0500629e]  overflow-y-auto  bottom-0 top-0 left-0 w-[100%]  h-[100%] ">
        <div className='  md:overflow-hidden z-40 m-5'>
          <div className='md:flex justify-center'>
            {visibleItems.map((x, index) => (
              <div

                className={`bg-white p-8 md:w-1/3 flex gap-2 rounded-xl ${index === 1
                  ? 'lg:w-1/3  bg-white  md:mx-10 p-8 h-2/3 '
                  : 'lg:w-1/4 bg-white md:blur-sm  p-5 h-1/2 mt-10'
                  }`}
                key={index}
              >


                <div>
                  {/* <div className={`bg-[url('/Images/girl.png')]  bg-center  bg-cover  bg-no-repeat w-auto h-60`}> */}
                  <div className=' w-auto drop-shadow-2xl'>
                    {/* <div className="bg-[url('images/images/img_1.png')"> */}
                    <img className=' rounded-lg' src={x.picture} />
                    <div className=" mt-[-80px]   relative   h-16   rounded-b-xl ">
                      <img className=' h-20 rounded-b-lg' src='images/backimg.png' />
                      <div className=' px-5 py-7 align-middle  md:mt-[-80px] flex justify-between'>
                        <div className='flex justify-between  '>
                          <ul className='flex justify-between  w-auto gap-10 '>
                            <li>
                              <div className=' '>  <ul className='flex  gap-1 text-white'>
                                <li className=' flex  text-[13px] '>  <p>{x.text}</p></li>
                                <li>                 <img className=' ' src={x.picture2} />
                                </li>
                              </ul>
                              </div>
                            </li>
                            <li>
                              <div className=' bg-[#FD2579] rounded-xl'>
                                <button className={` flex  text-white  px-6 ${index === 1 ? ' py-3 w-36 text-sm' : ' py-1 px-3 text-sm'} `}> {x.button_text}</button>
                              </div>
                            </li>
                          </ul>



                        </div>




                      </div>


                    </div>


                  </div>
                  <div className=' py-5'>
                    <div><ul className='flex justify-between'><li className=' text-[#050062] text-[20px]'>{x.nametext}</li>
                      <li> <img src={x.profile_star} /></li></ul> </div>
                    <div className=' text-[#818084] text-[15px]'>{x.text_buttom} </div>
                    <div className={`  ${index === 1 ? 'text-[18px]' : 'text-[16px]'}`}>{x.text_para} </div>
                  </div>

                  <div><ul className='flex justify-between '>
                    <li> <ul className={`bg-[#DBDBDB] rounded-xl  py-2 px-4 ${index === 1 ? 'text-sm' : 'text-xs'}`} >
                      <li><button className=' text-[#FD2579]'>{x.lefttop}</button>
                      </li>
                      <li> <button className=' text-[#050062]'>{x.lestbottom}</button></li></ul></li>
                    <li> <button className={` bg-[#FD2579] rounded-xl text-white py-3 px-6 ${index === 1 ? 'text-base' : ' text-xs py-0 px-6 '}`}>{x.rightbutton}</button></li>

                  </ul> </div>
                </div>
              </div>
            ))}

            <div className='flex justify-between mt-4 absolute top-[40%] w-[40%]'>
              <img className='bg-white rounded-full h-16 w-16 text-white py-3 px-6  shadow-sm'
                onClick={prevItem} src='images/Arrow1.svg' />
              {/* <button
           
          >
            Previous
          </button> */}
              <img className='bg-[#FD2579] rounded-full h-16 w-16 text-white py-3 px-6'
                onClick={nextItem} src='images/Arrow.svg' />
              {/* <button
          
          >
            Next
          </button> */}
            </div>
          </div>

        </div>
      </div>
    </div>



  );
}
