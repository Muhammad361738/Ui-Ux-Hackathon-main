import Link from 'next/link';
import { useCart } from 'react-use-cart';

export default function Header() {
  const { totalItems } = useCart();  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl">Your Store</h1>
      <Link href="/cart" className="relative">
        <span>Cart</span>
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
}