import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import apiUrl from '@/API/constant';

export default function Payment() {
//   const [cart, setCart] = useState([]); // Use a state variable for cart items
  const [isLoading, setIsLoading] = useState(false); // Add a loading state

  let cart=[
    {
        img:'12',
        price:'12'
    }
]
  const handlePayNow = async () => {
    setIsLoading(true);

    try {
      const stripe = await loadStripe('pk_test_...');
      const response = await fetch(`${apiUrl}/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: cart }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const session = await response.json();
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
    <div>
        Payment
        <button onClick={handlePayNow}>Make payment</button>
    </div>
  )
}
