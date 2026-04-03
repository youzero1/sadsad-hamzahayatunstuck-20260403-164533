'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { CartProvider } from '@/context/CartContext';

function ProductCardInner({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="card group">
      <div className="relative bg-gray-50 p-4 h-52 flex items-center justify-center overflow-hidden">
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            NEW
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-20">
            <span className="bg-gray-800 text-white text-sm font-bold px-3 py-1 rounded-lg">Out of Stock</span>
          </div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={160}
          className="object-contain max-h-40 w-auto group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">{product.brand}</div>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
            {product.discount && (
              <span className="text-sm text-gray-400 line-through ml-2">${product.price.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <CartProvider>
      <ProductCardInner product={product} />
    </CartProvider>
  );
}
