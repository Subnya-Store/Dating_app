import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Index() {
  const array = [
    {
      img: 'Images/img_1.png',
      heading: 'Mia, 22',
    },
    {
      img: 'Images/imgsecond.png',
      heading: 'Marie, 24',
    },
    {
      img: 'Images/img_1.png',
      heading: 'Charlotte, 24',
    },
    {
      img: 'Images/img_1.png',
      heading: 'Charlotte, 24',
    },
    {
      img: 'Images/img_1.png',
      heading: 'Mia, 22',
    },
    {
      img: 'Images/imgsecond.png',
      heading: 'Marie, 24',
    },
    {
      img: 'Images/img_1.png',
      heading: 'Charlotte, 24',
    },
    {
      img: 'Images/img_1.png',
      heading: 'Charlotte, 24',
    },
    {
        img: 'Images/img_1.png',
        heading: 'Charlotte, 88824',
      },
      {
        img: 'Images/img_1.png',
        heading: 'Charlotte, 21224',
      },
   
  ];

  const itemsPerPage = 6; 
  const numPages = Math.ceil(array.length / itemsPerPage);

  
  const pageIndices = Array.from({ length: numPages }, (_, index) => index);

  return (
    <div className="md:flex bg-white my-4 rounded-md">
      <Carousel
        showArrows={true} 
        emulateTouch={true} 
        dynamicHeight={false} 
        centerMode={false} 
        // infiniteLoop={true} 
        showThumbs={false}
      >
        {pageIndices.map((pageIndex) => (
          <div key={pageIndex} className="flex">
            {array.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((e, index) => (
              <div key={index} className="p-4">
                <img className="w-full rounded-md" src={e.img} alt={`Slide ${index + 1}`} />
                <div className="p-1 mt-2 font-semibold flex justify-center text-[#050062] text-lg">
                  {e.heading}
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
