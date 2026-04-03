import Link from 'next/link';
import { categories } from '@/lib/products';

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Shop by Category</h2>
        <p className="text-gray-500">Find the perfect laptop for your use case</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/products?category=${cat.name}`}
            className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-200"
          >
            <div className="text-4xl mb-3">{cat.icon}</div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {cat.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
