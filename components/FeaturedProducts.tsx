import { getFeaturedProducts } from '@/lib/products';
import ProductCard from './ProductCard';
import Link from 'next/link';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Laptops</h2>
            <p className="text-gray-500">Hand-picked top performers for every need</p>
          </div>
          <Link href="/products" className="hidden sm:block text-blue-600 hover:text-blue-800 font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
