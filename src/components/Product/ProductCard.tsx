'use client'

import { useCart } from 'react-use-cart';
import { Product } from '../../types/product';interface ProductCardProps {
  product: Product;
}export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();  return (
    <div className="border p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h3 className="text-lg">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={() => addItem(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}