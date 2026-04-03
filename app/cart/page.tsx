'use client';

import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { items, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="text-8xl mb-6">🛒</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven&apos;t added any laptops yet.</p>
        <Link href="/products" className="btn-primary inline-block">
          Browse Laptops
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700 transition-colors"
          >
            Clear Cart
          </button>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.reduce((a, b) => a + b.quantity, 0)} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (8%)</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-gray-900 text-lg">
                <span>Total</span>
                <span>${(totalPrice * 1.08).toFixed(2)}</span>
              </div>
            </div>
            <button className="btn-primary w-full text-center py-3 text-lg">
              Proceed to Checkout
            </button>
            <Link
              href="/products"
              className="block text-center text-blue-600 hover:text-blue-800 mt-4 text-sm"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
