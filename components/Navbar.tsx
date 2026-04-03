'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { CartProvider } from '@/context/CartContext';

function NavbarInner() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💻</span>
            <span className="text-xl font-bold text-blue-600">LaptopHub</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Laptops
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Cart */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <Link href="/" className="block text-gray-600 hover:text-blue-600 font-medium py-2" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="block text-gray-600 hover:text-blue-600 font-medium py-2" onClick={() => setMobileOpen(false)}>
              Laptops
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-blue-600 font-medium py-2" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-blue-600 font-medium py-2" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default function Navbar() {
  return (
    <CartProvider>
      <NavbarInner />
    </CartProvider>
  );
}
