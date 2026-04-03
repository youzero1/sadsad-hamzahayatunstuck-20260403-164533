'use client';

import { useCart } from '@/context/CartContext';
import { CartProvider } from '@/context/CartContext';
import { Product } from '@/lib/products';
import { useState } from 'react';

function AddToCartButtonInner({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={!product.inStock}
      className={`flex-1 py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
        !product.inStock
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
          : added
          ? 'bg-green-500 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      }`}
    >
      {!product.inStock ? 'Out of Stock' : added ? '✓ Added to Cart!' : 'Add to Cart'}
    </button>
  );
}

export default function AddToCartButton({ product }: { product: Product }) {
  return (
    <CartProvider>
      <AddToCartButtonInner product={product} />
    </CartProvider>
  );
}
