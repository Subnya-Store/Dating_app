// import React from 'react'

// export default function index() {
//   // const question=[
//   //   {question:""},
//   //   {question1:""},
//   //   {question2:""}
    
  
//   // ]
//   return (
//     <div className='felx w-full'>
//      <h1 className='md:text-5xl text-lg font-bold capitalize flex justify-end'>What people <br/> say about us</h1>

//      <div className='flex py-9'>
//      <div> <img src='/Images/testnomil.svg'/></div> 
// <div>     <p className=' px-4 text-[18px]'> Lorem ipsum dolor sit amet consectetur. Nibh consequat malesuada facilisi imperdiet nibh dolor adipiscing ornare non. Vestibulum rutrum ac elit amet nam. Est mi at amet semper in.</p>
// </div> 
// <div className='felx mt-16'><img className='felx align-bottom' src='/Images/testnomial2.png'/></div>   
//      </div>
     


//     </div>
//   )
// }

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
  };

  const testimonials = [
    {
      id: 1,
      text:
        'Lorem ipsum  dolor sit amet consectetur. Nibh consequat malesuada facilisi imperdiet nibh dolor adipiscing ornare non. Vestibulum rutrum ac elit amet nam. Est mi at amet semper in.dolor sit amet consectetur. Nibh consequat malesuada facilisi imperdiet nibh dolor adipiscing ornare non. Vestibulum rutrum ac elit amet nam. Est mi at amet semper in.',
    },
    {
      id: 2,
      text:
        'Lorem ipsum  dolor sit amet consectetur. Nibh consequat malesuada facilisi imperdiet nibh dolor adipiscing ornare non. Vestibulum rutrum ac elit amet nam. Est mi at amet semper in.dolor sit amet consectetur. Nibh consequat malesuada facilisi imperdiet nibh dolor adipiscing ornare non. Vestibulum rutrum ac elit amet nam. Est mi at amet semper in.',
    },
    {
      id: 2,
      text:
        'Another testimonial text here. You can add more testimonials with different text and images.',
    },
   
  ];

  return (
    <div className='testimonial-slider felx w-full'>
          <h1 className='md:text-5xl text-lg font-bold capitalize flex justify-end'>What people <br/> say about us</h1>


      
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='testimonial-item p-3'>
            <img
              className='testimonial-image'
              src='/Images/testnomil.svg'
              alt='Testimonial 1'
            />
            <p className='testimonial-text  px-4 text-[18px]'>{testimonial.text}<img className='felx align-bottom' src='/Images/testnomial2.png'/></p>
               

            
          </div>
        ))}
      </Slider>
    </div>
  );
}

