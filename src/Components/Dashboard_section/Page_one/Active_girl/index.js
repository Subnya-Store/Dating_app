import apiUrl from '@/API/constant';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Index() {

  const Selector_data = useSelector(x => x)
  const [currentIndex, setCurrentIndex] = useState(Selector_data.matches_index);

  useEffect(() => {

    setCurrentIndex((prevIndex) => (prevIndex + 1) % Selector_data.matches.length);
  }, []);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Selector_data.matches.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Selector_data.matches.length - 1 : prevIndex - 1
    );
  };

  // const visibleItems = [Selector_data.matches[currentIndex], Selector_data.matches[(currentIndex + 1) % Selector_data.matches.length], Selector_data.matches[(currentIndex + 2) % Selector_data.matches.length]];
  const visibleItems = [
    Selector_data.matches[currentIndex],
    Selector_data.matches[(currentIndex + 1) % Selector_data.matches.length],
    Selector_data.matches[(currentIndex + 2) % Selector_data.matches.length]
  ];
  console.log(Selector_data.matches)
  return (
    <div className=" relative bg-[url('/Images/Dashboard_pg1.png')]     w-[100%] h-full  bg-center  bg-cover  bg-no-repeat   ">
      <div className="  absolute  before:content-[]   bg-[#0500629e]  overflow-y-auto  bottom-0 top-0 left-0 w-[100%]  h-[100%] ">
        <div className='  md:overflow-hidden z-40 m-5'>
          <div className='md:flex justify-center'>
            {visibleItems.map((x, index) => (
              <div
                className={`bg-white p-8 md:w-fit flex gap-2 rounded-xl ${index === 1
                  ? 'lg:w-fit  bg-white  md:mx-10 p-8 h-2/3 '
                  : 'lg:w-fit bg-white md:blur-sm h-2/3  p-8  mt-10'
                  }`}
                key={index}
              >
                <div>
                  <div className=' w-[400px] bg-red-200 drop-shadow-2xl'>
                    <img className='h-[400px] rounded-lg w-full bg-cover' src={`${apiUrl + "/Uploads/" + x.img}`} />
                    <div className=" mt-[-80px]   relative   h-16   rounded-b-xl ">
                      <img className=' h-20 rounded-b-lg w-full' src='/Images/backimg.png' />
                      <div className=' px-2    md:mt-[-50px] flex justify-between items-center'>
                        <div className='flex justify-between  w-full gap-2 '>
                          <div className='flex justify-between items-center w-fit gap-2 text-white'>
                            <div >
                              She Likes You 40%
                            </div>
                            <div>
                              <img className='' src={'/Images/hot_img.svg'} />
                            </div>
                          </div>
                          <div>
                            <button className={` flex  text-white bg-[#FD2579] rounded-xl  px-6 ${index === 1 ? 'py-2 ' : ' py-1 px-3 text-sm'} `}>
                              90% Match
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' py-5'>
                    <div>
                      <div className='flex justify-between'>
                        <div className=' text-[#050062] text-[20px]'>
                          {x.user.full_name}
                        </div>
                        <div>
                          <img src={"/Images/star.svg"} />
                        </div>
                      </div>
                    </div>
                    <div className=' text-[#818084] text-[15px]'>
                      Researcher at Tesla
                    </div>
                    <div className={`  ${index === 1 ? 'text-[18px]' : 'text-[16px]'}`}>
                      all descriptions here
                    </div>
                  </div>

                  <div>
                    <div className='flex justify-between '>
                      <div>
                        <div className={`bg-[#DBDBDB] rounded-xl  py-2 px-4 ${index === 1 ? 'text-sm' : 'text-xs'}`} >
                          <div><button className=' text-[#FD2579]'>
                            10+ Same Interests.
                          </button>
                          </div>
                          <div>
                            <button className=' text-[#050062]'>
                              See All
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className={` bg-[#FD2579] rounded-xl text-white py-3 px-6 ${index === 1 ? 'text-base' : ' text-xs py-0 px-6 '}`}>Message</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className='flex justify-between mt-4 absolute top-[40%] w-[40%]'>
              <img
                className='bg-white rounded-full h-16 w-16 text-white py-3 px-6  shadow-sm'
                onClick={prevItem}
                src='/Images/Arrow1.svg' />

              <img
                className='bg-[#FD2579] rounded-full h-16 w-16 text-white py-3 px-6'
                onClick={nextItem}
                src='/Images/Arrow.svg' />

            </div>
          </div>

        </div>
      </div>
    </div>



  );
}
