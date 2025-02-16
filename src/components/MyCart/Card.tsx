"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getCartItem, removeFromCart, updateCartQuantity } from "@/app/actions/action";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItem());
  }, []);

  // Handle remove when item is removed from the cart
  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItem());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  // Handle quantity change
  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItem());
  };

  // Handle increment in product quantity
  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item.id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  // Handle decrement in product quantity
  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item.id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  // Handle proceed to checkout
  const router = useRouter();


  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully processed.", "success");
        router.push('/checkout')
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-2xl font-semibold mb-2 text-black text-center">Shopping Cart</h2>

      {/* Cart items */}
      <div>
      {cartItems.length === 0 ? (
  <div className="text-center text-lg text-black">Your cart is empty.</div>
) : (
  cartItems.map((item, index) => (
    <div
      key={item.id || index} // Ensure unique key
      className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm"
    >
      <div className="flex items-center space-x-4">
        {item.image && (
          <Image
            src={urlFor(item.image).url()}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-md"
            width={500}
            height={500}
          />
        )}
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">${item.price}</p>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleDecrement(item.id)}
          className="px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="text-lg font-medium">{item.inventory}</span>
        <button
          onClick={() => handleIncrement(item.id)}
          className="px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => handleRemove(item.id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Remove
      </button>
    </div>
  ))
)}

      </div>

      {/* Total and Proceed to Checkout */}
      {cartItems.length > 0 && (
        <div className="mt-8 flex justify-between items-center border-t pt-4">
          <div className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</div>
          <button
            onClick={handleProceed}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
