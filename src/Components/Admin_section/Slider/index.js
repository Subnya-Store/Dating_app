import React from 'react';
import Carousel from 'react-grid-carousel'
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

  return (
    <div className="md:flex bg-white my-2 pt-2 px-10 rounded-md">
      <Carousel cols={6} rows={1} gap={10} loop>
        {array.map((e, i) => (
          // <div key={pageIndex} className="flex">
          <Carousel.Item key={i}>
            <img className="w-full rounded-md" src={e.img} />
            <div className=" mt-1 font-semibold flex justify-center text-[#050062] text-lg">
              {e.heading}
            </div>
          </Carousel.Item>
          // </div>
        ))}

      </Carousel>
    </div>
  );
}
