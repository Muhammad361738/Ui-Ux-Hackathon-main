'use client'

import { useCart } from 'react-use-cart';
import { useState } from 'react';export default function CheckoutPage() {
  const { cartTotal, items } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate checkout process (e.g., call an API or payment service)
    setTimeout(() => {
      setIsProcessing(false);
      alert('Order placed successfully!');
    }, 2000);
  };  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <p>{item.name} x {item.quantity}</p>
            <p>${item.price} * {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <p>Total: ${cartTotal}</p>
      </div>
      <button
        onClick={handleCheckout}
        disabled={isProcessing}
        className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded ${isProcessing ? 'bg-gray-400' : ''}`}
      >
        {isProcessing ? 'Processing...' : 'Place Order'}
      </button>
    </div>
  );
}