import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-700/50 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Free shipping on orders over $500
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Find Your
              <span className="text-blue-300"> Perfect</span>
              <br />
              Laptop Today
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed mb-8">
              Explore our curated collection of premium laptops from the world&apos;s top brands.
              Gaming, professional, or everyday use — we have it all.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-colors text-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="border-2 border-white/50 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-300 text-sm">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-blue-300 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-blue-300 text-sm">Brands</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-blue-700/30 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-blue-600/30 rounded-full flex items-center justify-center">
                  <span className="text-[120px]">💻</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white text-gray-900 rounded-xl p-3 shadow-xl">
                <div className="text-xs font-medium text-gray-500">Best Seller</div>
                <div className="text-sm font-bold">MacBook Pro M3</div>
                <div className="text-blue-600 font-bold">$2,499</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl p-3 shadow-xl">
                <div className="text-xs font-medium text-gray-500">Top Rated</div>
                <div className="text-sm font-bold">★★★★★</div>
                <div className="text-gray-600 text-xs">4.9/5 (342 reviews)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
