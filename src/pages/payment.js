import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import apiUrl from '@/API/constant';

export default function Payment() {
  //   const [cart, setCart] = useState([]); // Use a state variable for cart items
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [buy_product, set_buy_product] = useState({})
  let save_data
  let Product = [
    {
      img: 'https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg',
      price: '109.99'
    },
    {
      img: 'https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg',
      price: '9.99'
    }
  ]
  // console.log(save_data)
  const handlePayNow = async (price, img) => {
    setIsLoading(true);

    try {
      const stripe = await loadStripe('pk_test_51OXRsZKCQ7nACFmG8jgscRlTHyzSC40XGc9lGBcmil7dtJ6gXxrO7KQeFNQDm8py167e3OQiZC4QVPf8Az31HTn900ygHbGJEH');
      const response = await fetch(`${apiUrl}/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Product: [
            {
              img,
              price
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }
      localStorage.setItem('strip_wala', 12)
      const session = await response.json();
      console.log(session, '<=========')
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        throw result.error;
      }
    } catch (error) {
      console.error('Payment error:', error);
      // Handle error gracefully, e.g., display an error message to the user
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" bg-[url('/Images/purchase.png')] h-screen w-full bg-cover bg-no-repeat flex justify-between items-center">
      <div className='hidden md:flex justify-center items-center w-full'>

      </div>
      <div className='flex justify-end px-10 w-full h-[80%] '>
        <div className='flex items-end justify-between flex-col'>
          <div className='flex items-end flex-col'>
            <div className='flex flex-col items-end'>
              <div className='text-[#FD166F] text-xl font-bold flex justify-end'>
                Membership
              </div>
              <div className='h-1 w-[150px] bg-white rounded-full '></div>
            </div>
            <div className='text-3xl font-extrabold text-white'>
              PACKAGE PLAN
            </div>
            <img src='/Images/logo-img.png' width={100} />
          </div>
          <div className='flex justify-between w-full gap-3'>
            {
              Product.map((x, i) => (
                <img key={i} onClick={() => (
                  handlePayNow(x.price, x.img),
                  set_buy_product(x),
                  localStorage.setItem('strip_wala', x.price)
                )} src={x.price == "109.99" ? "/Images/yearly.png" : "/Images/monthly.png"} />
              ))
            }
          </div>
        </div>

      </div>

      {/* <button onClick={handlePayNow}>Make payment</button> */}
    </div>
  )
}
