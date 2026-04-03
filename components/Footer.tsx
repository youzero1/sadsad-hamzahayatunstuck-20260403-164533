import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💻</span>
              <span className="text-xl font-bold text-blue-400">LaptopHub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted destination for premium laptops. Quality products, competitive prices, exceptional service.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">All Laptops</Link></li>
              <li><Link href="/products?category=Gaming" className="hover:text-white transition-colors">Gaming</Link></li>
              <li><Link href="/products?category=Professional" className="hover:text-white transition-colors">Professional</Link></li>
              <li><Link href="/products?category=Student" className="hover:text-white transition-colors">Student</Link></li>
              <li><Link href="/products?category=Business" className="hover:text-white transition-colors">Business</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Warranty</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© 2024 LaptopHub. All rights reserved.</p>
          <div className="flex gap-4 text-gray-400 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
