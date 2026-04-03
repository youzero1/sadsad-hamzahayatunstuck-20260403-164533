'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';

interface Props {
  item: CartItemType;
}

export default function CartItem({ item }: Props) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
      <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          className="object-contain max-h-16 w-auto"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-blue-600 font-semibold uppercase">{item.brand}</div>
        <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
        <div className="text-blue-600 font-bold">${item.price.toFixed(2)}</div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold transition-colors"
        >
          -
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold transition-colors"
        >
          +
        </button>
      </div>
      <div className="text-right">
        <div className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-400 hover:text-red-600 text-xs mt-1 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
