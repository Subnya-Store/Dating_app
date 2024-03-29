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
    <div className='  flex items-center'>
      <div className='testimonial-slider  w-full'>
        <h1 className='md:text-5xl text-lg font-bold capitalize flex justify-end xl:justify-center '>What people <br /> say about us</h1>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='testimonial-item p-3'>
              <img
                className='testimonial-image'
                src='/Images/testnomil.svg'
                alt='Testimonial 1'
              />
              <p className='testimonial-text  px-4 text-[18px]'>{testimonial.text}<img className='felx align-bottom' src='/Images/testnomial2.png' /></p>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

